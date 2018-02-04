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
  name,
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
  writeFile('./docs/ppsloop.json', json);
};

var makeWidgetCSS = async () => {
  let css = await compiler.css();
  writeFile('./docs/ppsloop.css', `/** v${version} */ ${css}`);
};

var makeWidgetJS = async () => {
  let js = await compiler.js();

  let json = readFile('./src/widget/data.json');
  let init = json ? `if (window.PPSW) {PPSW.init(${json});};` : '';

  writeFile('./docs/ppsloop.js', [
    `/** ${name}@${version} - minified, init data */`,
    js,
    init
  ].join('\n'));
};

var publish = () => {
  let source = './src/consumer';
  let docs = './docs';
  cpdir(`${source}`, `${docs}`);


  let revision = bella.createId(10);
  let cssLink = `ppsloop.css?rev=${revision}`;
  let jsLink = `ppsloop.js?rev=${revision}`;
  let htmlFile = `${docs}/index.html`;

  let html = readFile(htmlFile);
  html = html.replace('widget/ppsloop.css', cssLink);
  html = html.replace('widget/ppsloop.js', jsLink);
  html = html.replace('<script src="widget/ppsloop.init.js"></script>', '');

  let sHTML = htmlmin(html, {
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeTagWhitespace: true,
  });
  writeFile(htmlFile, sHTML);
};

var makeFiles = async () => {
  await makeWidgetData();
  await makeWidgetCSS();
  await makeWidgetJS();
  publish();
};

setup().then(['./docs'].map(makeDirs)).then(makeFiles);

