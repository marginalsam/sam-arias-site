/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow placeholder images from any domain during development
    remotePatterns: [],
    // Enable unoptimized for static export if needed
    // unoptimized: true,
  },
};

module.exports = nextConfig;
