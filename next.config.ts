// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Avoids Image Optimization issues on GitHub Pages
  },
  basePath: "nextportfolio", // Change this to your repo name
  assetPrefix: "nextportfolio",
};

module.exports = nextConfig;
