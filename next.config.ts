import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
    poweredByHeader: false,
    reactCompiler: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
