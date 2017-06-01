// postify

var readFile = require('./readFile');

var {trim} = require('bellajs');

var postcss = require('postcss');
var postcssFilter = require('postcss-filter-plugins');
var nested = require('postcss-nested');
var cssnano = require('cssnano');
var cssnext = require('postcss-cssnext');
var mqpacker = require('css-mqpacker');
var autoprefixer = require('autoprefixer');

var {
  babel: babelConfig
} = require('../package.json');

var browserList = babelConfig.presets[0][1].targets.browsers;

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

const POSTCSS_PLUGINS = [
  postcssFilter({
    silent: true
  }),
  nested(),
  cssnext(),
  mqpacker({
    sort: true
  }),
  autoprefixer({
    add: false,
    browsers: browserList
  })
];

var postProcess = async (css) => {
  try {
    if (ENV === 'production') {
      POSTCSS_PLUGINS.push(cssnano());
    }
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
