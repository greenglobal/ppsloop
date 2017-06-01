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

import Siema from 'siema';

import {
  preloadImages,
  onTransitionEnd,
  getElementPosition,
  getLocatePoint
} from './utils';

import {
  tplMainLayout,
  tplSimpleLayout,
  tplPersonCard,
  tplBtnViewAll
} from './templates';

const TECH_STACK_NUMBER = 27;
const DELTA_TO_START = -80;
const PERSON_CARD_SIZE = 200;

const UA = navigator.userAgent;

let imgPath = '';

let deltaPaddingLeft = 20;

let people = [];
let projects = [];
let techstacks = [];

let pickedStacks = [];

let $elLogo;
let $elTeamNum;
let $elSelector;
let $elSwiperWapper;
let $elContentBlock;

let $elPeople;
let $elProject;
let $elStack;

let $btnViewAllProject;

let _isInitialized = false;
let _isStarted = false;

let isSafari = () => {
  let reg = /Macintosh; Intel Mac OS X/i;
  return reg.test(UA) && !(/chrome/i).test(UA);
};

let shuffle = (arr) => {
  return arr.sort(() => {
    let r = Math.random();
    if (r === 0 || r === 0.5 || r === 1) {
      return 0;
    }
    return r > 0.5;
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

export let getPeopleBySkill = (skill) => {
  let sk = skill.toLowerCase();
  return getPeople().filter((item) => {
    return item.skills.some((prope) => {
      return prope[0].toLowerCase() === sk;
    });
  });
};

export let getProjectStacks = (skill) => {
  let sk = skill.toLowerCase();
  return getProjects().filter((item) => {
    let stacks = item.stacks.map((st) => {
      return st.toLowerCase();
    });
    return stacks.includes(sk);
  });
};

export let getProjectMembers = (pname) => {
  let name = pname.toLowerCase();
  let p = getProjects().filter((item) => {
    let nlower = item.name.toLowerCase();
    return name === nlower || name === item.alias;
  });
  if (p.length > 0) {
    return p[0].members;
  }
  return [];
};

let getImgPath = (c) => {
  let ipath = c.getAttribute('image-path');
  if (ipath) {
    if (ipath.endsWith === '/') {
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
  });
  origin.addClass('pps-active');
};


let applyEffect = (cards, pointer, perPage = 4) => {

  let {
    left: pleft,
    top: ptop,
    width: pwidth,
    height: pheight
  } = pointer;

  let t = 20;

  let arr = cards.splice(0, perPage);

  let ot = $elSwiperWapper.offsetTop;
  let ol = $elSwiperWapper.offsetLeft;

  let iss = isSafari();
  let realTopDelta = iss ? 180 : 0;
  let realLeftDelta = iss ? 45 : -5;

  arr.filter((item) => {
    return item && item.$el;
  }).map((item) => {
    return item.$el;
  }).map((el) => {
    return {
      top: ot + el.offsetTop,
      left: ol + el.offsetLeft + deltaPaddingLeft,
      width: el.offsetWidth,
      height: el.offsetHeight,
      $el: el
    };
  }).forEach((data) => {
    let {
      top,
      left,
      width,
      height,
      $el
    } = data;
    let shadow = createElement('DIV');
    shadow.addClass('pps__swiper-slide');
    shadow.setStyle({
      top,
      left,
      width,
      height,
      border: 'solid px #eee'
    });

    let node = getElement($el.cloneNode(true));
    node.setStyle({
      position: 'absolute',
      zIndex: 10,
      width,
      height
    });
    node.style.left = `${pleft + pwidth / 2}px`;
    node.style.top = `${ptop - pheight / 2}px`;
    node.style.transform = 'scale(0.1)';

    $elContentBlock.appendChild(node);

    if ($el.parentNode) {
      $el.parentNode.replaceChild(shadow, $el);
    }

    t += 60;
    setTimeout(() => {
      node.style.left = `${left - realLeftDelta}px`;
      node.style.top = `${top - realTopDelta}px`;
      node.style.transform = 'scale(1)';
    }, t);

    onTransitionEnd(node, () => {
      node.destroy();
      if (shadow.parentNode) {
        shadow.parentNode.replaceChild($el, shadow);
      }
    });
  });
};

let buildStackCard = (entry) => {
  let card = createElement('DIV');
  card.addClass('pps__list--stack-item');

  let [
    name,
    image
  ] = entry;

  let rect = addElement('SPAN', card);
  rect.addClass('pps-inner ripple');
  rect.style.backgroundImage = `url(${imgPath}${image})`;
  rect.setAttribute('title', name);

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
    image,
    name
  } = entry;

  let $avatar = addElement('DIV', card);
  $avatar.addClass('pps__person-avatar');

  if (image) {
    image = `${imgPath}${image}`;
    $avatar.style.backgroundImage = `url(${image})`;
  }

  let $name = addElement('DIV', card);
  $name.addClass('pps__person-name');
  $name.html(name);

  return card;
};

let buildProjectCard = (entry) => {
  let card = createElement('DIV');
  card.addClass('pps__list--project-item pps-card pps-card--transition');

  let {
    logo: image,
    name,
    alias
  } = entry;

  let atag = addElement('A', card);
  atag.addClass('pps-inner');
  atag.setAttribute('href', `/${alias}`);
  atag.setAttribute('title', name);

  if (image) {
    image = `${imgPath}${image}`;
    atag.style.backgroundImage = `url(${image})`;
  }

  return card;
};

let randerProjectPanel = (ppj, isAppend = false) => {
  if (!isAppend) {
    $elProject.empty();
  }

  if (!ppj.length) {
    return false;
  }

  ppj = shuffle(ppj);

  let remain = [];
  if (!isAppend && ppj.length > 4) {
    remain = ppj.slice(4, ppj.length);
    let arr = ppj.slice(0, 4);
    ppj = arr;
  }

  let t = 20;
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

    t += 60;

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

let randerPeoplePanel = (ppl, origin) => {

  let pointer;
  let righPanel = queryAll('.pps__frame--right')[0];

  if (righPanel && righPanel.offsetParent) {
    pointer = getLocatePoint(origin);
  } else {
    pointer = getLocatePoint($elLogo);
    let {
      width,
      height
    } = pointer;
    pointer.left += width / 2;
    pointer.top += height / 2;
  }

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
    applyEffect(peopleCards, pointer, perPage);
  }
  return result;
};

let onStackSelect = (data, origin) => {
  let skill = data[0];

  updateLeftPanelLogo(skill, data[1]);

  let _people = getPeopleBySkill(skill).map((item) => {
    let {
      name,
      image,
      skills = []
    } = item;
    let yys = skills.filter((sk) => {
      return sk[0] === skill;
    });

    let yoe = yys[0][1];

    return {
      name,
      image,
      yoe
    };
  });

  setActiveState(origin);

  if (_people.length > 1) {
    _people.sort((a, b) => {
      if (a.yoe === b.yoe) {
        return 0;
      }
      return a.yoe > b.yoe;
    });
  }
  randerPeoplePanel(_people, origin);

  let _projects = getProjectStacks(skill);

  let arr = _projects.map((item) => {
    return {
      alias: item.alias,
      name: item.name,
      logo: item.logo
    };
  });

  if (arr.length > 1) {
    arr = shuffle(_projects);
  }

  randerProjectPanel(arr);
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
    let v = $elSelector.value;
    let skills = pickedStacks.filter((item) => {
      return item[0] === v;
    });
    if (skills && skills.length > 0) {
      let origin;
      queryAll('.pps__list--stack-item').forEach((el) => {
        el.removeClass('pps-active');
        let stack = el.query('.pps-inner');
        if (stack.getAttribute('title') === v) {
          origin = el;
        }
      });

      if (origin) {
        let sk = skills[0];
        onStackSelect(sk, origin);
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

let start = (delta, offsetTop) => {
  if (_isStarted) {
    return false;
  }

  _isStarted = true;

  let items = queryAll('.pps__list--stack-item');

  if (!items.length) {
    return false;
  }

  let el = items[0];

  let righPanel = queryAll('.pps__frame--right')[0];

  if (offsetTop > 0 && righPanel && righPanel.offsetParent) {

    el.addClass('pps-highlight');

    let hand = addElement('DIV', el);
    hand.addClass('blink');

    setTimeout(() => {
      onStackSelect(pickedStacks[0], el);
      setTimeout(() => {
        hand.destroy();
        el.removeClass('pps-highlight');
      }, 2000);
    }, 1000);

  } else {
    onStackSelect(pickedStacks[0], el);
  }

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
    return item.image;
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

  let maxsize = Math.min(TECH_STACK_NUMBER, techstacks.length);
  pickedStacks = techstacks.splice(0, maxsize);

  let sltOption = pickedStacks.map((item) => {
    let st = item[0];
    return `<option value="${st}">${st}</option>`;
  }).join('');

  let layout = tplMainLayout.replace(new RegExp('{{labelTech}}', 'gi'), labels[0])
                          .replace('{{labelProject}}', labels[3])
                          .replace('{{labelPeople}}', labels[2])
                          .replace('{{options}}', sltOption);

  contentBlock.html(layout);

  $elStack = contentBlock.query('.pps__list--stack');
  $elPeople = contentBlock.query('.pps__swiper-container');
  $elProject = contentBlock.query('.pps__list--project');

  $elLogo = contentBlock.query('.pps__techlogo-image');
  $elTeamNum = contentBlock.query('.pps__teamnumber--small');
  $elSelector = contentBlock.query('.pps__stack-selector');
  $elSwiperWapper = contentBlock.query('.pps__swiper-wrapper');

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

  let onresize = () => {
    let blockPeople = $elContentBlock.query('.pps__block--people');
    let cstyle = window.getComputedStyle(blockPeople, null);
    let paddingLeft = cstyle.getPropertyValue('padding-left');
    if (paddingLeft) {
      let pl = parseInt(paddingLeft, 10);
      deltaPaddingLeft = pl || 20;
    }
  };

  setupSelectorEvent();
  randerStackPanel(pickedStacks);

  window.onresize = onresize;
  window.onscroll = onscroll;

  window.onload = () => {
    onresize();
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

    let els = queryAll('ppswidget') || [];
    els.map(setupLayout);

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
