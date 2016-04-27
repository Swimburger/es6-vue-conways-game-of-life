// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/es6-vue-conways-game-of-life/',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}
