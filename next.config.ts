import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // خروجی مستقل برای ساخت تصویر کوچک‌تر در Docker
  output: "standalone",
};

export default nextConfig;
