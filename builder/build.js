// build

var debug = require('debug');
var info = debug('pps:info');

var readFile = require('./readFile');
var writeFile = require('./writeFile');
var parseHTML = require('./parseHTML');
var compileCSS = require('./compileCSS');
var compileJS = require('./compileJS');

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
