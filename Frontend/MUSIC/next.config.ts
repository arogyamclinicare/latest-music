import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.clerk.accounts.dev https://*.clerk.com blob:",
              "style-src 'self' 'unsafe-inline' https://*.clerk.accounts.dev https://fonts.googleapis.com",
              "style-src-elem 'self' 'unsafe-inline' https://*.clerk.accounts.dev https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",

              // ⭐⭐⭐ FIXED LINE ⭐⭐⭐
              "connect-src 'self' http://127.0.0.1:8000 https://*.clerk.accounts.dev https://*.clerk.com https://clerk-telemetry.com",
"media-src 'self' http://127.0.0.1:8000 blob: data:",
,
,

              "frame-src 'self' https://*.clerk.accounts.dev",
              "worker-src 'self' blob:",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
