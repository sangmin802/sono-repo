## sono-repo-react-timer
### DO NOT USE IN PRODUCTION MODE

`React` 기반 `NPM` 배포 테스트용 `timer hook`

- `endTime`: 종료시간
- `resetKey`: `timer RAF` 재생성 키
- `onCallback`: `timer` 종료 핸들러
- `onWindowFocus`: `window focus event` 핸들러
  - 브라우저 `focusout` 시, `timer`가 일시중지되는 경우, `reset` 위한 핸들러