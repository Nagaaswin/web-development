const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  //devServer: {
  //       contentBase: './'
  //   }
  /*tools for viewing page source as how u written it. */
  devtool: 'cheap-source-map',
  plugins: [new cleanPlugin.CleanWebpackPlugin()],
};
