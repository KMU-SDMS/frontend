## 프로젝트 개요

- 기숙사 관리 앱: 택배 현황, 실시간 문의(채팅), 공지사항 푸시 알림

## 기술 스택

- React Native Expo, TypeScript
- 상태관리: RTK
- 네트워킹: Axios
- 실시간: 미정 (Socket.IO/WS 중 선택 예정)
- 푸시: 미정 (FCM/Expo Notifications 중 선택 예정)
- 품질: ESLint, Prettier, Jest

## 시스템 요구사항

- Node.js ≥ 18, Yarn/NPM
- iOS: Xcode 15+
- Android: Android Studio Hedgehog+, JDK 17

## 설치 / 실행

```bash
yarn install
cp .env.example .env
yarn start           # Expo Dev 서버 시작 (QR/시뮬레이터)
# 또는
yarn ios             # iOS 실행
yarn android         # Android 실행
```

## 폴더 구조

```text
app/                              # 앱 소스 루트(최소 구성)
  components/                    # 공용 UI 컴포넌트
    ui/                          # Button, Card, Tabs 등
  screens/                       # 단순 화면(탭 직속)
    HomeScreen.tsx               # 홈(패키지/공지 요약)
    InquiryScreen.tsx            # 실시간 문의 UI
    ProfileScreen.tsx            # 내정보(설정 등)
  navigation/                    # 네비게이션 구성
    RootNavigator.tsx            # 최상위 컨테이너
    BottomTabs.tsx               # 하단 탭(홈/문의/내정보)
  core/                          # 공통 인프라(필요 최소만)
    api/
      httpClient.ts             # Axios 인스턴스
  store/                         # 전역 상태(Redux)
    index.ts                    # 스토어 설정
App.tsx                          # 루트 컴포넌트
index.ts                         # 앱 부트스트랩
```

## 스크립트

```bash
yarn start
yarn ios | yarn android | yarn web
yarn lint
yarn format
yarn type-check
yarn test
```

## 환경 변수 (.env)

- `API_BASE_URL=...`
- `WS_URL=...`
- `EXPO_PROJECT_ID` (Expo 사용 시)

## 린팅/포매팅

- ESLint: 기본 규칙 + TypeScript 플러그인 (google style)
- Prettier: 프로젝트 전역 포맷팅
- Git Hook: lint-staged로 변경 파일만 포맷/린트

## 커밋/브랜치 규칙

- Conventional Commits: feat/fix/chore/refactor/docs/test/ci/perf
- 브랜치: main(배포),test(테스트환경), feat/, fix/_, chore/_

## 실시간(채팅) & 푸시

- 소켓 수명주기/재연결 정책, 알림 탭 시 딥링크 라우팅

## 테스트

- Jest + React Native Testing Library (필요 시)
