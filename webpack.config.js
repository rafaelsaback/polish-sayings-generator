path = require("path");

module.exports = {
  mode: 'development',
  entry: ['./src/scripts/script.js', './src/styles/style.scss'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: "source-map",
  devServer: {
      inline: true,
      contentBase: path.join(__dirname, 'dist'),
      port: 3000,
      open: true
  },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
