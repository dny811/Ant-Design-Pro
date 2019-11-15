module.exports = (webpackConfig, env) => {
  // 别名配置
  webpackConfig.resolve.alias = {
    '@': `${__dirname}/src`,
    '@layouts': `${__dirname}/src/layouts`,
    '@pages': `${__dirname}/src/pages`,
    '@components': `${__dirname}/src/components`,
    '@utils': `${__dirname}/src/utils`,
    '@models': `${__dirname}/src/models`,
  }
  return webpackConfig
}