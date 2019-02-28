import * as path from 'path';
import * as webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';
import globals from './globals';
import { merge } from './webpack.config.base';

const prodConfig: webpack.Configuration = {
  name: 'client',
  entry: { app: ['@babel/polyfill', path.resolve('src')] },
  plugins: [
    new CopyWebpackPlugin([{ from: path.resolve('server/index.js'), to: 'server.js' }]),
    new webpack.DefinePlugin(globals),
    new GenerateSW({
      cacheId: 'prime',
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

export default merge(prodConfig);
