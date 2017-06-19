// utils / normalize

const PERSON_IMG_DIR = encodeURIComponent('People');
const PROJECT_IMG_DIR = encodeURIComponent('Logo Project');
const TECHSTACK_IMG_DIR = encodeURIComponent('LogoTechStack');
const IMG_FILE_EXT = '.png';

import {
  isString,
  createAlias
} from 'bellajs';

import {
  getItemFrom,
  existsInArray
} from './index';

var DATA = {};

export let init = (data) => {

  let {
    techstacks = [],
    people = [],
    projects = []
  } = data;

  let _techstacks = [...techstacks].map((item) => {
    return {
      name: item[1],
      id: item[0],
      logo: `/${TECHSTACK_IMG_DIR}/${encodeURIComponent(item[1])}${IMG_FILE_EXT}`,
      count: item[2],
      alias: createAlias(item[1])
    };
  });

  let _people = [...people].map((item) => {
    return {
      id: item[0],
      name: item[1],
      avatar: `/${PERSON_IMG_DIR}/${encodeURIComponent(item[2])}${IMG_FILE_EXT}`,
      skills: item[3]
    };
  });

  let _projects = [...projects].map((item) => {
    return {
      name: item[0],
      alias: createAlias(item[0]),
      logo: `/${PROJECT_IMG_DIR}/${encodeURIComponent(item[0])}${IMG_FILE_EXT}`,
      stacks: item[1],
      members: item[2]
    };
  });

  DATA = {
    techstacks: _techstacks,
    people: _people,
    projects: _projects
  };
};

export let getPeople = () => {
  let {
    people = []
  } = DATA;
  return [...people];
};

export let getProjects = () => {
  let {
    projects = []
  } = DATA;
  return [...projects];
};

export let getTechstacks = () => {
  let {
    techstacks = []
  } = DATA;
  return [...techstacks];
};

export let getTechstackById = (id) => {
  return getItemFrom(getTechstacks()).by('id', id);
};

export let getPersonById = (id) => {
  return getItemFrom(getPeople()).by('id', id);
};

export let getProjectById = (id) => {
  return getItemFrom(getProjects()).by('id', id);
};

export let getPeopleBySkill = (skill) => {
  let arr = [];
  let candidates = getPeople();
  if (isString(skill)) {
    let sk = skill.toLowerCase();
    let stack = getItemFrom(getTechstacks()).by('alias', sk);
    arr = candidates.filter((item) => {
      return existsInArray(stack.id, item.skills);
    });
  } else {
    arr = candidates.filter((item) => {
      return existsInArray(skill, item.skills);
    });
  }
  return arr.map((item) => {
    return {
      name: item.name,
      avatar: item.avatar
    };
  });
};

export let getProjectStacks = (skill) => {
  let arr = [];
  let candidates = getProjects();
  if (isString(skill)) {
    let sk = skill.toLowerCase();
    let stack = getItemFrom(getTechstacks()).by('alias', sk);
    arr = candidates.filter((item) => {
      return existsInArray(stack.id, item.stacks);
    });
  } else {
    arr = candidates.filter((item) => {
      return existsInArray(skill, item.stacks);
    });
  }
  return arr.map((item) => {
    return {
      alias: item.alias,
      name: item.name,
      logo: item.logo
    };
  });
};

export let getProjectMembers = (pname) => {
  let name = pname.toLowerCase();
  let p = getProjects().filter((item) => {
    let nlower = item.name.toLowerCase();
    return name === nlower || name === item.alias;
  });
  if (p.length > 0) {
    return p[0].members.map((id) => {
      return getPersonById(id);
    });
  }
  return [];
};
