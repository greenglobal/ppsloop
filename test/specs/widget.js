// specs/widget

var bella = require('bellajs');
var test = require('tape');

let data = require('../../src/widget/data.json');

let PPSW = require('../../src/widget/main.js');

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
  assert.ok(data.people.length > 0, 'data.people must contain entries');
  assert.ok(bella.isArray(data.projects), 'data.projects must be an array');
  assert.ok(data.projects.length > 0, 'data.projects must contain entries');
  assert.ok(bella.isArray(data.techstacks), 'data.techstacks must be an array');
  assert.ok(data.techstacks.length > 0, 'data.techstacks must contain entries');
  assert.end();
});

test('Widget interface', (assert) => {
  assert.ok(bella.isObject(PPSW), 'PPSW must be an object');

  let methods = [
    'init', 'isInitialized',
    'getPeople', 'getProjects', 'getTechstacks',
    'getPeopleBySkill', 'getProjectStacks', 'getProjectMembers'
  ];
  assert.ok(hasProps(PPSW, methods), 'PPSW must have required methods');

  methods.forEach((met) => {
    assert.ok(bella.isFunction(PPSW[met]), `PPSW.${met}() must be a function`);
  });

  assert.end();
});
