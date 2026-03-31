import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/chapareformes-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
