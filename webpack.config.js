const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['tsx', '.ts', '.js'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },
};
