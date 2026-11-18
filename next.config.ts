import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
