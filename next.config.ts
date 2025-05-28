// next.config.js (en la raíz, commiteado y versionado)
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',             // todas las llamadas que empiecen con /api/
        destination: 'http://18.118.162.255:8000/:path*',  
      },
    ];
  },
}
