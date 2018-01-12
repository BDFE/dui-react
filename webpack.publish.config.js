const path = require('path'); // 导入路径包
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin') //webpack插件，用于清除目录文件

module.exports = {
    entry: "./index.js",
    output: {
        // path: path.resolve(__dirname, 'dist'), // 指定打包之后的文件夹
        // publicPath: 'src/static/images', //指定资源文件引用的目录
        // filename: 'bundle.js' // 指定打包为一个文件 bundle.js
        filename: 'lib/index.js' // 可以打包为多个文件
    },
    // devtool: 'eval-source-map',
    module: {
        /* 在webpack2.0版本已经将 module.loaders 改为 module.rules 为了兼容性考虑以前的声明方法任然可用，同时链式loader(用!连接)只适用于module.loader
        同时-loader不可省略 */
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.js[x]?$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react', //此处不能用use，不知道为啥
                exclude: /node_modules/ //需要排除的目录
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            // modules: true // 设置css模块化,详情参考https://github.com/css-modules/css-modules
                        }
                    }, {
                        loader: 'postcss-loader',
                        // 在这里进行配置，也可以在postcss.config.js中进行配置，详情参考https://github.com/postcss/postcss-loader
                        options: {
                            config: {
                                path: 'postcss.config.js'
                            },
                            // plugins: function () {
                            //     return [
                            //         require('postcss-import')(),
                            //         require('precss')(),
                            //         require('autoprefixer')(),
                            //         require('postcss-assets')({
                            //             // loadPaths: ['**'], // ** 表示当前路径下所有文件夹和文件进行搜索。
                            //             loadPaths: ['src/static/images/', '/src/static/images/', '.static/images/']
                            //         }),
                            //         require('postcss-inline-svg')(),
                            //         // require('postcss-hash-classname')({
                            //         //     // hashType: 'md5',
                            //         //     // digestType: 'base32',
                            //         //     // maxLength: 6,
                            //         //     // outputName: 'yoyo',
                            //         //     // dist: 'dist',
                            //         //     // type: '.js'
                            //         // })
                            //     ];
                            // }
                        }
                    }]
                })
            }, {
                test: /\.styl(us)?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader: "postcss-loader",
                    }, 'stylus-loader']
                })
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     loader: 'url-loader?limit=8192&name=images/[name].[ext]', //此处不能用use，不知道为啥
            //     exclude: /node_modules/ //需要排除的目录
            // }, {
            //     test: /\.svg/,
            //     loader: 'svg-url-loader&name=images/[name].[ext]',
            //     exclude: /node_modules/ //需要排除的目录
            // },
            // {
            //     test: /\.scss/,
            //     // loader: 'style-loader!css!sass'
            //     use: ['style-loader','css-loader','sass-loader']
            // },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // sourceMap: true,
                            // modules: true,
                            // localIdentName: '[local]_[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js' // 这个得在项目根目录创建此文件
                            }
                        }
                    },
                ]
            },
        ]
    },

    // 配置devServer各种参数
    devServer: {
        contentBase: "./", // 本地服务器所加载的页面所在的目录
        hot: true, // 配置HMR之后可以选择开启
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
    // postcss: function plugins(bundler) {
    //     return [
    //         require('postcss-import')({
    //             addDependencyTo: bundler
    //         }),
    //         require('precss')(),
    //         require('autoprefixer')({
    //             browsers: AUTOPREFIXER_BROWSERS
    //         }),
    //     ];
    // },
    plugins: [
        new CleanPlugin(['build']),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors' // 将公共模块提取，生成名为`vendors`的chunk
        // }),
        // new webpack.optimize.UglifyJsPlugin({ //压缩js代码
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ExtractTextPlugin('[name].css')
    ]
};