// specs/widget

var bella = require('bellajs');
var test = require('tape');

require('jsdom-global')();

let data = require('../../dist/ppsloop.json');

let PPSW = require('../../src/widget/main');

let hasProps = (ob, props) => {
  return props.every((p) => {
    return bella.hasProperty(ob, p);
  });
};

test('Widget data', (assert) => {
  assert.ok(bella.isObject(data), 'Widget data must be an object');
  assert.ok(hasProps(data, [
    'people', 'projects', 'techstacks'
  ]), 'Widget data must have required properties');

  assert.ok(bella.isArray(data.people), 'data.people must be an array');
  assert.ok(bella.isArray(data.projects), 'data.projects must be an array');
  assert.ok(bella.isArray(data.techstacks), 'data.techstacks must be an array');
  assert.end();
});

test('Widget interface', (assert) => {
  assert.ok(bella.isObject(PPSW), 'PPSW must be an object');

  let methods = [
    'init', 'isInitialized',
    'getPeople', 'getProjects', 'getTechstacks',
    'getPeopleWhoKnow', 'getProjectsThatUse', 'getProjectMembers'
  ];
  assert.ok(hasProps(PPSW, methods), 'PPSW must have required methods');

  methods.forEach((met) => {
    assert.ok(bella.isFunction(PPSW[met]), `PPSW.${met}() must be a function`);
  });

  assert.end();
});
