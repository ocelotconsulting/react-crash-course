const webpack = require('webpack')
const fs = require('fs')

// this is designed for development only... not a production-worthy webpack config

const defaultBabelConfig = JSON.parse(fs.readFileSync('.babelrc', {encoding: 'utf8'}))

// resources used by bootstrap or font-awesome
// will be emitted as 'files' by the dev middleware
const cssResources = [
  'eot',
  'ttf',
  'woff',
  'woff2',
  'svg',
  'jpg',
  'png',
  'gif'
]

const rules = (() => {
  // webpack 2 resolves es2015 imports
  const presets = [
    ['es2015', {modules: false}]
  ].concat(defaultBabelConfig.presets.filter(v => v !== 'es2015'))

  const result = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: Object.assign({}, defaultBabelConfig, {babelrc: false, presets})
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.scss/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]

  cssResources.forEach(extension =>
    result.push({
      test: new RegExp(`\\.${extension}$`),
      loader: 'file-loader'
    })
  )

  return result
})()

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {rules},
  devtool: 'cheap-inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
}
