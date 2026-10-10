import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://images.unsplash.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`

const nextConfig: NextConfig = {
  // Sandbox preview only: Next 16 blocks dev assets/HMR when the request Origin
  // is not allowlisted. The preview is served from the public host, so allow it
  // while BASE44_PREVIEW_MODE=1; unset/normal runs keep the default behavior.
  allowedDevOrigins:
    process.env.BASE44_PREVIEW_MODE === '1' && process.env.BASE44_PUBLIC_HOST_SUFFIX
      ? [`3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`]
      : [],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect /blog/* → /articles/* (permanent 308)
      // Needed because Facebook ad URLs use /blog/ path
      {
        source: "/blog/:slug*",
        destination: "/articles/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
