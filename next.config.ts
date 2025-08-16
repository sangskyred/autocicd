import type { NextConfig } from "next";

// next.config.ts

const repoName = 'autocicd'; // 👈 Replace this with your actual GitHub repo name

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
