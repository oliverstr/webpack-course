const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'bundle_sizes.html'
        })
    ],
    externals: { // Remove these libraries from the main bundle to be imported as a CDN in the index.html template
        react: 'React',
        'react-dom': 'ReactDOM'
    }
})