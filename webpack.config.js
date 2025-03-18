const path = require('path');

module.exports = {
  entry: './frontend/src/index.js',  // Entry point for React app
  output: {
    path: path.resolve(__dirname, './frontend/static/frontend'),
    filename: 'main.js',  // The bundled JS file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,  // Minimize for production
  },
  devtool: 'source-map',  // Generate source maps for debugging
  mode: 'development',    // Change to 'production' for production build
};