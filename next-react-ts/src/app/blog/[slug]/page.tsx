import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface PostProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostProps) {
    const { slug } = params;
    // 프로젝트 루트 경로에 있는 'posts' 디렉토리 내의 MDX 파일 경로 지정
    const filePath = path.join(process.cwd(), "src/app/posts", `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(fileContents);

    return (
        <article className="bg-gray-400 p-4">
            <h1>{data.title}</h1>
            <MDXRemote source={content} />
        </article>
    );
}

export async function generateStaticParams() {
    // 프로젝트 루트 경로에 있는 'posts' 디렉토리 경로 지정
    const contentDir = path.join(process.cwd(), "src/app/posts");
    const filenames = fs.readdirSync(contentDir);

    return filenames.map((filename) => ({
        slug: filename.replace(/\.mdx$/, ""),
    }));
}
