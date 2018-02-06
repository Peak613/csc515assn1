const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
    env = env || {};
    
    return {
        entry: './src/fib.js',
        output: {
            path: path.resolve(__dirname,'dist'),
            filename: 'fibonacci.bundle.js'
        },
        plugins:[
            new HtmlWebpackPlugin()
        ]
    };
};