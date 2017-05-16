// normalizeData

var getPeople = (records) => {
  return records.map((record) => {
    return {
      id: record.id,
      name: record.name,
      email: record.email || '',
      image: record.image || '',
      skills: record.skills.reduce((prev, curr) => {
        return prev.concat(curr.id);
      }, [])
    };
  });
};

var getProjects = (records) => {
  return records.map((record) => {
    return {
      name: record.name,
      logo: record.logo || '',
      stacks: record.stacks.reduce((prev, curr) => {
        return prev.concat(curr.id);
      }, []),
      members: record.members.reduce((prev, curr) => {
        return prev.concat(curr.id);
      }, [])
    };
  });
};

var getSkills = (records) => {
  return records.map((record) => {
    return {
      name: record.name,
      image: record.image || ''
    };
  });
};


var getK = (records) => {
  return records.filter((record) => {
    return record.tech_stacks.length > 0;
  }).map((record) => {
    return {
      id: record.id,
      since: record.since,
      name: record.tech_stacks[0].name
    };
  });
};

var getU = (records) => {
  return records.filter((record) => {
    return record.tech_stacks.length > 0;
  }).map((record) => {
    return {
      id: record.id,
      name: record.tech_stacks[0].name
    };
  });
};

var getP = (records) => {
  return records.filter((record) => {
    return record.people.length > 0;
  }).map((record) => {
    let roles = record.roles || [];
    let role = roles.length > 0 ? roles[0].name : '';
    return {
      id: record.id,
      person: record.people[0].id,
      role
    };
  });
};

var normalize = (json) => {
  let {
    people,
    projects,
    skills,
    peopleSkills,
    projectSkills,
    projectMembers
  } = json;

  return {
    people: getPeople(people),
    projects: getProjects(projects),
    skills: getSkills(skills),
    peopleSkills: getK(peopleSkills),
    projectSkills: getU(projectSkills),
    projectMembers: getP(projectMembers)
  };
};

module.exports = normalize;
