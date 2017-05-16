// builder tools
// @ndaidong

var path = require('path');

var debug = require('debug');
var error = debug('pps:error');

var readFile = require('./readFile');
var writeFile = require('./writeFile');
var delFile = require('./delFile');

var compiler = require('./compiler');

var getFieldbookData = require('./getFieldbookData');
var generateJSON = require('./generateJSON');

const {version} = require(path.join(__dirname, '../package.json'));
const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

var setup = async () => {
  try {
    await getFieldbookData();
    await generateJSON();
  } catch (err) {
    error(err);
  }
  return false;
};

module.exports = {
  compiler,
  setup,
  readFile,
  writeFile,
  delFile,
  version
};
