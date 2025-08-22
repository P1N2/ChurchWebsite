/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // autorise localhost
  },
}

module.exports = nextConfig;
