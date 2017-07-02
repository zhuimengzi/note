module.exports = {
    entry: './app.js',
    output: {
        filename: './src/bunder.js'
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.js$/, use: ['babel-loader']}
        ]
    }
};