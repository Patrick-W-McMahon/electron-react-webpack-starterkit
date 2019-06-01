const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = `${__dirname}/build`;
const APP_DIR = `${__dirname}/src`;

const config = {
    target: "electron-main",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    entry: `${APP_DIR}/renderer_process.js`,
    output: {
        path: BUILD_DIR,
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include : APP_DIR,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Electron React Webpack Starterkit',
            template: `./templates/index.hbs`
        }),
        new CopyWebpackPlugin([
            {from:'public',to:'.'} 
        ]),
        
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })        
    ],
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }
}
module.exports = config;