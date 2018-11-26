const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, options) => {
    const devMode = options.mode !== 'production';
    return {
        entry: './src/js/script.js',
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, 'dist')
        },
        mode: "production",
        devtool: devMode ? "source-map" : "",
        plugins: [
            new MiniCssExtractPlugin({
                filename: "style.css"
            }),
            new OptimizeCssAssetsPlugin({})
        ],
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },{
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    "sass-loader"
                ]
            },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }

            ]},
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        }
    }
};