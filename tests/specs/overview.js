// specs/oveview

var fs = require('fs');
var test = require('tape');

var hasFile = (f) => {
  return fs.existsSync(f);
};

test('File generation', (assert) => {
  let files = [
    './src/data.json',
    './dist/widget/data.json',
    './dist/widget/ppsloop.widget.js',
    './dist/widget/ppsloop.widget.css',
    './dist/widget/ppsloop.widget.json'
  ];

  files.forEach((f) => {
    assert.ok(hasFile(f), `The file "${f}" must be generated`);
  });
  assert.end();
});

