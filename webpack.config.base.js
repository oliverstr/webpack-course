const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                        ['@babel/preset-env', { // Transpile ES6 to older JS
                            targets: [ // Removes the polyfills that are not necessary to newer browsers
                                'last 2 versions', // These strings are used as queries in npx browserlist
                                'not dead',
                                'not < 2%', // Not less than 2% of market share
                                'not ie 11'
                            ],
                            useBuiltIns: 'entry'
                        }], 
                        '@babel/preset-react' // Transpile JSX to JS
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties', // Allow properties inside js classes
                        '@babel/plugin-syntax-dynamic-import' // Allow code split
                    ]
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