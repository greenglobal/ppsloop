// compileJS

var babel = require('babel-core');
var butternut = require('butternut');

var readFile = require('./readFile');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

var minifyJS = (jscode) => {
  let {code} = butternut.squash(jscode, {
    sourceMap: false,
    check: true
  });
  return code;
};

var transpile = (code) => {
  let r = babel.transform(code, {
    presets: [
      [
        'env', {
          targets: {
            browsers: [
              '> 3%',
              'not ie <= 8'
            ]
          },
          useBuiltIns: true
        }
      ]
    ],
    plugins: [
      'transform-remove-strict-mode'
    ],
    comments: false,
    sourceMaps: true
  });
  return r.code;
};

var compileJS = (jsFiles, source) => {
  let vendorJS = jsFiles.filter((file) => {
    return file.includes('vendor/');
  }).map((file) => {
    return readFile(`${source}/${file}`);
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []).join('\n');

  let myJS = jsFiles.filter((file) => {
    return !file.includes('vendor/');
  }).map((file) => {
    return readFile(`${source}/${file}`);
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []).join('\n');

  let js = transpile(myJS);
  let output = [vendorJS, js].join('\n');
  let s = ENV === 'production' ? minifyJS(output) : output;
  return s;
};

module.exports = compileJS;
