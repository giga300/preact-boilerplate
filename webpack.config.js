const path = require('path')

const config = {
    mode: 'development',
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            'create-react-class': 'preact-compat/lib/create-react-class'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: ['babel-loader'],
                exclude: [/node_modules/]
            }
        ]
    }
}

module.exports = config