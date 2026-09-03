import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect /blog/* → /articles/* (permanent 308)
      // Needed because Facebook ad URLs use /blog/ path
      {
        source: "/blog/:slug*",
        destination: "/articles/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
