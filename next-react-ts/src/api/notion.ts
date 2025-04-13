import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const databaseId = process.env.NOTION_DATABASE_ID;
        if (!databaseId) {
            return res
                .status(400)
                .json({ error: "Database ID is not defined" });
        }

        const response = await notion.databases.query({
            database_id: databaseId,
        });

        res.status(200).json(response);
    } catch (error) {
        console.error("Error querying Notion API:", error);
        res.status(500).json({ error: "Failed to fetch data from Notion API" });
    }
}
