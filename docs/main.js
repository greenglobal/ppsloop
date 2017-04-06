(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('select').material_select();
  }); // end of document ready
})(jQuery); // end of jQuery name space
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};;(function (name, factory) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory();
  } else {
    var root = window || {};if (root.define && root.define.amd) {
      root.define([], factory);
    } else if (root.exports) {
      root.exports = factory();
    } else {
      root[name] = factory();
    }
  }
})("doc", function () {
  var isUndefined = function isUndefined(v) {
    return v === undefined;
  };var isObject = function isObject(v) {
    return !isUndefined(v) && (typeof v === "undefined" ? "undefined" : _typeof(v)) === "object";
  };var isString = function isString(v) {
    return typeof v === "string";
  };var isNumber = function isNumber(v) {
    return typeof v === "number";
  };var isElement = function isElement(v) {
    return v instanceof HTMLElement;
  };var isFunction = function isFunction(v) {
    return v && {}.toString.call(v) === "[object Function]";
  };var trim = function trim(s, all) {
    if (!isString(s)) {
      return "";
    }var x = s ? s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : s || "";if (x && all) {
      return x.replace(/\r?\n|\r/g, " ").replace(/\s\s+|\r/g, " ");
    }return x;
  };var normalize = function normalize(k, v) {
    var reg = /^([a-z]+)([A-Z]{1})([a-z]+)$/;var mat = k.match(reg);if (mat && mat.index === 0) {
      var a = [];a.push(mat[1]);a.push("-");a.push(mat[2]);a.push(mat[3]);k = a.join("").toLowerCase();
    }if (isNumber(v)) {
      v += "px";
    }return { key: k, value: v };
  };var add, create, get, query, queryAll;var nav = navigator;var win = window;var doc = document;get = function get(el) {
    var p = (isString(el) ? doc.getElementById(el) : el) || null;if (p && isElement(p)) {
      (function () {
        var pc = p.classList;p.hasClass = function (c) {
          c = trim(c, true);if (!c) {
            return false;
          }return pc.contains(c);
        };p.addClass = function (c) {
          c = trim(c, true);if (!c) {
            return false;
          }var a = c.split(" ");if (a.length > 1) {
            a.forEach(function (s) {
              pc.add(s);
            });
          } else {
            pc.add(c);
          }return p;
        };p.removeClass = function (c) {
          c = trim(c, true);if (!c) {
            return false;
          }var a = c.split(" ");if (a.length > 1) {
            a.forEach(function (s) {
              pc.remove(s);
            });
          } else {
            pc.remove(c);
          }return p;
        };p.toggleClass = function (c) {
          c = trim(c, true);if (!c) {
            return false;
          }var a = c.split(" ");if (a.length > 1) {
            a.forEach(function (s) {
              pc.toggle(s);
            });
          } else {
            pc.toggle(c);
          }return p;
        };p.setProperty = function (o) {
          for (var k in o) {
            if (o[k] !== "") {
              var v = o[k];if (isString(v) || isNumber(v)) {
                p.setAttribute(k, v);
              }
            }
          }return p;
        };p.setStyle = function (o) {
          var a = [];if (isObject(o)) {
            for (var k in o) {
              if (o[k] !== "") {
                var v = o[k];if (isString(v) || isNumber(v)) {
                  var x = normalize(k, v);a.push([x.key, x.value].join(":"));
                }
              }
            }
          } else if (isString(o)) {
            a = o.split(";");
          }var s = p.getAttribute("style");if (s) {
            var b = s.split(";");a = a.concat(b);
          }a.push("");p.setAttribute("style", a.join(";"));return p;
        };p.empty = function () {
          p.innerHTML = "";return p;
        };p.html = function (s) {
          if (isUndefined(s)) {
            return p.innerHTML;
          }p.innerHTML = s;return p;
        };p.destroy = function () {
          if (p.parentNode) {
            p.parentNode.removeChild(p);
          }
        };
      })();
    }return p;
  };add = function add(tag, parent) {
    var p = parent ? get(parent) : doc.body;var d = isElement(tag) ? tag : doc.createElement(tag);p.appendChild(d);return get(d);
  };create = function create(tag) {
    return get(doc.createElement(tag));
  };query = function query(c) {
    var el = void 0;var tmp = doc.querySelector(c);if (tmp) {
      el = get(tmp);
    }return el;
  };queryAll = function queryAll(c) {
    var els = [];var tmp = doc.querySelectorAll(c);if (tmp) {
      for (var i = 0; i < tmp.length; i++) {
        els.push(get(tmp[i]));
      }
    }return els;
  };var onready = function onready(fn) {
    var rt = doc.readyState;var c = rt !== "loading";if (c) {
      setTimeout(fn, 0);
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  };var Event = function () {
    var isGecko = function (ua) {
      var n = ua.toLowerCase();return (/gecko/i.test(n)
      );
    }(nav.userAgent);return { on: function on(element, event, fn) {
        if (fn && isFunction(fn)) {
          var el = isString(element) ? get(element) : element;if (el && isElement(el)) {
            if (event === "wheel") {
              event = isGecko ? "DOMMouseScroll" : "mousewheel";
            }if (el.addEventListener) {
              el.addEventListener(event, fn, false);
            } else if (el.attachEvent) {
              el.attachEvent("on" + event, fn);
            }
          }
        }
      }, off: function off(element, event, fn) {
        if (fn && isFunction(fn)) {
          var el = isString(element) ? get(element) : element;if (el && isElement(el)) {
            if (el.removeEventListener) {
              el.removeEventListener(event, fn, false);
            } else if (el.detachEvent) {
              el.detachEvent("on" + event, fn);
            }
          }
        }
      }, simulate: function simulate(element, event) {
        var evt = void 0;var el = isString(element) ? get(element) : element;if (doc.createEventObject) {
          evt = doc.createEventObject();el.fireEvent("on" + event, evt);
        } else {
          evt = doc.createEvent("HTMLEvents");evt.initEvent(event, true, true);el.dispatchEvent(evt);
        }
      }, stop: function stop(e) {
        e.cancelBubble = true;if (e.stopPropagation) {
          e.stopPropagation();
        }if (e.preventDefault) {
          e.preventDefault();
        }return false;
      }, locate: function locate(e) {
        var evt = e || win.event;var targ = evt.target || evt.srcElement;if (targ && targ.nodeType === 3) {
          targ = targ.parentNode;
        }return get(targ);
      } };
  }();return { ready: onready, one: query, all: queryAll, get: get, add: add, create: create, Event: Event };
});


(function (name, factory) {
  var root = window || {};
  if (root.define && root.define.amd) {
    root.define([], factory);
  } else if (root.exports) {
    root.exports = factory();
  } else {
    root[name] = factory();
  }
})('PPSW', function () {
  var _doc = doc,
      Event = _doc.Event;


  var _people = [];
  var _projects = [];
  var _techstacks = [];
  var _techPeopleMap = [];
  var _techProjectMap = [];

  var _peopleGrid = void 0;
  var _projectGrid = void 0;
  var _techStackGrid = void 0;

  var listTechstacks = void 0;
  var listPeople = void 0;
  var listProjects = void 0;

  var getPeopleWhoKnow = function getPeopleWhoKnow(stack) {
    var indexOfStack = _techstacks.indexOf(stack);
    if (indexOfStack < 0) {
      return [];
    }
    var peopleWhoKnowThis = _techPeopleMap[indexOfStack];

    if (!peopleWhoKnowThis || !Array.isArray(peopleWhoKnowThis)) {
      return [];
    }

    return peopleWhoKnowThis.map(function (stt) {
      return _people[stt] || null;
    }).filter(function (item) {
      return item !== null;
    });
  };

  var getProjectBuiltWith = function getProjectBuiltWith(stack) {

    var indexOfStack = _techstacks.indexOf(stack);
    if (indexOfStack < 0) {
      return [];
    }

    var projectsThatUse = _techProjectMap[indexOfStack];

    if (!projectsThatUse || !Array.isArray(projectsThatUse)) {
      return [];
    }

    return projectsThatUse.map(function (stt) {
      return _projects[stt] || null;
    }).filter(function (item) {
      return item !== null;
    });
  };

  var getPeopleSkills = function getPeopleSkills(people) {
    var name = people.value;

    var indexOfPeople = _people.indexOf(name);
    if (indexOfPeople < 0) {
      return [];
    }

    var skillIndexes = [];
    for (var k = 0; k < _techPeopleMap.length; k++) {
      var item = _techPeopleMap[k];
      if (item.includes(indexOfPeople)) {
        skillIndexes.push(k);
      }
    }
    return skillIndexes.map(function (k) {
      return _techstacks[k] || null;
    }).filter(function (item) {
      return item !== null;
    });
  };

  var getPeople = function getPeople() {
    return _people;
  };
  var getProjects = function getProjects() {
    return _projects;
  };
  var getTechStacks = function getTechStacks() {
    return _techstacks;
  };

  var getPeopleGrid = function getPeopleGrid() {
    return _peopleGrid;
  };
  var getProjectGrid = function getProjectGrid() {
    return _projectGrid;
  };
  var getTechStackGrid = function getTechStackGrid() {
    return _techStackGrid;
  };

  var onStackSelect, onPeopleSelect;

  var random = function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var pick = function pick(arr) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var b = arr.slice(0);
    b.sort(function () {
      return Math.random() > 0.5;
    });
    return b.splice(0, count);
  };

  var getStartPoint = function getStartPoint(dir) {
    var settings = {
      tr2bl: [1000, -1000],
      tl2br: [-1000, -1000],
      l2r: [-1000, 0],
      r2l: [1000, 0],
      t2b: [0, -1000],
      random: [random(0, 2000) - 1000, random(0, 2000) - 1000]
    };
    return settings[dir] || [0, 0];
  };

  var applyEffect = function applyEffect(cards, _ref) {
    var _ref$direction = _ref.direction,
        direction = _ref$direction === undefined ? 'tr2bl' : _ref$direction,
        _ref$acceleration = _ref.acceleration,
        acceleration = _ref$acceleration === undefined ? 'slowdown' : _ref$acceleration;

    var _getStartPoint = getStartPoint(direction),
        _getStartPoint2 = _slicedToArray(_getStartPoint, 2),
        startX = _getStartPoint2[0],
        startY = _getStartPoint2[1];

    var timerStep = 5;
    var timeout = timerStep;
    var speedStep = 200;
    var startSpeed = cards.length * speedStep;
    if (acceleration === 'slowdown') {
      startSpeed = speedStep;
    }

    cards.map(function (item) {
      return item.$el;
    }).map(function (el) {
      if (acceleration === 'fastup') {
        startSpeed -= speedStep;
        el.style.transition = "all " + startSpeed + "ms";
      } else if (acceleration === 'slowdown') {
        startSpeed += speedStep;
        el.style.transition = "all " + startSpeed + "ms";
      } else if (acceleration === 'random') {
        startSpeed = 200 + Math.random() * 2500;
        el.style.transition = "all " + startSpeed + "ms";
      }

      if (direction === 'vrandom') {
        var _getStartPoint3 = getStartPoint('random');

        var _getStartPoint4 = _slicedToArray(_getStartPoint3, 2);

        startX = _getStartPoint4[0];
        startY = _getStartPoint4[1];
      }
      el.style.transform = "translate(" + startX + "px, " + startY + "px)";
      return el;
    }).forEach(function (el) {
      timeout += timerStep;
      setTimeout(function () {
        el.style.transform = 'translate(0px, 0px)';
      }, timeout);
    });
  };

  var makeCard = function makeCard(label) {
    var image = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var el = doc.create('div');
    el.addClass('card');
    var inner = doc.add('div', el);
    if (image) {
      inner.setAttribute('style', "background-image: url(" + image + ")");
    }
    inner.html("<label>" + label + "</label>");
    return el;
  };

  var makeGrid = function makeGrid(el, entries) {
    var grid = doc.add('div', el);
    grid.addClass('grid');

    var cards = entries.map(function (item) {
      var card = makeCard(item);
      grid.appendChild(card);
      return {
        value: item,
        $el: card
      };
    });

    return {
      grid: grid,
      cards: cards
    };
  };

  var renderPeoplePanel = function renderPeoplePanel(el, entries) {
    el.empty();
    var fieldset = doc.add('fieldset', el);
    var legend = doc.add('legend', fieldset);
    legend.html('Team');
    return makeGrid(el, entries);
  };

  var renderProjectPanel = function renderProjectPanel(el, entries) {
    el.empty();
    var fieldset = doc.add('fieldset', el);
    var legend = doc.add('legend', fieldset);
    legend.html('Projects');

    return makeGrid(el, entries);
  };

  var renderTechPanel = function renderTechPanel(el, entries) {
    el.empty();
    var fieldset = doc.add('fieldset', el);
    var legend = doc.add('legend', fieldset);
    legend.html('Tech stacks');

    return makeGrid(el, entries);
  };

  onPeopleSelect = function onPeopleSelect(people) {
    var skills = getPeopleSkills(people);
    _techStackGrid = listTechstacks(pick(skills, 12));
    var techstackCards = _techStackGrid.cards;
    techstackCards.forEach(function (entry) {
      var $el = entry.$el;
      Event.on($el, 'click', function () {
        onStackSelect(entry);
      });
    });
  };

  onStackSelect = function onStackSelect(skill) {
    var ppl = getPeopleWhoKnow(skill.value);
    doc.all('.techstack .card.focus').forEach(function (item) {
      item.removeClass('focus');
    });
    skill.$el.addClass('focus');

    _peopleGrid = listPeople(pick(ppl, 8));
    _peopleGrid.cards.forEach(function (entry) {
      var $el = entry.$el;
      Event.on($el, 'click', function () {
        onPeopleSelect(entry);
      });
    });

    var $sltEffectDirection = doc.get('sltEffectDirection');
    var $sltEffectAcceleration = doc.get('sltEffectAcceleration');
    var direction = $sltEffectDirection.value;
    var acceleration = $sltEffectAcceleration.value;

    applyEffect(_peopleGrid.cards, {
      direction: direction,
      acceleration: acceleration
    });

    var pro = getProjectBuiltWith(skill.value);
    _projectGrid = listProjects(pick(pro, 4));
  };

  var setupLayout = function setupLayout(el) {
    var container = doc.add('div', el);
    container.addClass('pps-widget');

    var topPart = doc.add('div', container);
    topPart.addClass('top');

    var panelPeople = doc.add('div', topPart);
    panelPeople.addClass('people');
    var panelTech = doc.add('div', topPart);
    panelTech.addClass('techstack');

    var bottomPart = doc.add('div', container);
    bottomPart.addClass('bottom');
    var panelProject = doc.add('div', bottomPart);
    panelProject.addClass('project');

    listTechstacks = function listTechstacks(entries) {
      return renderTechPanel(panelTech, entries);
    };

    listPeople = function listPeople(entries) {
      return renderPeoplePanel(panelPeople, entries);
    };

    listProjects = function listProjects(entries) {
      return renderProjectPanel(panelProject, entries);
    };

    var skills = pick(getTechStacks(), 12);

    _techStackGrid = listTechstacks(skills);

    var _isStarted = false;

    var start = function start() {

      _isStarted = true;

      var techstackCards = _techStackGrid.cards;
      techstackCards.forEach(function (entry) {
        Event.on(entry.$el, 'click', function () {
          onStackSelect(entry);
        });
      });

      onStackSelect(techstackCards[0]);
    };

    window.onscroll = function () {
      if (!_isStarted) {
        var o = document.body.scrollTop;
        var t = container.offsetTop;
        if (Math.abs(o - t) < 200) {
          start();
        }
      }
    };
  };

  var load = function load(data) {
    var _data$people = data.people,
        people = _data$people === undefined ? [] : _data$people,
        _data$projects = data.projects,
        projects = _data$projects === undefined ? [] : _data$projects,
        _data$techstacks = data.techstacks,
        techstacks = _data$techstacks === undefined ? [] : _data$techstacks,
        _data$techPeopleMap = data.techPeopleMap,
        techPeopleMap = _data$techPeopleMap === undefined ? [] : _data$techPeopleMap,
        _data$techProjectMap = data.techProjectMap,
        techProjectMap = _data$techProjectMap === undefined ? [] : _data$techProjectMap;


    _people = people;
    _projects = projects;
    _techstacks = techstacks;
    _techPeopleMap = techPeopleMap;
    _techProjectMap = techProjectMap;

    var els = doc.all('ppswidget');
    els.map(setupLayout);
  };

  return {
    getPeople: getPeople,
    getProjects: getProjects,
    getTechStacks: getTechStacks,
    getProjectBuiltWith: getProjectBuiltWith,
    getPeopleWhoKnow: getPeopleWhoKnow,
    listTechstacks: listTechstacks,
    listProjects: listProjects,
    listPeople: listPeople,
    getPeopleGrid: getPeopleGrid,
    getProjectGrid: getProjectGrid,
    getTechStackGrid: getTechStackGrid,
    applyEffect: applyEffect,
    load: load
  };
});

