/** v0.6.12 */
Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},i=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,n=function(e){var t=i(e);return Math.min(Math.max(t,0),r)};return function(e){var i=this,r=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var s,o=arguments.length>1?arguments[1]:void 0;if(void 0!==o){if(!t(o))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(s=arguments[2])}for(var a,l=n(r.length),h=t(i)?Object(new i(l)):new Array(l),c=0;c<l;)a=r[c],h[c]=o?void 0===s?o(a,c):o.call(s,a,c):a,c+=1;return h.length=l,h}}()),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),r=i.length>>>0;if(0===r)return!1;for(var n=0|t,n=Math.max(0<=n?n:r-Math.abs(n),0);n<r;){var s=i[n],o=e;if(s===o||"number"==typeof s&&"number"==typeof o&&isNaN(s)&&isNaN(o))return!0;n++}return!1}}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var i=this.toString();("number"!=typeof t||!isFinite(t)||Math.floor(t)!==t||t>i.length)&&(t=i.length),t-=e.length;var r=i.lastIndexOf(e,t);return-1!==r&&r===t}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Siema",[],t):"object"==typeof exports?exports.Siema=t():e.Siema=t()}(this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),o=function(){function e(t){var i=this;r(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return s(e,[{key:"init",value:function(){if(window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null},this.selector.addEventListener("touchstart",this.touchstartHandler,{passive:!0}),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler)),null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-e,0),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=this.drag.endX-this.drag.startX,t=Math.abs(e),i=Math.ceil(t/(this.selectorWidth/this.perPage));e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null}}},{key:"touchstartHandler",value:function(e){e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mousedownHandler",value:function(e){e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){e.preventDefault(),this.pointerDown&&(this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e,1),this.currentSlide=e<=this.currentSlide?this.currentSlide-1:this.currentSlide,this.updateFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t,0,e),this.currentSlide=t<=this.currentSlide?this.currentSlide+1:this.currentSlide,this.updateFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),e){for(var i=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)i.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},i=e;for(var r in i)t[r]=i[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=o,e.exports=t.default}])});

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('PPSW', ['exports'], factory) :
  (factory((global.PPSW = global.PPSW || {})));
}(this, (function (exports) { 'use strict';

  /**
   * realdom
   * @ndaidong
  **/

  var ob2Str = (val) => {
    return {}.toString.call(val);
  };

  var isUndefined = (v) => {
    return v === undefined; // eslint-disable-line no-undefined
  };

  var isObject = (v) => {
    return !isUndefined(v) && typeof v === 'object';
  };

  var isString = (v) => {
    return typeof v === 'string';
  };

  var isNumber = (v) => {
    return typeof v === 'number';
  };

  var isElement = (v) => {
    return ob2Str(v).match(/^\[object HTML\w*Element]$/);
  };

  var isFunction = (v) => {
    return v && ob2Str(v) === '[object Function]';
  };

  var trim = (s, all) => {
    if (!isString(s)) {
      return '';
    }
    let x = s ? s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : s || '';
    if (x && all) {
      return x.replace(/\r?\n|\r/g, ' ').replace(/\s\s+|\r/g, ' ');
    }
    return x;
  };

  var normalize = (k, v) => {

    let reg = /^([a-z]+)([A-Z]{1})([a-z]+)$/;
    let mat = k.match(reg);
    if (mat && mat.index === 0) {
      let a = [];
      a.push(mat[1]);
      a.push('-');
      a.push(mat[2]);
      a.push(mat[3]);
      k = a.join('').toLowerCase();
    }

    if (isNumber(v)) {
      v += 'px';
    }

    return {
      key: k,
      value: v
    };
  };

  var nav = navigator;
  var win = window;
  var doc = document;

  var attachBehaviors;

  var get = (el) => {
    let p = (isString(el) ? doc.getElementById(el) : el) || null;
    if (p && !p.___BEHAVIORS_ATTACHED) {
      return attachBehaviors(p);
    }
    return p;
  };

  var add = (tag, parent) => {
    let p = parent ? get(parent) : doc.body;
    let d = isElement(tag) ? tag : doc.createElement(tag);
    p.appendChild(d);
    return get(d);
  };

  var create = (tag) => {
    return get(doc.createElement(tag));
  };

  var query = (selector, root = doc) => {
    let el;
    let tmp = root.querySelector(selector);
    if (tmp) {
      el = get(tmp);
    }
    return el;
  };

  var queryAll = (selector, root = doc) => {
    let els = [];
    let tmp = root.querySelectorAll(selector);
    if (tmp) {
      Array.from(tmp).forEach((el) => {
        els.push(get(el));
      });
    }
    return els;
  };

  attachBehaviors = (p) => {
    if (p && isElement(p)) {

      p.query = (selector) => {
        return query(selector, p);
      };
      p.queryAll = (selector) => {
        return queryAll(selector, p);
      };

      let pc = p.classList;

      p.hasClass = (className) => {
        let c = trim(className, true);
        if (!c) {
          return false;
        }
        return pc.contains(c);
      };

      p.addClass = (className) => {
        let c = trim(className, true);
        if (!c) {
          return false;
        }
        let a = c.split(' ');
        pc.add(...a);
        return p;
      };

      p.removeClass = (className) => {
        let c = trim(className, true);
        if (!c) {
          return false;
        }
        let a = c.split(' ');
        pc.remove(...a);
        return p;
      };

      p.toggleClass = (className) => {
        let c = trim(className, true);
        if (!c) {
          return false;
        }
        let a = c.split(' ');
        if (a.length > 1) {
          a.forEach((s) => {
            pc.toggle(s);
          });
        } else {
          pc.toggle(c);
        }
        return p;
      };

      p.replaceClass = (oldClass, newClass) => {
        let o = trim(oldClass, true);
        let n = trim(newClass, true);
        p.removeClass(o);
        p.addClass(n);
        return p;
      };

      p.setProperty = (o) => {
        for (let k in o) {
          if (o[k] !== '') {
            let v = o[k];
            if (isString(v) || isNumber(v)) {
              p.setAttribute(k, v);
            }
          }
        }
        return p;
      };

      let fixStyle = (s) => {
        return s.replace(/;+/gi, ';').replace(/:/gi, ': ') + ';';
      };

      p.setStyle = (o) => {

        let a = [];
        if (isObject(o)) {
          for (let k in o) {
            if (o[k] !== '') {
              let v = o[k];
              if (isString(v) || isNumber(v)) {
                let x = normalize(k, v);
                a.push([x.key, x.value].join(':'));
              }
            }
          }
        } else if (isString(o)) {
          a = o.split(';');
        }
        let s = p.getAttribute('style');
        if (s) {
          let b = s.split(';');
          a = b.concat(a);
        }
        a.push('');
        let st = a.filter((item) => {
          return trim(item, true).length > 0;
        }).map((item) => {
          let parts = item.split(':');
          return parts.map((part) => {
            return trim(part, true);
          }).join(':');
        }).join('; ');
        p.setAttribute('style', fixStyle(st));
        return p;
      };

      p.empty = () => {
        p.innerHTML = '';
        return p;
      };

      p.html = (s) => {
        if (isUndefined(s)) {
          return p.innerHTML;
        }
        p.innerHTML = s;
        return p;
      };

      p.destroy = () => {
        if (p.parentNode) {
          p.parentNode.removeChild(p);
        }
      };

      p.___BEHAVIORS_ATTACHED = 1;

    }
    return p;
  };



  var Event = (() => {

    let isGecko = ((ua) => {
      let n = ua.toLowerCase();
      return (/gecko/i).test(n);
    })(nav.userAgent);

    return {
      on: (element, event, fn) => {
        if (fn && isFunction(fn)) {
          let el = isString(element) ? get(element) : element;
          if (el && isElement(el)) {
            if (event === 'wheel') {
              event = isGecko ? 'DOMMouseScroll' : 'mousewheel';
            }
            if (el.addEventListener) {
              el.addEventListener(event, fn, false);
            } else if (el.attachEvent) {
              el.attachEvent('on' + event, fn);
            }
          }
        }
      },
      off: (element, event, fn) => {
        if (fn && isFunction(fn)) {
          let el = isString(element) ? get(element) : element;
          if (el && isElement(el)) {
            if (el.removeEventListener) {
              el.removeEventListener(event, fn, false);
            } else if (el.detachEvent) {
              el.detachEvent('on' + event, fn);
            }
          }
        }
      },
      simulate: (element, event) => {
        let evt;
        let el = isString(element) ? get(element) : element;
        if (doc.createEventObject) {
          evt = doc.createEventObject();
          el.fireEvent('on' + event, evt);
        } else {
          evt = doc.createEvent('HTMLEvents');
          evt.initEvent(event, true, true);
          el.dispatchEvent(evt);
        }
      },
      stop: (e) => {
        e.cancelBubble = true;
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        if (e.preventDefault) {
          e.preventDefault();
        }
        return false;
      },
      locate: (e) => {
        let evt = e || win.event;
        let targ = evt.target || evt.srcElement;
        if (targ && targ.nodeType === 3) {
          targ = targ.parentNode;
        }
        return get(targ);
      }
    };
  })();

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();













  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /**
   * PPSW.js
   * @ndaidong
   */

  /* global Siema */

  var TECH_STACK_NUMBER = 27;
  var DELTA_TO_START = -80;
  var PERSON_CARD_SIZE = 200;

  var UA = navigator.userAgent;

  var imgPath = '';

  var deltaPaddingLeft = 20;

  var people = [];
  var projects = [];
  var techstacks = [];

  var pickedStacks = [];

  var $elLogo = void 0;
  var $elTeamNum = void 0;
  var $elSelector = void 0;
  var $elSwiperWapper = void 0;
  var $elContentBlock = void 0;

  var $elPeople = void 0;
  var $elProject = void 0;
  var $elStack = void 0;

  var $btnViewAllProject = void 0;

  var _isInitialized = false;
  var _isStarted = false;
  var widgetId = '';

  var isSafari = function isSafari() {
    var reg = /Macintosh; Intel Mac OS X/i;
    return reg.test(UA) && !/chrome/i.test(UA);
  };

  var shuffle = function shuffle(arr) {
    return arr.sort(function () {
      var r = Math.random();
      if (r === 0 || r === 0.5 || r === 1) {
        return 0;
      }
      return r > 0.5;
    });
  };

  var getPeople = function getPeople() {
    return [].concat(toConsumableArray(people));
  };

  var getProjects = function getProjects() {
    return [].concat(toConsumableArray(projects));
  };

  var getTechstacks = function getTechstacks() {
    return [].concat(toConsumableArray(techstacks));
  };

  var getPeopleBySkill = function getPeopleBySkill(skill) {
    var sk = skill.toLowerCase();
    return getPeople().filter(function (item) {
      return item.skills.some(function (prope) {
        return prope[0].toLowerCase() === sk;
      });
    });
  };

  var getProjectStacks = function getProjectStacks(skill) {
    var sk = skill.toLowerCase();
    return getProjects().filter(function (item) {
      var stacks = item.stacks.map(function (st) {
        return st.toLowerCase();
      });
      return stacks.includes(sk);
    });
  };

  var getProjectMembers = function getProjectMembers(pname) {
    var name = pname.toLowerCase();
    var p = getProjects().filter(function (item) {
      var nlower = item.name.toLowerCase();
      return name === nlower || name === item.alias;
    });
    if (p.length > 0) {
      return p[0].members;
    }
    return [];
  };

  var getImgPath = function getImgPath(c) {
    var ipath = c.getAttribute('image-path');
    if (ipath) {
      if (ipath.endsWith === '/') {
        ipath = ipath.slice(0, -1);
      }
    }
    return ipath;
  };

  var getPosition = function getPosition(el) {

    var xPos = 0;
    var yPos = 0;

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

  var setupSlider = function setupSlider(container) {

    var wrapper = container.query('.pps__swiper-wrapper');
    var slider = wrapper.query('.pps__swiper-container');

    var perPage = 1;
    var wsize = wrapper.offsetWidth;
    var esize = PERSON_CARD_SIZE;

    while (esize * perPage < wsize) {
      perPage++;
    }

    var siema = void 0;
    var btns = container.queryAll('.pps__swiper--nav');

    var bprev = get(btns[0]);
    var bnext = get(btns[1]);

    var resetState = function resetState(cslide) {

      bprev.removeClass('pps__swiper--nav--disable pps__swiper--nav--enable');
      bnext.removeClass('pps__swiper--nav--disable pps__swiper--nav--enable');

      var total = slider.queryAll('.pps__swiper-slide').length;

      var max = 1;
      var min = total - perPage;

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

        var els = container.queryAll('.pps__btn-link');
        els.forEach(function (btn) {
          var b = get(btn);
          var p = get(b.parentNode);
          if (p.hasClass('pps__swiper--nav--enable')) {
            b.addClass('ripple');
            p.onclick = function () {
              if (b.hasClass('prev')) {
                siema.prev(perPage);
              } else if (b.hasClass('next')) {
                siema.next(perPage);
              }
            };
          } else {
            setTimeout(function () {
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
      perPage: perPage,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false,
      onInit: function onInit() {
        resetState(0);
      },
      onChange: function onChange() {
        resetState(siema.currentSlide);
      }
    });

    return { siema: siema, perPage: perPage };
  };

  var setActiveState = function setActiveState(origin) {
    queryAll('.pps__list--stack-item.pps-active').forEach(function (el) {
      el.removeClass('pps-active');
    });
    origin.addClass('pps-active');
  };

  var getLocatePoint = function getLocatePoint(origin) {
    var ol = origin.offsetLeft;
    var ot = origin.offsetTop;
    var ow = origin.offsetWidth;
    var oh = origin.offsetHeight;

    return {
      left: Math.floor(ol - ow),
      top: Math.floor(ot - oh),
      width: ow,
      height: oh
    };
  };

  var applyEffect = function applyEffect(cards, pointer) {
    var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    var pleft = pointer.left,
        ptop = pointer.top,
        pwidth = pointer.width,
        pheight = pointer.height;


    var t = 20;

    var arr = cards.splice(0, perPage);

    var ot = $elSwiperWapper.offsetTop;
    var ol = $elSwiperWapper.offsetLeft;

    var iss = isSafari();
    var realTopDelta = iss ? 180 : 0;
    var realLeftDelta = iss ? 45 : -5;

    arr.filter(function (item) {
      return item && item.$el;
    }).map(function (item) {
      return item.$el;
    }).map(function (el) {
      return {
        top: ot + el.offsetTop,
        left: ol + el.offsetLeft + deltaPaddingLeft,
        width: el.offsetWidth,
        height: el.offsetHeight,
        $el: el
      };
    }).forEach(function (data) {
      var top = data.top,
          left = data.left,
          width = data.width,
          height = data.height,
          $el = data.$el;

      var shadow = create('DIV');
      shadow.addClass('pps__swiper-slide');
      shadow.setStyle({
        top: top,
        left: left,
        width: width,
        height: height,
        border: 'solid px #eee'
      });

      var node = get($el.cloneNode(true));
      node.setStyle({
        position: 'absolute',
        zIndex: 10,
        width: width,
        height: height
      });
      node.style.left = pleft + pwidth / 2 + 'px';
      node.style.top = ptop - pheight / 2 + 'px';
      node.style.transform = 'scale(0.1)';

      $elContentBlock.appendChild(node);

      if ($el.parentNode) {
        $el.parentNode.replaceChild(shadow, $el);
      }

      t += 60;
      setTimeout(function () {
        node.style.left = left - realLeftDelta + 'px';
        node.style.top = top - realTopDelta + 'px';
        node.style.transform = 'scale(1)';
      }, t);

      node.addEventListener('transitionend', function () {
        node.destroy();
        if (shadow.parentNode) {
          shadow.parentNode.replaceChild($el, shadow);
        }
      });
    });
  };

  var buildStackCard = function buildStackCard(entry) {
    var card = create('DIV');
    card.addClass('pps__list--stack-item');

    var _entry = slicedToArray(entry, 2),
        name = _entry[0],
        image = _entry[1];

    var rect = add('SPAN', card);
    rect.addClass('pps-inner ripple');
    rect.style.backgroundImage = 'url(' + imgPath + image + ')';
    rect.setAttribute('title', name);

    return card;
  };

  var updateLeftPanelLogo = function updateLeftPanelLogo(stack, image) {
    $elLogo.style.backgroundImage = 'url(' + imgPath + image + ')';
    $elLogo.setAttribute('title', stack);
  };

  var buildPersonCard = function buildPersonCard(entry) {
    var card = create('DIV');
    card.addClass('pps__swiper-slide pps-card');

    var image = entry.image,
        name = entry.name;


    var $avatar = add('DIV', card);
    $avatar.addClass('pps__person-avatar');

    if (image) {
      image = '' + imgPath + image;
      $avatar.style.backgroundImage = 'url(' + image + ')';
    }

    var $name = add('DIV', card);
    $name.addClass('pps__person-name');
    $name.html(name);

    return card;
  };

  var buildProjectCard = function buildProjectCard(entry) {
    var card = create('DIV');
    card.addClass('pps__list--project-item pps-card pps-card--transition');

    var image = entry.logo,
        name = entry.name,
        alias = entry.alias;


    var atag = add('A', card);
    atag.addClass('pps-inner');
    atag.setAttribute('href', '/' + alias);
    atag.setAttribute('title', name);

    if (image) {
      image = '' + imgPath + image;
      atag.style.backgroundImage = 'url(' + image + ')';
    }

    return card;
  };

  var randerProjectPanel = function randerProjectPanel(ppj) {
    var isAppend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!isAppend) {
      $elProject.empty();
    }

    if (!ppj.length) {
      return false;
    }

    ppj = shuffle(ppj);

    var remain = [];
    if (!isAppend && ppj.length > 4) {
      remain = ppj.slice(4, ppj.length);
      var arr = ppj.slice(0, 4);
      ppj = arr;
    }

    var t = 20;
    var result = ppj.map(function (entry) {
      var card = buildProjectCard(entry);
      if (isAppend) {
        var last = $elProject.query('.pps__view-all');
        $elProject.insertBefore(card, last);
      } else {
        $elProject.appendChild(card);
      }

      setTimeout(function () {
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

    var rest = remain.length;
    if (rest > 0) {
      $btnViewAllProject.removeClass('pps__is-disabled');
      $btnViewAllProject.html('<span class="pps__btn-viewall"><b>+' + rest + '</b> more</span>');
      $btnViewAllProject.onclick = function () {
        randerProjectPanel(remain, true);
      };
    }

    return result;
  };

  var randerPeoplePanel = function randerPeoplePanel(ppl, origin) {

    var pointer = void 0;
    var righPanel = queryAll('.pps__frame--right')[0];

    if (righPanel && righPanel.offsetParent) {
      pointer = getLocatePoint(origin);
    } else {
      pointer = getLocatePoint($elLogo);
      var _pointer = pointer,
          width = _pointer.width,
          height = _pointer.height;

      pointer.left += width / 2;
      pointer.top += height / 2;
    }

    $elPeople.empty();

    var result = shuffle(ppl).map(function (entry) {
      var card = buildPersonCard(entry);
      $elPeople.appendChild(card);
      return {
        $el: card,
        data: entry
      };
    });

    var peopleCards = result.reduce(function (prev, curr) {
      return prev.concat(curr);
    }, []);

    var total = result.length;
    var txt = '0 member';
    if (total === 1) {
      txt = '1 member';
    } else if (total > 1) {
      txt = total + ' members';
    }
    $elTeamNum.html(txt);

    var _setupSlider = setupSlider($elContentBlock),
        perPage = _setupSlider.perPage;

    if (peopleCards.length) {
      applyEffect(peopleCards, pointer, perPage);
    }
    return result;
  };

  var onStackSelect = function onStackSelect(data, origin) {
    var skill = data[0];

    updateLeftPanelLogo(skill, data[1]);

    var _people = getPeopleBySkill(skill).map(function (item) {
      var name = item.name,
          image = item.image,
          _item$skills = item.skills,
          skills = _item$skills === undefined ? [] : _item$skills;

      var yys = skills.filter(function (sk) {
        return sk[0] === skill;
      });

      var yoe = yys[0][1];

      return {
        name: name,
        image: image,
        yoe: yoe
      };
    });

    setActiveState(origin);

    if (_people.length > 1) {
      _people.sort(function (a, b) {
        if (a.yoe === b.yoe) {
          return 0;
        }
        return a.yoe > b.yoe;
      });
    }
    randerPeoplePanel(_people, origin);

    var _projects = getProjectStacks(skill);

    var arr = _projects.map(function (item) {
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

  var setupStackClickEvent = function setupStackClickEvent(stack) {
    var $el = stack.$el,
        data = stack.data;


    Event.on($el, 'click', function () {
      onStackSelect(data, $el);
    });

    return data;
  };

  var setupSelectorEvent = function setupSelectorEvent() {
    $elSelector.onchange = function () {
      var v = $elSelector.value;
      var skills = pickedStacks.filter(function (item) {
        return item[0] === v;
      });
      if (skills && skills.length > 0) {
        var origin = void 0;
        queryAll('.pps__list--stack-item').forEach(function (el) {
          el.removeClass('pps-active');
          var stack = el.query('.pps-inner');
          if (stack.getAttribute('title') === v) {
            origin = el;
          }
        });

        if (origin) {
          var sk = skills[0];
          onStackSelect(sk, origin);
        }
      }
    };
  };

  var randerStackPanel = function randerStackPanel(stacks) {
    $elStack.empty();
    return stacks.map(function (entry) {
      var card = buildStackCard(entry);
      $elStack.appendChild(card);
      return {
        $el: card,
        data: entry
      };
    }).map(setupStackClickEvent);
  };

  var start = function start(delta, offsetTop) {
    if (_isStarted) {
      return false;
    }

    _isStarted = true;

    var items = queryAll('.pps__list--stack-item');

    if (!items.length) {
      return false;
    }

    var el = items[0];

    var righPanel = queryAll('.pps__frame--right')[0];

    if (offsetTop > 0 && righPanel && righPanel.offsetParent) {

      el.addClass('pps-highlight');

      var hand = add('DIV', el);
      hand.addClass('blink');

      setTimeout(function () {
        onStackSelect(pickedStacks[0], el);
        setTimeout(function () {
          hand.destroy();
          el.removeClass('pps-highlight');
        }, 2000);
      }, 1000);
    } else {
      onStackSelect(pickedStacks[0], el);
    }

    return _isStarted;
  };

  var renderSimpleVersion = function renderSimpleVersion(container, project) {

    var ipath = getImgPath(container);

    var layout = '\n    <div class="pps__swiper-wrapper pps__swiper-wrapper-simple">\n      <div class="pps__swiper--nav pps__swiper--prev">\n        <span class="pps__btn-link prev"></span>\n      </div>\n      <div class="pps__swiper-container pps__swiper-container-simple">{{content}}</div>\n      <div class="pps__swiper--nav pps__swiper--next">\n        <span class="pps__btn-link next"></span>\n      </div>\n    </div>\n  ';

    var template = '\n    <div class="pps__swiper-slide">\n      <div class="pps__person-avatar" style="background-image:url({{image}})"></div>\n      <div class="pps__person-name">{{name}}</div>\n    </div>\n  ';

    var members = getProjectMembers(project).filter(function (mem) {
      return mem.image && mem.person;
    });

    var total = members.length;

    if (total > 0) {
      var html = shuffle(members).map(function (mem) {
        var name = mem.person;
        var avatar = ipath + mem.image;
        return template.replace('{{image}}', avatar).replace('{{name}}', name);
      }).join('');

      layout = layout.replace('{{content}}', html);

      container.innerHTML = layout;

      setupSlider(container);
    }

    return false;
  };

  var preloadImages = function preloadImages(images) {

    var preload = function preload() {

      var src = images.shift();

      var next = function next() {
        if (images.length > 0) {
          preload();
        }
      };

      var P = new Image();
      P.onerror = next;
      P.onload = next;
      P.src = imgPath + src;
    };

    preload();
  };

  var setupLayout = function setupLayout(container) {

    var type = container.getAttribute('type');
    if (type === 'simple') {
      var prj = container.getAttribute('project');
      return renderSimpleVersion(container, prj);
    }

    var labels = ['Team', 'Projects', 'Our expertise'];

    imgPath = getImgPath(container);

    var avatars = people.map(function (item) {
      return item.image;
    });

    var logos = projects.map(function (item) {
      return item.logo;
    });

    preloadImages(avatars.concat(logos));

    widgetId = container.getAttribute('id');
    var attrSectionLabel = container.getAttribute('section-labels');
    if (attrSectionLabel) {
      var arrLabels = attrSectionLabel.split('|');
      for (var i = 0; i < labels.length; i++) {
        if (arrLabels[i]) {
          labels[i] = arrLabels[i];
        }
      }
    }

    var contentBlock = add('DIV', container);
    contentBlock.addClass('pps__wrapper--fluid');

    var maxsize = Math.min(TECH_STACK_NUMBER, techstacks.length);
    pickedStacks = techstacks.splice(0, maxsize);

    var sltOption = pickedStacks.map(function (item) {
      var st = item[0];
      return '<option value="' + st + '">' + st + '</option>';
    }).join('');

    var layout = '\n    <div class="pps__frame--left">\n      <div class="pps__frame--top">\n        <div class="pps__techlogo-outer">\n          <div class="pps__techlogo">\n            <label class="pps__label pps__label--no-padding">' + labels[2] + '</label>\n            <div class="pps__techlogo-image" id="' + widgetId + '_ppsTechLogo"></div>\n            <span class="pps__techselect-arrow"></span>\n          </div>\n          <div class="pps__select-outer">\n            <select class="pps__select" id="' + widgetId + '_ppsStackSelector">\n              ' + sltOption + '\n            </select>\n          </div>\n        </div>\n        <div class="pps__block--people">\n          <label class="pps__label">\n            ' + labels[0] + ' <span class="pps__teamnumber--small" id="' + widgetId + '_ppsTeamNumber"></span>\n          </label>\n          <div class="pps__swiper-wrapper" id="' + widgetId + '_ppsSwiperWapper">\n            <div class="pps__swiper--nav pps__swiper--prev">\n              <span class="pps__btn-link prev"></span>\n            </div>\n            <div class="pps__swiper-container" id="' + widgetId + '_ppsSwiperContainer"></div>\n            <div class="pps__swiper--nav pps__swiper--next">\n              <span class="pps__btn-link next"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="pps__frame--bottom">\n        <div class="pps__block--project">\n          <label class="pps__label">\n            ' + labels[1] + '\n          </label>\n          <div class="pps__list--project" id="' + widgetId + '_ppsProjectList"></div>\n          <div class="pps__view-all pps__is-disabled" id="' + widgetId + '_ppsProjectViewAll"></div>\n        </div>\n      </div>\n    </div>\n    <div class="pps__frame--right">\n      <div class="pps__block--stack">\n        <label class="pps__label">\n          ' + labels[2] + '\n        </label>\n        <div class="pps__list--stack" id="' + widgetId + '_ppsStackList"></div>\n      </div>\n    </div>\n  ';

    contentBlock.html(layout);

    $elStack = get(widgetId + '_ppsStackList');
    $elPeople = get(widgetId + '_ppsSwiperContainer');
    $elProject = get(widgetId + '_ppsProjectList');

    $elLogo = get(widgetId + '_ppsTechLogo');
    $elTeamNum = get(widgetId + '_ppsTeamNumber');
    $elSelector = get(widgetId + '_ppsStackSelector');
    $elSwiperWapper = get(widgetId + '_ppsSwiperWapper');

    $elContentBlock = contentBlock;

    $btnViewAllProject = get(widgetId + '_ppsProjectViewAll');

    var onscroll = function onscroll() {
      if (!_isStarted) {
        var offsetTop = getPosition($elContentBlock).y;
        var wHeight = window.innerHeight;
        var delta = offsetTop - wHeight;
        if (delta < DELTA_TO_START) {
          start(delta, offsetTop, wHeight);
        }
      }
    };

    var onresize = function onresize() {
      var blockPeople = $elContentBlock.query('.pps__block--people');
      var cstyle = window.getComputedStyle(blockPeople, null);
      var paddingLeft = cstyle.getPropertyValue('padding-left');
      if (paddingLeft) {
        var pl = parseInt(paddingLeft, 10);
        deltaPaddingLeft = pl || 20;
      }
    };

    setupSelectorEvent();
    randerStackPanel(pickedStacks);

    window.onresize = onresize;
    window.onscroll = onscroll;

    window.onload = function () {
      onresize();
      onscroll();
    };

    return container;
  };

  var _init = function _init(json) {
    try {
      var o = typeof json === 'string' ? JSON.parse(json) : json;
      var _people = o.people,
          _projects = o.projects,
          _techstacks = o.techstacks;

      people = [].concat(toConsumableArray(_people));
      projects = [].concat(toConsumableArray(_projects));
      techstacks = [].concat(toConsumableArray(_techstacks));

      var els = queryAll('ppswidget') || [];
      els.map(setupLayout);
    } catch (err) {
      console.error(err);
    }
  };

  var init = function init(data) {
    if (!_isInitialized) {
      _init(data);
      _isInitialized = true;
    }
  };

  var isInitialized = function isInitialized() {
    return isInitialized;
  };

  exports.getPeople = getPeople;
  exports.getProjects = getProjects;
  exports.getTechstacks = getTechstacks;
  exports.getPeopleBySkill = getPeopleBySkill;
  exports.getProjectStacks = getProjectStacks;
  exports.getProjectMembers = getProjectMembers;
  exports.init = init;
  exports.isInitialized = isInitialized;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

if (window.PPSW) {PPSW.init({"people":[{"id":2,"name":"Thuy Bui","email":"thuybtt","image":"/People/thuybtt.png","skills":[["Bootstrap","4 years"],["jQuery","5 years"],["ReactJS","1 year"],["Wordpress","1 year"],["Ionic","2 years"]],"fullname":"Bùi Thị Thu Thủy"},{"id":3,"name":"Toan Dang","email":"toandtc","image":"/People/toandtc.png","skills":[["DotNET","1 year"],["SQL","8 years"],["Bootstrap","1 year"],["jQuery","1 year"],["NodeJS","1 year"],["ReactJS","1 year"],["Wordpress","2 years"]],"fullname":"Đặng Trần Chí Toàn"},{"id":4,"name":"Trong Dinh","email":"trongdd","image":"/People/trongdd.png","skills":[["Java","5 years"],["Java Spring","5 years"],["jQuery","2 years"],["ZK Framework","4 years"],["SQL","7 years"],["MongoDB","5 years"],["Elastic Search","5 years"],["MySQL","6 years"],["Apache Solr","5 years"]],"fullname":"Đinh Đức Trọng"},{"id":5,"name":"Tran Dinh","email":"trandtb","image":"/People/trandtb.png","skills":[["Java","5 years"],["Java Spring","2 years"],["ZK Framework","3 years"],["SQL","7 years"],["Apache Solr","5 years"]],"fullname":"Đinh Trương Bảo Trân"},{"id":6,"name":"Thang Do","email":"thangdq","image":"/People/thangdq.png","skills":[["jQuery","2 years"],["Bootstrap","2 years"],["Umbraco","2 years"],["DotNET","2 years"],["SQL","5 years"],["MySQL","4 years"],["MongoDB","1 year"],["AngularJS","2 years"],["NodeJS","1 year"]],"fullname":"Đỗ Quang Thắng"},{"id":10,"name":"Tuan Ho","email":"tuanhm","image":"/People/tuanhm.png","skills":[["Bootstrap","2 years"],["jQuery","2 years"],["ReactJS","1 year"],["NodeJS","1 year"],["PHP","4 years"],["Laravel","1 year"],["DotNET","1 year"],["SQL","4 years"],["MySQL","4 years"],["MongoDB","2 years"],["Elastic Search","3 years"]],"fullname":"Hồ Minh Tuấn"},{"id":12,"name":"Truong Hoang","email":"truonghn","image":"/People/truonghn.png","skills":[["Bootstrap","2 years"],["AngularJS","2 years"],["Drupal","4 years"],["PHP","5 years"],["MySQL","5 years"],["jQuery","4 years"],["NodeJS","1 year"],["Laravel","1 year"],["Yii","3 years"],["Wordpress","4 years"],["MongoDB","2 years"]],"fullname":"Hoàng Nhật Trường"},{"id":13,"name":"Thang Huynh","email":"thanghq","image":"/People/thanghq.png","skills":[["jQuery","3 years"],["ZK Framework","1 year"],["Java","1 year"],["Java Spring","1 year"],["SQL","2 years"],["AngularJS","1 year"],["Bootstrap","1 year"],["ReactJS","6 months"],["NodeJS","1 year"],["MySQL","1 year"],["MongoDB","1 year"]],"fullname":"Huỳnh Quang Thắng"},{"id":14,"name":"Duc Le","email":"ducl","image":"/People/ducl.png","skills":[["jQuery","3 years"],["Bootstrap","3 years"],["NodeJS","2 years"],["ReactJS","1 year"],["Laravel","3 years"],["Yii","3 years"],["MongoDB","2 years"],["PHP","3 years"],["MySQL","4 years"],["Magento","1 year"],["Elastic Search","3 years"],["AWS","2 years"],["LoopBack","1 year"]],"fullname":"Lê Đức"},{"id":15,"name":"Tan Le","email":"tanld","image":"/People/tanld.png","skills":[["jQuery","2 years"],["Bootstrap","2 years"],["DotNET","3 years"],["Umbraco","2 years"],["SQL","2 years"],["AngularJS","2 years"],["ReactJS","1 year"],["DotNET","3 years"],["Umbraco","2 years"],["SQL","2 years"]],"fullname":"Lê Duy Tân"},{"id":16,"name":"Tuan Le","email":"tuanlk","image":"/People/tuanlk.png","skills":[["Java","2 years"],["iOS","2 years"],["Java","1 year"]],"fullname":"Lê Kim Tuấn"},{"id":17,"name":"Khanh Le","email":"khanhlp","image":"/People/khanhlp.png","skills":[["Bootstrap","1 year"],["jQuery","1 year"],["Laravel","1 year"],["Wordpress","5 months"],["Magento","5 months"],["MySQL","1 year"],["PHP","1 year"]],"fullname":"Lê Phước Khanh"},{"id":18,"name":"Oanh Le","email":"oanhltk","image":"/People/oanhltk.png","skills":[["Java Spring","5 months"],["Android","1 year"],["Java","1 year"],["ZK Framework","3 months"],["SQL","2 years"]],"fullname":"Lê Thị Kiều Oanh"},{"id":19,"name":"Tinh Le","email":"tinhlv","image":"/People/tinhlv.png","skills":[["Bootstrap","3 years"],["jQuery","3 years"],["ReactJS","1 year"],["NodeJS","1 year"],["Wordpress","1 year"],["MySQL","3 years"],["Laravel","4 months"]],"fullname":"Lê Văn Tình"},{"id":20,"name":"Vinh Le","email":"vinhlv","image":"/People/vinhlv.png","skills":[["jQuery","4 years"],["Bootstrap","3 years"],["AngularJS","1 year"],["NodeJS","2 years"],["ReactJS","1 year"],["Wordpress","1 year"],["MongoDB","1 year"],["Ionic","2 years"],["MySQL","3 years"],["jQuery","3 years"]],"fullname":"Lê Văn Vinh"},{"id":21,"name":"Tin Le","email":"tinlvv","image":"/People/tinlvv.png","skills":[["AngularJS","3 years"],["Bootstrap","4 years"],["jQuery","5 years"],["ReactJS","1 year"],["NodeJS","1 year"],["DotNET","4 years"],["Umbraco","4 months"],["SQL","5 years"],["MySQL","5 years"],["Elastic Search","5 months"]],"fullname":"Lê Văn Vĩnh Tín"},{"id":22,"name":"Dong Nguyen","email":"dongnd","image":"/People/dongnd.png","skills":[["jQuery","5 years"],["Bootstrap","4 years"],["NodeJS","7 years"],["MongoDB","6 years"],["AWS","5 years"],["LoopBack","1 year"]],"fullname":"Nguyễn Đại Đồng"},{"id":23,"name":"Hoa Nguyen","email":"hoand","image":"/People/hoand.png","skills":[["Java","1 year"],["Android","1 year"],["iOS","3 years"]],"fullname":"Nguyễn Đăng Hòa"},{"id":24,"name":"Vu Nguyen","email":"vunh","image":"/People/vunh.png","skills":[["Bootstrap","3 years"],["PHP","3 years"],["MySQL","4 years"],["AngularJS","2 years"],["jQuery","3 years"],["NodeJS","1 year"],["Laravel","2 years"],["Yii","2 years"],["Wordpress","3 years"],["MySQL","3 years"],["MongoDB","8 months"],["AWS","1 year"]],"fullname":"Nguyễn Hoàng Vũ"},{"id":26,"name":"Vy Nguyen","email":"vynln","image":"/People/vynln.png","skills":[["Java","3 years"],["Android","4 years"],["iOS","1 year"],["NodeJS","6 months"],["MongoDB","4 months"]],"fullname":"Nguyễn Lê Ngọc Vỹ"},{"id":27,"name":"Bao Nguyen","email":"baonq","image":"/People/baonq.png","skills":[["AngularJS","2 years"],["Bootstrap","2 years"],["jQuery","5 years"],["ReactJS","1 year"],["NodeJS","1 year"],["DotNET","5 years"],["Umbraco","2 years"],["MySQL","2 years"],["SQL","7 years"],["AWS","1 year"]],"fullname":"Nguyễn Quốc Bão"},{"id":28,"name":"Hoa Nguyen","email":"hoantt","image":"/People/hoantt.png","skills":[["AngularJS","2 years"],["Bootstrap","4 years"],["jQuery","4 years"],["NodeJS","1 year"],["Laravel","2 years"],["Yii","2 years"],["Drupal","1 year"],["MySQL","4 years"],["PHP","3 years"]],"fullname":"Nguyễn Thị Thanh Hòa"},{"id":29,"name":"Giang Nguyen","email":"giangnt","image":"/People/giangnt.png","skills":[["Bootstrap","1 year"],["jQuery","1 year"],["MySQL","1 year"],["Laravel","1 year"],["PHP","1 year"],["Wordpress","3 months"],["Shopify","6 months"]],"fullname":"Nguyễn Tri Giảng"},{"id":30,"name":"Thanh Nguyen","email":"thanhnt1","image":"/People/thanhnt1.png","skills":[["jQuery","6 years"],["Bootstrap","5 years"],["NodeJS","1 year"],["Laravel","2 years"],["Yii","3 years"],["Magento","2 years"],["Shopify","2 years"],["MongoDB","2 years"],["Elastic Search","2 years"],["PHP","3 years"],["MySQL","6 years"],["AngularJS","1 year"],["ReactJS","1 year"],["Java","4 years"],["Ionic","1 year"],["SQL","6 years"],["LoopBack","1 year"]],"fullname":"Nguyễn Tri Thành"},{"id":31,"name":"Thanh Nguyen","email":"thanhnt","image":"/People/thanhnt.png","skills":[["jQuery","5 years"],["Bootstrap","5 years"],["NodeJS","2 years"],["ReactJS","1 year"],["Laravel","2 years"],["Yii","3 years"],["MongoDB","3 years"],["Elastic Search","3 years"],["PHP","3 years"],["MySQL","5 years"],["AWS","4 years"],["LoopBack","1 year"]],"fullname":"Nguyễn Trường Thành"},{"id":32,"name":"Toan Pham","email":"toanpc","image":"/People/toanpc.png","skills":[["jQuery","6 years"],["NodeJS","2 years"],["Wordpress","3 years"],["Laravel","2 years"],["Yii","3 years"],["Magento","2 years"],["SQL","7 years"],["MongoDB","3 years"],["Elastic Search","2 years"],["AWS","3 years"],["PHP","6 years"],["MySQL","6 years"],["AngularJS","2 years"],["Bootstrap","6 years"],["ReactJS","6 months"],["LoopBack","1 year"]],"fullname":"Phạm Công Toàn"},{"id":33,"name":"Thao Pham","email":"thaopn","image":"/People/thaopn.png","skills":[["iOS","4 years"]],"fullname":"Phạm Ngọc Thao"},{"id":34,"name":"Thanh Pham","email":"thanhpx","image":"/People/thanhpx.png","skills":[["jQuery","1 year"],["ZK Framework","2 years"],["Java Spring","3 years"],["SQL","2 years"],["AngularJS","1 year"],["Bootstrap","1 year"],["Java Spring","2 years"],["MySQL","2 years"],["Apache Solr","2 years"]],"fullname":"Phạm Xuân Thành"},{"id":35,"name":"Viet Phan","email":"vietpq","image":"/People/vietpq.png","skills":[["DotNET","15 years"],["Umbraco","4 years"],["AWS","3 years"],["MySQL","7 years"],["Elastic Search","2 years"],["SQL","15 years"],["Drupal","8 years"]],"fullname":"Phan Quốc Việt"},{"id":36,"name":"Thien Phung","email":"thienpd","image":"/People/thienpd.png","skills":[["iOS","5 years"]],"fullname":"Phùng Duy Thiện"},{"id":37,"name":"Binh Quan","email":"binhqd","image":"/People/binhqd.png","skills":[["jQuery","10 years"],["AngularJS","3 years"],["NodeJS","6 years"],["LoopBack","1 year"],["ReactJS","2 years"],["MongoDB","6 years"],["Elastic Search","6 years"],["AWS","6 years"],["Ionic","4 years"],["PHP","9 years"],["MySQL","11 years"]],"fullname":"Quán Đức Bình"},{"id":38,"name":"Huy Ta","email":"huytbt","image":"/People/huytbt.png","skills":[["jQuery","5 years"],["AngularJS","1 year"],["NodeJS","5 years"],["LoopBack","1 year"],["ReactJS","1 year"],["Wordpress","4 years"],["Laravel","3 years"],["Yii","6 years"],["Magento","2 years"],["Shopify","1 year"],["SQL","6 years"],["MongoDB","4 years"],["Elastic Search","6 years"],["AWS","4 years"],["Ionic","4 years"],["PHP","7 years"],["MySQL","7 years"]],"fullname":"Tạ Bá Thành Huy"},{"id":39,"name":"Minh Than","email":"minhtv","image":"/People/minhtv.png","skills":[["Wordpress","3 years"],["jQuery","2 years"],["Bootstrap","3 years"],["MySQL","4 years"],["PHP","4 years"]],"fullname":"Thân Vĩnh Minh"},{"id":41,"name":"Toan Ton","email":"toantt","image":"/People/toantt.png","skills":[["Java","2 years"],["AngularJS","1 year"],["Bootstrap","2 years"],["jQuery","3 years"],["ZK Framework","2 years"],["Java Spring","2 years"],["MySQL","2 years"],["SQL","3 years"],["Elastic Search","1 year"],["Apache Solr","1 year"],["Java","2 years"],["AngularJS","1 year"],["Bootstrap","2 years"],["jQuery","2 years"],["NodeJS","1 year"],["MySQL","2 years"],["Elastic Search","1 year"]],"fullname":"Tôn Thất Toàn"},{"id":42,"name":"Phu Tran","email":"phutlq","image":"/People/phutlq.png","skills":[["Java","2 years"],["Android","2 years"],["SQL","2 years"],["MySQL","4 months"],["ZK Framework","8 months"],["Bootstrap","8 months"]],"fullname":"Trần Lê Quang Phú"},{"id":43,"name":"Hoai Tran","email":"hoaitt","image":"/People/hoaitt.png","skills":[["AngularJS","3 years"],["Bootstrap","3 years"],["ReactJS","1 year"],["NodeJS","1 year"],["Wordpress","3 years"],["Ionic","1 year"],["MySQL","3 years"],["MongoDB","3 years"]],"fullname":"Trần Thanh Hoài"},{"id":45,"name":"Lanh Tran","email":"lanhtv","image":"/People/lanhtv.png","skills":[["Bootstrap","4 years"],["Drupal","4 years"],["PHP","3 years"],["Laravel","2 years"],["Wordpress","3 years"],["SQL","3 years"],["MySQL","4 years"],["jQuery","4 years"]],"fullname":"Trần Văn Lành"},{"id":47,"name":"Nam Tran","email":"namtvd","image":"/People/namtvd.png","skills":[["jQuery","1 year"],["ZK Framework","2 years"],["Java Spring","2 years"],["SQL","2 years"],["Bootstrap","1 year"],["MySQL","2 years"],["Elastic Search","1 year"],["AngularJS","1 year"],["Bootstrap","1 year"],["MySQL","2 years"],["Elastic Search","1 year"],["MySQL","2 years"],["Elastic Search","1 year"]],"fullname":"Trần Võ Đình Nam"},{"id":48,"name":"Sang Tran","email":"sangtx","image":"/People/sangtx.png","skills":[["Bootstrap","2 years"],["jQuery","2 years"],["ReactJS","7 months"]],"fullname":"Trần Xuân Sang"},{"id":49,"name":"Au Truong","email":"autn","image":"/People/autn.png","skills":[["Bootstrap","2 years"],["Laravel","1 year"],["Yii","2 years"],["Drupal","1 year"],["Magento","2 years"],["PHP","5 years"],["jQuery","2 years"],["AngularJS","1 year"],["ReactJS","1 year"],["NodeJS","1 year"],["Wordpress","5 months"],["MySQL","3 years"],["SQL","3 years"]],"fullname":"Trương Ngọc Âu"},{"id":50,"name":"Tien Truong","email":"tientn","image":"/People/tientn.png","skills":[["SQL","5 years"],["MySQL","3 years"],["AngularJS","1 year"],["Bootstrap","1 year"],["jQuery","4 years"],["ReactJS","4 months"],["NodeJS","1 year"],["Laravel","3 months"],["Wordpress","4 years"],["SQL","3 years"],["MongoDB","1 year"],["Elastic Search","2 years"],["PHP","4 years"]],"fullname":"Trương Ngọc Tiến"},{"id":52,"name":"Ninh Vo","email":"ninhva","image":"/People/ninhva.png","skills":[["AngularJS","2 years"],["Bootstrap","4 years"],["jQuery","4 years"],["ReactJS","1 year"],["NodeJS","1 year"],["Ionic","2 years"]],"fullname":"Võ An Ninh"},{"id":53,"name":"Dung Vo","email":"dungvhp","image":"/People/dungvhp.png","skills":[["Android","3 years"],["Java","3 years"]],"fullname":"Võ Hoàng Phương Dung"},{"id":54,"name":"An Vo","email":"anvt","image":"/People/anvt.png","skills":[["jQuery","1 year"],["AngularJS","2 years"],["Bootstrap","1 year"],["Java Spring","2 years"],["ZK Framework","2 years"],["MySQL","2 years"],["SQL","2 years"],["Elastic Search","1 year"],["MySQL","2 years"],["Elastic Search","1 year"]],"fullname":"Võ Tiến An"},{"id":55,"name":"Thanh Vo","email":"thanhvv","image":"/People/thanhvv.png","skills":[["Wordpress","2 years"],["PHP","3 years"],["MySQL","7 years"],["jQuery","4 years"],["Laravel","1 year"],["AngularJS","2 years"]],"fullname":"Võ Văn Thành"},{"id":65,"name":"Thanh Ho","email":"thanhhc","image":"/People/thanhhc.png","skills":[["MongoDB","1 year"],["MySQL","1 year"],["AWS","1 year"]],"fullname":"Hồ Chí Thành"}],"projects":[{"name":"ATeam","logo":"/Logo%20Project/ATeam.png","stacks":["DotNET","AngularJS","AWS","Elastic Search"],"members":[{"person":"Tin Le","image":"/People/tinlvv.png","role":"Developer"},{"person":"Tan Le","image":"/People/tanld.png","role":"Team lead"},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":""},{"person":"Thang Do","image":"/People/thangdq.png","role":""},{"person":"Bao Nguyen","image":"/People/baonq.png","role":""}],"alias":"ateam"},{"name":"Bible","logo":"/Logo%20Project/Bible.png","stacks":["Android","Ionic","iOS","NodeJS"],"members":[{"person":"Thuy Bui","image":"/People/thuybtt.png","role":"Developer"},{"person":"Thien Phung","image":"/People/thienpd.png","role":""},{"person":"Hoa Nguyen","image":"/People/hoand.png","role":""},{"person":"Hoa Nguyen","image":"/People/hoantt.png","role":""}],"alias":"bible"},{"name":"Bookstoop","logo":"/Logo%20Project/Bookstoop.png","stacks":["iOS","jQuery","Elastic Search","AWS"],"members":[{"person":"Toan Pham","image":"/People/toanpc.png","role":"Developer"},{"person":"Thanh Nguyen","image":"/People/thanhnt1.png","role":""},{"person":"Duc Le","image":"/People/ducl.png","role":""},{"person":"Tan Le","image":"/People/tanld.png","role":""}],"alias":"bookstoop"},{"name":"BQ Shoes","logo":"/Logo%20Project/BQ%20Shoes.png","stacks":["jQuery","Magento","Shopify"],"members":[{"person":"Au Truong","image":"/People/autn.png","role":""},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":""},{"person":"Truong Hoang","image":"/People/truonghn.png","role":""},{"person":"Tuan Le","image":"/People/tuanlk.png","role":""}],"alias":"bq-shoes"},{"name":"Escope","logo":"/Logo%20Project/Escope.png","stacks":["jQuery","Bootstrap","NodeJS","LoopBack","ReactJS","Android","MongoDB","iOS","AWS"],"members":[{"person":"Tuan Le","image":"/People/tuanlk.png","role":""},{"person":"Thao Pham","image":"/People/thaopn.png","role":""},{"person":"Vy Nguyen","image":"/People/vynln.png","role":""},{"person":"Ninh Vo","image":"/People/ninhva.png","role":""},{"person":"Vinh Le","image":"/People/vinhlv.png","role":""},{"person":"Hoa Nguyen","image":"/People/hoand.png","role":""},{"person":"Vu Nguyen","image":"/People/vunh.png","role":""},{"person":"Dong Nguyen","image":"/People/dongnd.png","role":"BA"},{"person":"Toan Pham","image":"/People/toanpc.png","role":""},{"person":"Duc Le","image":"/People/ducl.png","role":""}],"alias":"escope"},{"name":"Himalayan Bowls","logo":"/Logo%20Project/Himalayan%20Bowls.png","stacks":["Magento","SQL","PHP","MySQL"],"members":[{"person":"Thanh Nguyen","image":"/People/thanhnt1.png","role":"Developer"},{"person":"Binh Quan","image":"/People/binhqd.png","role":""},{"person":"Huy Ta","image":"/People/huytbt.png","role":""},{"person":"Hoai Tran","image":"/People/hoaitt.png","role":""}],"alias":"himalayan-bowls"},{"name":"Images Luxury Nail Lounge","logo":"/Logo%20Project/Images%20Luxury%20Nail%20Lounge.png","stacks":["jQuery","Bootstrap","NodeJS","ReactJS","Laravel","SQL","PHP","MySQL","DotNET","iOS"],"members":[{"person":"Duc Le","image":"/People/ducl.png","role":""},{"person":"Ninh Vo","image":"/People/ninhva.png","role":""},{"person":"Au Truong","image":"/People/autn.png","role":""},{"person":"Tuan Le","image":"/People/tuanlk.png","role":""},{"person":"Dung Vo","image":"/People/dungvhp.png","role":""},{"person":"Thao Pham","image":"/People/thaopn.png","role":""},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":""},{"person":"Tuan Ho","image":"/People/tuanhm.png","role":""},{"person":"Thang Do","image":"/People/thangdq.png","role":""},{"person":"Bao Nguyen","image":"/People/baonq.png","role":""}],"alias":"images-luxury-nail-lounge"},{"name":"IoT Sensor","logo":"/Logo%20Project/IoT%20Sensor.png","stacks":["NodeJS","LoopBack","ReactJS","MongoDB","AWS"],"members":[{"person":"Thien Phung","image":"/People/thienpd.png","role":""},{"person":"Huy Ta","image":"/People/huytbt.png","role":""},{"person":"Dong Nguyen","image":"/People/dongnd.png","role":"Fullstack Developer"},{"person":"Duc Le","image":"/People/ducl.png","role":""},{"person":"Thanh Nguyen","image":"/People/thanhnt1.png","role":""},{"person":"Toan Pham","image":"/People/toanpc.png","role":""},{"person":"Vu Nguyen","image":"/People/vunh.png","role":""}],"alias":"iot-sensor"},{"name":"iTravelLocal","logo":"/Logo%20Project/iTravelLocal.png","stacks":["jQuery","Laravel","AWS","NodeJS","MongoDB","Bootstrap"],"members":[{"person":"Dong Nguyen","image":"/People/dongnd.png","role":"Fullstack Developer"},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":"Front-end Developer"},{"person":"Ninh Vo","image":"/People/ninhva.png","role":"Front-end Developer"}],"alias":"itravellocal"},{"name":"Lyad","logo":"/Logo%20Project/Lyad.png","stacks":["Ionic","Elastic Search","jQuery","AWS","NodeJS","MySQL","MongoDB","PHP"],"members":[{"person":"Vinh Le","image":"/People/vinhlv.png","role":""},{"person":"Tuan Ho","image":"/People/tuanhm.png","role":""},{"person":"Thanh Vo","image":"/People/thanhvv.png","role":""},{"person":"Duc Le","image":"/People/ducl.png","role":""},{"person":"Hoai Tran","image":"/People/hoaitt.png","role":""},{"person":"Tien Truong","image":"/People/tientn.png","role":""}],"alias":"lyad"},{"name":"MeiReve","logo":"/Logo%20Project/MeiReve.png","stacks":["AngularJS","iOS","jQuery","Laravel","PHP"],"members":[{"person":"Vinh Le","image":"/People/vinhlv.png","role":""},{"person":"Vu Nguyen","image":"/People/vunh.png","role":""},{"person":"Thao Pham","image":"/People/thaopn.png","role":""},{"person":"Ninh Vo","image":"/People/ninhva.png","role":""},{"person":"Hoa Nguyen","image":"/People/hoand.png","role":""},{"person":"Au Truong","image":"/People/autn.png","role":""},{"person":"Thanh Nguyen","image":"/People/thanhnt.png","role":""}],"alias":"meireve"},{"name":"Read This Next","logo":"/Logo%20Project/Read%20This%20Next.png","stacks":["iOS"],"members":[{"person":"Binh Quan","image":"/People/binhqd.png","role":""},{"person":"Hoa Nguyen","image":"/People/hoand.png","role":""},{"person":"Oanh Le","image":"/People/oanhltk.png","role":""},{"person":"Tin Le","image":"/People/tinlvv.png","role":""}],"alias":"read-this-next"},{"name":"Roomi","logo":"/Logo%20Project/Roomi.png","stacks":["iOS","Android","PHP","Laravel","Elastic Search"],"members":[{"person":"Vinh Le","image":"/People/vinhlv.png","role":""},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":""},{"person":"Toan Pham","image":"/People/toanpc.png","role":""},{"person":"Ninh Vo","image":"/People/ninhva.png","role":""},{"person":"Vy Nguyen","image":"/People/vynln.png","role":""},{"person":"Vu Nguyen","image":"/People/vunh.png","role":""}],"alias":"roomi"},{"name":"Stuff N Style","logo":"/Logo%20Project/Stuff%20N%20Style.png","stacks":["jQuery","Shopify","Bootstrap"],"members":[{"person":"Huy Ta","image":"/People/huytbt.png","role":""},{"person":"Giang Nguyen","image":"/People/giangnt.png","role":""},{"person":"Trong Dinh","image":"/People/trongdd.png","role":""},{"person":"Duc Le","image":"/People/ducl.png","role":""}],"alias":"stuff-n-style"},{"name":"Swivel","logo":"/Logo%20Project/Swivel.png","stacks":["Laravel","SQL","PHP","MySQL","iOS","ReactJS"],"members":[{"person":"Sang Tran","image":"/People/sangtx.png","role":""},{"person":"Thanh Nguyen","image":"/People/thanhnt1.png","role":""},{"person":"Vinh Le","image":"/People/vinhlv.png","role":""},{"person":"Vy Nguyen","image":"/People/vynln.png","role":""},{"person":"Vu Nguyen","image":"/People/vunh.png","role":""},{"person":"Huy Ta","image":"/People/huytbt.png","role":""},{"person":"Thanh Nguyen","image":"/People/thanhnt.png","role":""},{"person":"Tan Le","image":"/People/tanld.png","role":""},{"person":"Tuan Le","image":"/People/tuanlk.png","role":""},{"person":"Ninh Vo","image":"/People/ninhva.png","role":""},{"person":"Vinh Le","image":"/People/vinhlv.png","role":""},{"person":"Hoa Nguyen","image":"/People/hoantt.png","role":""},{"person":"Thien Phung","image":"/People/thienpd.png","role":""}],"alias":"swivel"},{"name":"Youth1","logo":"/Logo%20Project/Youth1.png","stacks":["Drupal","SQL","PHP","MySQL"],"members":[{"person":"Hoa Nguyen","image":"/People/hoantt.png","role":""},{"person":"Au Truong","image":"/People/autn.png","role":""},{"person":"Lanh Tran","image":"/People/lanhtv.png","role":""},{"person":"Truong Hoang","image":"/People/truonghn.png","role":""}],"alias":"youth1"},{"name":"Pack","logo":"/Logo%20Project/Pack.png","stacks":["iOS","AWS","Android","AngularJS"],"members":[{"person":"Thien Phung","image":"/People/thienpd.png","role":""},{"person":"Dung Vo","image":"/People/dungvhp.png","role":""},{"person":"Hoa Nguyen","image":"/People/hoand.png","role":""},{"person":"Thao Pham","image":"/People/thaopn.png","role":""},{"person":"Vy Nguyen","image":"/People/vynln.png","role":""}],"alias":"pack"},{"name":"Allamanda","logo":"/Logo%20Project/Allamanda.png","stacks":["DotNET","jQuery","Umbraco"],"members":[{"person":"Tan Le","image":"/People/tanld.png","role":""},{"person":"Sang Tran","image":"/People/sangtx.png","role":""},{"person":"Toan Dang","image":"/People/toandtc.png","role":""},{"person":"Thang Do","image":"/People/thangdq.png","role":""}],"alias":"allamanda"},{"name":"Cham Islands","logo":"/Logo%20Project/Cham%20Islands.png","stacks":["Java","Apache Solr","ZK Framework","Java Spring"],"members":[{"person":"Thanh Pham","image":"/People/thanhpx.png","role":""},{"person":"Toan Ton","image":"/People/toantt.png","role":""},{"person":"Thang Huynh","image":"/People/thanghq.png","role":""},{"person":"Nam Tran","image":"/People/namtvd.png","role":""},{"person":"Vy Nguyen","image":"/People/vynln.png","role":""}],"alias":"cham-islands"},{"name":"Da Nang DIFF","logo":"/Logo%20Project/Da%20Nang%20DIFF.png","stacks":["Wordpress"],"members":[{"person":"Sang Tran","image":"/People/sangtx.png","role":""},{"person":"Ninh Vo","image":"/People/ninhva.png","role":""},{"person":"Hoai Tran","image":"/People/hoaitt.png","role":""},{"person":"Thanh Vo","image":"/People/thanhvv.png","role":""},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":""}],"alias":"da-nang-diff"},{"name":"Da Nang Party Committee Portal","logo":"/Logo%20Project/Da%20Nang%20Party%20Committee%20Portal.png","stacks":["Apache Solr","Java","Java Spring","ZK Framework"],"members":[{"person":"Phu Tran","image":"/People/phutlq.png","role":""},{"person":"Tuan Le","image":"/People/tuanlk.png","role":""},{"person":"Thanh Pham","image":"/People/thanhpx.png","role":""},{"person":"Toan Ton","image":"/People/toantt.png","role":""},{"person":"Nam Tran","image":"/People/namtvd.png","role":""},{"person":"Tien Truong","image":"/People/tientn.png","role":""},{"person":"Tran Dinh","image":"/People/trandtb.png","role":""},{"person":"Trong Dinh","image":"/People/trongdd.png","role":""}],"alias":"da-nang-party-committee-portal"},{"name":"eBid","logo":"/Logo%20Project/eBid.png","stacks":["DotNET","jQuery","Umbraco"],"members":[{"person":"Thang Do","image":"/People/thangdq.png","role":""},{"person":"Tan Le","image":"/People/tanld.png","role":""},{"person":"Tin Le","image":"/People/tinlvv.png","role":""},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":""}],"alias":"ebid"},{"name":"Grand Tourane Hotel","logo":"/Logo%20Project/Grand%20Tourane%20Hotel.png","stacks":["jQuery","Umbraco","DotNET"],"members":[{"person":"Tan Le","image":"/People/tanld.png","role":"Developer"},{"person":"Bao Nguyen","image":"/People/baonq.png","role":"Developer"},{"person":"Thang Do","image":"/People/thangdq.png","role":"Developer"},{"person":"Tuan Le","image":"/People/tuanlk.png","role":"Developer"}],"alias":"grand-tourane-hotel"},{"name":"Hai Tran","logo":"/Logo%20Project/Hai%20Tran.png","stacks":["Wordpress","jQuery","Bootstrap","PHP"],"members":[{"person":"Sang Tran","image":"/People/sangtx.png","role":""},{"person":"Thanh Vo","image":"/People/thanhvv.png","role":""},{"person":"Giang Nguyen","image":"/People/giangnt.png","role":""},{"person":"Tuan Le","image":"/People/tuanlk.png","role":""}],"alias":"hai-tran"},{"name":"Thach Ban","logo":"/Logo%20Project/Thach%20Ban.png","stacks":["jQuery","Bootstrap","PHP","Yii","ReactJS","MongoDB"],"members":[{"person":"Vinh Le","image":"/People/vinhlv.png","role":""},{"person":"Thanh Nguyen","image":"/People/thanhnt1.png","role":""},{"person":"Huy Ta","image":"/People/huytbt.png","role":""},{"person":"Vu Nguyen","image":"/People/vunh.png","role":""}],"alias":"thach-ban"},{"name":"The Da Nang Citizen and Tourist Support System","logo":"/Logo%20Project/The%20Da%20Nang%20Citizen%20and%20Tourist%20Support%20System.png","stacks":["Java","Java Spring","AWS"],"members":[{"person":"Thanh Pham","image":"/People/thanhpx.png","role":""},{"person":"Toan Ton","image":"/People/toantt.png","role":""},{"person":"An Vo","image":"/People/anvt.png","role":""},{"person":"Hoai Tran","image":"/People/hoaitt.png","role":""}],"alias":"the-da-nang-citizen-and-tourist-support-system"},{"name":"Tien Thu","logo":"/Logo%20Project/Tien%20Thu.png","stacks":["AngularJS","DotNET","jQuery","Umbraco"],"members":[{"person":"Vinh Le","image":"/People/vinhlv.png","role":""},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":""},{"person":"Truong Hoang","image":"/People/truonghn.png","role":""},{"person":"Duc Le","image":"/People/ducl.png","role":""}],"alias":"tien-thu"},{"name":"Top 5","logo":"/Logo%20Project/Top%205.png","stacks":["iOS","Laravel","PHP"],"members":[{"person":"Trong Dinh","image":"/People/trongdd.png","role":""},{"person":"Thanh Nguyen","image":"/People/thanhnt.png","role":""},{"person":"Thien Phung","image":"/People/thienpd.png","role":""},{"person":"Hoa Nguyen","image":"/People/hoand.png","role":""}],"alias":"top-5"},{"name":"University of Economics","logo":"/Logo%20Project/University%20of%20Economics.png","stacks":["DotNET","jQuery","Bootstrap"],"members":[{"person":"Viet Phan","image":"/People/vietpq.png","role":""},{"person":"Tin Le","image":"/People/tinlvv.png","role":""},{"person":"Toan Dang","image":"/People/toandtc.png","role":""},{"person":"Thang Do","image":"/People/thangdq.png","role":""}],"alias":"university-of-economics"},{"name":"Sungrand City","logo":"/Logo%20Project/Sungrand%20City.png","stacks":["Wordpress","jQuery","Bootstrap","DotNET"],"members":[{"person":"Sang Tran","image":"/People/sangtx.png","role":""},{"person":"Thuy Bui","image":"/People/thuybtt.png","role":""},{"person":"Tan Le","image":"/People/tanld.png","role":""},{"person":"Thanh Vo","image":"/People/thanhvv.png","role":""}],"alias":"sungrand-city"},{"name":"Navmobi","logo":"/Logo%20Project/Navmobi.png","stacks":["Android","Java"],"members":[{"person":"Huy Ta","image":"/People/huytbt.png","role":"Developer"},{"person":"Thien Phung","image":"/People/thienpd.png","role":""},{"person":"Khanh Le","image":"/People/khanhlp.png","role":""},{"person":"Thanh Ho","image":"/People/thanhhc.png","role":""}],"alias":"navmobi"}],"techstacks":[["NodeJS","/LogoTechStack/NodeJS.png",25],["DotNET","/LogoTechStack/DotNET.png",8],["Java","/LogoTechStack/Java.png",14],["iOS","/LogoTechStack/iOS.png",5],["Android","/LogoTechStack/Android.png",5],["ReactJS","/LogoTechStack/ReactJS.png",21],["AngularJS","/LogoTechStack/AngularJS.png",24],["Ionic","/LogoTechStack/Ionic.png",7],["Laravel","/LogoTechStack/Laravel.png",16],["Magento","/LogoTechStack/Magento.png",6],["Wordpress","/LogoTechStack/Wordpress.png",16],["Drupal","/LogoTechStack/Drupal.png",5],["Shopify","/LogoTechStack/Shopify.png",3],["Java Spring","/LogoTechStack/Java%20Spring.png",10],["MongoDB","/LogoTechStack/MongoDB.png",18],["PHP","/LogoTechStack/PHP.png",17],["jQuery","/LogoTechStack/jQuery.png",36],["Bootstrap","/LogoTechStack/Bootstrap.png",35],["Yii","/LogoTechStack/Yii.png",9],["LoopBack","/LogoTechStack/LoopBack.png",7],["Umbraco","/LogoTechStack/Umbraco.png",6],["ZK Framework","/LogoTechStack/ZK%20Framework.png",9],["AWS","/LogoTechStack/AWS.png",10],["SQL","/LogoTechStack/SQL.png",25],["MySQL","/LogoTechStack/MySQL.png",38],["Elastic Search","/LogoTechStack/Elastic%20Search.png",18],["Apache Solr","/LogoTechStack/Apache%20Solr.png",4]]});};