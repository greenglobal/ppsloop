// utils / postify

var readFile = require('./readFile');

var {trim} = require('bellajs');

const postcss = require('postcss');
const cssnext = require('postcss-cssnext');
const mqpacker = require('css-mqpacker');
const atImport = require('postcss-import');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

const POSTCSS_PLUGINS = [
  atImport(),
  cssnext(),
  mqpacker({
    sort: true,
  }),
];

var postProcess = async (css) => {
  try {
    let result = await postcss(POSTCSS_PLUGINS).process(css, {from: null});
    return result.css;
  } catch (err) {
    return err;
  }
};

var compileCSS = async (cssFiles, source) => {
  let vendorCSS = cssFiles.filter((file) => {
    return file.includes('vendor/');
  }).map((file) => {
    return trim(readFile(`${source}/${file}`));
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []).join(' ');

  let myCSS = cssFiles.filter((file) => {
    return !file.includes('vendor/');
  }).map((file) => {
    return trim(readFile(`${source}/${file}`));
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []).join(' ');

  let css = await postProcess(myCSS);

  return [vendorCSS, css].join(' ');
};

module.exports = compileCSS;
