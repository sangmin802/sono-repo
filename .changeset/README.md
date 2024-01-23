# Changesets

- space: select

1. pkm changeset
2. 버전을 변경할 패키지, semver, 같이 올려질 패키지 등등 선택. semver 선택 시, 처음에는 major만 나오는데, 무시하고 enter 하면 minor, patch 도 선택 가능
3. 완료 시, 변경내용이 .changeset 하위에 생성
4. pkm changeset version 시, 3번에서 생성된 파일 기준으로 pkg.json 수정
5. pkm changeset publish 시, 버전이 변경된 패키지들은 npm publish 가능
  - packages 하위 모두 배포됨. ignore로 제외하고자 해도, devDeps로 사용중인것이 들어있다면 실패함
  - 이 이유로.. changesets action은 작동 테스트 완료 이후 실 사용은 하지 않도록 함... 현재 actions 탭에서 해당 워크플로우는 비활성화 해둔 상태

pkg changeset version 없이, git action으로 처리하고자 한다면 .chageset에 생성된 변경파일을 기준으로 버전변경 pr을 만들어주는것 같음