import fs from "fs/promises";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "posts");
const METADATA_PATH = path.join(POSTS_PATH, "_metadata");

// 메타데이터 캐시
const metadataCache = new Map();

export async function getPostsMetadata(category?: string) {
    try {
        // 캐시된 메타데이터가 있으면 반환
        if (metadataCache.has(category)) {
            return metadataCache.get(category);
        }

        const metadataPath = path.join(
            METADATA_PATH,
            `${category || "all"}.json`
        );
        const metadata = JSON.parse(await fs.readFile(metadataPath, "utf8"));

        // 캐시에 저장
        metadataCache.set(category, metadata);

        return metadata;
    } catch (error) {
        console.error("Error loading posts metadata:", error);
        return [];
    }
}
