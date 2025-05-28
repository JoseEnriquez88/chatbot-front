/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "http://18.118.162.255:8000/chat",
      },
    ];
  },
};
module.exports = nextConfig;
