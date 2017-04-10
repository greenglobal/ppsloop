// generateJSON

var bella = require('bellajs');

var debug = require('debug');
var info = debug('pps:info');
var error = debug('pps:error');

var removeAccents = require('./removeAccents');
var readFile = require('./readFile');
var writeFile = require('./writeFile');

const THIS_YEAR = (new Date()).getFullYear();

var standalizeName = (person) => {
  let name = removeAccents(person.name);
  let arr = bella.stabilize(name.split(' '));
  person.name = arr.last() + ' ' + arr.first();
  return person;
};

var getYoE = (begin) => {
  let y = THIS_YEAR - begin;
  if (y > 1) {
    return `${y} years of experience`;
  }
  if (y === 1) {
    return `${y} year of experience`;
  }
  return 'Several months';
};

var mapSkillsToPeople = (person, mapper) => {
  let skills = person.skills.map((sk) => {
    return mapper.filter((item) => {
      return item.id === sk;
    }).map((skll) => {
      return [skll.name, getYoE(skll.since)];
    });
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []);
  person.skills = skills;
  return person;
};

var mapSkillsToProjects = (project, mapper) => {
  let stacks = project.stacks.map((sk) => {
    return mapper.filter((item) => {
      return item.id === sk;
    }).map((skll) => {
      return skll.name;
    });
  }).reduce((prev, curr) => {
    return prev.concat(curr);
  }, []);
  project.stacks = stacks;
  return project;
};


var generateJSON = async () => {

  let file = './dist/widget/ppsloop.widget.json';

  let ofile = './src/data.json';
  let dataText = await readFile(ofile);
  if (!dataText) {
    info(`Couldl not generate. ${ofile} not found.`);
    return false;
  }

  try {
    let json = JSON.parse(dataText);
    let {
      people,
      projects,
      skills,
      peopleSkills,
      projectSkills
    } = json;

    let arrPeople = people.map(standalizeName).map((item) => {
      return mapSkillsToPeople(item, peopleSkills);
    });

    let arrProjects = projects.map((item) => {
      return mapSkillsToProjects(item, projectSkills);
    });

    let counter = {};
    peopleSkills.forEach((item) => {
      let {
        name
      } = item;
      let curr = counter[name] || 0;
      counter[name] = curr + 1;
    });

    let ts = skills.map((item) => {
      let {
        name,
        image
      } = item;
      return [name, image, counter[name] || 0];
    }).sort((a, b) => {
      if (a[2] === b[2]) {
        return 0;
      }
      return a[2] > b[2] ? -1 : 1;
    });

    let output = {
      people: arrPeople,
      projects: arrProjects,
      techstacks: ts
    };

    await writeFile(file, JSON.stringify(output));
    info(`JSON data has been generated`);
    return true;
  } catch (err) {
    error('Error while generating data file');
    return error(err);
  }
};

module.exports = generateJSON;
