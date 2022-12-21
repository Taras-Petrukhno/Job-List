/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['picsum.photos'],
    loader: "akamai",
    path: ""
  },
  basePath: '/Job-List',
  assetPrefix: '/Job-List/' //the same as basePath, but for static resource like css javascript
}

module.exports = nextConfig
