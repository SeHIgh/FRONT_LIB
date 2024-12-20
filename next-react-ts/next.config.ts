import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        providerImportSource: '@mdx-js/react',
    }
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    /* config options here */
    // MDX 파일을 페이지로 인식하도록 확장자를 추가
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);