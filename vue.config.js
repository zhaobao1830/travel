const webpack = require('webpack')
const path = require('path')
const indexAppData = require('./mock/index.json')
const cityAppData = require('./mock/city.json')
const detailAppData = require('./mock/detail.json')

const devProxy = ['/api'] // 代理

let target = process.env.VUE_APP_URL

// 生成代理配置对象
let proxyObj = {}
devProxy.forEach((value, index) => {
  proxyObj[value] = {
    ws: false,
    target: target,
    // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
    changeOrigin: true,
    pathRewrite: {
      [`^${value}`]: ''
    }
  }
})

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    before (app) {
      app.get('/api/index', function (req, res) {
        res.json({
          errno: 0,
          data: indexAppData
        })
      })
      app.get('/api/city', function (req, res) {
        res.json({
          errno: 0,
          data: cityAppData
        })
      })
      app.get('/api/detail', function (req, res) {
        res.json({
          errno: 0,
          data: detailAppData
        })
      })
    },
    open: true,
    proxy: proxyObj
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])
  }
}
