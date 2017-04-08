// builder tools
// @ndaidong

var path = require('path');

var debug = require('debug');
var info = debug('pps:info');

var chokidar = require('chokidar');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

const SOURCE = path.join(__dirname, '../src');
const DIST = path.join(__dirname, ENV === 'production' ? '../docs' : '../dist');

var setup = require('./setup');
var build = require('./build');
var RM = require('./RM');

var start = () => {
  setup(`${SOURCE}/consumer`, DIST);
  build(`${SOURCE}/consumer`, DIST);
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
  RM.update();
  info('Start watching...');
  let watcher = chokidar.watch(`${SOURCE}/widget`);

  let fn = debounce(RM.update, 1000);
  watcher
    .on('add', fn)
    .on('change', fn)
    .on('unlink', fn);
};

var prepare = () => {
  RM.prepare(ENV);
};

module.exports = {
  start,
  prepare,
  watch
};
