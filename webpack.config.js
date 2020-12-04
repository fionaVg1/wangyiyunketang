const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const { webpack } = require('webpack');
module.exports = {
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:__dirname+'/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:''
        })
    ]
};