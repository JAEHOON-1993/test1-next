해당 문서에서는 코드를 확인하기 위한 간단한 설명만 정리해놓았습니다. 상세한 로직은 각 폴더별 파일을 참고해주세요.

# Project Name

---

(\*프로젝트 요약)

## 개발 및 배포 환경

- Vercel
- react 16.12.0
- typescript 3.7.3
- mobx 6.0.4

# 0. 프로젝트 구조

---

**Project Name**

- `./api`
- `./components`
- `./containers`
  - `[page]`
    - `_fragments`
      - `[components]`
    - `index.tsx`
- `./layout`
- `./pages`
- `./stores`
- `./public`
- `./utils`

# 1. 프로젝트 기본 구성 폴더

---

## 1. `api`

백엔드 API가 정의되어있습니다. 최대한 백엔드에서 개발된 API 명세서를 기반으로 개발하고 있습니다.

## 2. `components`

재사용을 고려한 컴포넌트들을 구축해놓은 폴더입니다.

## 3. `containers`

컨테이너는 각 페이지와 1대1로 매칭되어 있으며, `index.tsx`를 통해 컨포넌트를 불러오고 있습니다. 코드를 간소화하기위해서 해당 페이지에서만 사용되는 컨포넌트를 `_fragments` 파일에서 관리합니다.

## 4. `layout`

컬러, 반응형 사이즈, 글로벌 스타일 등 공용으로 사용되는 static 한 데이터들을 모아놓은 폴더입니다.

## 5. `pages`

Next.js에서 라우팅에 사용되는 페이지들 입니다.

## 6. `stores`

Mobx store 파일들이 있습니다.

## 7. `public`

이미지나 파일같은 static 파일들이 있습니다.

## 8. `utils`

자주 사용되는 함수들을 모아놓은 폴더입니다.
