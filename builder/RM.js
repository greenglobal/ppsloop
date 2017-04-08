// generateJSON

var path = require('path');
var writeFile = require('./writeFile');
var readFile = require('./readFile');

var getFieldbookData = require('./getFieldbookData');
var generateJSON = require('./generateJSON');

var compileJS = require('./compileJS');
var compileCSS = require('./compileCSS');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

const SOURCE = path.join(__dirname, ENV === 'production' ? '../src' : './src');
const DIST = path.join(__dirname, ENV === 'production' ? '../docs' : './dist');

const JSFILES = [
  'vendor/doc.min.js',
  'layout.js',
  'main.js'
];

const CSSFILES = [
  'main.css'
];

var prepare = async () => {
  await getFieldbookData();
  await generateJSON();
};

var processCSS = async () => {
  let s = await compileCSS(CSSFILES, `${SOURCE}/widget`);
  writeFile(`${DIST}/widget/ppsloop.widget.css`, s);
};

var processJS = async () => {
  let s = await compileJS(JSFILES, `${SOURCE}/widget`);
  let data = readFile(`./dist/widget/ppsloop.widget.json`);
  writeFile(`${DIST}/widget/ppsloop.widget.js`, [
    s,
    `PPSW.load('${data}');PPSW.init();`
  ].join('\n'));
};

var update = () => {
  processJS();
  processCSS();
};

module.exports = {
  prepare,
  update
};
