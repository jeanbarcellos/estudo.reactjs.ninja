'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  const preloaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use.loader
  })

  newConfig.module.preLoaders = (newConfig.module.rules || []).concat(preloaders)
  newConfig.resolve = common.resolve

  return newConfig
}
