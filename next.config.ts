import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.nihaoholidays.org",
      },
    ],
  },
};

export default nextConfig;
