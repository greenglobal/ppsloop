// specs/widget

var bella = require('bellajs');
var test = require('tape');

let data = require('../../dist/ppsloop.json');

let PPSW = require('../../dist/ppsloop');

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
        'id', 'name', 'skills'
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
      assert.ok(bella.isObject(item), 'Returned tech stack must be an array');
      [
        'name', 'logo', 'count', 'alias', 'id'
      ].forEach((k) => {
        assert.ok(bella.hasProperty(item, k), `Returned k stack must have property ${k}`);
      });
    }
  });

  assert.comment(` - Test .getPeopleBySkill('Java') method`);
  let javaDevs = PPSW.getPeopleBySkill('Java');
  assert.ok(bella.isArray(javaDevs), `Returned - $javaDevs - must be an array`);
  assert.ok(javaDevs.length > 0, '$javaDevs must contain many entries');

  [
    'name', 'avatar'
  ].forEach((k) => {
    assert.ok(bella.hasProperty(javaDevs[0], k), `$javaDevs entry must have property ${k}`);
  });


  assert.comment(` - Test .getProjectStacks('AngularJS') method`);
  let ngProjects = PPSW.getProjectStacks('AngularJS');

  assert.ok(bella.isArray(ngProjects), `Returned - $ngProjects - must be an array`);
  assert.ok(ngProjects.length > 0, '$ngProjects must contain many entries');

  [
    'name', 'alias', 'logo'
  ].forEach((k) => {
    assert.ok(bella.hasProperty(ngProjects[0], k), `$ngProjects entry must have property ${k}`);
  });

  assert.comment(` - Test .getProjectMembers('Escope') method`);
  let teamEscope = PPSW.getProjectMembers('Escope');

  assert.ok(bella.isArray(teamEscope), `Returned - $teamEscope - must be an array`);
  assert.ok(teamEscope.length > 0, '$teamEscope must contain many entries');

  [
    'id', 'name', 'avatar', 'skills'
  ].forEach((k) => {
    assert.ok(bella.hasProperty(teamEscope[0], k), `$teamEscope entry must have property ${k}`);
  });


  assert.comment(` - Test .getTechstackById(9) method`);
  let stack = PPSW.getTechstackById(9);
  assert.ok(bella.isObject(stack), `Returned - $stack - must be an object`);

  [
    'name', 'logo', 'count', 'alias', 'id'
  ].forEach((k) => {
    assert.ok(bella.hasProperty(stack, k), `$stack entry must have property ${k}`);
  });

  assert.end();
});

