const path = require('path') // подключаемм плагин path
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
 
module.exports = {
    entry: {
        app: './src/index.js' 
    },
    output: {
        filename: '[name].js', 
        path: path.resolve(__dirname, './dist'), 
        publicPath: '/dist' 
    },
    devServer: {
        contentBase: this.devServer,
        overlay: true // показывает ошибки прямо вместе
    },
    
    module: {       // подключаем модули
        rules: [{   //правила для модулей
            test: /\.js$/,      //для всех js файлов
            loader: 'babel-loader',     //загрузчикам становится этот чел
            exclude: '/node_modules/'   //исключем эту шнягу чтоб не тормозить
        },{   
            test: /\.pug$/,      
            loader: 'pug-loader'         
        },{
            test: /\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },{
            test: /\.scss$/,
            use:[
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    options: {sourceMap: true}
                },{
                    loader:'sass-loader',
                    options: {sourceMap: true}
                }
            ]
            
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }]
        }
    ]},


    plugins:[
        new MiniCssExtractPlugin({
          filename: "[name].css"
        }),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': 'jquery',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/number-page.pug',
            filename: 'number-page.html'
        }),
        new CopyWebpackPlugin([
            { from: './src/fonts',  to: './fonts' },
            { from: './src/img', to: './img'}
        ]),
        new HtmlWebpackPlugin({
            template: './src/pages/welcome.pug',
            filename: 'welcome.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/review-page.pug',
            filename: 'review-page.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/register-page.pug',
            filename: 'register-page.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/login-page.pug',
            filename: 'login-page.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/ui-kit/colors.pug',
            filename: 'colors.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/ui-kit/cards.pug',
            filename: 'cards.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/ui-kit/headers-and-footers.pug',
            filename: 'headers-and-footers.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/ui-kit/Form-elements.pug',
            filename: 'Form-elements.html'
        }),
    ],

    resolve: {                                                                              // шооооок че вытворяет аж карусель заработала
        modules: ['node_modules'],
        alias: {
          'owl.carousel': 'owl.carousel/dist/owl.carousel.min.js'
        }
    }
}