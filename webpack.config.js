const path = require('path');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: './app/app.module.js',
  output: {
    path: path.resolve('./dist/js/'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.html'],
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: [
          {
            loader: 'ng-annotate-loader',
            options: {
              ngAnnotate: "ng-annotate-patched",
              es6: true,
              explicitOnly: false
            },
          }
        ],
      },
      {
        test: /\.html$/,
        use: [
          { loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './app')) },
          { loader: 'html-loader' }
        ]
      }
    ]
  },
  devtool: "source-map",

}
