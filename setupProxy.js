const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("", {
      target: "https://detail-api.sendo.vn",
      changeOrigin: true,
    })
  );
};
