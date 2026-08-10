import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Next 16'da qualities bir izin listesi; portre gibi geniş yumuşak gradyanlı
    // fotoğraflar 75'te bantlanıyor, 90 onlar için.
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Robots-Tag',
            value: 'all',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://cal.com https://*.cal.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.cal.com; img-src 'self' blob: data: https:; font-src 'self' https://fonts.gstatic.com https://*.cal.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; frame-src 'self' https://cal.com https://*.cal.com https://www.youtube.com https://www.youtube-nocookie.com; media-src 'self' https:; connect-src 'self' https://api.web3forms.com https://*.cal.com https://connect.facebook.net https://www.facebook.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
