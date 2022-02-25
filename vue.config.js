module.exports = {
    devServer: {
      proxy: {
        '/api':{
          "target":'http://192.168.45.200:8080',
          "pathRewrite":{'^/api':''},
          "changeOrigin":true,
          "secure":false
        }
      }
    }
  }