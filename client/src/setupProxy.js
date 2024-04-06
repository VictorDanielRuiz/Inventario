const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://inventario-nine-tan.vercel.app/',
      changeOrigin: true,
    })
  );
}