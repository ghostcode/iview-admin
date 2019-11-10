const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack:config => {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('@c',resolve('src/components'))
  },
  devServer:{
    proxy:{
      '^/api':{
        'target':'process.env.VUE_APP_ZUUL',
        'changeOrigin':true,
        'ws':true,
        'pathRewrite':{
          '^/api':'',
        }
      }
    }
  }
}