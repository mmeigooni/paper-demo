/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  env: {
    PAPER_CLIENT_ID: process.env.PAPER_CLIENT_ID,
  },
};

module.exports = nextConfig;
