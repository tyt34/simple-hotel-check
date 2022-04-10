const { proxy } = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    proxy('/endpoint', {
      target: "http://engine.hotellook.com",
      changeOrigin: true
    })
  )
  console.log(' - - - -> ')
}
