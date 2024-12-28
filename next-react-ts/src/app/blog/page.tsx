// src/app/blog/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export default function BlogPage() {
    const postsDirectory = path.join(process.cwd(), "src/posts");
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.mdx$/, ""),
            title: data.title,
            date: data.date,
            desc: data.desc,
            thumbnail: data.thumbnail,
        };
    });

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-10">
                블로그 게시물
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        className="border rounded-lg p-4 hover:bg-gray-100"
                    >
                        <Link href={`/blog/${post.slug}`}>
                            <div>
                                <h2 className="text-xl font-semibold">
                                    {post.title}
                                </h2>
                            </div>
                            <p>자세히 보기</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
