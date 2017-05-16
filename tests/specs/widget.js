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

test('Widget core', (assert) => {
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

test('Widget core with data', (assert) => {
  PPSW.init(data);

  assert.ok(PPSW.isInitialized(), 'PPSW.isInitialized() must return true after loading data');

  [
    'getPeople',
    'getProjects',
    'getTechstacks'
  ].forEach((met) => {

    assert.comment(` - Test .${met}() method`);

    let arr = PPSW[met]();
    assert.ok(bella.isArray(arr), `PPSW.${met}() must return an array`);
    assert.ok(arr.length > 0, `Returned array must contain data`);

    let item = arr[0];

    if (met === 'getPeople') {
      assert.ok(bella.isObject(item), 'Returned people must be an object');

      [
        'id', 'name', 'email', 'image', 'skills', 'fullname'
      ].forEach((k) => {
        assert.ok(bella.hasProperty(item, k), `Returned people must have property ${k}`);
      });
    } else if (met === 'getProjects') {
      assert.ok(bella.isObject(item), 'Returned project must be an object');

      [
        'name', 'logo', 'stacks', 'members'
      ].forEach((k) => {
        assert.ok(bella.hasProperty(item, k), `Returned project must have property ${k}`);
      });
    } else if (met === 'getTechstacks') {
      assert.ok(bella.isArray(item), 'Returned tech stack must be an array');
      assert.ok(item.length === 3, 'Returned tech stack must have 3 entries');
    }
  });

  assert.end();
});
