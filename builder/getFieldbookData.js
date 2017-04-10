// getFieldbookData

var fs = require('fs');
var fetch = require('node-fetch');

var debug = require('debug');
var info = debug('pps:info');
var error = debug('pps:error');

var writeFile = require('./writeFile');

const DATA_SOURCE = 'https://fieldbookcode.com/58dc7b4195b7800300c2f7f3/list';
// const DATA_SOURCE = 'https://fieldbookcode.com/58dc7b4195b7800300c2f7f3/list-filter';
const DOWNLOAD_AS = './src/data.json';

var getFieldbookData = () => {
  if (fs.existsSync(DOWNLOAD_AS)) {
    info(`No need to download! ${DOWNLOAD_AS} is already.`);
    return false;
  }
  info(`Start fetching ${DATA_SOURCE}`);
  return fetch(DATA_SOURCE).then((res) => {
    info('Retrieved remote data.');
    return res.json();
  }).then((data) => {
    info('Write to disk.');
    return writeFile(DOWNLOAD_AS, JSON.stringify(data));
  }).catch((err) => {
    error(`Error while fetching ${DATA_SOURCE}`);
    error(err);
    return false;
  });
};

module.exports = getFieldbookData;
