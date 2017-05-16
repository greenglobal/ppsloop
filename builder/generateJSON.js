// generateJSON

var debug = require('debug');
var info = debug('pps:info');
var error = debug('pps:error');

var fs = require('fs');
var readFile = require('./readFile');
var writeFile = require('./writeFile');

var removeAccents = require('../builder/removeAccents');
var normalizeData = require('../builder/normalizeData');

const THIS_YEAR = (new Date()).getFullYear();

const IMAGE_DIR = './src/consumer/img/widgetimage';

const PERSON_IMAGE_FOLDER = 'People';
const PROJECT_IMAGE_FOLDER = 'Logo Project';
const TECHSTACK_IMAGE_FOLDER = 'LogoTechStack';

var hasPersonAvatar = (person) => {
  let file = `${IMAGE_DIR}/${PERSON_IMAGE_FOLDER}/${person.email}.png`;
  return fs.existsSync(file);
};

var hasProjectImage = (project) => {
  let file = `${IMAGE_DIR}/${PROJECT_IMAGE_FOLDER}/${project.name}.png`;
  return fs.existsSync(file);
};

var hasTechLogo = (stack) => {
  let file = `${IMAGE_DIR}/${TECHSTACK_IMAGE_FOLDER}/${stack[0]}.png`;
  return fs.existsSync(file);
};

var getYoE = (begin = 0) => {
  let y = THIS_YEAR - begin;
  if (y > 20) {
    let m = y % 12;
    if (m > 1) {
      return `${m} months`;
    }
    if (m === 1) {
      return `${m} month`;
    }
  }
  if (y > 1) {
    return `${y} years`;
  }
  if (y === 1) {
    return `${y} year`;
  }
  return '3 months';
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

var mapPeopleToProjects = (project, mapper, people = []) => {
  let cache = {};
  let getPersonName = (id) => {
    if (!cache[id]) {
      let candidates = people.filter((item) => {
        return item.id === id;
      });

      if (candidates.length > 0) {
        let p = candidates[0];
        cache[id] = p;
      }
    }
    return cache[id] || false;
  };

  let members = project.members.map((id) => {
    return mapper.filter((item) => {
      return item.id === id;
    }).map((item) => {
      let p = getPersonName(item.person);
      return {
        person: p.name,
        image: p.image,
        role: item.role
      };
    });
  });
  project.members = members;
  return project;
};

var makeEmailName = (person) => {
  let fname = person.name;
  person.fullname = fname;
  let name = removeAccents(fname);
  let arr = name.split(' ');
  let first = arr.pop();
  person.name = first + ' ' + arr[0];
  if (!person.email) {
    person.email = arr.reduce((prev, curr) => {
      return prev + curr[0];
    }, first).toLowerCase();
  }
  return person;
};

var localizePersonImage = (person) => {
  if (hasPersonAvatar(person)) {
    let dir = encodeURIComponent(PERSON_IMAGE_FOLDER);
    person.image = `/${dir}/${encodeURIComponent(person.email)}.png`;
  }
  return person;
};

var localizeProjectImage = (project) => {
  if (hasProjectImage(project)) {
    let dir = encodeURIComponent(PROJECT_IMAGE_FOLDER);
    project.logo = `/${dir}/${encodeURIComponent(project.name)}.png`;
  }
  return project;
};

var localizeTechstackImage = (stack) => {
  if (hasTechLogo(stack)) {
    let dir = encodeURIComponent(TECHSTACK_IMAGE_FOLDER);
    stack[1] = `/${dir}/${encodeURIComponent(stack[0])}.png`;
  }
  return stack;
};


var generateJSON = async () => {

  let file = './src/widget/data.json';

  let ofile = './src/data.json';
  let dataText = await readFile(ofile);
  if (!dataText) {
    info(`Couldl not generate. ${ofile} not found.`);
    return false;
  }

  try {
    let json = JSON.parse(dataText);
    let ob = normalizeData(json);
    let {
      people,
      projects,
      skills,
      peopleSkills,
      projectSkills,
      projectMembers
    } = ob;

    let arrPeople = people.map((item) => {
      return mapSkillsToPeople(item, peopleSkills);
    }).map(makeEmailName).map(localizePersonImage);

    let arrProjects = projects.map((item) => {
      return mapSkillsToProjects(item, projectSkills);
    }).map((item) => {
      return mapPeopleToProjects(item, projectMembers, arrPeople);
    }).map(localizeProjectImage);

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
    }).map(localizeTechstackImage);

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
