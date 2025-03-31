import { getCategoryDetailList, getPostList } from 'utils/postfunc';
import { PostCard } from '@/components/post/PostCard';
import CategoryList from '@/components/post/CategoryList';
import { notFound } from 'next/navigation';

// 정적 재생성 시간 설정 (1시간)
export const revalidate = 3600;

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

// 빌드 시 생성할 경로 정의
export async function generateStaticParams() {
    const categories = await getCategoryDetailList();
    return categories.map((category) => ({
        category: category.name,
    }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params;
    const posts = await getPostList(category);
    const categories = await getCategoryDetailList();

    if (!posts.length) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{category}</h1>
            <CategoryList list={categories} currentCategory={category} />
            <div className="grid gap-6 mt-8">
                {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
} 