// compiler

var postify = require('./postify');
var rollupify = require('./rollupify');

const ASSET_DIR = './src/widget/';

const CSS_FILES = [
  'main.css'
];

const JS_ENTRY = 'main.js';

var css = () => {
  return postify(CSS_FILES, ASSET_DIR);
};

var js = () => {
  return rollupify(`${ASSET_DIR}${JS_ENTRY}`);
};

module.exports = {
  css,
  js
};
