const fs = require("fs");
const { Client } = require("@notionhq/client");

// Notion 클라이언트 초기화
const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

async function fetchDatabaseItems() {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
        });

        // 데이터를 JSON 파일로 저장
        fs.writeFileSync(
            "./data/notion-data.json",
            JSON.stringify(response.results, null, 2)
        );
        console.log("Notion data saved to notion-data.json");
    } catch (error) {
        console.error("Error fetching Notion data:", error);
    }
}

fetchDatabaseItems();
