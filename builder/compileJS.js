// compileJS

var babel = require('babel-core');
var UglifyJS = require('uglify-js');

var readFile = require('./readFile');

var minifyJS = (jscode) => {
  let u = UglifyJS.minify(jscode, {
    fromString: true
  });
  return u.code;
};

var transpile = (code) => {
  let r = babel.transform(code, {
    presets: [
      [
        'env', {
          targets: {
            browsers: [
              'safari 9',
              'ie 11',
              'Android 4',
              'iOS 7'
            ]
          }
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

  return minifyJS([vendorJS, js].join('\n'));
};

module.exports = compileJS;
