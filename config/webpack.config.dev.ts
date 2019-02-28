import * as path from 'path';
import * as webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { merge } from './webpack.config.base';
import globals from '../config/globals';

const devConfig: webpack.Configuration = merge({
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true&noInfo=true',
      '@babel/polyfill',
      path.resolve('src'),
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals),
  ],
});

module.exports = devConfig;
