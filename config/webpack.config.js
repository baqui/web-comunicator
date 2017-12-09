const packageJSON = require('../package.json');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

const PATHS = {
  build: path.join(__dirname, '..', 'dist')
};

const plugins = [
  new HtmlWebpackPlugin({title: 'Web communicator Home', template: 'app/index.html', chunks: ['home-index'], filename: 'index.html'}),
  new HtmlWebpackPlugin({title: 'Web communicator App', template: 'app/index.html', chunks: ['communicator/communicator-index'], filename: 'communicator/index.html'}),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    },
    API_URL: JSON.stringify('localhost:3000')
  })
];

const standardModuleLoaders = {
  loaders: [
    {
      test: /\.js|.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          'es2015', 'react', "stage-0"
        ],
        plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-object-assign', 'babel-plugin-styled-components']
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'static/fonts/',
        name: '[name]-[hash].[ext]',
        emitFile: true
      }
    }, {
      test: /\.(png|jpg|svg|jpeg|gif)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'static/images/',
        name: '[name]-[hash].[ext]',
        emitFile: true
      }
    }
  ]
};

plugins.push(
  new webpack.NamedModulesPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = [
  {
    entry: {
      'home-index': './app/bundles/home-index.js',
      'communicator/communicator-index': './app/bundles/communicator-index.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: standardModuleLoaders,
    output: {
      path: PATHS.build,
      publicPath: '/',
      filename: '[name]-[hash].js'
    },
    plugins: plugins,
    devServer: {
      historyApiFallback: {
        rewrites: [
          {
            from: /^\/$/,
            to: '/index.html'
          }, {
            from: /^\/communicator/,
            to: '/communicator/index.html'
          }, {
            from: /./,
            to: '/index.html'
          }
        ]
      },
      port: 3000,
      publicPath: `http://localhost:3000/`
    }
  }
];
