/**
 * PPSW.js
 * @ndaidong
 */

import {
  get as getElement,
  add as addElement,
  create as createElement,
  queryAll,
  Event
} from 'realdom';

import {
  isString,
  createAlias
} from 'bellajs';

import Siema from 'siema';

import {
  preloadImages,
  getElementPosition
} from './utils';

import {
  tplMainLayout,
  tplSimpleLayout,
  tplPersonCard,
  tplBtnViewAll
} from './templates';

const DELTA_TO_START = -80;
const PERSON_CARD_SIZE = 200;

const DELTA_PEOPLE_START_LOADING = 10;
const DELTA_PEOPLE_CONTINUOUS_LOADING = 180;

const DELTA_PROJECT_START_LOADING = 20;
const DELTA_PROJECT_CONTINUOUS_LOADING = 120;

const PERSON_IMG_DIR = encodeURIComponent('People');
const PROJECT_IMG_DIR = encodeURIComponent('Logo Project');
const TECHSTACK_IMG_DIR = encodeURIComponent('LogoTechStack');
const IMG_FILE_EXT = '.png';

let imgPath = '';

let people = [];
let projects = [];
let techstacks = [];

let $elLogo;
let $elTeamNum;
let $elSelector;
let $elContentBlock;

let $elPeople;
let $elProject;
let $elStack;

let $btnViewAllProject;

let _isInitialized = false;
let _isStarted = false;

let shuffle = (arr) => {
  return arr.sort(() => {
    let r = Math.random();
    if (r === 0 || r === 0.5 || r === 1) {
      return 0;
    }
    return r > 0.5;
  });
};

let existsInArray = (v, arr) => {
  return arr.some((k) => {
    return k === v;
  });
};

let normalizeData = () => {
  techstacks = [...techstacks].map((item) => {
    return {
      id: item[0],
      name: item[1],
      logo: `/${TECHSTACK_IMG_DIR}/${encodeURIComponent(item[1])}${IMG_FILE_EXT}`,
      count: item[2],
      alias: createAlias(item[1])
    };
  });

  people = [...people].map((item) => {
    return {
      id: item[0],
      name: item[1],
      avatar: `/${PERSON_IMG_DIR}/${encodeURIComponent(item[2])}${IMG_FILE_EXT}`,
      skills: item[3]
    };
  });

  projects = [...projects].map((item) => {
    return {
      name: item[0],
      alias: createAlias(item[0]),
      logo: `/${PROJECT_IMG_DIR}/${encodeURIComponent(item[0])}${IMG_FILE_EXT}`,
      stacks: item[1],
      members: item[2]
    };
  });
};

export let getPeople = () => {
  return [...people];
};

export let getProjects = () => {
  return [...projects];
};

export let getTechstacks = () => {
  return [...techstacks];
};

