// compileCSS

var readFile = require('./readFile');

var postcss = require('postcss');
var postcssFilter = require('postcss-filter-plugins');
var nested = require('postcss-nested');
var cssnano = require('cssnano');
var cssnext = require('postcss-cssnext');
var mqpacker = require('css-mqpacker');

const POSTCSS_PLUGINS = [
  postcssFilter({
    silent: true
  }),
  nested(),
  cssnext(),
  mqpacker({
    sort: true
  }),
  cssnano()
];

var postProcess = async (css) => {
  try {
    let result = await postcss(POSTCSS_PLUGINS).process(css);
    return result.css;
  } catch (err) {
    return err;
  }
};

var compileCSS = async (cssFiles, source) => {
  let vendorCSS = cssFiles.filter((file) => {
    return file.includes('vendor/');
  }).map((file) => {
    return readFile(`${source}/${file}`);
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []).join('\n');

  let myCSS = cssFiles.filter((file) => {
    return !file.includes('vendor/');
  }).map((file) => {
    return readFile(`${source}/${file}`);
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []).join('\n');

  let css = await postProcess(myCSS);

  return [vendorCSS, css].join('\n');
};

module.exports = compileCSS;
