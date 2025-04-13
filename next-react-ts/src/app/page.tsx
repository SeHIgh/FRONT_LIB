import Image from "next/image";
import 'react-notion-x/src/styles.css'; // react-notion-x 기본 스타일
import 'prismjs/themes/prism-tomorrow.css'; // 코드 블록 하이라이트 (선택 사항)
import 'katex/dist/katex.min.css'; // 수식 렌더링 (선택 사항)

export default function Home() {
    return (
        <div className="main-container grid grid-rows-[20px_1fr_20px] gap-16 items-center justify-items-center">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert mx-auto"
                    src="/SeHi_Logo_NoBG.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />

                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                        <code>src/app/page.tsx</code> 로 편집을 시작하세요.
                    </li>
                    <li>변경 사항을 저장하고 즉시 확인하세요.</li>
                </ol>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://tailwindcss.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    tailwind css
                    {/* css docs */}
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Next.js
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Next.js 템플릿
                </a>
            </footer>
        </div>
    );
}
