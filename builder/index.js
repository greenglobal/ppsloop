// builder tools
// @ndaidong

var path = require('path');

var debug = require('debug');
var info = debug('rst:info');

var chokidar = require('chokidar');

const SOURCE = path.join(__dirname, '../src');
const DIST = path.join(__dirname, '../dist');

var setup = require('./setup');
var build = require('./build');

var start = () => {
  setup(SOURCE, DIST);
  build(SOURCE, DIST);
};

var debounce = (func, wait) => {
  let timeout;
  return function _debounce(...args) {
    let context = this; // eslint-disable-line
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
};

var watch = () => {
  info('Start watching...');
  let watcher = chokidar.watch(SOURCE, {
    persistent: true
  });

  let fn = debounce(start, 1000);
  watcher
    .on('add', fn)
    .on('change', fn)
    .on('unlink', fn);
};

module.exports = {
  start,
  watch
};
