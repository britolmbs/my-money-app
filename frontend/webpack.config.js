const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Ponto de entrada do aplicativo
    entry: './src/index.jsx',

    // Configurações de saída do bundle
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        clean: true, // Limpa a pasta de saída antes de gerar novos arquivos
    },

    // Modo de desenvolvimento
    mode: 'development',

    // Configurações do Dev Server
    devServer: {
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        hot: true,
        historyApiFallback: true, // Para suportar o React Router
    },

    // Resolução de módulos
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: path.resolve(__dirname, 'node_modules'),
            jquery: path.resolve(__dirname, 'node_modules/admin-lte/plugins/jQuery/jquery-4.0.0-beta3.min.js'),
            bootstrap: path.resolve(__dirname, 'node_modules/admin-lte/bootstrap/js/bootstrap.js'),
        },
    },

    // Plugins
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ],

    // Regras para os loaders
    module: {
        rules: [
            {
                // Loader para Babel
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                    },
                },
            },
            {
                // Loader para CSS
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                // Loader para fontes e imagens
                test: /\.(woff|woff2|ttf|eot|svg|png|jpg)$/,
                type: 'asset/resource',
            },
        ],
    },
};