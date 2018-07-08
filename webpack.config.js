const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require(html-webpack-plugin);

module.exports = {
    mode:"production",
    entry:{
        main:"./index.js",
        man01:"./index01.js"
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:'[name].js'
    },
    module:{
        rules:[
            {test:/\.txt$/,use:'row-loader'},
            {test:/\.css$/,use:'css-loaser'},
            {test:/\.ts$/,use:'ts-loader'}
        ]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPluginu(),
        // new HtmlWebpackPlugin(template,"index.html")
    ],
    devServer:{
        contentBase:path.join(__dirname, './dist'),
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
    }
}