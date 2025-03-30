import { PostBody } from "@/components/post/PostBody";
import { getPostDetail } from "../../../../utils/postfunc";
import Link from "next/link";

const PostDetailPage = async ({ params: { category, slug } }) => {
    const post = await getPostDetail(category, slug);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-10">
                {post?.title}
            </h1>
            <div className="mb-6">
                <p className="text-center text-gray-500">
                    {post?.date} - {post?.readingMinutes} 읽기
                </p>
            </div>
            <div className="prose mx-auto">
                <PostBody post={post} />
            </div>
            <div className="flex justify-center mt-10">
                <Link href={`/blog/${post?.category}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        {post?.category} 카테고리로 돌아가기
                    </button>
                </Link>
            </div>
            <div className="flex justify-center mt-4">
                <Link href="/blog">
                    <button className="px-4 py-2 bg-gray-200 rounded-lg">
                        블로그 홈으로 돌아가기
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default PostDetailPage;
