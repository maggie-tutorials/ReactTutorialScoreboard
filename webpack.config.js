module.exports = {
  entry: './app.js',

  output: {
    // path: 'build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
};
