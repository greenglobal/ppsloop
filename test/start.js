/**
 * Import specs
 */

var files = [
  'overview',
  'widget',
  'es6PPSW'
];

require('browser-env')();

files.forEach((fname) => {
  require(`../test/specs/${fname}.js`);
});

