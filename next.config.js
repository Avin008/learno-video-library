/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "i.ytimg.com",
      "yt3.ggpht.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
