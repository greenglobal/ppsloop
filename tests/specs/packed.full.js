// specs/packed.full

var bella = require('bellajs');
var test = require('tape');

require('jsdom-global')();

require('../../dist/ppsloop.js');
console.log(window.PPSW);

test('Widget APIs', (assert) => {
  assert.end();
});
