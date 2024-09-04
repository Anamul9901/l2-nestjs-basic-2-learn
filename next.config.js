/**
 * 1: file er nam sele 'next.config.mjs' aita change kore deye 'next.config.js' dete hobe
 * 2: necer line export default change kore module.exports dete hobe
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // je je host name debo only se se host er imag suport korbe
    // domains: ["nextjs.org"],  

    // remote er maddome https er jekonu host er image support krbe
    remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
  },
};

// export default nextConfig;
module.exports = nextConfig;
