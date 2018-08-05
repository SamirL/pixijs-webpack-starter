var path = require('path')
var webpack = require('webpack')

var projectRoot = path.resolve(__dirname, '../')
var pixiModule = path.join(__dirname, '/node_modules/pixi.js/')

let config = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src') },
        { test: /\.json$/, include: path.join(__dirname, 'node_modules', 'pixi.js'),loader: 'json'},
        //We expose the non minified pixi file as a global. The minified one was not working with our solution
        { test: pixiModule, loader: 'expose?pixi' },
      ],
    },
    resolve: {
      alias: {
        'pixi': pixiModule,
      }
    }
};

module.exports = config
