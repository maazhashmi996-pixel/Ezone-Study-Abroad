/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: agar aapka domain sub-path mein hai, toh 'basePath' use karein
  // basePath: '/my-project', 

  // Images ke liye (Static export mein 'next/image' optimization limit hoti hai)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;