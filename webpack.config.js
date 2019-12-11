// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebPackPlugin = require('html-webpack-plugin')
// const path = require('path');

module.exports = {
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
}
