const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/cjs/handlebars',
        }
    },
    
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'underscore',
        }),
    ]
}