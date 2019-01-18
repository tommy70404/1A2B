var path = require('path');

module.exports = {
    entry: {
        App:"./app/assets/scripts/App.js"
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,"./app/temp/scripts"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
            }
        ]
    }
}