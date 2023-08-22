/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  env: {
    baseURL: "http://localhost:5000",
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
    minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig;
