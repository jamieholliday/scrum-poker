module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'tests.webpack.js', watched: false },
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        reporters: ['dots'],
        autoWatch: true,
        webpack: {
            module: {
                loaders: [
                { 
                    test: /\.jsx?$/, 
                    exclude: /node_modules/, 
                    loader: 'babel-loader' 
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                }],
            },
            watch: true,
        },
        webpackServer: {
            noInfo: true,
        },
        //browsers: ['Chrome']
    });
};