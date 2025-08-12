import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Safe performance win
  compress: true,

  // Minimal security hardening (does not affect app logic)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
