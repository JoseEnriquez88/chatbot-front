module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://18.118.162.255:8000/:path*',
      },
    ];
  },
};
