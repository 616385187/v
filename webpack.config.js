const path = require('path');

module.exports = {
    entry:__dirname+'/src/index.js',// __dirname 或者 ../..
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
}