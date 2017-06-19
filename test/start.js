/**
 * Import specs
 */

var files = [
  'overview',
  'widget',
  'widget.apis'
];

files.forEach((fname) => {
  require(`../test/specs/${fname}.js`);
});