let getItemFrom = (arr) => {
  return {
    by: (key, value) => {
      let candidates = arr.filter((item) => {
        return item[key] === value;
      });
      return candidates.length > 0 ? candidates[0] : false;
    }
  };
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

let getImgPath = (c) => {
  let ipath = c.getAttribute('image-path');
  if (ipath) {
    if (ipath.indexOf(ipath.length - 1) === '/') {
      ipath = ipath.slice(0, -1);
    }
  }
  return ipath;
};


var setupSlider = (container) => {

  let wrapper = container.query('.pps__swiper-wrapper');
  let slider = wrapper.query('.pps__swiper-container');

  let perPage = 1;
  let wsize = wrapper.offsetWidth;
  let esize = PERSON_CARD_SIZE;

  while (esize * perPage < wsize) {
    perPage++;
  }

  let siema;
  let btns = container.queryAll('.pps__swiper--nav');

  let bprev = getElement(btns[0]);
  let bnext = getElement(btns[1]);

  let resetState = (cslide) => {

    bprev.removeClass('pps__swiper--nav--disable pps__swiper--nav--enable');
    bnext.removeClass('pps__swiper--nav--disable pps__swiper--nav--enable');

    let total = slider.queryAll('.pps__swiper-slide').length;

    let max = 1;
    let min = total - perPage;

    if (total > perPage) {
      if (cslide < max) {
        bprev.addClass('pps__swiper--nav--disable');
        bnext.addClass('pps__swiper--nav--enable');
      } else if (cslide >= min) {
        bprev.addClass('pps__swiper--nav--enable');
        bnext.addClass('pps__swiper--nav--disable');
      } else {
        bprev.addClass('pps__swiper--nav--enable');
        bnext.addClass('pps__swiper--nav--enable');
      }

      let els = container.queryAll('.pps__btn-link');
      els.forEach((btn) => {
        let b = getElement(btn);
        let p = getElement(b.parentNode);
        if (p.hasClass('pps__swiper--nav--enable')) {
          b.addClass('ripple');
          p.onclick = () => {
            if (b.hasClass('prev')) {
              siema.prev(perPage);
            } else if (b.hasClass('next')) {
              siema.next(perPage);
            }
          };
        } else {
          setTimeout(() => {
            b.removeClass('ripple');
          }, 500);
        }
      });
    }
  };

  siema = new Siema({
    selector: slider,
    duration: 200,
    easing: 'ease-out',
    perPage,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: false,
    onInit: () => {
      resetState(0);
    },
    onChange: () => {
      resetState(siema.currentSlide);
    }
  });

  return {siema, perPage};
};

let setActiveState = (origin) => {
  queryAll('.pps__list--stack-item.pps-active').forEach((el) => {
    el.removeClass('pps-active');
    let _rip = el.query('.pps-ripple');
    if (_rip) {
      _rip.destroy();
    }
  });
  origin.addClass('pps-active');
  let inner = origin.query('.pps-inner');
  let ripple = addElement('DIV', inner);
  ripple.addClass('pps-ripple');
};

let buildStackCard = (entry) => {
  let card = createElement('DIV');
  card.addClass('pps__list--stack-item');

  let {
    id,
    logo
  } = entry;

  let rect = addElement('SPAN', card);
  rect.addClass('pps-inner');

  rect.style.backgroundImage = `url(${imgPath}${logo})`;
  rect.setAttribute('stackid', id);
  return card;
};

let updateLeftPanelLogo = (stack, image) => {
  $elLogo.style.backgroundImage = `url(${imgPath}${image})`;
  $elLogo.setAttribute('title', stack);
};

let buildPersonCard = (entry) => {
  let card = createElement('DIV');
  card.addClass('pps__swiper-slide pps-card');

  let {
    avatar,
    name
  } = entry;

  let $avatar = addElement('DIV', card);
  $avatar.addClass('pps__person-avatar');

  $avatar.style.backgroundImage = `url(${imgPath}${avatar})`;

  let $name = addElement('DIV', card);
  $name.addClass('pps__person-name');
  $name.html(name);

  return card;
};

let buildProjectCard = (entry) => {
  let card = createElement('DIV');
  card.addClass('pps__list--project-item pps-card pps-card--transition');

  let {
    logo,
    alias
  } = entry;

  let atag = addElement('A', card);
  atag.addClass('pps-inner');
  atag.setAttribute('href', `/${alias}`);

  atag.style.backgroundImage = `url(${imgPath}${logo})`;

  return card;
};

let randerProjectPanel = (ppj, isAppend = false) => {
  if (!isAppend) {
    $elProject.empty();
  }

  if (!ppj.length) {
    return false;
  }

  let remain = [];
  if (!isAppend && ppj.length > 4) {
    let arr = shuffle(ppj);
    remain = arr.slice(4, ppj.length);
    ppj = arr.slice(0, 4);
  }

  let t = DELTA_PROJECT_START_LOADING;

  let result = ppj.map((entry) => {
    let card = buildProjectCard(entry);
    if (isAppend) {
      let last = $elProject.query('.pps__view-all');
      $elProject.insertBefore(card, last);
    } else {
      $elProject.appendChild(card);
    }

    setTimeout(() => {
      card.removeClass('pps-card--transition');
    }, t);

    t += DELTA_PROJECT_CONTINUOUS_LOADING;

    return {
      $el: card,
      data: entry
    };
  });

  $btnViewAllProject.onclick = null;
  $btnViewAllProject.addClass('pps__is-disabled');

  let rest = remain.length;
  if (rest > 0) {
    $btnViewAllProject.removeClass('pps__is-disabled');
    $btnViewAllProject.html(tplBtnViewAll.replace('{{count}}', rest));
    $btnViewAllProject.onclick = () => {
      randerProjectPanel(remain, true);
    };
  }

  return result;
};

let randerPeoplePanel = (ppl) => {

  $elPeople.empty();

  let result = shuffle(ppl).map((entry) => {
    let card = buildPersonCard(entry);
    $elPeople.appendChild(card);
    return {
      $el: card,
      data: entry
    };
  });

  let peopleCards = result.reduce((prev, curr) => {
    return prev.concat(curr);
  }, []);

  let total = result.length;
  let txt = '0 member';
  if (total === 1) {
    txt = '1 member';
  } else if (total > 1) {
    txt = `${total} members`;
  }
  $elTeamNum.html(txt);

  let {perPage} = setupSlider($elContentBlock);

  if (peopleCards.length) {
    let t = DELTA_PEOPLE_START_LOADING;

    let arr = peopleCards.splice(0, perPage);

    arr.filter((item) => {
      return item && item.$el;
    }).map((item) => {
      return item.$el;
    }).map((el) => {
      el.addClass('pps-card--transition');
      t += DELTA_PEOPLE_CONTINUOUS_LOADING;
      return setTimeout(() => {
        el.removeClass('pps-card--transition');
      }, t);
    });
  }
  return result;
};

let onStackSelect = (skill, origin) => {
  let {
    id
  } = skill;

  updateLeftPanelLogo(id, skill.logo);

  setActiveState(origin);

  randerPeoplePanel(getPeopleBySkill(id));
  randerProjectPanel(getProjectStacks(id));
};

let setupStackClickEvent = (stack) => {
  let {
    $el,
    data
  } = stack;

  Event.on($el, 'click', () => {
    onStackSelect(data, $el);
  });

  return data;
};

let setupSelectorEvent = () => {
  $elSelector.onchange = () => {
    let v = Number($elSelector.value);
    if (v >= 0) {
      let origin;
      let stack = getTechstackById(v);
      queryAll('.pps__list--stack-item').forEach((el) => {
        let card = el.query('.pps-inner');
        let cv = Number(card.getAttribute('stackid'));
        if (cv === v) {
          origin = el;
        }
      });

      if (origin) {
        onStackSelect(stack, origin);
      }
    }
  };
};

let randerStackPanel = (stacks) => {
  $elStack.empty();
  return stacks.map((entry) => {
    let card = buildStackCard(entry);
    $elStack.appendChild(card);
    return {
      $el: card,
      data: entry
    };
  }).map(setupStackClickEvent);
};

let start = () => {
  if (_isStarted) {
    return false;
  }

  _isStarted = true;

  let items = queryAll('.pps__list--stack-item');

  if (!items.length) {
    return false;
  }

  onStackSelect(getTechstacks()[0], items[0]);

  return _isStarted;
};

var renderSimpleVersion = (container, project) => {

  let ipath = getImgPath(container);

  let members = getProjectMembers(project).filter((mem) => {
    return mem.image && mem.person;
  });

  let total = members.length;

  if (total > 0) {
    let html = shuffle(members).map((mem) => {
      let name = mem.person;
      let avatar = ipath + mem.image;
      return tplPersonCard.replace('{{image}}', avatar)
                      .replace('{{name}}', name);
    }).join('');

    let layout = tplSimpleLayout.replace('{{content}}', html);

    container.innerHTML = layout;

    setupSlider(container);
  }

  return false;
};

let setupLayout = (container) => {

  let type = container.getAttribute('type');
  if (type === 'simple') {
    let prj = container.getAttribute('project');
    return renderSimpleVersion(container, prj);
  }

  let labels = [
    'Team',
    'Projects',
    'Our expertise'
  ];

  imgPath = getImgPath(container);

  let avatars = people.map((item) => {
    return item.avatar;
  });

  let logos = projects.map((item) => {
    return item.logo;
  });

  preloadImages(avatars.concat(logos), imgPath);

  let attrSectionLabel = container.getAttribute('section-labels');
  if (attrSectionLabel) {
    let arrLabels = attrSectionLabel.split('|');
    for (let i = 0; i < labels.length; i++) {
      if (arrLabels[i]) {
        labels[i] = arrLabels[i];
      }
    }
  }

  let contentBlock = addElement('DIV', container);
  contentBlock.addClass('pps__wrapper--fluid');

  let sltOption = techstacks.map((item) => {
    let {
      id,
      name
    } = item;
    return `<option value="${id}">${name}</option>`;
  }).join('');

  let layout = tplMainLayout.replace(new RegExp('{{labelTech}}', 'gi'), labels[2])
                          .replace('{{labelProject}}', labels[1])
                          .replace('{{labelPeople}}', labels[0])
                          .replace('{{options}}', sltOption);

  contentBlock.html(layout);

  $elStack = contentBlock.query('.pps__list--stack');
  $elPeople = contentBlock.query('.pps__swiper-container');
  $elProject = contentBlock.query('.pps__list--project');

  $elLogo = contentBlock.query('.pps__techlogo-image');
  $elTeamNum = contentBlock.query('.pps__teamnumber--small');
  $elSelector = contentBlock.query('.pps__stack-selector');

  $btnViewAllProject = contentBlock.query('.pps__view-all');

  $elContentBlock = contentBlock;

  let onscroll = () => {
    if (!_isStarted) {
      let offsetTop = getElementPosition($elContentBlock).y;
      let wHeight = window.innerHeight;
      let delta = offsetTop - wHeight;
      if (delta < DELTA_TO_START) {
        start(delta, offsetTop, wHeight);
      }
    }
  };

  setupSelectorEvent();
  randerStackPanel(techstacks);

  window.onscroll = onscroll;

  window.onload = () => {
    onscroll();
  };

  return container;
};

let _init = (json) => {
  try {
    let o = typeof json === 'string' ? JSON.parse(json) : json;
    let {
      people: _people,
      projects: _projects,
      techstacks: _techstacks
    } = o;

    people = [..._people];
    projects = [..._projects];
    techstacks = [..._techstacks];

    normalizeData();

    queryAll('ppswidget').map(setupLayout);

  } catch (err) {
    console.error(err);
  }
};


export var init = (data) => {
  if (!_isInitialized) {
    _init(data);
    _isInitialized = true;
  }
};

export var isInitialized = () => {
  return isInitialized;
};
