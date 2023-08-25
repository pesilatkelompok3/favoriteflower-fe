/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  env: {
    baseURL: process.env.BASEURL,
    apiURL: process.env.APIURL
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
