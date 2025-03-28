import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

// const nextConfig: NextConfig = {
//   output: "export", // Enables static export
//   images: {
//     unoptimized: true, // Avoids Image Optimization issues on GitHub Pages
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'plus.unsplash.com',
//       },
//     ]
//   },
//   basePath: "/nextportfolio", // Change this to your repo name
//   assetPrefix: "/nextportfolio",
// };


module.exports = nextConfig;
