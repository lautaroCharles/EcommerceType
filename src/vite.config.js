const proxyPlugin = require('vite-plugin-proxy')
 
module.exports = {
  plugins: [
    proxyPlugin({
      '/api': {
        // for option docs see https://github.com/chimurai/http-proxy-middleware#options
        target: 'http://localhost:9000',
        resolve: {
          alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
          ],
        },
        changeOrigin: true,
        onProxyRes: (proxyRes) => {
          // cache all responses for faster development
          // use browser's "Disable cache" in dev tools when you need to update API responses
          proxyRes.headers['Cache-Control'] = `public, max-age=${ONE_YEAR_IN_SECONDS}`
          // delete headers you don't want
          delete proxyRes.headers['expires']
        },
      },
    }),
  ],
}