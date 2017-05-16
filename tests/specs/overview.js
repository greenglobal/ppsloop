// specs/oveview

var fs = require('fs');
var test = require('tape');

var hasFile = (f) => {
  return fs.existsSync(f);
};

test('File generation', (assert) => {
  let files = [
    './src/data.json',
    './dist/ppsloop.css',
    './dist/ppsloop.json',
    './dist/ppsloop.js'
  ];

  files.forEach((f) => {
    assert.ok(hasFile(f), `The file "${f}" must be generated`);
  });
  assert.end();
});

