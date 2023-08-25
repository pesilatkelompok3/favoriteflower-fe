/** @type {import('next').NextConfig} */

const nextConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  env: {
    baseURL: process.env.BASEURL,
    URL: process.env.URL,
    WANUMBER: process.env.WANUMBER,
    WAAPI: process.env.WAAPI,
    PATH: process.env.PATH,
  },
  images: {
    domains: ["localhost"],
    // domains: [`${process.env.PATH}`], ndabisa pake env ges
    minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig;