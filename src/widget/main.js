/**
 * PPSW.js
 * @ndaidong
 */

/* global doc stabilize Siema */

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

  const DEFAULT_AVATAR = 'https://trello-attachments.s3.amazonaws.com/5718abe55503a09d21d311cc/58ddb4c8718b316eb81fea48/1b48edb4cfa5a98a42526f942d97f7e9/no-avatar.png';
  const DEFAULT_PHOTO = 'https://trello-attachments.s3.amazonaws.com/5718abe55503a09d21d311cc/58ddb4c8718b316eb81fea48/fcd6027aedffad62752e7e5fd84d12e3/no-image.png';

  const TECH_STACK_NUMBER = 27;
  const DELTA_TO_START = -100;

  let imgPath = '';

  let peoplePerPage = 4;
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

  if (!Array.from) {
    Array.from = (arr) => {
      return [].slice.call(arr);
    };
  }
  let onscroll = () => {
    return true;
  };

  let onresize = () => {
    return true;
  };

  let random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

  let setupSliderEvents = (id, total = 0) => {

    let wd = doc.get(id);

    let perPage = peoplePerPage;

    let btns = wd.querySelectorAll('.pps__swiper--nav');

    let bprev = doc.get(btns[0]);
    let bnext = doc.get(btns[1]);

    let siema;

    let resetState = (cslide) => {
      bprev.removeClass('pps__swiper--nav--disable pps__swiper--nav--enable');
      bnext.removeClass('pps__swiper--nav--disable pps__swiper--nav--enable');

      if (total > perPage) {
        if (cslide < 1) {
          bprev.addClass('pps__swiper--nav--disable');
          bnext.addClass('pps__swiper--nav--enable');
        } else if (cslide >= total - perPage) {
          bprev.addClass('pps__swiper--nav--enable');
          bnext.addClass('pps__swiper--nav--disable');
        } else {
          bprev.addClass('pps__swiper--nav--enable');
          bnext.addClass('pps__swiper--nav--enable');
        }

        let els = Array.from(wd.querySelectorAll('.pps__btn-link'));
        els.forEach((btn) => {
          let b = doc.get(btn);
          let p = doc.get(b.parentNode);
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

    let righPanel = doc.all('.pps__frame--right')[0];

    siema = new Siema({
      selector: '.pps__swiper-container',
      duration: 200,
      easing: 'ease-out',
      perPage,
      startIndex: 0,
      draggable: !(righPanel && righPanel.offsetParent),
      threshold: 20,
      loop: false,
      onInit: () => {
        $elPeople.style.cursor = 'default';
        resetState(0);
      },
      onChange: () => {
        resetState(siema.currentSlide);
      }
    });

    return siema;
  };

  let setActiveState = (origin) => {
    doc.all('.pps__list--stack-item.pps-active').forEach((el) => {
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

  let applyEffect = (cards, pointer) => {

    let {
      left: pleft,
      top: ptop,
      width: pwidth,
      height: pheight
    } = pointer;

    let t = 20;

    let arr = cards.splice(0, peoplePerPage);

    let ot = $elSwiperWapper.offsetTop;
    let ol = $elSwiperWapper.offsetLeft;

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
      let shadow = doc.create('DIV');
      shadow.addClass('pps__swiper-slide');
      shadow.setStyle({
        top,
        left,
        width,
        height,
        border: 'solid px #eee'
      });

      let node = doc.get($el.cloneNode(true));
      node.setStyle({
        position: 'absolute',
        zIndex: 10,
        width,
        height
      });
      node.style.left = `${pleft + pwidth / 2}px`;
      node.style.top = `${ptop - pheight / 2}px`;
      node.style.transform = 'scale(0.05)';

      $elContentBlock.appendChild(node);

      if ($el.parentNode) {
        $el.parentNode.replaceChild(shadow, $el);
      }

      t += 60;
      setTimeout(() => {
        node.style.left = `${left}px`;
        node.style.top = `${top}px`;
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

  let applySimpleEffect = (cards) => {
    let timeout = 10;
    cards.filter((item) => {
      return item && item.$el;
    }).map((item) => {
      return item.$el;
    }).map((el) => {
      el.style.opacity = '0.1';
      el.style.transform = `translate(400px, 0px)`;
      return el;
    }).forEach((el) => {
      setTimeout(() => {
        el.style.opacity = '1.0';
        el.style.transform = `translate(0px, 0px)`;
      }, timeout);
      timeout += 30;
    });
  };

  let buildStackCard = (entry) => {
    let card = doc.create('DIV');
    card.addClass('pps__list--stack-item');

    let [
      name,
      image
    ] = entry;

    let atag = doc.add('A', card);
    atag.addClass('pps-inner ripple');
    atag.style.backgroundImage = `url(${imgPath}${image})`;
    atag.setAttribute('title', name);

    return card;
  };

  let updateLeftPanelLogo = (stack, image) => {
    $elLogo.style.backgroundImage = `url(${imgPath}${image})`;
    $elLogo.setAttribute('title', stack);
  };

  let buildPersonCard = (entry) => {
    let card = doc.create('DIV');
    card.addClass('pps__swiper-slide pps-card');

    let {
      image,
      name,
      yoe
    } = entry;

    if (image) {
      image = `${imgPath}${image}`;
    } else {
      image = DEFAULT_AVATAR;
    }

    let tpl = `
      <div class="pps__person-avatar" style="background-image:url(${image})"></div>
      <div class="pps__person-name">${name}</div>
      <div class="pps__person-exp">${yoe} of experience</div>
    `;

    card.html(tpl);
    return card;
  };

  let buildProjectCard = (entry) => {
    let card = doc.create('DIV');
    card.addClass('pps__list--project-item pps-card');

    let {
      logo: image,
      name,
      alias
    } = entry;

    let atag = doc.add('A', card);
    atag.addClass('pps-inner');
    let link = `/${alias}`;
    if (document.URL.indexOf('.greenglobal.vn') === -1) {
      link = `http://test-v2.greenglobal.vn:9500/${alias}`;
    }
    atag.setAttribute('href', link);

    atag.setAttribute('title', name);

    if (image) {
      image = `${imgPath}${image}`;
    } else {
      image = DEFAULT_PHOTO;
    }

    atag.style.backgroundImage = `url(${image})`;

    return card;
  };

  let randerProjectPanel = (ppj, isAppend = false) => {
    if (!isAppend) {
      $elProject.empty();
    }

    if (!ppj.length) {
      return false;
    }

    ppj = stabilize(ppj).shuffle();

    let remain = [];
    if (!isAppend && ppj.length > 4) {
      remain = ppj.slice(4, ppj.length);
      let arr = ppj.slice(0, 4);
      ppj = arr;
    }

    let result = ppj.map((entry) => {
      let card = buildProjectCard(entry);
      if (isAppend) {
        let last = $elProject.querySelector('.pps__view-all');
        $elProject.insertBefore(card, last);
      } else {
        $elProject.appendChild(card);
      }
      return {
        $el: card,
        data: entry
      };
    });
    let projectCards = result.reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);

    if (projectCards.length) {
      applySimpleEffect(projectCards);
    }

    $btnViewAllProject.onclick = null;
    $btnViewAllProject.addClass('pps__is-disabled');
    if (remain.length > 0) {
      $btnViewAllProject.removeClass('pps__is-disabled');
      $btnViewAllProject.onclick = () => {
        randerProjectPanel(remain, true);
      };
    }

    return result;
  };

  let randerPeoplePanel = (ppl, origin) => {

    let pointer = getLocatePoint(origin);

    $elPeople.empty();

    let result = stabilize(ppl).shuffle().map((entry) => {
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
    setupSliderEvents(widgetId, total);

    if (peopleCards.length) {
      applyEffect(peopleCards, pointer);
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

      let yoe = '';
      if (yys.length) {
        yoe = yys[0][1];
      } else {
        let _y = random(1, 9);
        yoe = `${_y} year${_y > 0 ? 's' : ''} of exp`;
      }

      return {
        name,
        image,
        yoe
      };
    });

    setActiveState(origin);

    if (_people.length > 1) {
      _people = stabilize(_people).msort({yoe: -1});
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
      arr = stabilize(_projects).shuffle();
    }

    randerProjectPanel(arr);
  };

  let setupStackClickEvent = (stack) => {
    let {
      $el,
      data
    } = stack;

    doc.Event.on($el, 'click', () => {
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
        doc.all('.pps__list--stack-item').forEach((el) => {
          el.removeClass('pps-active');
          let a = el.querySelector('a.pps-inner');
          if (a.getAttribute('title') === v) {
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

  let updateSettings = () => {
    let wsize = $elContentBlock.offsetWidth;
    peoplePerPage = 4;
    if (wsize < 800) {
      peoplePerPage = 3;
    }
    if (wsize < 400) {
      peoplePerPage = 2;
    }
    let blockPeople = $elContentBlock.querySelector('.pps__block--people');
    let cstyle = window.getComputedStyle(blockPeople, null);
    let paddingLeft = cstyle.getPropertyValue('padding-left');
    if (paddingLeft) {
      let pl = parseInt(paddingLeft, 10);
      deltaPaddingLeft = pl ? pl + 5 : -5;
    }
  };

  let activateRipple = (target) => {
    let ripple = doc.add('DIV', target);
    ripple.addClass('pps-flash');
    ripple.addEventListener('animationend', () => {
      ripple.destroy();
    });
  };

  let start = (delta, offsetTop) => {
    if (isStarted) {
      return false;
    }

    isStarted = true;

    let items = doc.all('.pps__list--stack-item');

    if (!items.length) {
      return false;
    }

    let el = items[0];

    let righPanel = doc.all('.pps__frame--right')[0];

    if (offsetTop > 0 && righPanel && righPanel.offsetParent) {

      el.addClass('pps-highlight');

      let hand = doc.add('DIV', el);
      hand.addClass('pps-hand');

      setTimeout(() => {
        hand.addClass('pps-hand-move');
      }, 100);

      hand.addEventListener('transitionend', () => {
        let target = doc.get(el.querySelector('a.ripple'));
        activateRipple(target);
        onStackSelect(pickedStacks[0], el);

        setTimeout(() => {
          hand.addClass('pps-hand-disappear');
        }, 100);
        hand.addEventListener('transitionend', () => {
          hand.destroy();
          el.removeClass('pps-highlight');
        });
      });

    } else {
      onStackSelect(pickedStacks[0], el);
    }


    return isStarted;
  };

  let setupLayout = (container) => {
    let labels = [
      'Team',
      'Projects',
      'Tech stacks'
    ];

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

    let ipath = container.getAttribute('image-path');
    if (ipath) {
      if (ipath.endsWidth === '/') {
        ipath = ipath.slice(0, -1);
      }
      imgPath = ipath;
    }

    let contentBlock = doc.add('DIV', container);
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
            <label class="pps__label pps__label--no-padding">
              ${labels[2]}
            </label>
            <div class="pps__techlogo">
              <div class="pps__techlogo-image" id="${widgetId}_ppsTechLogo"></div>
              <div class="pps__select-outer">
                <select class="pps__select" id="${widgetId}_ppsStackSelector">
                  <option value="">Choose technology:</option>
                  ${sltOption}
                </select>
              </div>
              <a class="pps__techselect-arrow"></a>
            </div>
          </div>
          <div class="pps__block--people">
            <label class="pps__label">
              ${labels[0]} <span class="pps__teamnumber--small" id="${widgetId}_ppsTeamNumber"></span>
            </label>
            <div class="pps__swiper-wrapper" id="${widgetId}_ppsSwiperWapper">
              <div class="pps__swiper--nav pps__swiper--prev">
                <a class="pps__btn-link prev"></a>
              </div>
              <div class="pps__swiper-container" id="${widgetId}_ppsSwiperContainer"></div>
              <div class="pps__swiper--nav pps__swiper--next">
                <a class="pps__btn-link next"></a>
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
            <div class="pps__view-all pps__is-disabled" id="${widgetId}_ppsProjectViewAll">
              <a class="pps__btn-viewall">View all</a>
            </div>
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

    $elStack = doc.get(`${widgetId}_ppsStackList`);
    $elPeople = doc.get(`${widgetId}_ppsSwiperContainer`);
    $elProject = doc.get(`${widgetId}_ppsProjectList`);

    $elLogo = doc.get(`${widgetId}_ppsTechLogo`);
    $elTeamNum = doc.get(`${widgetId}_ppsTeamNumber`);
    $elSelector = doc.get(`${widgetId}_ppsStackSelector`);
    $elSwiperWapper = doc.get(`${widgetId}_ppsSwiperWapper`);

    $elContentBlock = contentBlock;

    $btnViewAllProject = doc.get(`${widgetId}_ppsProjectViewAll`);

    updateSettings();

    setupSelectorEvent();

    randerStackPanel(pickedStacks);

    window.onresize = onresize;
    window.onscroll = onscroll;

    onscroll();
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

      if (window.doc) {
        let els = doc.all('ppswidget') || [];
        els.map(setupLayout);
      }

    } catch (err) {
      console.error(err);
    }
  };

  onscroll = () => {
    if (!isStarted) {
      let offsetTop = getPosition($elContentBlock).y;
      let wHeight = window.innerHeight;
      let delta = offsetTop - wHeight;
      if (delta < DELTA_TO_START) {
        start(delta, offsetTop, wHeight);
      }
    }

  };

  onresize = () => {
    updateSettings();
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

