const  path = require('path');
const webpack = require('webpack');//热更新对象第二步，
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:"bundle.js"
    },
    module:{
    //     //配置所有第三方loader模块的
        rules: [
            {test:/\.vue$/,use:'vue-loader'},
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=1627&name=[hash:8]-[name].[ext]']},//处理图片路径的loader
            {test:/\.(eot|ttf|svg|woff|woff2)$/,use:'url-loader'}, //处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    plugins:[//配置插件的节点
        new webpack.HotModuleReplacementPlugin(),//热更新对象第三步
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),//模板路径，
            filename: "index.html"//自动生成HTML文件名称
        }),
        new VueLoaderPlugin(),
    ],
    // dev:{
    //     // env:require('./dev.env')
    //     assetsSubDirectory:'static',
    //     assetsPublicPath:'/',
    //     proxyTable:{
    //         '/api':{
    //             target:'http',//域名
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '^api':''
    //             }
    //         }
    //     }
    // }
    // resolve: {
    //     alias: {//设置vue被导入包的路径
    //         // "vue$":"vue/dist/vue.js"
    //     }
    // }

};