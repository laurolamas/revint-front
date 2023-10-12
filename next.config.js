/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storagerevint.blob.core.windows.net",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

// https://storagerevint.blob.core.windows.net/images/image1697041769458.jpg
