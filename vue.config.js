module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/2021vue3-resume/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "~@/assets/css/_variable.scss";`
        }
      }
    }
}