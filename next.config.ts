module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://54.166.88.26:8000/:path*',
      },
    ];
  },
};
