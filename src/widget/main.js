/**
 * PPSW.js
 * @ndaidong
 */

import './utils/polyfill.js';

import {
  get as getElement,
  add as addElement,
  create as createElement,
  queryAll,
  Event
} from 'realdom';

import Siema from 'siema';

import {
  shuffle,
  preloadImages,
  getElementPosition,
  translate
} from './utils';

import {
  init as storeInit,
  getTechstacks,
  getPeople,
  getProjects,
  getPeopleBySkill,
  getProjectStacks,
  getProjectMembers,
  getTechstackById
} from './utils/store';

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

const IS_GG_DOMAIN = (/greenglobal\.vn/).test(document.URL);

let imgPath = '';

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

let dict = translate('en');

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

  let enableCls = 'pps__swiper--nav--enable';
  let disableCls = 'pps__swiper--nav--disable';
  let bothCls = `${enableCls} ${disableCls}`;

  let resetState = (cslide) => {

    bprev.removeClass(bothCls);
    bnext.removeClass(bothCls);

    let total = slider.queryAll('.pps__swiper-slide').length;

    let max = 1;
    let min = total - perPage;

    if (total > perPage) {
      if (cslide < max) {
        bprev.addClass(disableCls);
        bnext.addClass(enableCls);
      } else if (cslide >= min) {
        bprev.addClass(enableCls);
        bnext.addClass(disableCls);
      } else {
        bprev.addClass(enableCls);
        bnext.addClass(enableCls);
      }

      let els = container.queryAll('.pps__btn-link');
      els.forEach((btn) => {
        let b = getElement(btn);
        let p = getElement(b.parentNode);
        if (p.hasClass(enableCls)) {
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
  card.addClass('pps__swiper-slide pps-card pps-card--transition');

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
  if (IS_GG_DOMAIN) {
    atag.setAttribute('href', `/${alias}`);
  }

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
    $btnViewAllProject.html(
      tplBtnViewAll
        .replace('{{count}}', rest)
        .replace('{{more}}', dict.more)
    );
    $btnViewAllProject.onclick = () => {
      randerProjectPanel(remain, true);
    };
  }

  return result;
};

let lastTop4Showed = [];

let randerPeoplePanel = (ppl) => {

  $elPeople.empty();

  let _ppl = shuffle(ppl);
  let top4 = [];

  let isAlreadyShowed = (p) => {
    if (lastTop4Showed.length > 0) {
      return lastTop4Showed.some((item) => {
        return item.avatar === p.avatar;
      });
    }
    return false;
  };

  if (_ppl.length > 4 && lastTop4Showed.length > 0) {
    for (let i = _ppl.length - 1; i >= 0; i--) {
      let tmp = _ppl[i];
      if (!isAlreadyShowed(tmp)) {
        _ppl.splice(i, 1);
        top4.push(tmp);
      }
    }
  }

  let sltPeople = top4.concat(_ppl);

  lastTop4Showed = [];
  let limit = Math.min(sltPeople.length, 4);
  for (let h = 0; h < limit; h++) {
    lastTop4Showed[h] = sltPeople[h];
  }

  let result = sltPeople.map((entry) => {
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
  let {
    member,
    members
  } = dict;
  let txt = `0 ${member}`;
  if (total === 1) {
    txt = `1 ${member}`;
  } else if (total > 1) {
    txt = `${total} ${members}`;
  }
  $elTeamNum.html(txt);

  setupSlider($elContentBlock);

  if (peopleCards.length) {
    let t = DELTA_PEOPLE_START_LOADING;
    peopleCards.filter((item) => {
      return item && item.$el;
    }).map((item) => {
      return item.$el;
    }).map((el) => {
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
    return mem.avatar && mem.name;
  });

  let total = members.length;

  if (total > 0) {
    let html = shuffle(members).map((mem) => {
      let name = mem.name;
      let avatar = ipath + mem.avatar;
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

  let lang = container.getAttribute('lang');
  if (!lang) {
    let rootTag = document.getElementsByTagName('html')[0];
    lang = rootTag.getAttribute('lang' || rootTag.getAttribute('xml:lang'));
  }
  if (lang && lang !== 'en') {
    dict = translate(lang);
  }

  let labels = [
    dict.team,
    dict.projects,
    dict.expertise,
  ];

  imgPath = getImgPath(container);

  let avatars = getPeople().map((item) => {
    return item.avatar;
  });

  let logos = getProjects().map((item) => {
    return item.logo;
  });

  preloadImages(avatars.concat(logos), imgPath);

  let contentBlock = addElement('DIV', container);
  contentBlock.addClass('pps__wrapper--fluid');

  let sltOption = getTechstacks().map((item) => {
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
  randerStackPanel(getTechstacks());

  window.onscroll = onscroll;

  window.onload = () => {
    onscroll();
  };

  return container;
};

let _init = (json) => {
  try {
    let o = typeof json === 'string' ? JSON.parse(json) : json;

    storeInit(o);

    queryAll('ppswidget').map(setupLayout);

  } catch (err) {
    console.log(err); // eslint-disable-line no-console
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

export {
  getTechstacks,
  getPeople,
  getProjects,
  getPeopleBySkill,
  getProjectStacks,
  getProjectMembers,
  getTechstackById
} from './utils/store';
