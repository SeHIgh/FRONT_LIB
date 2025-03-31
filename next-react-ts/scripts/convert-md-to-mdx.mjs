import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readline from "readline";
import { fileURLToPath } from "url";

// `__dirname` 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 원본 md 파일 폴더 (변환 전)
const RAW_DIR = path.join(__dirname, "../posts/_raw");

// 변환된 mdx 파일이 저장될 기본 폴더
const OUTPUT_DIR = path.join(__dirname, "../posts");

// 날짜 포맷 함수 (YYYY-MM-DD)
const getFormattedDate = () => {
    return new Date().toISOString().split("T")[0];
};

// 사용자 입력을 받는 함수
const askQuestion = (query) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) =>
        rl.question(query, (ans) => {
            rl.close();
            resolve(ans.trim());
        })
    );
};

// MD → MDX 변환 함수
const convertMarkdownToMDX = async () => {
    if (!fs.existsSync(RAW_DIR)) {
        console.log("⚠️ raw 폴더가 존재하지 않습니다. 스크립트를 종료합니다.");
        return;
    }
    
    const files = fs
        .readdirSync(RAW_DIR)
        .filter((file) => file.endsWith(".md"));

    if (files.length === 0) {
        console.log("⚠️ 변환할 Markdown 파일이 없습니다.");
        return;
    }

    for (const file of files) {
        const filePath = path.join(RAW_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");

        // 첫 줄을 title로 설정
        const firstLineEnd = fileContent.indexOf("\n");
        const firstLine =
            firstLineEnd !== -1
                ? fileContent.slice(0, firstLineEnd).trim()
                : "제목 없음";
        const contentWithoutFirstLine =
            firstLineEnd !== -1 ? fileContent.slice(firstLineEnd).trim() : "";

        // 사용자에게 카테고리 입력 받기
        const category = await askQuestion(
            `📂 ${file} 의 카테고리를 입력하세요: `
        );

        // 프론트매터 생성
        const updatedData = {
            title: firstLine,
            date: getFormattedDate(),
            category: category || "Uncategorized",
            description: "자동 변환된 MDX 파일",
        };

        const mdxContent = matter.stringify(
            contentWithoutFirstLine,
            updatedData
        );

        // 저장 경로 설정
        const categoryDir = path.join(OUTPUT_DIR, category || "Uncategorized");
        if (!fs.existsSync(categoryDir)) {
            fs.mkdirSync(categoryDir, { recursive: true });
        }

        const newFilePath = path.join(categoryDir, file.replace(".md", ".mdx"));
        fs.writeFileSync(newFilePath, mdxContent, "utf-8");

        // 원본 파일 삭제
        fs.unlinkSync(filePath);

        console.log(
            `✅ ${file} → ${category}/${file.replace(".md", ".mdx")} 변환 완료`
        );
    }

    // 변환이 완료된 후, raw 폴더가 비었으면 삭제
    if (fs.readdirSync(RAW_DIR).length === 0) {
        fs.rmdirSync(RAW_DIR);
        console.log("🗑️ 원본 파일 삭제 완료, raw 폴더 정리됨.");
    }

    console.log("🎉 모든 파일 변환 완료!");
};

// 실행
convertMarkdownToMDX();
