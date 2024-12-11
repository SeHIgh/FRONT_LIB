This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


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

### 파일 구조
```bash
$ tree -I '.dist|.next|node_modules'
```

```bash
.
├── README.md
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── SeHi_Logo_NoBG.svg
│   ├── SeHi_Logo_NoTitle.svg
│   ├── book.svg
│   ├── dark.svg
│   ├── file.svg
│   ├── globe.svg
│   ├── light.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   │   ├── Galmuri11.woff2
│   │   │   ├── Galmuri9.woff2
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   └── main
│   │       ├── Footer.tsx
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   └── fonts.ts
├── tailwind.config.ts
└── tsconfig.json

7 directories, 30 files
```