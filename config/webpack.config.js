const packageJSON = require('../package.json');
const path = require('path');
const webpack = require('webpack');
const WebpackStrip = require('strip-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');
const settings = require('./settings');

// To use in dev env use default system envs
// To use in PROD set NODE_ENV, API_ENV and PORT environments

const NODE_ENV = process.env.NODE_ENV || 'development';
const SERVER_RENDER = process.env.SERVER_RENDER === 'true'; // TODO
const PRODUCTION_BUILD = NODE_ENV === 'production';
const PRODUCTION_API = process.env.API_ENV === "production";

const PATHS = {
  build: path.join(__dirname, '..', 'dist')
};

if (PRODUCTION_API) {
  api_url = settings.api.url + ":" + settings.api.port;
} else {
  api_url = settings.dev_api.url + ":" + settings.dev_api.port;
}

const extractSass = new ExtractTextPlugin({
  filename: "[name]-[contenthash].css",
  allChunks: true,
  disable: !PRODUCTION_BUILD
});

const plugins = [
  new HtmlWebpackPlugin({title: 'Web communicator Home', template: 'app/index.html', chunks: ['home-index'], filename: 'index.html'}),
  new HtmlWebpackPlugin({title: 'Web communicator App', template: 'app/index.html', chunks: ['communicator/communicator-index'], filename: 'communicator/index.html'}),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    },
    API_URL: JSON.stringify(api_url)
  }),
  extractSass
];

const standardModuleLoaders = {
  loaders: [
    {
      enforce: 'pre',
      test: /\.js|.jsx$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        emitWarning: true
      }
    }, {
      test: /\.js|.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          'es2015', 'react', "stage-0"
        ],
        plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-object-assign', 'babel-plugin-styled-components']
      }
    }, {
      test: /\.scss|.css$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: PRODUCTION_BUILD,
              importLoaders: 1
            }
          },
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      })
    }, {
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

if (PRODUCTION_BUILD) {
  console.log("this is PRODUCTION_BUILD");
  standardModuleLoaders.loaders.push({
    test: /\.js|.jsx$/,
    // list of functions that should be removed
    loader: WebpackStrip.loader('console.log')
  });
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin(), new webpack.optimize.UglifyJsPlugin({
    compress: {
      comparisons: true,
      conditionals: true,
      dead_code: true,
      drop_console: !SERVER_RENDER, // Keep server logs
      drop_debugger: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      screw_ie8: true,
      sequences: true,
      unused: true,
      warnings: false
    },
    output: {
      comments: false
    }
  }));
} else {
  plugins.push(new DashboardPlugin(), new webpack.NamedModulesPlugin(), new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());
}

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
      publicPath: `http://localhost:3000/`,
      proxy: {
        '/rest': {
          target: '/api',
          // target: 'http://localhost:8080',
          secure: false,
          changeOrigin: true,
          headers: {
            "User-Agent": "Webpack-dev-server"
          }
        }
      }
    }
  }
];
