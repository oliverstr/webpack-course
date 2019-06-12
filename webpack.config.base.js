const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js', // Application initial file
    output: {
        path: path.join(__dirname, 'dist'), // output path
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Select all js files
                loader: 'babel-loader', // conects to babel loader to use transpiler
                exclude: /node_modules/, // ignores node_modules
                options: {
                    presets: [
                        '@babel/preset-env', // Transpile ES6 to older JS
                        '@babel/preset-react' // Transpile JSX to JS
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties'] // Allow properties inside js classes
                }
            },
            {
                test: /\.css$/,
                use: [ // use is the same as loader but allows for an array of loaders
                    'style-loader', //allows to import .css files
                    'css-loader'
                ],
                exclude: /node_modules/, // ignores node_modules
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ // The plugin outputs a html file index.html
        template: './src/index.html'  // Sets the template for the outputed file
    })]
}