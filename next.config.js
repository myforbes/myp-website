/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/myp-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/myp-website/' : '',
  images: {
    unoptimized: true
  },
  env: {
    PORT: '3100',
  },
  compress: true,
}

module.exports = nextConfig