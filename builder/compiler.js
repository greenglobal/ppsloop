
var csspostify = require('./csspostify');

var jsrollupify = require('./jsrollupify');

var css = () => {
  return csspostify([
    'main.css'
  ], './src/widget/');
};

var js = () => {
  return jsrollupify(
    'main.js',
    [
      'polyfills/array.from.js',
      'polyfills/array.includes.js',
      'polyfills/string.endsWith.js'
    ],
    './src/widget/'
  );
};

module.exports = {
  css,
  js
};

