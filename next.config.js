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
}
