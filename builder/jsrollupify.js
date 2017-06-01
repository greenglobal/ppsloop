// rollupify

var debug = require('debug');
var info = debug('app:info');
var error = debug('app:error');

var rollup = require('rollup');

var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var cleanup = require('rollup-plugin-cleanup');

var {minify} = require('uglify-js');

var readFile = require('./readFile');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

var jsminify = (source = '') => {
  let {code} = minify(source);
  return code;
};

let removeBr = (s) => {
  return s.replace(/(\r\n+|\n+|\r+)/gm, '\n');
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
        presets: [
          'es2015-rollup'
        ],
        plugins: [
          'external-helpers'
        ]
      }),
      cleanup()
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

    let output = {
      code: removeBr(code)
    };

    if (ENV === 'production') {
      output.minified = jsminify(code);
    }
    return output;
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
  return [
    jsminify(vendorJS),
    js.minified || js.code
  ].join('\n\n');
};

module.exports = compileJS;
