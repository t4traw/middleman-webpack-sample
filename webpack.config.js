const webpack = require('webpack');
module.exports = {
  entry: [
    './source/javascripts/site.js'
  ],
  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
    ]
  }
};
