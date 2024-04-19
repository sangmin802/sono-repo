# SONO-REPO
turborepo


## turbo.json
```js
{
  // turbo의 커맨드는 여기에 정의되어야만 쓸 수 있음
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {

    // 패키지 내부의 모든 build를 실행시킬꺼임 --filter로 제한을 줄 수 있으며, 아래의 dev에 적용된 --filter도 적용 됨
    "build": {

      // ^가 있어서, 모든 workspace 혹은 --filtere된 workspace의 build가 실행되기 전 deps 혹은 devDeps의 모든 build가 돈 다음에 실행
      "dependsOn": ["^build"],
      
      "outputs": [".next/**", "!.next/cache/**", "dist/**", "storybook-static/**"]
    },

    // 패키지 내부의 모든 dev를 실행시킬꺼임 --filter로 제한 줄 수 있음
    "dev": {

      // 위 정의된 build 커맨드가 먼저 실행된 후에 dev를 실행시킴 dependsOn의 명령어는 꼭 pipeline에 정의되어있어야 함
      "dependsOn": ["build"],

      // dev환경 watch mode
      "cache": false,
      "persistent": true
    },
    "start": {
      "dependsOn": ["build"]
    },
    "build:storybook": {}
  }
}
```