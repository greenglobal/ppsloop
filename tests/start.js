/**
 * Import specs
 */

var files = [
  'overview',
  'widget',
  'widget.apis'
];

files.forEach((fname) => {
  require(`../tests/specs/${fname}.js`);
});

