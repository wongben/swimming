const webpack = require('atool-build/lib/webpack');
const pxtorem = require('postcss-pxtorem');

module.exports = function(webpackConfig, env) {
  webpackConfig.babel.plugins.push('transform-runtime');
  // Support AntDesign Mobile CSS
  webpackConfig.babel.plugins.push(['import', {
    style: true,
    libraryDirectory: 'lib',
    libraryName: 'antd-mobile',
  }]);
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));

  // Support hmr
  if (env === 'development') {
    webpackConfig.devtool = '#eval';
    webpackConfig.babel.plugins.push('dva-hmr');
  } else {
    webpackConfig.babel.plugins.push('dev-expression');
  }

  // Don't extract common.js and common.css
  webpackConfig.plugins = webpackConfig.plugins.filter(function(plugin) {
    return !(plugin instanceof webpack.optimize.CommonsChunkPlugin);
  });

  //配置API环境变量
  // var apiHost;
  // switch (env){
  //   case 'develop':
  //     apiHost = 'http://develop:8989/api';
  //     break;
  //   case 'production':
  //     apiHost = 'http://production:8989/api';
  //     break;
  //   default:
  //     apiHost = 'http://default:8989/api';
  // }
  // webpackConfig.plugins.push(new webpack.DefinePlugin({
  //   __API__: apiHost
  // }));
  // Support CSS Modules
  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.less$/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.less$/;
    }
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.css$/;
    }
    if (loader.test.toString() === '/\\.module\\.css$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.css$/;
    }
  });

  // const resolve = {
  //   modulesDirectories: ['node_modules', require('path').join(__dirname, '../node_modules')],
  //     extensions: ['', '.web.js', '.js', '.json'],
  // }
  // webpackConfig.resolve = resolve;

  return webpackConfig;
};
