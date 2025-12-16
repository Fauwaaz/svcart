/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dashboard.svcart.shop", "secure.gravatar.com"],
  },
};

module.exports = nextConfig;