PPSW.load(JSON.parse('{"people":["Thuong Bui","Thuy Bui","Toan Dang","Trong Dinh","Tran Dinh","Thang Do","Hao Duong","Thanh Ha","Thanh Ho","Tuan Ho","Vu Hoang","Truong Hoang","Thang Huynh","Duc Le","Tan Le","Tuan Le","Khanh Le","Oanh Le","Tinh Le","Vinh Le","Tin Le","Dong Nguyen","Hoa Nguyen","Vu Nguyen","Hieu Nguyen","Vy Nguyen","Bao Nguyen","Hoa Nguyen","Giang Nguyen","Thanh Nguyen","Thanh Nguyen","Toan Pham","Thao Pham","Thanh Pham","Viet Phan","Thien Phung","Binh Quan","Huy Ta","Minh Than","Chinh Thoi","Toan Ton","Phu Tran","Hoai Tran","Huyen Tran","Lanh Tran","Phong Tran","Nam Tran","Sang Tran","Au Truong","Tien Truong","Anh Truong","Ninh Vo","Dung Vo","An Vo","Thanh Vo"],"projects":["ATeam","Bible","Bookstoop","Buddha","Business Matching","BYTO","Escope","Happy ever after dating","Himalayan Bowls","IdeaPod","Images Luxury Nail Lounge","IoT Sensor","iTravelLocal","JustLook","Koe Kyogakusha","Lyad","MeiReve","NavMobi","OneDoor","Read This Next","Roomi","Slidelane","Space Race","Stuff N Style","Swivel","The Gong Shop","YouLook","Youth1"],"techstacks":["HTML","CSS","JavaScript","jQuery","Bootstrap","Angular","React","VueJS","Node.js","Express","Koa","Hapijs","Restify","LoopBack","Socket.io","Meteor","Sails.js","TypeScript","Mocha","Tape","Karma","Ionic","ReactNative","Electron","NW.js","Wordpress","Laravel","OctoberCMS","Zend","Yii","CakePHP","Drupal","Joomla","Magento","Shopify","Prestashop","Opencart",".NET","Umbraco","DotNetNuke","Java","Liferay","ZK","Spring","Hibernate","Play Framework","Python","Django","Flask","RoR","Android","Objective-C","CocoaPod","GraphQL","Relay","IoT","SQLite","MySQL","MariaDB","MS SQLServer","PostgreSQL","Cassandra","MongoDB","Neo4j","Redis","Lucence","Sphinx","Amazon Cloud Search","Elastic Search","Solr","GitHub","Bitbucket","Docker","Vagrant","Travis","CodeShip","Jenkins","Apache","nginx","AWS","Azure","DigitalOcean","Firebase","Stripe","Coinbase","Auth0","Sketch","Photoshop","Hand drawing","Visual design","3D design","VR design","Interaction design","Motion design","Prototyping","Content strategy","Metrics & Analytics","Functional Programming","Machine Learning","AI","Virtual Reality","Network","Security","System Architect","Design Pattern","OOP","DevOps","Bitcoin","POS","TensorFlow","Scikit-Learn","Big Data","Natural Language Processing","Haskell","Erlang","Go","Rust","Swift","Scala","OpenCV","Data Visualization","Data Analysis","Data Mining","RabbitMQ","Webpack","Rollup","Kubernetes","Varnish"],"techPeopleMap":[[14,28,37,9,2],[54,55,7,33,25,18,49,30],[49,52,2,20,1,8,27,55,42,3,25],[42,35,37,22,18,40,13,47,24,20,54,53,7],[0,40,54,43,31,33,45,3],[7,35,12,15,30,14,27],[50,11,51,26,12],[48,47,51,9,35,0,10,20,39,27,38,42,55,3,45],[14,42,45,25,6,0,44,48,54,38],[48,9,55,18,32,28,13,5,40,19,10,8,27],[5,10,1,38,9,26,23,30,28,11,29,6,24,3,42],[25,49,34,55,26,46,54,27,44,8,37,42,50,4,33,29,6],[54,19,15,38,48,21,37,0,12,30,9,31,42,40,4],[50,12,55,2,27,43,26,1,3,48,36,34,25,30,53,9],[51,36,3],[43,5,21,51,46,7,6,2,11,4,49,44,23,10,1,53,40],[0,26,31,53,23,8,14],[37,21,34,27,3,13,9],[55,9,2,42,18,6,26,12,19,47,24,33,53,49,36,28,5],[15,19],[42,53,4,25,38,14,17,28,49,52,41,9],[46,14,29,39,6,28,3,20,55,45,17,36,43,51,33],[37,35,3,5,29,45,42,16,49,46,17,18,8,10,22,43,15,20],[9,39,10],[6,46,4,3,5,43,11,33,34],[47,4,20,21,10,6,34,37,31],[55,14,21,3,0,34],[34,8,36,15,52,16,7,24,3,44,19,49,39,47],[4,29,51,43,46,33,36,14,7,26],[17,24,53,33,3,27,7,41,25,46,39,49,28,40,20],[30,39,21,7,10,43,17,4,54,33,37,0,19,31],[9,7,32,11,53,47,18,30,35,22,5,12,50,36,26],[42,22,35,47,46,12,39,54,3,24,7,17,30],[37,49,22,43,10,45,27,35,36,17,16,19],[18,7,49,13,11,34,8,44,1,45,24,6,22,48,51],[46,10,13,1,23,14,49,50,2,34,3,11,52,18,45,27],[23,48,54,2,0,55,34,13,46,22,18,26,4,42,35,33],[28,41,40,4,9,42,49],[2,51,21,35,40,44,36,12],[11,43,38,17,50,28],[51,2,37,53,14],[41,45,21,49],[51,36,10,53,11,8,37,1,2,41,5,44,18,13],[21,53,18,32,50,42,52,46,28,16],[28,35,16,20,24,36,18,2],[14,43,5,0,54,20,41,28,47,49,23,48,40,8,50,18,29],[16,42,15,32,27,4,51,10,55,50,12,5,28,25,21,3],[13,22,31,0,51,8,26],[31,27,28,39,23,18,22,42,21,41,44,33,29,0,5,12,10,4],[24,21,17,30,43,55,9,19,7,27,44,48],[11,27,37,19,13,16,24],[18,15,21,34,3],[47,45,41],[55,43,30,17,27,47,15,22,49,18,39],[11,39,23,35,44,12,14,27,43,36,3,37,48],[51,7,5,41,22,36,24,40,32,12,14,17,9],[26,23,28,29,15,38,40,7,5,48,4,33,41],[30,23,39,48,54,35,28,47,13,45,41,37,7],[40,21,45,36,18,29,47,10,11,24,55],[46,18,20,45,47,54,8,55,9,31,32,44,26,50,29],[0,50,45,40,19,44,12],[38,29,48,26,37,19,1],[26,54,19,12,52,51,44,17,41,36,14,6,31,11,22],[25,35,39,43,52,3],[43,19,1,48,34,40,20,15,35,24],[29,7,24,43,21,12],[41,27,22,1,42,34,16,44,10,55,52,53,12,32,31,18],[34,46,51,24,32,3,53,14,16,8,28,20,25,52],[32,14,9,5,55,39,34,50,27,7,18,44,13,22,21,53,33,10,30],[51,30,26,46,36,44,10,42,13],[28,50,47,14,39,10,30,4,6,42,37,45,23,31,35],[37,33,39,49,51,31,40,22,15],[35,37,13,45,49,53,32,30,12,39,16],[11,49,31,6,23,50,1,55,0,22,42,3],[36,47,17,51],[22,21,2,41,12,15,20,29,33,47,28,19,5,50,17],[55,54,42,1,37,22,8,11,0,16,18,32,46,47,3,39,44,17],[23,22,34,21,42,20,18,50,46,4],[23,41,21,13,52,9,40,1,4,14,15,46,43,42,31],[4,35,36,43,7],[18,40],[53,6,5,11],[53,30,50,16,24,0,38,23,21,31,35,8,11,20,18,13],[43,15,55,29,26,13,23,6,41,18,42,54,32,47],[37,26,17,5,24,36,39,52,3,14,28],[23,18,26,9,4,0,46,53,54],[23,9,27,49,32,37,19],[2,55,49,52,3],[54,37,1,46,27,7],[15,30,35,54,48,19,46,36,43,11,14,18],[11,16,1,41,31,52,10,55,48,22,32],[4,0,32,31,12,17,22,19,48],[34,26,6,48],[31,38,52,10,4,44,32,29,36,12],[26,5,55,52,4,9,45],[18,35,4,31],[9,37,11,29,23,45,43,17,16,2,38],[20,50,23,36,48,42],[9,1,49,12],[46,10,2,34,45,12],[42,25,16,8,12,0,23],[2,42,33,36,23,22,11,46],[42,1,31,47,21,49,8,19,3,20,46,0,30,12],[19,8,14,23,35,32,4,40],[4,20,10,41,18,3,42,37,13,45,24,9,19,51,32,48,2,12],[39,29,10,2,37,46,31,49,0,20],[55,48,31,2,50,17,13,41,15,24,51,53,9],[48,50,47,46,54],[51,31,33,3,43,49,4,24,2,22,1,52,17],[25,9,40,3,30,42,51],[0,20,16,15,31],[39,50,7,25,47,22,2,38,24],[34,11,43,15,42,53,21,41,14,22,54,47,26,0,10],[50,0,30,20],[22,8,36,15,7,27,6,30,42],[18,34,26,32,48,43,31,12,22,47,28,50],[48,13,37,44,19,5,33,26,50,31,35,17,23,38,29,16,6,21],[15,26,17,18,28,16,6,4,12,42,47,52,45],[33,27,23,49,18,50,17,22,19,55,40,12,42,31],[3,46,52,47,22,34,44,41,27],[37,33,47,13,30,22,25,8,46,28],[45,30,41,11,13],[16,6,28,40,14,5,22,20,33],[5,47,54,14,39,35,28,22,55,52,20,16,51,38,12,8,50],[30,8,2,31,4,14,22,41],[34,14,40,21,51,49],[5,14,20,38,4,41,31,8,26,25,35],[38,16,17,29,6,32,5,13,3,34,0,37,9,44]],"techProjectMap":[[18,15,5,1,0,12,17,24,4,21,19],[21,2,28,16],[21,5,4,17,20,28,3,24,13,0,2,26,10,6],[27,0,5],[2,11,13,6,0,20,27],[15,7,8,28,24,25,1,2,11,9,16],[11,12,9,1,13,23,20,22],[26,20,3,7,13,28,11,17,16,0,21,19,23,14,6],[9,5,6,2,3,27,26,4,18,16,28,14,24,7],[5,28,20],[6,28,19,21,5,13,11],[23,17,14,22,19,16],[27,9,2],[24,6,2,18,23,19,3,8,20,11,4],[27,4,16,2,22,14,18,24,13,20,26],[13,20,23,8,5,2,16,24,17,11,7,27,10,9,25,6],[20,6,9,7,4,22,16,14,0,19,18,23,28,15,25],[15,23,25,10,9,18,20,14,6,8,17,13,26,2,24,1],[18,6,11,24,16,25,20],[22,1,14],[7,5,28,3,24,9,18,0,19,8,11],[4,5,1,13,6],[8,14,27],[4,25,17,27,26],[2,12,24,14,20,18,19,15,6,3],[13,0,28,22,23,6,21,27,5,4],[9,15,3,22,4,26,13,28,24,19,25,20,1],[10,13,15,24,11,19,3,5,0,1,25,28,16],[20,24,8,10,22,4,3,14,6],[14,0,27,8,2,22,26,21,28,16,17,19],[8,20,26,22,21,19,4,2,25,5,27,15,3],[23,1,25,5,20,16,2,22,9,8,14,6,24,19],[5,17,22],[1,24,20,13,2,0],[28,6,21],[17,15,8],[9,3,10,0,25,19],[28,16,25,13,15,21,5,0,10,24],[28,5,4,1,10,17,20,13,7,25,24,6,14,26,9],[22,25,5,26,11,4],[4,21,7,17,9,20,6,14,19,16,27,10,2,26,0],[2,5,14,17,28,21,27,16,4,6,0,15,3,20],[11,15,27,26],[6,16,11,24,21,4,5,17,20],[4,20,18,21],[23,18,20,16,15,6,10,9,24,25],[19,0,7,3,15,13,14,5,20,10,26,8,25,28,12],[22,5,8,10,9,18,14,6,15,12,0,2,27,23],[3,4,6,2,10,18,20,14,19],[4,7,28,1,17,21,19,2,26],[11,17,22,9,2,4,15,25,5,12,26],[13,7,10,1,5,18,17],[5,23,3,15,6,18,10,24,4,7,2,27],[5,15,18],[25,16,27,23,1,4,9,3,7,0,14],[3,20,23,2],[22,4,5,0,21],[26,15,0,3,2,28,12,22],[25,8,17,11,2,23,26,19,7,3,13,5,16,22],[4,14,23,8,20,10,13,22,21,15],[7,25,12,5,13,8],[2,22,11,21,4,25,26],[9,16,2,18,25,1],[22,8,25,28,7,19],[18,27,23,3,13,24,6,26,25,19,0,1,17],[26,1,12,23,28,6,11,9,16,20,14,17,10,15,2,5],[7,17,24,12,3,19,27,28],[14,21,24,12,4,19,26,25,16,28,5,20,17,11],[12,26,7],[4,25,5,19,12,20,26,24,3,14,23,16,10,21,28],[21,6,4,1,2,17,16,24,8,23,13,7,20],[1,8,24],[17,22,13,1,16],[6,16,21,15],[18,9,8,7,23,22],[12,19,0,24,10,13,21,9],[27,25],[16,9,26,0,24,2,12,20,19,5,23],[12,7,19,5,4,11,6,23,16,14,28,18],[21,20,13,6,23,16,27],[1,0,28,11,16,4,9,20,14,19,24,13,23,10],[18,13,6,20,8,9,22,4],[12,8,7,14,4,25,5,9,18,27,2,23],[26,3,9,21,11,13],[9,11,3],[5,4,18,14,24,28,16,8,17,2,3,22],[5,28,23,10],[7,3,11],[27,13,0,15,20,11,25,24,12],[18,22,9,10,8],[13,18,26,24,10,25,6,28,5,8,9,22,27,7],[26,5,16,2,8,21,4,12],[24,20,2,4,11,12,23,3,14],[8,14,17,12,4,28,13,22,11,18,6,23,3],[28,5,22,16,18,19,27],[20,23,10,3],[20,13,8,10,9,17,26,21,14,4],[2,20,0,19,10,26,22],[5,1,0,10],[9,14,7,28,24,16,3,12,23,22],[17,20,19,7],[13,10,22,12,2,5,8,21,14,18],[9,13,11,10,26],[6,7,3,0,24,18,5,9,26,20,4,28,12,14],[7,0,5,15,21,2,10],[10,0,20],[6,16,22,21,18,17,25,3],[18,0,14,28,25,24,4,6,7,12,23,3],[26,1,27,19,24,21,10,11,12,20,6],[23,16,25,8,17,14,18,13,15,20,10,9,0,24,19],[4,19,25,3],[8,25,15],[12,23,27,25,19,21,5,0,10],[9,21,6,8,23,27],[28,15,24,26],[15,19,3,8,4],[18,17,22,4,16,11,2],[16,18,14,2,4,0,26,3,28,8,11,21],[18,17,2,7],[28,10,6],[27,12],[23,20,5,22,9,11,0,19,8,4,28,10,1,7,17],[4,2],[14,12,10,15,7,21,24,20],[9,17,18,0,13,4,11,21,12,27,23,28,2,26,8,25],[0,16,7,3,8,19,28,13,17],[12,17,11,22,13,14,2,26,7],[28,22,20,16,15,27,26,24,19,12,9,14]]}'));