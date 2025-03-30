import { sync } from "glob";
import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Post, PostMatter } from "config/post";

// 서버 사이드에서만 실행되는 데이터 로딩 함수들

const BASE_PATH = "/src/posts";
export const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX 파일 조회
export const getPostPaths = (category?: string) => {
    const folder = category || "**";
    const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.{md,mdx}`);
    return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
    const paths: string[] = getPostPaths(category);
    const posts = await Promise.all(
        paths.map((postPath) => parsePost(postPath))
    );
    return posts;
};

// 카테고리 목록을 반환하는 함수
export const getCategoryDetailList = async (): Promise<string[]> => {
    const postList: Post[] = await getPostList(); // 전체 게시글 목록을 가져옴
    const categories = postList.map((post) => post.category); // 각 게시글에서 카테고리 추출

    // 중복된 카테고리 제거
    const uniqueCategories = [...new Set(categories)];

    return uniqueCategories; // 카테고리 목록 반환
};

// MDX 파일 파싱 : abstract / detail 구분
export const parsePost = async (postPath: string): Promise<Post> => {
    const postAbstract = parsePostAbstract(postPath);
    const postDetail = await parsePostDetail(postPath);
    return { ...postAbstract, ...postDetail };
};

// MDX Abstract
export const parsePostAbstract = (postPath: string) => {
    const filePath = postPath
        .slice(postPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, "")
        .replace(".mdx", "");

    const [category, slug] = filePath.split("/");

    const url = `/blog/${category}/${slug}`;

    return { url, category, slug };
};

// MDX Detail
export const parsePostDetail = async (postPath: string) => {
    const file = fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(file);
    const grayMatter = data as PostMatter;
    const readingMinutes = Math.ceil(readingTime(content).minutes);
    const dateString = dayjs(grayMatter.date)
        .locale("ko")
        .format("YYYY년 MM월 DD일");
    return { ...grayMatter, dateString, content, readingMinutes };
};

// 특정 카테고리와 슬러그에 맞는 포스트 상세 정보를 가져오는 함수
export const getPostDetail = async (category: string, slug: string): Promise<Post | null> => {
    // 전체 포스트 목록을 가져옵니다.
    const postList: Post[] = await getPostList(category);
    
    // 카테고리와 슬러그가 일치하는 포스트를 찾습니다.
    const post = postList.find((post) => post.category === category && post.slug === slug);

    // 해당 포스트가 있으면 반환, 없으면 null을 반환
    return post || null;
};