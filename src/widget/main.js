/**
 * PPSW.js
 * @ndaidong
 */

/* global doc stabilize */

((name, factory) => {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    var root = window || {};
    if (root.define && root.define.amd) {
      root.define([], factory());
    } else if (root.exports) {
      root.exports = factory();
    } else {
      root[name] = factory();
    }
  }
})('PPSW', () => {

  const TECH_STACK_NUMBER = 30;

  let people = [];
  let projects = [];
  let techstacks = [];

  let pickedStacks = [];

  let $elLogo;
  let $elPeople;
  let $elProject;
  let $elStack;

  let $btnViewAllProject;

  let isInitialized = false;
  let isStarted = false;
  let widgetId = '';

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

  let getPeopleWhoHas = (skill) => {
    let sk = skill.toLowerCase();
    return getPeople().filter((item) => {
      return item.skills.some((prope) => {
        return prope[0].toLowerCase() === sk;
      });
    });
  };

  let getProjectsThatUse = (skill) => {
    let sk = skill.toLowerCase();
    return getProjects().filter((item) => {
      let stacks = item.stacks.map((st) => {
        return st.toLowerCase();
      });
      return stacks.includes(sk);
    });
  };

  let makeSrc = (opts) => {

    let {
      text = '?!?',
      fontSize = 20,
      width = 160,
      height = 120,
      backgroundColor = 'ffffff',
      textColor = '000000'
    } = opts;

    let params = [
      `txt=${text}`,
      `txtsize=${fontSize}`,
      `w=${width}`,
      `h=${height}`,
      `bg=${backgroundColor}`,
      `txtclr=${textColor}`
    ].join('&');

    return `https://placeholdit.imgix.net/~text?${params}`;
  };

  let addFakeImage = (entry) => {
    let opts = {
      fontSize: 16,
      width: 180,
      height: 50
    };
    if (Array.isArray(entry)) {
      if (!entry[1]) {
        opts.text = entry[0];
        entry[1] = makeSrc(opts);
      }
      return entry;
    }

    if (entry.hasOwnProperty('skills') && !entry.image) {
      opts.text = entry.name.split(' ').map((part) => {
        return part.charAt(0);
      }).join('');
      opts.fontSize = 50;
      opts.width = 160;
      opts.height = 180;
      opts.backgroundColor = 'f3f5f6';
      entry.image = makeSrc(opts);
    } else if (entry.hasOwnProperty('stacks') && !entry.logo) {
      opts.text = entry.name;
      opts.width = 170;
      opts.height = 50;
      entry.logo = makeSrc(opts);
    }
    return entry;
  };

  let setupSliderEvents = (id) => {

    let wd = doc.get(id);
    let ctn = doc.get(`${id}_ppsSwiperContainer`);
    let outerWidth = ctn.parentNode.offsetWidth;
    let innerWidth = ctn.offsetWidth;

    let min = outerWidth - innerWidth;
    let max = 0;
    let delta = innerWidth / outerWidth;

    ctn.setAttribute('data-translateX', 0);
    ctn.style.transform = `translateX(${0}px)`;

    let slideTo = (e) => {
      let target = doc.get(e.target);

      let dir = 0;
      if (target.hasClass('pps__swiper--prev')) {
        dir = -1;
      } else if (target.hasClass('pps__swiper--next')) {
        dir = 1;
      }

      let currx = Number(ctn.getAttribute('data-translateX'));

      let x = 0;
      let distance = innerWidth / delta;
      if (dir < 0) {
        x = Math.min(max, currx + distance);
      } else if (dir > 0) {
        x = Math.max(min, currx - distance);
      }


      if (x !== currx) {
        ctn.setAttribute('data-translateX', x);
        ctn.style.transform = `translateX(${x}px)`;
      }
    };

    let doNothing = () => {
      return false;
    };
    let els = Array.from(wd.querySelectorAll('.pps__swiper--nav'));
    els.forEach((btn) => {
      btn.onclick = delta > 0 ? slideTo : doNothing;
    });
  };

  let setActiveState = (origin) => {
    doc.all('.pps__list--stack-item.active').forEach((el) => {
      el.removeClass('active');
    });
    origin.addClass('active');
  };

  let getLocatePoint = (origin) => {
    let ol = origin.offsetLeft;
    let ot = origin.offsetTop;
    let ow = origin.offsetWidth;
    let oh = origin.offsetHeight;

    return {
      left: Math.floor(ol - ow / 2),
      top: Math.floor(ot - oh / 2)
    };
  };

  let applyEffect = (cards) => {
    let x = -200;
    let y = -200;
    let timer = 50;

    cards.filter((item) => {
      return item && item.$el;
    }).map((item) => {
      return item.$el;
    }).map((el) => {
      x += 20;
      y += 20;
      el.style.transition = `all ${timer}ms cubic-bezier(0.455, 0.03, 0.515, 0.955);`;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.opacity = '0.0';
      return el;
    }).forEach((el) => {
      setTimeout(() => {
        el.style.transition = `all ${timer}ms cubic-bezier(0.455, 0.03, 0.515, 0.955);`;
        el.style.transform = `translate(0px, 0px)`;
        el.style.opacity = '1.0';
      }, timer);
      timer += 50;
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
      timeout += 5;
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
    atag.addClass('inner');
    atag.style.backgroundImage = `url(${image})`;
    atag.setAttribute('title', name);

    return card;
  };

  let updateLeftPanelLogo = (stack, image) => {
    $elLogo.style.backgroundImage = `url(${image})`;
    $elLogo.setAttribute('title', stack);
  };

  let buildPersonCard = (entry) => {
    let card = doc.create('DIV');
    card.addClass('team-member pps-card');

    let {
      image,
      name,
      yoe
    } = entry;

    let tpl = `
      <div class="pps__swiper-slide pps-card">
        <div class="pps__person-avatar" style="background-image:url(${image})"></div>
        <div class="pps__person-name">${name}</div>
        <div class="pps__person-exp">${yoe} of experience</div>
      </div>
    `;

    card.html(tpl);
    return card;
  };

  let buildProjectCard = (entry) => {
    let card = doc.create('DIV');
    card.addClass('pps__list--project-item pps-card');

    let {
      logo: image,
      name
    } = entry;

    let atag = doc.add('A', card);
    atag.addClass('inner');
    atag.style.backgroundImage = `url(${image})`;
    atag.setAttribute('title', name);

    return card;
  };

  let randerProjectPanel = (ppj, isAppend = false) => {
    if (!isAppend) {
      $elProject.empty();
    }
    let remain = [];
    if (!isAppend && ppj.length > 4) {
      remain = ppj.slice(4, ppj.length);
      let arr = ppj.slice(0, 4);
      ppj = arr;
    }

    let result = ppj.map((entry) => {
      let card = buildProjectCard(entry);
      if (isAppend) {
        let last = $elProject.querySelector('.view-all');
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
    $btnViewAllProject.addClass('is-disabled');
    if (remain.length > 0) {
      $btnViewAllProject.removeClass('is-disabled');
      $btnViewAllProject.onclick = () => {
        randerProjectPanel(remain, true);
      };
    }

    return result;
  };

  let randerPeoplePanel = (ppl, origin) => {

    let pointer = getLocatePoint(origin);
    console.log(pointer);

    $elPeople.empty();
    let result = ppl.map((entry) => {
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

    if (peopleCards.length) {
      applyEffect(peopleCards, 'r2l');
    }
    setupSliderEvents(widgetId);
    return result;
  };

  let getFakeProjects = (len) => {
    return stabilize(projects).pick(len);
  };

  let onStackSelect = (data, origin) => {
    let skill = data[0];

    updateLeftPanelLogo(skill, data[1]);

    let _people = getPeopleWhoHas(skill).map((item) => {
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
    randerPeoplePanel(stabilize(_people).msort({yoe: -1}), origin);

    let _projects = getProjectsThatUse(skill);
    if (!_projects.length) {
      _projects = [getFakeProjects(1)];
    }

    let arr = _projects.map((item) => {
      return {
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

  let getStart = () => {
    isStarted = true;
    let $el = doc.all('.pps__list--stack-item')[0];
    onStackSelect(pickedStacks[0], $el);
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
          <div class="pps__select-outer">
            <select class="pps__select">
              <option value="">Choose technology:</option>
              ${sltOption}
            </select>
          </div>
          <div class="pps__techlogo-outer">
            <div class="pps__techlogo" id="${widgetId}_ppsTechLogo"></div>
          </div>
          <div class="pps__block--people">
            <label class="pps__label">
              ${labels[0]}
            </label>
            <div class="pps__swiper-wrapper">
              <div class="pps__swiper--nav pps__swiper--prev ripple"></div>
              <div id="${widgetId}_ppsSwiperContainer" data-translateX="0" class="pps__swiper-container"></div>
              <div class="pps__swiper--nav pps__swiper--next ripple"></div>
            </div>
          </div>
        </div>
        <div class="pps__frame--bottom">
          <div class="pps__block--project">
            <label class="pps__label">
              ${labels[1]}
            </label>
            <div class="pps__list--project" id="${widgetId}_ppsProjectList"></div>
            <div class="view-all" id="${widgetId}_ppsProjectViewAll">
              <a class="btn-viewall">View all</a>
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

    $btnViewAllProject = doc.get(`${widgetId}_ppsProjectViewAll`);

    randerStackPanel(pickedStacks);

    window.onresize = () => {
      setupSliderEvents(widgetId);
    };

  };

  let init = (json) => {
    try {
      let o = typeof json === 'string' ? JSON.parse(json) : json;
      let {
        people: _people,
        projects: _projects,
        techstacks: _techstacks
      } = o;
      people = _people.map(addFakeImage);
      projects = _projects.map(addFakeImage);
      techstacks = _techstacks.map(addFakeImage);

      let els = doc.all('ppswidget') || [];
      els.map(setupLayout);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    init: (data) => {
      if (!isInitialized) {
        init(data);
      }
    },
    start: () => {
      if (!isStarted) {
        getStart();
      }
    },
    isInitialized: () => {
      return isInitialized;
    },
    isStarted: () => {
      return isStarted;
    },
    getPeople,
    getProjects,
    getTechstacks,
    getPeopleWhoHas,
    getProjectsThatUse
  };
});
