var path = require('path');

module.exports = {
    entry: {
        Index: './src/index.js',
        Heading: './src/types/Heading.js',
        HeadingWithDescription: './src/types/HeadingWithDescription.js'
    },
    output: {
        path: path.resolve(__dirname, 'types'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ]
    },
};