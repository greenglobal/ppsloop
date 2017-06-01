// specs/widget

var bella = require('bellajs');
var test = require('tape');

require('jsdom-global')();

let data = require('../../dist/ppsloop.json');

let es6PPSW = require('../../src/widget/main');
let fullPPSW = require('../../dist/ppsloop.full');
let minPPSW = require('../../dist/ppsloop.min');

let apiCheck = (PPSW) => {
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

    assert.comment(` - Test .getPeopleBySkill('Java') method`);
    let javaDevs = PPSW.getPeopleBySkill('Java');
    assert.ok(bella.isArray(javaDevs), `Returned - $javaDevs - must be an array`);
    assert.ok(javaDevs.length > 0, '$javaDevs must contain many entries');

    [
      'id', 'name', 'email', 'image', 'skills', 'fullname'
    ].forEach((k) => {
      assert.ok(bella.hasProperty(javaDevs[0], k), `$javaDevs entry must have property ${k}`);
    });


    assert.comment(` - Test .getProjectStacks('AngularJS') method`);
    let ngProjects = PPSW.getProjectStacks('AngularJS');

    assert.ok(bella.isArray(ngProjects), `Returned - $ngProjects - must be an array`);
    assert.ok(ngProjects.length > 0, '$ngProjects must contain many entries');

    [
      'name', 'logo', 'stacks', 'members'
    ].forEach((k) => {
      assert.ok(bella.hasProperty(ngProjects[0], k), `$ngProjects entry must have property ${k}`);
    });

    assert.comment(` - Test .getProjectMembers('Escope') method`);
    let teamEscope = PPSW.getProjectMembers('Escope');

    assert.ok(bella.isArray(teamEscope), `Returned - $teamEscope - must be an array`);
    assert.ok(teamEscope.length > 0, '$teamEscope must contain many entries');

    [
      'person', 'image', 'role'
    ].forEach((k) => {
      assert.ok(bella.hasProperty(teamEscope[0], k), `$teamEscope entry must have property ${k}`);
    });

    assert.end();
  });

};

[es6PPSW, fullPPSW, minPPSW].map(apiCheck);
