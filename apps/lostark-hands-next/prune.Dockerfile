# syntax=docker/dockerfile:1

# turbo prune {{name}} --docker
# link https://turbo.build/repo/docs/handbook/deploying-with-docker

ARG NODE_VERSION=20.8.0
ARG PNPM_VERSION=8.14.1

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
FROM base AS prune

COPY . .

RUN turbo prune lostark-hands-next --docker
################################################################################
FROM base AS install-build

COPY --from=prune app/out/json .

# 패키지 하위에 package.json, 링크가 있는 node_modules만 존재하게 됨
RUN pnpm install --frozen-lockfile

# 위의 package.json, node_modules뿐 아닌 소스코드도 함께 들어가게 됨
COPY --from=prune app/out/full .
COPY turbo.json turbo.json

RUN pnpm lostark:build
################################################################################
FROM base AS runner

COPY --from=install-build app/apps/lostark-hands-next/.next/standalone .
COPY --from=install-build app/apps/lostark-hands-next/.next/static apps/lostark-hands-next/.next/static
COPY --from=install-build app/apps/lostark-hands-next/public apps/lostark-hands-next/public

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD node apps/lostark-hands-next/server.js