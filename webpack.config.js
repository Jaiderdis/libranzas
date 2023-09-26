const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    bundle: './entry.js',
    'bundle.min': './entry.js'
  },
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false // Eliminar comentarios
          },
          mangle: {
            // Ofuscar nombres de variables y funciones
            properties: true
          }
        }
      })
    ]
  }
//   minimizer: [
//     new webpack.optimize.UglifyJsPlugin({
//       uglifyOptions: {
//         warnings: false,
//         parse: {},
//         compress: {},
//         mangle: true, // Note `mangle.properties` is `false` by default.
//         output: null,
//         toplevel: false,
//         nameCache: null,
//         ie8: false,
//         keep_fnames: false
//       }
//     })
//   ]
}
