import Link from "next/link";
import React from "react";
import { getDatabaseItems } from "utils/notion";

export default async function BlogPage() {
    const posts = await getDatabaseItems();

    return (
        <section className="px-6 py-2 h-full">
            <h1 className="mb-1">Notion Blog</h1>
            <div className="flex flex-1 h-full">
                {/* 게시판 리스트 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={{
                                pathname: `/blog/${post.name}`,
                                query: { id: post.id, name: post.name},
                            }}
                        >
                            <div
                                key={post.id}
                                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:bg-gray-200 hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
                                // onClick={() => setSelectedPost(post)}
                            >
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    {post.name}
                                </h2>
                                <p className="text-gray-600 mb-2">
                                    <span className="font-medium">Status:</span>{" "}
                                    {post.status || "No status"}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <span className="font-medium">
                                        Created Time:
                                    </span>{" "}
                                    {new Date(
                                        post.createdTime || ""
                                    ).toLocaleDateString()}
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <span className="font-medium">
                                        Last Edited Time:
                                    </span>{" "}
                                    {new Date(
                                        post.lastEditedTime || ""
                                    ).toLocaleDateString()}
                                </p>
                                <ul className="mb-4">
                                    {post.files?.map((file, index) => (
                                        <li
                                            key={index}
                                            className="text-blue-500 underline"
                                        >
                                            <a
                                                href={file.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {file.name || "Unnamed File"}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    View on Notion
                                </a>
                                {/* <iframe
                                    src={`https://lucky-servant-f87.notion.site/ebd/${post.id.replace(
                                        /-/g,
                                        ""
                                    )}`}
                                    width="100%"
                                    height="600"
                                /> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
