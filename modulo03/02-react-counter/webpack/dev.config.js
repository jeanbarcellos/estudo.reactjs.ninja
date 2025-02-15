'use strict'

const webpack = require('webpack')

const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    common.entry.main
  ],

  output: Object.assign({}, common.output, {
    filename: '[name].js',
    publicPath: ''
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new HtmlPlugin(common.htmlPluginConfig)
  ],

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.cssLoader,
      common.fileLoader,
      common.urlLoader
    ]
  },

  resolve: common.resolve
}

/*
entry
    Ponto de entrada que indica qual módulo o webpack deve usar para iniciar a construção do gráfico interno de dependência.
    Ao definir um ponto de entrada, o webpack irá encontrar todas a dependências e fazer a importação.
    Por padrão o ponto de entrada é definido no arquivo ./src/index.js, mas é possível definir um arquivo diferente ou até
    mesmo múltiplos pontos de entrada no arquivo de configuração webpack.config.js.

Output
    A propriedade Output define o nome e local do pacote gerado pelo webpack.
    O diretório padrão é o ./dist e o arquivo ./dist/main.js.
    Para configurar, devemos definir um objeto output com as propriedades path e filename no arquivo de configuração do webpack:

*/
