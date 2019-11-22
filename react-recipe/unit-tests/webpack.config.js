const path = require('path');

let env = process.argv[process.argv.length - 1]



console.log(env)
module.exports = env = {
    entry: {
        polyfills: './js/core/polyfills/polyfills.js',
        index: ["@babel/polyfill", './js/core/build.js']
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, `dist/${env.split('--env=')[1]}/js`)
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};