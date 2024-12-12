"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SideListProps {
    isOpen: boolean;
    title: string;
    icon: string;
}

export const SideList: React.FC<SideListProps> = ({ isOpen, title, icon }) => {
    return (
        // 접을 때 아이콘이 이동하는 현상 발생
        // <li className={`flex ${isOpen ? `justify-start pl-[10px]` : `justify-center`} items-center`}>
        // 아이콘이 고정 되게 하기 위해 수정
        <li className="h-10 pl-[9.85px] flex justify-start items-center rounded-md hover:bg-slate-400">
            <Link
                href={`/${title}`}
                passHref
                className="flex justify-center items-center"
            >
                <span className="material-icons">
                    {/* 아이콘 값이 없을 경우 기본 아이콘으로 folder 사용 */}
                    {icon || "folder"}
                </span>
                {isOpen && <span className="ml-2">{title}</span>}{" "}
                {/* isOpen이 true일 때만 제목 표시 */}
            </Link>
        </li>
    );
};

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside
            className={`p-2.5 bg-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "w-48" : "w-16"
            } text-white flex flex-col`}
        >
            <div className="flex justify-end">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <Image
                            aria-hidden
                            src="/arrow_left.svg"
                            alt="open icon"
                            width={40}
                            height={40}
                        />
                    ) : (
                        <Image
                            aria-hidden
                            src="/arrow_right.svg"
                            alt="close icon"
                            width={40}
                            height={40}
                        />
                    )}
                </button>
            </div>
            {/* {isOpen && ( */}
            {/* // 글 줄바꿈 방지 */}
            <nav className="truncate">
                <ul className="flex flex-col gap-2">
                    <SideList isOpen={isOpen} title="category1" icon="" />
                    <SideList isOpen={isOpen} title="category2" icon="" />
                    <SideList isOpen={isOpen} title="category3" icon="" />
                </ul>
            </nav>
            {/* )} */}
        </aside>
    );
}
