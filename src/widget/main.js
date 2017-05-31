/**
 * PPSW.js
 * @ndaidong
 */

/* global realdom Siema */

((name, factory) => {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    let root = window || {};
    if (root.define && root.define.amd) {
      root.define([], factory());
    } else if (root.exports) {
      root.exports = factory();
    } else {
      root[name] = factory();
    }
  }
})('PPSW', () => {

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

  let isInitialized = false;
  let isStarted = false;
  let widgetId = '';

  let {
    get: getElement,
    add: addElement,
    create: createElement,
    all: queryAll,
    Event
  } = window.realdom ? realdom : {}; // just for passing test :(

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

  let getPeople = () => {
    return [...people];
  };
  let getProjects = () => {
    return [...projects];
  };
  let getTechstacks = () => {
    return [...techstacks];
  };

  let getPeopleBySkill = (skill) => {
    let sk = skill.toLowerCase();
    return getPeople().filter((item) => {
      return item.skills.some((prope) => {
        return prope[0].toLowerCase() === sk;
      });
    });
  };

  let getProjectStacks = (skill) => {
    let sk = skill.toLowerCase();
    return getProjects().filter((item) => {
      let stacks = item.stacks.map((st) => {
        return st.toLowerCase();
      });
      return stacks.includes(sk);
    });
  };

  let getProjectMembers = (pname) => {
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

  let getPosition = (el) => {

    let xPos = 0;
    let yPos = 0;

    while (el) {
      if (el.tagName === 'BODY') {
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += el.offsetLeft - xScroll + el.clientLeft;
        yPos += el.offsetTop - yScroll + el.clientTop;
      } else {
        xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        yPos += el.offsetTop - el.scrollTop + el.clientTop;
      }

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
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

  let getLocatePoint = (origin) => {
    let ol = origin.offsetLeft;
    let ot = origin.offsetTop;
    let ow = origin.offsetWidth;
    let oh = origin.offsetHeight;

    return {
      left: Math.floor(ol - ow),
      top: Math.floor(ot - oh),
      width: ow,
      height: oh
    };
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

      node.addEventListener('transitionend', () => {
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
      $btnViewAllProject.html(`<span class="pps__btn-viewall"><b>+${rest}</b> more</span>`);
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
    if (isStarted) {
      return false;
    }

    isStarted = true;

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

    return isStarted;
  };

  var renderSimpleVersion = (container, project) => {

    let ipath = container.getAttribute('image-path');
    if (ipath) {
      if (ipath.endsWidth === '/') {
        ipath = ipath.slice(0, -1);
      }
    }

    let layout = `
      <div class="pps__swiper-wrapper pps__swiper-wrapper-simple">
        <div class="pps__swiper--nav pps__swiper--prev">
          <span class="pps__btn-link prev"></span>
        </div>
        <div class="pps__swiper-container pps__swiper-container-simple">{{content}}</div>
        <div class="pps__swiper--nav pps__swiper--next">
          <span class="pps__btn-link next"></span>
        </div>
      </div>
    `;

    let template = `
      <div class="pps__swiper-slide">
        <div class="pps__person-avatar" style="background-image:url({{image}})"></div>
        <div class="pps__person-name">{{name}}</div>
      </div>
    `;

    let members = getProjectMembers(project).filter((mem) => {
      return mem.image && mem.person;
    });

    let total = members.length;

    if (total > 0) {
      let html = shuffle(members).map((mem) => {
        let name = mem.person;
        let avatar = ipath + mem.image;
        return template.replace('{{image}}', avatar)
                        .replace('{{name}}', name);
      }).join('');

      layout = layout.replace('{{content}}', html);

      container.innerHTML = layout;

      setupSlider(container);
    }

    return false;
  };

  let preloadImages = (images) => {

    let preload = () => {

      let src = images.shift();

      let next = () => {
        if (images.length > 0) {
          preload();
        }
      };

      let P = new Image();
      P.onerror = next;
      P.onload = next;
      P.src = imgPath + src;
    };

    preload();
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

    let ipath = container.getAttribute('image-path');
    if (ipath) {
      if (ipath.endsWith('/')) {
        ipath = ipath.slice(0, -1);
      }
      imgPath = ipath;
    }

    let avatars = people.map((item) => {
      return item.image;
    });

    let logos = projects.map((item) => {
      return item.logo;
    });

    preloadImages(avatars.concat(logos));

    widgetId = container.getAttribute('id');
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

    let layout = `
      <div class="pps__frame--left">
        <div class="pps__frame--top">
          <div class="pps__techlogo-outer">
            <div class="pps__techlogo">
              <label class="pps__label pps__label--no-padding">${labels[2]}</label>
              <div class="pps__techlogo-image" id="${widgetId}_ppsTechLogo"></div>
              <span class="pps__techselect-arrow"></span>
            </div>
            <div class="pps__select-outer">
              <select class="pps__select" id="${widgetId}_ppsStackSelector">
                ${sltOption}
              </select>
            </div>
          </div>
          <div class="pps__block--people">
            <label class="pps__label">
              ${labels[0]} <span class="pps__teamnumber--small" id="${widgetId}_ppsTeamNumber"></span>
            </label>
            <div class="pps__swiper-wrapper" id="${widgetId}_ppsSwiperWapper">
              <div class="pps__swiper--nav pps__swiper--prev">
                <span class="pps__btn-link prev"></span>
              </div>
              <div class="pps__swiper-container" id="${widgetId}_ppsSwiperContainer"></div>
              <div class="pps__swiper--nav pps__swiper--next">
                <span class="pps__btn-link next"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="pps__frame--bottom">
          <div class="pps__block--project">
            <label class="pps__label">
              ${labels[1]}
            </label>
            <div class="pps__list--project" id="${widgetId}_ppsProjectList"></div>
            <div class="pps__view-all pps__is-disabled" id="${widgetId}_ppsProjectViewAll"></div>
          </div>
        </div>
      </div>
      <div class="pps__frame--right">
        <div class="pps__block--stack">
          <label class="pps__label">
            ${labels[2]}
          </label>
          <div class="pps__list--stack" id="${widgetId}_ppsStackList"></div>
        </div>
      </div>
    `;

    contentBlock.html(layout);

    $elStack = getElement(`${widgetId}_ppsStackList`);
    $elPeople = getElement(`${widgetId}_ppsSwiperContainer`);
    $elProject = getElement(`${widgetId}_ppsProjectList`);

    $elLogo = getElement(`${widgetId}_ppsTechLogo`);
    $elTeamNum = getElement(`${widgetId}_ppsTeamNumber`);
    $elSelector = getElement(`${widgetId}_ppsStackSelector`);
    $elSwiperWapper = getElement(`${widgetId}_ppsSwiperWapper`);

    $elContentBlock = contentBlock;

    $btnViewAllProject = getElement(`${widgetId}_ppsProjectViewAll`);

    let onscroll = () => {
      if (!isStarted) {
        let offsetTop = getPosition($elContentBlock).y;
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

  let init = (json) => {
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

      if (window.realdom) {
        let els = queryAll('ppswidget') || [];
        els.map(setupLayout);
      }

    } catch (err) {
      console.error(err);
    }
  };


  return {
    init: (data) => {
      if (!isInitialized) {
        init(data);
        isInitialized = true;
      }
    },
    isInitialized: () => {
      return isInitialized;
    },
    getPeople,
    getProjects,
    getTechstacks,
    getPeopleBySkill,
    getProjectStacks,
    getProjectMembers
  };
});

