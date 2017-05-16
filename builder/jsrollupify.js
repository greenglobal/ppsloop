// rollupify

var debug = require('debug');
var info = debug('app:info');
var error = debug('app:error');

var rollup = require('rollup');

var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify');

var readFile = require('./readFile');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

var rollupify = (entry) => {
  info('Rollup start...');
  return rollup.rollup({
    entry,
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true,
        extensions: [
          '.js',
          '.json'
        ]
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
          'es2015-rollup'
        ],
        plugins: [
          'external-helpers'
        ]
      }),
      ENV === 'production' && uglify()
    ]
  }).then((bundle) => {
    info('Generating code with bundle...');
    let result = bundle.generate({
      format: 'umd',
      indent: true,
      moduleName: 'PPSW'
    });
    info('Rolling finished.');
    return result.code;
  }).catch((err) => {
    error(err);
  });
};

var compileJS = async (jsEntry, jsFiles, source) => {
  let vendorJS = jsFiles.filter((file) => {
    return file.includes('vendor/');
  }).map((file) => {
    return readFile(`${source}/${file}`);
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []).join('\n');

  let js = await rollupify(`${source}/${jsEntry}`);
  return [vendorJS, js].join('\n\n');
};

module.exports = compileJS;
