import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        providerImportSource: "@mdx-js/react",
    },
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"], // 확장자 설정
});

export default nextConfig;