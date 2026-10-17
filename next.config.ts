import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://images.unsplash.com https://*.google-analytics.com;
  connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`

const nextConfig: NextConfig = {
  // Send the existing Tailwind styles with SSR to remove the first-visit
  // stylesheet waterfall, without changing the visual design.
  experimental: { inlineCss: true },
  images: {
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      // Optional agent discovery, not a crawler permission or ranking directive.
      ...['/', '/articles/:path*'].map(source => ({
        source,
        headers: [{ key: 'Link', value: '</llms.txt>; rel="describedby"' }],
      })),
      {
        source: '/(.*)',
        headers: [
          // HTTPS upgrade is ignored in report-only mode. Enforce just this
          // directive; the remaining policy continues to report as before.
          { key: 'Content-Security-Policy', value: 'upgrade-insecure-requests' },
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
      {
        // External rewrites inherit this site's headers. Preserve the
        // standalone studio's enforced policy on its mounted routes.
        source: '/vehicle-style/studio/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: blob:; connect-src 'self'; font-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests",
          },
          { key: 'X-Frame-Options', value: 'DENY' },
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
  async rewrites() {
    return [{
      source: '/vehicle-style/studio/:path*',
      destination: 'https://evselects-vehicle-style-evselects-com.vercel.app/vehicle-style/studio/:path*',
    }];
  },
};

export default nextConfig;
