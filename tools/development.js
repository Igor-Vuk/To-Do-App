'use strict';
/*eslint-disable no-console*/

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config.dev';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: 'public/',
  hot: true,
  inline: true,
  quiet: false,
  historyApiFallback: true,
  proxy: {
    '*' : 'http://localhost:3000'
  }
}).listen(9000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:9000/');
});
