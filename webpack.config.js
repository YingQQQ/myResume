const webpack = require('webpack');
const {
  resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event
const development = TARGET === 'start';

const app = resolve(__dirname, 'src/index.js');
const build = resolve(__dirname, 'dist');

const pkg = require('./package.json');

const babelConfig = Object.assign({}, pkg.babel, {
  babelrc: false,
  cacheDirectory: development,
  presets: pkg.babel.presets.map(key => key === 'latest' ? ['latest', { es2015: { modules: false } }] : key)
});

const postcssConfig = () => ({
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
    })
  ]
});

const config = {
  devtool: development ? 'eval-source-map' : 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    app
  ],
  output: {
    path: build,
    filename: development ? '[name].js' : '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: resolve(__dirname, './src'),
      loader: 'babel-loader',
      options: babelConfig
    }, {
      test: /\.s?css$/,
      use: [{
          loader: 'style-loader'
      }, {
          loader: 'css-loader'
      }, {
          loader: 'postcss-loader',
          options: {
            config: './postcss.config.js'
          }
      },{
        loader: 'sass-loader'
      }]
    },{
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    },{
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: require('html-webpack-template'),
       title: '应祺的简介',
       appMountId: 'app',
       inject: false
     })
  ]
}

if (development) {
  config.devServer = {
     historyApiFallback: true,
     hot: true,
     inline: true,
     stats: 'errors-only',
  }
  babelConfig.plugins.unshift('react-hot-loader/babel');
  config.entry.unshift('react-hot-loader/patch');
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}else if (TARGET === 'build') {
  config.plugins.push(new CleanWebpackPlugin([build], {
    root: process.cwd()
  }));
}

module.exports = config;
