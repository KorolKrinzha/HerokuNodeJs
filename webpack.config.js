var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
    
  },
  output: {
    publicPath: '',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /img/,
        loader: 'url'
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: './index.html'
    }]),
    
      ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 5000
  }
};