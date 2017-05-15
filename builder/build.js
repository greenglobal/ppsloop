// build

var bella = require('bellajs');
var debug = require('debug');
var info = debug('pps:info');

var readFile = require('./readFile');
var writeFile = require('./writeFile');
var parseHTML = require('./parseHTML');
var compileCSS = require('./compileCSS');
var compileJS = require('./compileJS');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

var _build = (dist, data) => {
  let {
    html,
    js,
    css
  } = data;

  writeFile(`${dist}/index.html`, html);
  writeFile(`${dist}/main.css`, css);
  writeFile(`${dist}/main.js`, js);
};

var build = async (source, dist) => {
  info('Start building...');
  let sJSON = readFile(`${source}/config.json`);
  let config = JSON.parse(sJSON);

  config.widgetCSSLink = 'http://localhost:8081/ppsloop.widget.css';
  config.widgetJSLink = 'http://localhost:8081/ppsloop.widget.js';
  config.imagePath = '/img/widgetimage/';

  if (ENV === 'production') {
    let revision = bella.createId(10);
    config.widgetCSSLink = `https://rawgit.com/greenglobal/ppsloop/master/docs/widget/ppsloop.widget.css?rev=${revision}`;
    config.widgetJSLink = `https://rawgit.com/greenglobal/ppsloop/master/docs/widget/ppsloop.widget.js?rev=${revision}`;
    config.imagePath = '/ppsloop/img/widgetimage/';
  }


  let structures = parseHTML(`${source}/index.html`, config);
  let {
    css,
    js
  } = structures;

  let sCSS = await compileCSS(css, source);
  let sJS = await compileJS(js, source);
  structures.css = sCSS;
  structures.js = sJS;
  _build(dist, structures);
};


module.exports = build;
