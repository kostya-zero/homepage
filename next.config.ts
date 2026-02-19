import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["tsx", "mdx"],
    poweredByHeader: false,
    reactCompiler: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
