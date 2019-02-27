/* tslint:disable no-console */
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.config.dev');

const port = Number(process.env.PORT) || 3000;

const app = express();
const compiler = webpack(config);

const middleware = webpackMiddleware(compiler, {
  logLevel: 'error',
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  const htmlBuffer = middleware.fileSystem.readFileSync(`${config.output.path}/index.html`);
  res.send(htmlBuffer.toString());
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
