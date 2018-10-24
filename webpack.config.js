path = require("path");

module.exports = {
  mode: 'development',
  entry: ['./src/scripts/script.ts', './src/styles/style.scss'],
  output: {
    filename: 'script.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
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
