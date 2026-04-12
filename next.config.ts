import createMDX from "@next/mdx";
import { NextConfig } from "next";


const nextConfig: NextConfig = {
    pageExtensions: ["tsx", "mdx"],
    poweredByHeader: false,
    reactCompiler: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/api/:path*'
            },
            {
                source: '/:path*',
                destination: '/'
            }
        ];
    }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
