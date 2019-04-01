import * as path from 'path';
import * as webpack from 'webpack';
import * as devServer from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import globals from '../config/globals';
import { merge } from './webpack.config.base';

const devConfig: webpack.Configuration & devServer.Configuration = merge({
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
    hot: true,
    port: Number(process.env.PORT) || 3000,
    stats: 'minimal',
    historyApiFallback: true,
  },
});

module.exports = devConfig;
