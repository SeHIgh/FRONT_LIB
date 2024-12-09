# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## tailwindcss

### 설치
```bash
// tailwindcss 설치
npm install -D tailwindcss

// tailwind.config.js 파일 프로젝트의 루트 디렉토리에 생성
npx tailwindcss init
```

### config 파일 설정

```js 
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind.config.js 파일의 모든 템플릿 파일에 대한 경로를 추가합니다.
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


### 기본 CSS 파일 생성
@tailwind 지시문을 기본 CSS 파일에 추가합니다.
```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 빌드 과정
 
```bash
// -i <file>: 빌드할 css 파일 경로
// -o <file>: 빌드후 저장될 css 파일 경로
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```



### 사용 예시
 
```html
<h1 class="text-3xl font-bold underline"> Hello world! </h1>
```