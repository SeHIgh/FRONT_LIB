"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem("theme") === "dark";
        if (darkMode) {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const isDark = !isDarkMode;
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        // 헤더 높이 25rem(100px), 상단 고정, 패딩 2.5
        // 배경 투명도 10%
        <header className="sticky top-0 w-full px-6 py-3 backdrop-blur-sm flex flex-row justify-between align-middle z-10">
            <Link href="/" className="flex flex-row gap-1">
                {isDarkMode ? (
                    <Image
                        src="/FRONT_LIBRARY_NOBG_DARK.svg"
                        alt="Next.js logo"
                        width={260}
                        height={100}
                        loading="eager"
                        priority
                    />
                ) : (
                    <Image
                        src="/FRONT_LIBRARY_NOBG_LIGHT.svg"
                        alt="Next.js logo"
                        width={260}
                        height={100}
                        loading="eager"
                        priority
                    />
                )}
            </Link>
            <div className="flex flex-row justify-between gap-2 item-center">
                <nav aria-label="Tabs" className="h-full flex items-center">
                    <ul className="flex flex-row justify-center">
                        <li id="tab_id">
                            <Link href="/docs">Docs</Link>
                        </li>
                        <li id="tab_id">
                            <Link href="/Blog">Blog</Link>
                        </li>
                        <li id="tab_id">
                            <Link href="/Update">Update</Link>
                        </li>
                    </ul>
                </nav>
                <button className="w-10" onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <Image
                            src="/light.svg"
                            alt="light img"
                            width={26}
                            height={26}
                            priority
                        />
                    ) : (
                        <Image
                            src="/dark.svg"
                            alt="dark img"
                            width={26}
                            height={26}
                            priority
                        />
                    )}
                </button>
            </div>
        </header>
    );
}
