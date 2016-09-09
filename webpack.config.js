var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          include: projectRoot,

        },
        {
          test: /\.json$/,
          include: path.join(__dirname, 'node_modules', 'pixi.js'),
          loader: 'json'
        },
      ]
    }
};
