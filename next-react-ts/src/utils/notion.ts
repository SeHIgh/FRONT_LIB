import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionDatabaseProperties } from "types/notion";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getDatabaseItems(): Promise<
    {
        id: string;
        name: string; // Name property
        status?: string; // Status property
        createdTime?: string; // Created time property
        lastEditedTime?: string; // Last edited time property
        files?: { name?: string; url?: string }[]; // Files & Media property
        courseRelations?: { id: string }[]; // Course relation IDs
        url?: string; // Page URL
    }[]
> {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
    });

    return response.results
        .filter((page): page is PageObjectResponse => "properties" in page)
        .map((page) => {
            const properties = page.properties as NotionDatabaseProperties;

            return {
                id: page.id,
                name: properties.Name?.title?.[0]?.plain_text || "Untitled", // Name property 처리
                status: properties.Status?.status?.name || "No status", // Status property 처리
                createdTime:
                    properties.CreatedTime?.created_time || page.created_time, // Created Time 처리
                lastEditedTime:
                    properties.LastEditedTime?.last_edited_time ||
                    page.last_edited_time, // Last Edited Time 처리
                files:
                    properties.FilesAndMedia?.files.map((file) => ({
                        name: file.name,
                        url:
                            file.type === "external"
                                ? file.external?.url
                                : file.file?.url,
                    })) || [], // Files & Media 처리
                courseRelations: properties.Course?.relation || [], // Course relation 처리
                url: page.url, // Page URL 처리
            };
        });
}
