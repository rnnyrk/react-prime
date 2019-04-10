import * as path from 'path';
import * as webpack from 'webpack';
import * as devServer from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import globals from '../config/globals';
import { merge } from './webpack.config.base';

const devConfig: devServer.Configuration = merge({
  mode: 'development',
  entry: {
    app: [
      '@babel/polyfill',
      path.resolve('src'),
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals),
  ],
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    hot: true,
    stats: 'minimal',
    historyApiFallback: true,
  },
});

module.exports = devConfig;
