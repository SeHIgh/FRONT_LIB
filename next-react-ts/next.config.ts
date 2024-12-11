import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config, { isServer }: { isServer: boolean }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["next/babel"],
                        plugins: ["babel-plugin-macros"],
                    },
                },
            });
        }
        return config;
    },
};

export default nextConfig;
