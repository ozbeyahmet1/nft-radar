/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.seadn.io'],
  },
  env: {
    NEXT_RAPID_API_KEY: process.env.NEXT_RAPID_API_KEY,
  },
};

module.exports = nextConfig;
