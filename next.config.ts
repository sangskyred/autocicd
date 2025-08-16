import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // Disable image optimization if not using a custom loader
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/autocicd/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/autocicd' : '',
};

export default nextConfig;
