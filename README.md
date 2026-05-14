# TILNOTE 랜딩 페이지

TILNOTE 랜딩 페이지 프로토타입입니다. Next.js 16, React 19, TypeScript, Framer Motion 기반으로 작성되어 있습니다.

## 디자이너가 받는 방법

Git을 사용할 수 있으면:

```bash
git clone https://github.com/wisdomcrane/tilnote-work.git
cd tilnote-work
```

## 처음 실행하기

Node.js가 설치되어 있어야 합니다. 권장은 최신 LTS 버전입니다.

```bash
npm install
npm run dev
```

실행 후 브라우저에서 아래 주소를 엽니다.

```text
http://localhost:3000
```

## 디자이너가 주로 수정할 파일

- `src/components/Hero.tsx`: 첫 화면 문구, 버튼, 목업 구성
- `src/components/Features.tsx`: 기능 탭, 기능 소개 영역
- `src/components/HowItWorks.tsx`: 사용 흐름 섹션
- `src/components/Metrics.tsx`: 숫자 지표 섹션
- `src/components/FinalCTA.tsx`: 마지막 CTA 섹션
- `src/components/Nav.tsx`: 상단 네비게이션
- `src/components/Footer.tsx`: 하단 푸터
- `src/app/globals.css`: 공통 색상, 간격, 컨테이너 폭, 섹션 레이아웃

## 레이아웃 구조

현재 레이아웃은 공통 규칙으로 정리되어 있습니다.

- `container-wide`: 넓은 섹션 폭
- `container`: 기본 섹션 폭
- `container-narrow`: CTA 같은 좁은 섹션 폭
- `site-section`: 섹션 단위 패딩 규칙

폭이나 정렬을 바꾸고 싶으면 먼저 `src/app/globals.css`에서 공통 규칙을 조정한 뒤, 필요한 섹션 컴포넌트에서 구조를 맞추면 됩니다.

## 작업 흐름

1. `npm run dev`로 로컬 서버를 실행합니다.
2. 브라우저에서 화면을 보면서 컴포넌트나 `globals.css`를 수정합니다.
3. 저장하면 화면이 자동으로 갱신됩니다.
4. 공유 전에는 아래 명령으로 빌드 확인을 합니다.

```bash
npm run build
```

## Git으로 업데이트 받기

다른 사람이 올린 최신 작업을 받으려면 프로젝트 폴더에서 아래 명령을 실행합니다.

```bash
git pull origin main
```

보통은 작업을 시작하기 전에 한 번 `pull`을 먼저 하는 편이 안전합니다.

## Git으로 내 작업 올리기

수정한 내용을 저장소에 올리는 기본 흐름은 아래와 같습니다.

```bash
git pull origin main
git add .
git commit -m "디자인 수정 내용"
git push origin main
```

설명:

1. `git pull origin main`: 최신 변경사항을 먼저 받아옵니다.
2. `git add .`: 내가 수정한 파일을 커밋 대상으로 올립니다.
3. `git commit -m "메시지"`: 변경사항을 하나의 작업 단위로 기록합니다.
4. `git push origin main`: GitHub 저장소로 업로드합니다.

커밋 메시지는 아래처럼 짧고 명확하게 쓰면 됩니다.

```text
hero 문구 수정
features 간격 조정
CTA 버튼 스타일 변경
```

## 기술 스택

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
