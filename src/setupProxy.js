const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/onsite-services/shop/collection/external?',
    createProxyMiddleware({
        target: 'https://api.sendo.vn',
        changeOrigin: true
    })
  );

  app.use(
    '/product/filter?',
    createProxyMiddleware({
        target: 'https://shop-home.sendo.vn/api/v1',
        changeOrigin: true
    })
  );

  app.use(
    '/full',
    createProxyMiddleware({
        target: 'https://detail-api.sendo.vn',
        changeOrigin: true
    })
  )

  app.use(
    '/product',
    createProxyMiddleware({
        target: 'https://ratingapi.sendo.vn',
        changeOrigin: true
    })
  )
};