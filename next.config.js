/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
