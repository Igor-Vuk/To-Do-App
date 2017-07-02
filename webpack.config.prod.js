import webpack from 'webpack';

export default {
  devtool: 'source-map',
  noInfo: true,
  entry: [
    'babel-polyfill',
    'isomorphic-fetch',
    `${__dirname}/app/index.js`
  ],
  output: {
    path: `${__dirname}/public/dist`,
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components'
    ],
    alias: {
      actions: 'app/actions/index.js',
      reducers: 'app/reducers/index.js',
      configureStore: 'app/store/configureStore.js'
    },
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      },
      comments: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: `${__dirname}/app`,
        loaders: ['babel']
      },
      {
        test: /(\.css|\.scss)$/,
        include: `${__dirname}/app`,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  }
};
