

module.exports = {
    mode : 'development',
    entry: './src/entry.js',
    output : {
        path : __dirname+'/public/',
        filename : 'bundle.js'
    },
    module: {
        rules: [  //webpack ver2에서부터 loaders가  rules로 교체
            {
                test : /\.css$/,
                // loader: 'style!css'
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};