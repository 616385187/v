const path = require('path');

const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    entry:__dirname+'/src/index.js',// __dirname 或者 ../..
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //解析vue后缀文件
            {test: /\.vue$/, loader: 'vue-loader'},
            //用巴babel解析js文件 排除模块安装目录的文件
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}