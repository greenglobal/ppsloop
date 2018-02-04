// utils / transpileJS

const {transform} = require('babel-core');

const babelConf = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: [
            '> 1%',
          ],
        },
      },
    ],
  ],
};

const {
  info,
  error,
} = require('./logger');

const transpile = (code) => {
  info('Transpiling with Babel...');
  let {
    error: err,
    code: output,
  } = transform(code, babelConf);

  info('Transpiling finished');
  if (err) {
    error(err);
  }
  return output;
};

module.exports = transpile;
