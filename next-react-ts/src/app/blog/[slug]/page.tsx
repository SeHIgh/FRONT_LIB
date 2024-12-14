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

    // 빌드 타임에서만 파일 시스템 접근
    const filePath = path.join(process.cwd(), "src/app/posts", `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // MDX 파일의 메타데이터와 콘텐츠 분리
    const { content, data } = matter(fileContents);

    return (
        <article className="bg-gray-400 p-4">
            <h1>{data.title}</h1>
            <MDXRemote source={content} />
        </article>
    );
}

export async function generateStaticParams() {
    const contentDir = path.join(process.cwd(), "src/app/posts");
    const filenames = fs.readdirSync(contentDir);

    // 슬러그 생성
    return filenames.map((filename) => ({
        slug: filename.replace(/\.mdx$/, ""),
    }));
}
