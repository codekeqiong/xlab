/*
 * @Description: 设置代理
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/m', {
      target: 'http://op.goweike.cn',
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      https: true,
      ws: true, // proxy websockets
      // 重写接口路由
      pathRewrite: {
        '^/m': '',
      },
    }),
    createProxyMiddleware('/dbg', {
      target: 'http://dbg.lizhiweike.com',
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      https: true,
      ws: true, // proxy websockets
      // 重写接口路由
      pathRewrite: {
        '^/dbg': '',
      },
    }),
  );
};
