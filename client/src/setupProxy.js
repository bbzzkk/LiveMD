const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/chat', {
      target: 'http://chat-test.live-md.com:8000',
      changeOrigin: true,
      ws: true,
    }),
  );

  app.use(
    createProxyMiddleware('/room/*', {
      target: 'http://localhost:8000/',
      changeOrigin: true,
      ws: true,
    }),
  );
};
