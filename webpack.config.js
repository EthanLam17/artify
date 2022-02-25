var path = require('path')

module.exports = {
    entry: "./frontend/artify.jsx",
    output: {
        path: path.resolve(__dirname, 'app', 'assets'),
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['.js', '.jsx', '*']
      },

      devtool: 'source-map',


      module: {
        rules: [
          {
            test: [/\.jsx?$/], // Specifies file types to transpile
            exclude: /(node_modules)/, // Leaves dependencies alone
            loader: 'babel-loader', // Sets Babel as the transpiler
            options: {
              presets: ['@babel/env', '@babel/react'] // Tells Babel what syntaxes to translate
            }
          }
        ]
      }

}