import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-galmuri9)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    // className="dark:invert mx-auto"
                    className="mx-auto"
                    src="/SeHi_Logo_NoBG.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                        <code className="bg-black/[.07] px-1 py-0.5 rounded font-semibold">
                            src/app/page.tsx
                        </code>
                        {" "}로 편집을 시작하세요.
                    </li>
                    <li>변경 사항을 저장하고 즉시 확인하세요.</li>
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row m-auto">
                    <a
                        className="rounded-full border-2 border-solid border-foreground transition-colors flex items-center justify-center bg-background text-foreground gap-2 hover:bg-[#383838] dark:hover:bg-[#eee] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Next 공식 문서
                    </a>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
                    배우기
                    {/* learn */}
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
                    예제
                    {/* Examples */}
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    {/* Go to nextjs.org → */}
                    nextjs.org 로 가기 →
                </a>
            </footer>
        </div>
    );
}
