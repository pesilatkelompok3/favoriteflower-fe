/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    },
    env: {
        baseURL: "http://localhost:5000",
    },
    // redirects: [
    //     {
    //         source: "/admin/login",
    //         destination: "/admin",
    //     }
    // ]
}

module.exports = nextConfig
