import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Sometimes Google Drive redirects images here
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = { fs: false }; // Prevents server-side crashes
    }
    return config;
  },
};

export default nextConfig;
