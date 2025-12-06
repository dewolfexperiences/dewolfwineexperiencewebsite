import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep builds rooted to this project to avoid multi-lockfile warnings.
    root: __dirname,
  },
};

export default nextConfig;
