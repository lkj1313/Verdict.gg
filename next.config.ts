import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/signup/',
        destination: '/signup',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
