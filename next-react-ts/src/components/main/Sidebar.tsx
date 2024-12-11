"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside
            className={`p-2.5 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "w-48" : "w-12"
            }`}
        >
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "닫기" : "열기"}
            </button>
            {isOpen && (
                // 글 줄바꿈 방지
                <nav className="truncate">
                    <ul>
                        <li>
                            <Link href="/category1">카테고리 1</Link>
                        </li>
                        <li>
                            <Link href="/category2">카테고리 2</Link>
                        </li>
                        <li>
                            <Link href="/category3">카테고리 3</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </aside>
    );
}
