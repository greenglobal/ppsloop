/**
 * PPSW.js
 * @ndaidong
 */

/* global doc */

((name, factory) => {
  let root = window || {};
  if (root.define && root.define.amd) {
    root.define([], factory);
  } else if (root.exports) {
    root.exports = factory();
  } else {
    root[name] = factory();
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
    return getPeople().filter((item) => {
      return item.skills.some((prope) => {
        return prope[0] === skill;
      });
    });
  };

  let getProjectsThatUse = (skill) => {
    return getProjects().filter((item) => {
      return item.stacks.includes(skill);
    });
  };

  let getStartPoint = (dir) => {
    let startX = 0;
    let startY = 0;

    if (dir === 'r2l') {
      startX = 1000;
      startY = random(0, 2000) - 1000;
    } else if (dir === 'b2t') {
      startY = 1000;
      startX = random(0, 2000) - 1000;
    }

    return {
      startX,
      startY
    };
  };

  let applyEffect = (cards, direction = 'rtl') => {
    let {
      startX,
      startY
    } = getStartPoint(direction);

    let timerStep = 5;
    let timeout = timerStep;
    let speedStep = 200;
    let startSpeed = speedStep;

    cards.filter((item) => {
      return item && item.$el;
    }).map((item) => {
      return item.$el;
    }).map((el) => {
      startSpeed += speedStep;
      el.style.transition = `all ${startSpeed}ms`;
      el.style.transform = `translate(${startX}px, ${startY}px)`;
      return el;
    }).forEach((el) => {
      timeout += timerStep;
      setTimeout(() => {
        el.style.transform = 'translate(0px, 0px)';
      }, timeout);
    });
  };

  let buildStackCard = (entry) => {
    let card = doc.create('DIV');
    card.addClass('items');

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
    card.addClass('team-member');

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
    card.addClass('project-items');

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

      let yoe = random(1, 9) + ' years of experience';
      if (yys.length) {
        yoe = yys[0][1];
      }

      return {
        name,
        image,
        yoe
      };
    });

    randerPeoplePanel(_peopleToAdd);

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

    randerProjectPanel(_projects);
  };

  let setupStackClickEvent = (stack) => {
    let {
      $el,
      data
    } = stack;

    doc.Event.on($el, 'click', () => {
      onStackSelect(data);
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

    getStart();
  };

  var init = () => {
    let els = doc.all('ppswidget');
    els.map(setupLayout);
  };

  return {
    load: (json) => {
      let o = JSON.parse(json);
      let {
        people: _people,
        projects: _projects,
        techstacks: _techstacks
      } = o;
      people = _people;
      projects = _projects;
      techstacks = _techstacks;
    },
    init,
    getPeople,
    getProjects,
    getTechstacks,
    getPeopleWhoHas,
    getProjectsThatUse
  };
});

