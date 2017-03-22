const webpack = require('webpack');
const {
  resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.npm_lifecycle_event === 'start';

const app = resolve(__dirname, 'src/index.js');
const style = resolve(__dirname, 'src/css/main.scss');
const build = resolve(__dirname, 'docs');

const pkg = require('./package.json');

const babelConfig = Object.assign({}, pkg.babel, {
  babelrc: false,
  cacheDirectory: IS_DEV,
  presets: pkg.babel.presets.map(key => key === 'latest' ? ['latest', {
    es2015: {
      modules: false
    }
  }] : key)
});

let stylesLoader = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      config: './postcss.config.js'
    }
  },
  'sass-loader',
];

if (!IS_DEV) {
	const fallback = stylesLoader.shift();

	stylesLoader = ExtractTextPlugin.extract({
		fallback,
		use: stylesLoader
	});
}


const config = {
  devtool: IS_DEV ? 'eval-source-map' : 'source-map',
  entry:{
    app:[
      app
    ],
    style:style
  },
  output: {
    path: build,
    filename: IS_DEV ? '[name].js' : '[name].[chunkhash].js',
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
      use:stylesLoader
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      title: '应祺的简介',
      appMountId: 'app',
      inject: false,
      favicon:'./favicon.png'
    })
  ]
}

if (IS_DEV) {
  config.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
  }
  babelConfig.plugins.unshift('react-hot-loader/babel');
  config.entry.app.unshift('react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server');
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  config.plugins.push(new CleanWebpackPlugin([build], {
    root: process.cwd()
  }));
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: [['react', 'react-dom'], 'manifest'],
    minChunks: Infinity
  }));
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true
  }));
  config.plugins.push(new ExtractTextPlugin('[name].[chunkhash].css'));
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
    }
  }));
}

module.exports = config;
