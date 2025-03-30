import { Post } from "config/post"; // Post 타입이 정의된 위치를 가져옵니다.
import Link from "next/link";

interface PostCardProps {
    post: Post; // post의 타입을 Post로 지정
}

export const PostCard = ({ post }: PostCardProps) => {
    const { url, title, date, category, readingMinutes, excerpt } = post;

    return (
        <li className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">
                <Link href={url}>{title}</Link>
            </h2>
            <p className="text-gray-500 mb-2">{excerpt}</p> {/* excerpt 사용 */}
            <div className="flex justify-between text-gray-400 text-sm">
                <span>{category}</span>
                <span>{date}</span>
                <span>{readingMinutes} 읽기</span> {/* readingMinutes 사용 */}
            </div>
        </li>
    );
};
