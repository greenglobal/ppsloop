// generateJSON

var path = require('path');

var debug = require('debug');
var info = debug('pps:info');
var error = debug('pps:error');

var writeFile = require('./writeFile');
var readFile = require('./readFile');

var getFieldbookData = require('./getFieldbookData');
var generateJSON = require('./generateJSON');

var compileJS = require('./compileJS');
var compileCSS = require('./compileCSS');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

const SOURCE = path.join(__dirname, '../src');
const DIST = path.join(__dirname, ENV === 'production' ? '../docs' : '../dist');

const {version} = require(path.join(__dirname, '../package.json'));

const JSFILES = [
  'vendor/stabilize.min.js',
  'vendor/doc.min.js',
  'vendor/animate.min.js',
  'vendor/siema.min.js',
  'vendor/array.includes.js',
  'main.js'
];

const CSSFILES = [
  'vendor/ripple.min.css',
  'main.css'
];

var prepare = async () => {
  try {
    await getFieldbookData();
    await generateJSON();
  } catch (err) {
    error(err);
  }
  return false;
};

var processCSS = async () => {
  try {
    info('Start compiling CSS...');
    let s = await compileCSS(CSSFILES, `${SOURCE}/widget`);
    writeFile(`${DIST}/widget/ppsloop.widget.css`, [
      `/** v${version} */`,
      s
    ].join(' '));
    info('Finish compiling CSS...');
  } catch (err) {
    error(err);
  }
  return false;
};

var processJS = async () => {
  try {
    info('Start compiling JS...');
    let s = await compileJS(JSFILES, `${SOURCE}/widget`);
    let data = readFile(`./dist/widget/ppsloop.widget.json`);
    writeFile(`${DIST}/widget/ppsloop.widget.js`, [
      `/** v${version} */`,
      s,
      `PPSW.init(${data});`
    ].join(';'));
    info('Finish compiling JS...');
  } catch (err) {
    error(err);
  }
  return false;
};

var update = async () => {
  try {
    await processJS();
    await processCSS();
  } catch (err) {
    error(err);
  }
  return false;
};

module.exports = {
  prepare,
  update
};
