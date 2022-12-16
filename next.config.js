/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "*.storytel.com",
        protocol: "https"
      }
    ]
  }
};
