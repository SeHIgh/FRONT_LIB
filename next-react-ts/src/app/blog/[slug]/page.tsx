"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function BlogPostPage() {
    const searchParams = useSearchParams(); // URL의 동적 세그먼트 가져오기
    const id = searchParams.get("id");

    return (
        <section className="px-6 py-2 h-full">
            <iframe
                src={`https://lucky-servant-f87.notion.site/ebd/${id.replace(
                    /-/g,
                    ""
                )}`}
                width="100%"
                height="100%"
                className="rounded-lg shadow-md"
            />
        </section>
    );
}
