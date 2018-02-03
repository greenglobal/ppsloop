// rollupify

const {
  error,
  info,
} = require('./logger');

const {rollup} = require('rollup');

const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const cleanup = require('rollup-plugin-cleanup');

const minifyJS = require('./minifyJS');
const transpileJS = require('./transpileJS');

const ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line

var rollupify = async (input) => {
  info('Rollup start...');
  try {
    info('Generating code with bundle...');

    let bundle = await rollup({
      input,
      plugins: [
        nodeResolve({
          jsnext: true,
          main: true,
          extensions: [
            '.js',
            '.json',
          ],
        }),
        commonjs({
          include: 'node_modules/**',
          sourceMap: false,
        }),
        cleanup(),
      ],
    });

    let {code} = await bundle.generate({
      format: 'umd',
      indent: true,
      strict: false,
      name: 'PPSW'
    });

    info('Rolling finished.');
    return transpileJS(code);
  } catch (err) {
    error('Error while rolling up...');
    error(err);
    return err;
  }
};

module.exports = async (entry) => {
  let output = await rollupify(entry);
  if (ENV === 'production') {
    return minifyJS(output);
  }
  return output;
};
