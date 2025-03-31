import { sync } from "glob";
import { mkdir, readFile, readdir } from 'fs/promises';
import path from "path";
import dayjs from "dayjs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from 'next-mdx-remote/rsc';
import { CategoryDetail, MDXComponentProps, Post, PostDetail, PostMatter } from "config/post";
import { ReactElement, JSXElementConstructor } from 'react';


// 기본 경로 설정
const BASE_PATH = "../posts";
const POSTS_PATH = path.join(process.cwd(), 'posts');
const METADATA_PATH = path.join(POSTS_PATH, '_metadata');

// MDX 파일 경로 조회
export const getPostPaths = (category?: string) => {
    const folder = category || "**";
    const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.{md,mdx}`);
    return paths;
};

// 메타데이터 디렉토리가 없으면 생성하는 함수 추가
async function ensureMetadataDirectory() {
    try {
        await mkdir(METADATA_PATH, { recursive: true });
    } catch (error) {
        console.error('메타데이터 디렉토리 생성 중 오류:', error);
    }
}

// 모든 포스트 목록 조회
export async function getPostList(category?: string): Promise<Post[]> {
    try {
        await ensureMetadataDirectory();

        const metadataFile = category === 'all' || !category
            ? path.join(METADATA_PATH, 'all.json')
            : path.join(METADATA_PATH, `${category}.json`);

        const metadata = await readFile(metadataFile, 'utf8');
        return JSON.parse(metadata);
    } catch (error) {
        console.error('포스트 목록 로딩 중 오류:', error);
        return [];
    }
}

// 카테고리별 포스트 개수를 포함하는 목록 조회
export async function getCategoryDetailList(): Promise<CategoryDetail[]> {
    try {
        await ensureMetadataDirectory();
        const categories = await readdir(METADATA_PATH);
        const categoryDetails: CategoryDetail[] = [];

        for (const file of categories) {
            if (file === 'all.json') continue;
            
            const category = path.basename(file, '.json');
            const metadata = await readFile(path.join(METADATA_PATH, file), 'utf8');
            const posts = JSON.parse(metadata);

            categoryDetails.push({
                name: category,
                count: posts.length
            });
        }

        return categoryDetails;
    } catch (error) {
        console.error('카테고리 목록 로딩 중 오류:', error);
        return [];
    }
}

// MDX 파일 파싱
export const parsePost = async (postPath: string): Promise<Post> => {
    try {
        const postAbstract = parsePostAbstract(postPath);
        const postDetail = await parsePostDetail(postPath);
        
        // 명시적 타입 캐스팅을 통해 content의 타입을 맞춤
        const post: Post = {
            ...postAbstract,
            ...postDetail,
            content: postDetail.content as ReactElement<MDXComponentProps, string | JSXElementConstructor<MDXComponentProps>>
        };

        return post;
    } catch (error) {
        console.error('Error parsing post:', error);
        throw new Error(`Failed to parse post at path: ${postPath}`);
    }
};

// MDX Abstract 정보 파싱
export const parsePostAbstract = (postPath: string) => {
    const filePath = postPath
        .slice(postPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, "")
        .replace(".mdx", "");

    const [category, slug] = filePath.split("/");
    const url = `/blog/${category}/${slug}`;

    return { url, category, slug };
};

// MDX Detail 정보 파싱
export const parsePostDetail = async (postPath: string): Promise<PostDetail> => {
    const file = await readFile(postPath, "utf8");
    const { data, content } = matter(file);
    const grayMatter = data as PostMatter;
    
    const { content: compiledContent } = await compileMDX<MDXComponentProps>({
        source: content,
        options: { parseFrontmatter: true }
    });

    const readingMinutes = Math.ceil(readingTime(content).minutes);
    const dateString = dayjs(grayMatter.date)
        .locale("ko")
        .format("YYYY년 MM월 DD일");

    return { 
        ...grayMatter,
        dateString,
        content: compiledContent as ReactElement<MDXComponentProps, string | JSXElementConstructor<MDXComponentProps>>,
        readingMinutes 
    };
};

// 특정 포스트 상세 정보 조회
export const getPostDetail = async (category: string, slug: string): Promise<Post | null> => {
    try {
        const postList = await getPostList(category);
        return postList.find(post => post.slug === slug) || null;
    } catch (error) {
        console.error('Error loading post:', error);
        return null;
    }
}; 