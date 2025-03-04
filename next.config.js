/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/liaoning-zero-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/liaoning-zero-website/' : '',
}

module.exports = nextConfig
