// specs/widget

var bella = require('bellajs');
var test = require('tape');

require('jsdom-global')();

let widget = require('../../dist/widget/ppsloop.widget.json');

test('Widget data', (assert) => {
  assert.ok(bella.isObject(widget), 'Widget must be an object');
  assert.end();
});
