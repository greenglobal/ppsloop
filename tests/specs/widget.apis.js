// specs/widget

var bella = require('bellajs');
var test = require('tape');

require('jsdom-global')();

let data = require('../../dist/ppsloop.json');

let PPSW = require('../../src/widget/main');

test('Widget APIs', (assert) => {

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

  assert.comment(` - Test .getPeopleWhoKnow() method`);
  let whoKnowJava = PPSW.getPeopleWhoKnow('Java');
  assert.ok(bella.isArray(whoKnowJava), `Returned - $whoKnowJava = PPSW.getPeopleWhoKnow('Java') - must be an array`);
  assert.ok(whoKnowJava.length > 0, '$whoKnowJava must contain many entries');

  [
    'id', 'name', 'email', 'image', 'skills', 'fullname'
  ].forEach((k) => {
    assert.ok(bella.hasProperty(whoKnowJava[0], k), `$whoKnowJava entry must have property ${k}`);
  });

  assert.end();
});
