// rollupify

var debug = require('debug');
var info = debug('app:info');
var error = debug('app:error');

var rollup = require('rollup');

var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

var {minify} = require('uglify-js');

var readFile = require('./readFile');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

var jsminify = (source = '') => {
  let {code} = minify(source);
  return code;
};

var rollupify = (entry) => {
  info('Rollup start...');
  return rollup.rollup({
    entry,
    plugins: [
      nodeResolve({
        module: true,
        jsnext: true,
        extensions: [
          '.js'
        ]
      }),
      commonjs(),
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
          'es2015-rollup'
        ],
        plugins: [
          'external-helpers'
        ]
      })
    ]
  }).then((bundle) => {
    info('Generating code with bundle...');
    let result = bundle.generate({
      format: 'umd',
      indent: true,
      moduleId: 'PPSW',
      moduleName: 'PPSW'
    });
    info('Rolling finished.');
    let {code} = result;
    return code;
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

  let js = await rollupify(`${source}${jsEntry}`);
  return [jsminify(vendorJS), js].join('\n\n');
};

module.exports = compileJS;
