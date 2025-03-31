import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";

const POSTS_PATH = path.join(process.cwd(), "posts");
const METADATA_PATH = path.join(POSTS_PATH, "_metadata");

async function generateMetadata() {
    try {
        // 메타데이터 디렉토리 생성
        await fs.mkdir(METADATA_PATH, { recursive: true });

        // posts 디렉토리의 모든 MDX 파일 찾기
        const postFiles = sync(`${POSTS_PATH}/**/*.mdx`);
        
        if (postFiles.length === 0) {
            console.warn("경고: posts 디렉토리에 MDX 파일이 없습니다.");
            return;
        }

        // 카테고리별로 포스트 그룹화
        const categoryMap = new Map();

        for (const file of postFiles) {
            const content = await fs.readFile(file, "utf8");
            const { data } = matter(content);
            const relativePath = path.relative(POSTS_PATH, file);
            const [category] = relativePath.split("/");
            
            if (!categoryMap.has(category)) {
                categoryMap.set(category, []);
            }
            
            categoryMap.get(category).push({
                ...data,
                slug: path.basename(file, ".mdx"),
                category,
                url: `/blog/${category}/${path.basename(file, ".mdx")}`,
            });
        }

        // 카테고리별 메타데이터 파일 생성
        for (const [category, posts] of categoryMap) {
            await fs.writeFile(
                path.join(METADATA_PATH, `${category}.json`),
                JSON.stringify(posts, null, 2)
            );
        }

        // 전체 포스트 메타데이터 파일 생성
        const allPosts = Array.from(categoryMap.values()).flat();
        await fs.writeFile(
            path.join(METADATA_PATH, "all.json"),
            JSON.stringify(allPosts, null, 2)
        );

        console.log("메타데이터 생성 완료");
    } catch (error) {
        console.error("메타데이터 생성 중 오류:", error);
    }
}

generateMetadata();
