export type NotionDatabaseProperties = {
    Name: {
        id: string;
        type: "title";
        title: Array<{
            type: "text";
            text: {
                content: string;
                link: string | null;
            };
            annotations: {
                bold: boolean;
                italic: boolean;
                strikethrough: boolean;
                underline: boolean;
                code: boolean;
                color: string;
            };
            plain_text: string;
            href: string | null;
        }>;
    };
    Status: {
        id: string;
        type: "status";
        status: {
            id?: string;
            name?: string;
            color?: string;
        } | null;
    };
    FilesAndMedia: {
        id: string;
        type: "files";
        files: Array<{
            name?: string;
            type?: "external" | "file";
            external?: { url: string };
            file?: { url: string };
        }>;
    };
    Course: {
        id: string;
        type: "relation";
        relation: Array<{
            id: string; // Relation ID
        }>;
        has_more: boolean;
    };
    CreatedTime: {
        id: string;
        type: "created_time";
        created_time?: string; // Created time
    };
    LastEditedTime: {
        id: string;
        type: "last_edited_time";
        last_edited_time?: string; // Last edited time
    };
};
