'use client';

import { Post } from "config/post"; // Post 타입이 정의된 위치를 가져옵니다.
import Link from "next/link";
import { useEffect, useState } from "react";

interface PostCardProps {
    post: Post; // post의 타입을 Post로 지정
}

export const PostCard = ({ post }: PostCardProps) => {
    const [formattedDate, setFormattedDate] = useState(post.date); // 초기값으로 원본 날짜 문자열 사용

    useEffect(() => {
        // 클라이언트 사이드에서만 날짜 포맷팅 수행
        const date = new Date(post.date);
        setFormattedDate(
            date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        );
    }, [post.date]);

    return (
        <li className="postcard">
            <figure className="w-full h-48 border-b-2 rounded-t-lg border-gray-600 mb-2 bg-gray-300">
                {/* <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover border-b-2 border-gray-600"
                /> */}
            </figure>
            <div className="w-full p-4">
                <div className="w-fit flex items-center bg-[--foreground] rounded-lg px-2 py-1">
                    <p className="text-[--background]">{post.category}</p>{" "}
                </div>
                {/* category 사용 */}
                <h2 className="text-lg font-bold mb-2 title-ellipsis">
                    <Link href={post.url}>{post.title}</Link>
                </h2>
                <div className="flex justify-between text-gray-400 text-sm">
                    <time dateTime={post.date}>{formattedDate}</time>{" "}
                    {/* 변환된 날짜 사용 */}
                    <span>{post.readingMinutes}분</span> {/* readingMinutes 사용 */}
                </div>
            </div>
        </li>
    );
};
