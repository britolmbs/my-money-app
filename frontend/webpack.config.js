const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // O ponto de entrada do seu app
  entry: './src/index.jsx',

  // A saída do bundle (arquivo final)
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },

  // Configurações do modo de desenvolvimento e servidor
  mode: 'development',
  devServer: {
    port: 8080,
    static: path.resolve(__dirname, 'public'), // No Webpack 5, substitui contentBase.
    hot: true
  },

  // Resolve extensões e cria apelidos (aliases) se precisar
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, 'node_modules'),
      jquery: path.resolve(__dirname, 'node_modules/admin-lte/plugins/jQuery/jquery-4.0.0-beta3.min.js'),
      bootstrap: path.resolve(__dirname, 'node_modules/admin-lte/bootstrap/js/bootstrap.js'),
    }
  },

  // Plugins (trocar ExtractTextPlugin pelo MiniCssExtractPlugin)
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ],

  module: {
    rules: [
      {
        // Babel: converte .js ou .jsx
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Presets atualizados para Babel 7+
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        // CSS: extrair para arquivo via MiniCssExtractPlugin
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        // Fontes e imagens (asset modules no Webpack 5)
        test: /\.(woff|woff2|ttf|eot|svg|png|jpg)$/,
        type: 'asset/resource'
      }
    ]
  }
};