import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: process.env.HOST ? [process.env.HOST] : [],
};

export default nextConfig;
