import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["*", "cdn.sanity.io"],
  },

  /* config options here */
};

export default nextConfig;
