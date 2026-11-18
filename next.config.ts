import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // asasvirtuais and asasvirtuais-prisma ship raw TypeScript/TSX sources.
  transpilePackages: ["asasvirtuais", "asasvirtuais-prisma"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
