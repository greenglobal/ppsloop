
var csspostify = require('./csspostify');

var jsrollupify = require('./jsrollupify');

var css = () => {
  return csspostify([
    'vendor/ripple.min.css',
    'main.css'
  ], './src/widget/');
};

var js = () => {
  return jsrollupify(
    'main.js',
    [
      'vendor/array.from.js',
      'vendor/array.includes.js',
      'vendor/string.endsWith.js',
      'vendor/realdom.min.js',
      'vendor/siema.min.js'
    ],
    './src/widget/'
  );
};

module.exports = {
  css,
  js
};

