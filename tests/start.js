/**
 * Import specs
 */

var files = [
  // 'overview',
  // 'widget',
  // 'widget.apis',
  'packed.full'
];

files.forEach((fname) => {
  require(`../tests/specs/${fname}.js`);
});

