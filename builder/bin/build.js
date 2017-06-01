#!/usr/bin/env node

var fs = require('fs');
var exec = require('child_process').execSync;

var bella = require('bellajs');
var cpdir = require('copy-dir').sync;
var htmlmin = require('html-minifier').minify;

var {
  setup,
  compiler,
  readFile,
  writeFile,
  version
} = require('../index');

var makeDirs = (dist) => {
  if (fs.existsSync(dist)) {
    exec('rm -rf ' + dist);
  }
  exec(`mkdir ${dist}`);
  return dist;
};

var makeWidgetData = () => {
  let json = readFile('./src/widget/data.json');
  writeFile('./dist/ppsloop.json', json);
};

var makeWidgetCSS = async () => {
  let css = await compiler.css();
  writeFile('./dist/ppsloop.css', `/** v${version} */ ${css}`);
};

var makeWidgetJS = async () => {
  let js = await compiler.js();
  let json = readFile('./src/widget/data.json');
  let init = `if (window.PPSW) {PPSW.init(${json});};`;
  writeFile('./dist/ppsloop.js', [
    `/** v${version} */`,
    js,
    init
  ].join('\n'));
};

var publish = () => {
  let source = './src/consumer';
  let dist = './docs';
  cpdir(`${source}`, `${dist}`);

  let revision = bella.createId(10);
  let cssLink = `https://rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.css?rev=${revision}`;
  let jsLink = `https://rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.js?rev=${revision}`;
  let imagePath = '/ppsloop/img/widgetimage/';

  let html = readFile(`${dist}/index.html`);
  html = html.replace(new RegExp('/img/widgetimage/', 'gi'), imagePath);
  html = html.replace('widget/ppsloop.css', cssLink);
  html = html.replace('widget/ppsloop.js', jsLink);
  html = html.replace('<script type="text/javascript" src="widget/ppsloop.init.js"></script>', '');

  let sHTML = htmlmin(html, {
    collapseWhitespace: true,
    preserveLineBreaks: false,
    quoteCharacter: '"',
    removeComments: true,
    removeEmptyAttributes: true,
    useShortDoctype: true
  });
  writeFile(`${dist}/index.html`, sHTML);
};

var makeFiles = async () => {
  await makeWidgetData();
  await makeWidgetCSS();
  await makeWidgetJS();
  publish();
};

setup().then(['./dist', './docs'].map(makeDirs)).then(makeFiles);

