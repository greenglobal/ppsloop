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

  let people = [];
  let projects = [];
  let techstacks = [];

  let $elLogo;
  let $elPeople;
  let $elProject;
  let $elStack;

  let $btnViewAllPeople;
  let $btnViewAllProject;

  let isInitialized = false;
  let isStarted = false;

  let random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let pick = (arr, count = 1) => {
    let b = arr.slice(0);
    b.sort(() => {
      return random(0, 100) > 50;
    });
    return b.splice(0, count);
  };

  let randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
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
      backgroundColor = randomColor(),
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
      entry.image = makeSrc(opts);
    } else if (entry.hasOwnProperty('stacks') && !entry.image) {
      opts.text = entry.name;
      opts.width = 170;
      opts.height = 50;
      entry.image = makeSrc(opts);
    }
    return entry;
  };

  let applyEffect = (cards, direction = 'tl2br') => {
    let x = -200;
    let y = -200;
    let timer = 50;

    if (direction === 'b2t') {
      x = 0;
      y = 500;
    }
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

  let cleanPeoplePanel = () => {
    return new Promise((resolve) => {
      let x = random(0, 500) + 250;
      let y = random(0, 100) - 50;
      let timer = 50;
      doc.all('.team-block .pps-card').forEach((el) => {
        setTimeout(() => {
          el.style.transition = `all ${timer}ms cubic-bezier(0.455, 0.03, 0.515, 0.955);`;
          el.style.transform = `translate(-${x}px, ${y}px)`;
          el.style.opacity = '0.0';
        }, timer);
        timer += 50;
      });
      setTimeout(resolve, 300);
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
    card.addClass('items pps-card');

    let [
      name,
      image
    ] = entry;

    let tpl = `
      <div class="item-wrap">
        <img src="${image}" alt="${name}">
      </div>
    `;

    card.html(tpl);
    return card;
  };

  let updateLeftPanelLogo = (stack, image) => {
    $elLogo.html(`<img src="${image}" alt="${stack}">`);
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
      <div class="avata">
        <img src="${image}" alt="${name}">
      </div>
      <p class="member-name"><a>${name}</a></p>
      <p class="member-description">${yoe}</p>
    `;

    card.html(tpl);
    return card;
  };

  let buildProjectCard = (entry) => {
    let card = doc.create('DIV');
    card.addClass('project-items pps-card');

    let {
      image,
      name
    } = entry;

    let tpl = `
      <a class="project-link">
        <img src="${image}" alt="${name}">
      </a>
    `;

    card.html(tpl);
    return card;
  };

  let randerProjectPanel = (ppj, isAppend = false) => {
    if (!isAppend) {
      $elProject.empty();
    }
    let remain = [];
    if (ppj.length > 4) {
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

  let randerPeoplePanel = (ppl, isAppend = false) => {
    if (!isAppend) {
      $elPeople.empty();
    }

    let remain = [];
    if (ppl.length > 8) {
      remain = ppl.slice(8, ppl.length);
      let arr = ppl.slice(0, 8);
      ppl = arr;
    }

    let result = ppl.map((entry) => {
      let card = buildPersonCard(entry);
      if (isAppend) {
        let last = $elPeople.querySelector('.view-all');
        $elPeople.insertBefore(card, last);
      } else {
        $elPeople.appendChild(card);
      }
      return {
        $el: card,
        data: entry
      };
    });

    let peopleCards = result.reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);

    if (peopleCards.length) {
      applyEffect(peopleCards, isAppend ? 'b2t' : 'r2l');
    }

    $btnViewAllPeople.onclick = null;
    $btnViewAllPeople.addClass('is-disabled');
    if (remain.length > 0) {
      $btnViewAllPeople.removeClass('is-disabled');
      $btnViewAllPeople.onclick = () => {
        randerPeoplePanel(remain, true);
      };
    }
    return result;
  };

  let onStackSelect = (data) => {
    let skill = data[0];

    updateLeftPanelLogo(skill, data[1]);

    let _people = getPeopleWhoHas(skill);
    if (_people.length < 8) {
      _people = _people.concat(pick(getPeople(), 20));
    }

    let _peopleToAdd = _people.map((item) => {
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
        yoe = `${_y} year${_y > 0 ? 's' : ''} of experience`;
      }

      return {
        name,
        image,
        yoe
      };
    });


    randerPeoplePanel(stabilize(_peopleToAdd).msort({yoe: -1}));

    let _projects = getProjectsThatUse(skill);

    if (_projects.length < 4) {
      _projects = _projects.concat(pick(getProjects(), 8));
    }

    _projects = _projects.map((item) => {
      return {
        name: item.name,
        image: item.image
      };
    });

    randerProjectPanel(stabilize(_projects).shuffle());
  };

  let setupStackClickEvent = (stack) => {
    let {
      $el,
      data
    } = stack;

    doc.Event.on($el, 'click', () => {
      cleanPeoplePanel().then(() => {
        onStackSelect(data);
      });
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
    let stacks = pick(getTechstacks(), 42);
    let entries = randerStackPanel(stacks);
    onStackSelect(entries[0]);
  };

  let setupLayout = (container) => {
    let contentBlock = doc.add('DIV', container);

    let wrapContent = doc.add('DIV', contentBlock);
    wrapContent.addClass('wrap-content');

    // left part
    let leftContent = doc.add('DIV', wrapContent);
    leftContent.addClass('left-content');


    let mobSelector = doc.add('DIV', leftContent);
    mobSelector.html('<p class="team-text show-mobile">Choose Technology</p>');

    let leftContentHead = doc.add('DIV', leftContent);
    leftContentHead.addClass('logo-team');

    let teamSection = doc.add('DIV', leftContent);
    teamSection.addClass('team-block');

    let teamSectionHead = doc.add('H3', teamSection);
    teamSectionHead.addClass('block-text');
    teamSectionHead.html('Team');

    let panelPeople = doc.add('DIV', teamSection);
    panelPeople.addClass('team-content');
    panelPeople.html('');

    let btnViewAllPeople = doc.add('DIV', teamSection);
    btnViewAllPeople.addClass('view-all');
    btnViewAllPeople.html('<a class="btn-viewall">View all</a>');

    let projectSection = doc.add('DIV', leftContent);
    projectSection.addClass('project-block');

    let projectSectionHead = doc.add('H3', projectSection);
    projectSectionHead.addClass('block-text');
    projectSectionHead.html('Projects');

    let panelProject = doc.add('DIV', projectSection);
    panelProject.addClass('project-content');
    panelProject.html('');

    let btnViewAllProject = doc.add('DIV', projectSection);
    btnViewAllProject.addClass('view-all');
    btnViewAllProject.html('<a class="btn-viewall">View all</a>');

    // right part
    let rightContent = doc.add('DIV', wrapContent);
    rightContent.addClass('right-content');

    let rightContentHead = doc.add('H3', rightContent);
    rightContentHead.addClass('content-name');
    rightContentHead.html('<span class="content-text">Tech stacks</span>');

    let panelTechstack = doc.add('DIV', rightContent);
    panelTechstack.addClass('content-details');

    $elLogo = leftContentHead;
    $elPeople = panelPeople;
    $elProject = panelProject;
    $elStack = panelTechstack;
    $btnViewAllPeople = btnViewAllPeople;
    $btnViewAllProject = btnViewAllProject;

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

