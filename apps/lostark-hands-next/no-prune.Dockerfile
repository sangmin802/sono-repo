# syntax=docker/dockerfile:1

# turbo prune {{name}} --docker가 아닌 그냥 쌩으로 도커라이징

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=20.8.0
ARG PNPM_VERSION=10.6.5

################################################################################
# 모든 스테이지에서 기본적으로 사용할 base 환경 설정
FROM node:${NODE_VERSION}-alpine AS base

# 작업 디렉토리 설정
WORKDIR /app

# turbo 설치
RUN npm install -g turbo

# --mount: 해당 컨테이너 독립적인 파일시스템이 아닌, 모든 컨테이너가 공유할 수 있도록 호스트의 파일시스템에 관리하도록 함
# 컨테이너끼리 공유가 가능. 이거 나중에 --mount 빼고 비교한번 해보자
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

################################################################################
# base 환경을 기반으로 dependencies 설치
FROM base AS deps

# pnpm install 시, pnpm workspace들의 package.json에 명시된 deps도 설치하도록 하기 위해 모노레포 정보를 가져옴
COPY apps apps
COPY packages packages
COPY pnpm-workspace.yaml pnpm-workspace.yaml

# type=bind는 호스트에서 관리하고 있는 소스를 컨테이너에 바인딩하여 가져오기만 가능. (호스트의 source 경로에 있는것을 컨테이너의 target 경로로 가져옴)
# type=cache는 컨테이너가 소스를 호스트에 캐시하고, 다른 컨테이너에서도 가져올 수 있음
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

################################################################################
# Create a stage for building the application.
FROM deps AS build

# 현재 디렉토리의 복사되지 않은 나머지를 모두 가져옴. .dockerignore 제외.

COPY . .

# --build-arg TURBO_TEAM=?? --build-arg TURBO_TOKEN=?? 주입 필요
# --progress=plain으로 로깅 가능
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
 
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN

# Run the build script.
# Use remote cache
# 이게 근데, 이미지 빌드도 캐시되는게 있어서 매번 속도가 크게 체감되지는 않는것 같음 물론, --no-cache면 다르겠지만
RUN pnpm lostark:build --remote-only

#################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base AS runner

# Use production node environment by default.
ENV NODE_ENV production

# Run the application as a non-root user.
USER node

# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
COPY --from=build app/apps/lostark-hands-next/.next/standalone .
# public, static의 경우 standalone build 모드에서 스스로 옮겨주지 않기 때문에, 수동으로 넣어줘야 함
COPY --from=build app/apps/lostark-hands-next/.next/static apps/lostark-hands-next/.next/static
COPY --from=build app/apps/lostark-hands-next/public apps/lostark-hands-next/public

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD node apps/lostark-hands-next/server.js
