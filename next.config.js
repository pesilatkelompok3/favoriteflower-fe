/** @type {import('next').NextConfig} */

const nextConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  env: {
    baseURL: process.env.BASEURL,
    apiURL: process.env.APIURL,
    waNUMBER: process.env.WANUMBER,
    waAPI: process.env.WAAPI,
    // PATH: process.env.PATH,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'localhost',
      },
      {
        hostname: 'res.cloudinary.com',
      }
    ]
  },
  domains: ["localhost"],
  // domains: [`${process.env.PATH}`], ndabisa pake env ges
  minimumCacheTTL: 15000000,
}

module.exports = nextConfig;