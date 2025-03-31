const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    experimental: {
        mdxRs: true,
    },
    // 정적 페이지 생성 최적화
    async rewrites() {
        return [
            {
                source: "/blog/:category*",
                destination: "/blog/:category*",
            },
        ];
    },
    // 캐시 설정
    async headers() {
        return [
            {
                source: "/blog/:category*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=3600, stale-while-revalidate=86400",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
