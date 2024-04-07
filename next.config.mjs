// next.config.mjs
const nextConfig = {
  images: {
    domains: ['store.istad.co', 'fakestoreapi.com', 'hips.hearstapps.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
