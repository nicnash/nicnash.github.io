import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

export default nextConfig;
