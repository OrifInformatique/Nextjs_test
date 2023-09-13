/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/products',
        destination: '/',
      },
      {
        source: '/insert',
        destination: '/',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/api/products',
        destination: '/',
        permanent: true,
      },
    ]
  },
  experimental: {
    serverActions: true,
  },
}
