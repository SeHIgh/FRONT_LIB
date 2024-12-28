import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths } from 'next';

// MDX 파일의 메타 데이터와 콘텐츠를 읽기 위한 함수
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostProps {
    source: MDXRemoteSerializeResult;
    frontMatter:{
        title: string;
        date: string;
        desc: string;
        thumbnail: string;
    }
}

// Post 컴포넌트 정의
const PostPage:React.FC<PostProps> = ({ source, frontMatter }) => {
    return (
        <article>
            <h1>{frontMatter.title}</h1>
            <MDXRemote {...source} />
        </article>
    );
}

// 빌드 타임에 각 포스트에 대한 데이터를 생성
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const filePath = path.join(process.cwd(), "src/app/posts", `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);

    const mdxSource = await serialize(content);

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

// 빌드 타임에 사용 가능한 모든 경로를 생성
export const getStaticPaths: GetStaticPaths = async () => {
    const postsDirectory = path.join(process.cwd(), "src/app/posts");
    const filenames = fs.readdirSync(postsDirectory);

    const paths = filenames.map(filename => ({
        params: { slug: filename.replace(/\.mdx$/, '') },
    }));

    return {
        paths,
        fallback: false, // 또는 'blocking' 등 다른 설정을 사용할 수 있습니다.
    };
};

export default PostPage;