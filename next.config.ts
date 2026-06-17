import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
    poweredByHeader: false,
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
            },
        ],
    },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
