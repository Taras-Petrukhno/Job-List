/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['picsum.photos'],
    loader: "akamai",
    path: ""
  },
  basePath: NEXT_PUBLIC_BASE_PATH,
  assetPrefix: NEXT_PUBLIC_BASE_PATH //the same as basePath, but for static resource like css javascript
}

module.exports = nextConfig
