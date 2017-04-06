// generateJSON

var bella = require('bellajs');
var fetch = require('node-fetch');

const DATA_SOURCE = 'https://fieldbookcode.com/58dc7b4195b7800300c2f7f3/list';

var removeAccents = (s) => {
  let map = {
    a: 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|ä',
    A: 'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|Ä',
    c: 'ç',
    C: 'Ç',
    d: 'đ',
    D: 'Đ',
    e: 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|ë',
    E: 'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ë',
    i: 'í|ì|ỉ|ĩ|ị|ï|î',
    I: 'Í|Ì|Ỉ|Ĩ|Ị|Ï|Î',
    o: 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|ö',
    O: 'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ô|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|Ö',
    u: 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|û',
    U: 'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự|Û',
    y: 'ý|ỳ|ỷ|ỹ|ỵ',
    Y: 'Ý|Ỳ|Ỷ|Ỹ|Ỵ'
  };
  for (let k in map) {
    if (map.hasOwnProperty(k)) {
      let r = new RegExp(map[k], 'g');
      s = s.replace(r, k);
    }
  }

  return s;
};


var createMap = (skills, candidates) => {
  let totalCandidates = candidates.length;
  return skills.map((item) => {
    let maxToPick = bella.random(3, 20);
    let choosenCandidates = [];
    while (choosenCandidates.length < maxToPick) {
      let candidateIndex = bella.random(0, totalCandidates);
      choosenCandidates.push(candidateIndex);
    }
    return choosenCandidates;
  }).map((candidates) => {
    return bella.stabilize(candidates).unique();
  });
};

var getJSON = () => {
  return fetch(DATA_SOURCE).then((res) => {
    return res.json();
  }).then((data) => {
    let {
      projects,
      skills: techstacks
    } = data;
    let people = data.people.map(removeAccents).map((name) => {
      let arr = bella.stabilize(name.split(' '));
      return arr.last() + ' ' + arr.first();
    });

    return {
      people,
      projects,
      techstacks
    }
  });
};

var generateJSON = async () => {

  let data = await getJSON();

  let {
    people,
    projects,
    techstacks
  } = data;

  data.techPeopleMap = createMap(techstacks, people);
  data.techProjectMap = createMap(techstacks, projects);

  return data;
};

module.exports = generateJSON;