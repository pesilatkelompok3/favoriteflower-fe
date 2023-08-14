/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: [
        {
            source: "/admin",
            destination: "/admin/login",
        }
    ]
}

module.exports = nextConfig
