/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-05-28 14:55:20
 * @LastEditTime: 2020-06-01 16:05:03
 */
var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    //确定调试状态下代码的位置
    devtool: '#eval-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    devServer: {
        port: 3232,
        historyApiFallback: true,
        overlay: true
    },
    //
    resolve: {

        alias: {
            //vue配置
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module: {
        //webpack默认只支持js的模块化，如果需要把其他文件也当成模块引入，就需要相对应的loader解析器
        //npm i node-sass css-loader vue-style-loader sass-loader --save-dev
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            //es6转码--exclude表示忽略node_modules文件夹下的文件，不用转码
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            //图片资源
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    // 默认值是 true，需要手动改成 false 不加会出现src="[object Module]"这是因为file-loader默认采用ES模块语法，即import '../image.png'；
                    //然而Vue生成的是CommonJS模块语法，即require('../image.png')；二者不一致。要么让file-loader或url-loader采用CommonJS语法，要么让Vue采用ES语法。
                    //链接：https://www.jianshu.com/p/0877ce441561
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            }
        ]
    }
};
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ])
}