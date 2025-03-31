import { MDXContent } from '@/components/post/MDXContent';
import { notFound } from 'next/navigation';
import { getCategoryDetailList, getPostDetail, getPostList } from 'utils/postfunc';

// 정적 재생성 시간 설정 (1시간)
export const revalidate = 3600;

interface PostPageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

// 빌드 시 생성할 경로 정의
export async function generateStaticParams() {
    const categories = await getCategoryDetailList();
    const allPosts = [];

    for (const category of categories) {
        const posts = await getPostList(category.name);
        allPosts.push(
            ...posts.map((post) => ({
                category: category.name,
                slug: post.slug,
            }))
        );
    }

    return allPosts;
}

export default async function PostPage({ params }: PostPageProps) {
    const { category, slug } = await params;
    const post = await getPostDetail(category, slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-8 prose prose-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold">{post.title}</h1>
                <div className="flex gap-4 text-gray-600 mt-4">
                    <time dateTime={post.date}>{post.dateString}</time>
                    <span>·</span>
                    <span>{post.readingMinutes}분 읽기</span>
                </div>
            </header>
            <MDXContent content={post.content} />
        </article>
    );
}
