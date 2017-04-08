// generateJSON

var writeFile = require('./writeFile');
var readFile = require('./readFile');

var getFieldbookData = require('./getFieldbookData');
var generateJSON = require('./generateJSON');

var compileJS = require('./compileJS');
var compileCSS = require('./compileCSS');

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
  let s = await compileCSS(CSSFILES, './src/widget');
  writeFile('./dist/widget/ppsloop.widget.css', s);
};

var processJS = async () => {
  let s = await compileJS(JSFILES, './src/widget');
  let data = readFile('./dist/widget/ppsloop.widget.json');
  writeFile('./dist/widget/ppsloop.widget.js', [
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
