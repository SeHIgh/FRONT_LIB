import React from "react";
import CategoryList from "@/components/post/CategoryList";
import { PostCard } from "@/components/post/PostCard";
import { getCategoryDetailList, getPostList } from "utils/postfunc";
import Link from "next/link";

// [최적화] ISR 설정 : 정적 재생성 시간 설정 (1시간)
export const revalidate = 3600;

const POSTS_PER_PAGE = 10;

interface BlogPageProps {
    searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({
    searchParams
}: BlogPageProps) {
    const { page = '1' } = await searchParams;
    const currentPage = parseInt(page);
    const posts = await getPostList('all');
    const categories = await getCategoryDetailList();

    // 전체 페이지 수 계산
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    // 현재 페이지의 포스트들
    const paginatedPosts = posts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <div className="main-container flex flex-col justify-start items-center gap-4 px-4 py-8">
            {/* 카테고리 목록 */}
            <div className="category-list">
                <CategoryList list={categories} />
            </div>

            {/* 포스트 목록 */}
            <ul className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
                {paginatedPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </ul>

            {/* 페이지네이션 UI */}
            <div className="pagination flex gap-2 mt-8">
                {/* 이전 페이지 버튼 */}
                {currentPage > 1 && (
                    <Link
                        href={`/blog?page=${currentPage - 1}`}
                        className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        이전
                    </Link>
                )}

                {/* 페이지 번호들 */}
                <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                        // 현재 페이지 주변 5개의 페이지만 표시
                        if (
                            pageNum === 1 ||
                            pageNum === totalPages ||
                            (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)
                        ) {
                            return (
                                <Link
                                    key={pageNum}
                                    href={`/blog?page=${pageNum}`}
                                    className={`px-4 py-2 rounded-lg ${
                                        currentPage === pageNum
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                                >
                                    {pageNum}
                                </Link>
                            );
                        } else if (
                            pageNum === currentPage - 3 ||
                            pageNum === currentPage + 3
                        ) {
                            return <span key={pageNum}>...</span>;
                        }
                        return null;
                    })}
                </div>

                {/* 다음 페이지 버튼 */}
                {currentPage < totalPages && (
                    <Link
                        href={`/blog?page=${currentPage + 1}`}
                        className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        다음
                    </Link>
                )}
            </div>

            {/* 전체 포스트 수 표시 */}
            <div className="text-gray-500 mt-4">
                전체 {totalPosts}개의 포스트
            </div>
        </div>
    );
}