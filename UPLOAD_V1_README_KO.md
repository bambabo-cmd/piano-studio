# 버전 1에 전환 버튼 추가하기

**대상은 기존 `bambabo-cmd/piano-studio` 저장소입니다. 새 버전 2 저장소에 올리지 마세요.**

이 폴더에는 기존 `index.html`, AI 번들, 악보 라이브러리, 아이콘을 넣지 않았습니다. 기존 파일을 덮어쓰는 대신 GitHub가 배포 사본을 만들 때 버튼과 범위 한정 서비스 워커를 추가합니다.

## 업로드

1. 먼저 별도 `piano-studio-next` 묶음을 새 저장소에 업로드하고 버전 2의 배포를 완료하세요.
2. **이 폴더 안의 `.github`와 `version-switch` 폴더 및 안내 파일**을 기존 `piano-studio` 저장소 최상위에 추가 업로드하세요. 원래 파일을 지우지 마세요.
3. 버전 1 저장소의 **Settings → Pages → Source → GitHub Actions**로 바꿉니다. 이 묶음은 `Deploy from a branch` 방식이 아닙니다.
4. **Actions → Deploy Piano Studio v1 with version switch → Run workflow**를 실행합니다. 이미 자동 실행되어 성공했으면 다시 실행할 필요는 없습니다.
5. 실행 성공 후 기존 버전 1 주소를 다시 엽니다. 기존 PWA/탭을 모두 닫고 재접속하면 새 서비스 워커 교체에 도움이 됩니다.

```text
https://bambabo-cmd.github.io/piano-studio/
```

빌드 오류가 발생하면 배포 단계는 진행하지 않습니다. `Actions`의 실패한 단계에서 원인을 확인할 수 있습니다. PC에 Python, Git, Node를 설치할 필요는 없습니다.

## 변경되는 것

상단에 현재 버전을 강조하는 `버전 1 · 기존 / 버전 2 · Next` 버튼이 추가됩니다. 작은 화면에서는 `버전 1 / 버전 2`로 표시합니다. 원래 메트로놈·녹음·편집·채보·파일 메뉴와 저장 DB 이름은 바꾸지 않습니다.

일반 클릭 시 현재 버전의 곡을 하나의 저장 트랜잭션으로 저장한 뒤 이동합니다. 녹음/분석/확인창 처리 중에는 이동을 막으며, 저장 오류가 나면 머무릅니다. 두 버전의 곡 목록은 자동으로 공유되지 않습니다. 이 기능은 버전 버튼에 적용되며 브라우저 강제 종료 등을 막지는 않습니다.

기존 서비스 워커는 같은 도메인의 다른 캐시까지 삭제했습니다. 새 배포본은 **버전 1의 해당 경로 캐시만** 정리하며 버전 2와 다른 앱의 캐시는 지우지 않습니다. 기존 `hps-*` 전역 캐시도 일괄 삭제하지 않습니다. 새 워커가 활성화되기 전에는 기존 워커의 동작이 남을 수 있습니다.

## 원본 보존

저장소에 있는 기존 `index.html`과 `sw.js`는 **수정·커밋하지 않습니다.** 배포용 `_site-v1/`에서만 변경합니다. 따라서 나중에 기존 파일을 수정할 때도 이 Actions 워크플로로 계속 배포해야 버튼이 유지됩니다. 원래 `index.html`만 별도로 브랜치 배포하면 추가 버튼은 들어가지 않습니다.

기존 HTML에 추가한 두 블록을 제거하면 원래 바이트와 일치하는지 검사합니다. 모델·악보 라이브러리·아이콘·manifest의 바이트 보존도 검사합니다. 원래 런타임 파일 목록이 바뀌면 `version-switch/build_v1.py`의 RUNTIME 목록도 검토해야 합니다.

Actions → Artifacts → `piano-studio-v1-runtime`에서 배포에 사용한 전체 실행 파일을 받을 수 있습니다. `version-switch-build-info.json`에는 원본 해시와 보존 검사 결과가 있습니다.

## 검증 한계

합성 HTML/합성 자원으로 빌더의 보존·거부 동작을 검사했습니다. 실제 원본 전체 빌드와 JavaScript 문법 검사는 업로드 후 Actions에서 수행합니다. 실기기 Safari·실제 녹음·AI 인식률을 검증한 묶음이 아닙니다.

공식 배포 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
