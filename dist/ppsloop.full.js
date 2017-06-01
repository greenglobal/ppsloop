/** ppsw@0.6.3 - full, no data */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('PPSW', ['exports'], factory) :
	(factory((global.PPSW = global.PPSW || {})));
}(this, (function (exports) { 'use strict';
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
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
	var ob2Str = function ob2Str(val) {
	  return {}.toString.call(val);
	};
	var isUndefined = function isUndefined(v) {
	  return v === undefined;
	};
	var isObject = function isObject(v) {
	  return !isUndefined(v) && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object';
	};
	var isString = function isString(v) {
	  return typeof v === 'string';
	};
	var isNumber = function isNumber(v) {
	  return typeof v === 'number';
	};
	var isElement = function isElement(v) {
	  return ob2Str(v).match(/^\[object HTML\w*Element]$/);
	};
	var isFunction = function isFunction(v) {
	  return v && ob2Str(v) === '[object Function]';
	};
	var trim = function trim(s, all) {
	  if (!isString(s)) {
	    return '';
	  }
	  var x = s ? s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : s || '';
	  if (x && all) {
	    return x.replace(/\r?\n|\r/g, ' ').replace(/\s\s+|\r/g, ' ');
	  }
	  return x;
	};
	var normalize = function normalize(k, v) {
	  var reg = /^([a-z]+)([A-Z]{1})([a-z]+)$/;
	  var mat = k.match(reg);
	  if (mat && mat.index === 0) {
	    var a = [];
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
	var get$$1 = function get$$1(el) {
	  var p = (isString(el) ? doc.getElementById(el) : el) || null;
	  if (p && !p.___BEHAVIORS_ATTACHED) {
	    return attachBehaviors(p);
	  }
	  return p;
	};
	var add = function add(tag, parent) {
	  var p = parent ? get$$1(parent) : doc.body;
	  var d = isElement(tag) ? tag : doc.createElement(tag);
	  p.appendChild(d);
	  return get$$1(d);
	};
	var create = function create(tag) {
	  return get$$1(doc.createElement(tag));
	};
	var query = function query(selector) {
	  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : doc;
	  var el = void 0;
	  var tmp = root.querySelector(selector);
	  if (tmp) {
	    el = get$$1(tmp);
	  }
	  return el;
	};
	var queryAll = function queryAll(selector) {
	  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : doc;
	  var els = [];
	  var tmp = root.querySelectorAll(selector);
	  if (tmp) {
	    Array.from(tmp).forEach(function (el) {
	      els.push(get$$1(el));
	    });
	  }
	  return els;
	};
	attachBehaviors = function attachBehaviors(p) {
	  if (p && isElement(p)) {
	    p.query = function (selector) {
	      return query(selector, p);
	    };
	    p.queryAll = function (selector) {
	      return queryAll(selector, p);
	    };
	    var pc = p.classList;
	    p.hasClass = function (className) {
	      var c = trim(className, true);
	      if (!c) {
	        return false;
	      }
	      return pc.contains(c);
	    };
	    p.addClass = function (className) {
	      var c = trim(className, true);
	      if (!c) {
	        return false;
	      }
	      var a = c.split(' ');
	      pc.add.apply(pc, toConsumableArray(a));
	      return p;
	    };
	    p.removeClass = function (className) {
	      var c = trim(className, true);
	      if (!c) {
	        return false;
	      }
	      var a = c.split(' ');
	      pc.remove.apply(pc, toConsumableArray(a));
	      return p;
	    };
	    p.toggleClass = function (className) {
	      var c = trim(className, true);
	      if (!c) {
	        return false;
	      }
	      var a = c.split(' ');
	      if (a.length > 1) {
	        a.forEach(function (s) {
	          pc.toggle(s);
	        });
	      } else {
	        pc.toggle(c);
	      }
	      return p;
	    };
	    p.replaceClass = function (oldClass, newClass) {
	      var o = trim(oldClass, true);
	      var n = trim(newClass, true);
	      p.removeClass(o);
	      p.addClass(n);
	      return p;
	    };
	    p.setProperty = function (o) {
	      for (var k in o) {
	        if (o[k] !== '') {
	          var v = o[k];
	          if (isString(v) || isNumber(v)) {
	            p.setAttribute(k, v);
	          }
	        }
	      }
	      return p;
	    };
	    var fixStyle = function fixStyle(s) {
	      return s.replace(/;+/gi, ';').replace(/:/gi, ': ') + ';';
	    };
	    p.setStyle = function (o) {
	      var a = [];
	      if (isObject(o)) {
	        for (var k in o) {
	          if (o[k] !== '') {
	            var v = o[k];
	            if (isString(v) || isNumber(v)) {
	              var x = normalize(k, v);
	              a.push([x.key, x.value].join(':'));
	            }
	          }
	        }
	      } else if (isString(o)) {
	        a = o.split(';');
	      }
	      var s = p.getAttribute('style');
	      if (s) {
	        var b = s.split(';');
	        a = b.concat(a);
	      }
	      a.push('');
	      var st = a.filter(function (item) {
	        return trim(item, true).length > 0;
	      }).map(function (item) {
	        var parts = item.split(':');
	        return parts.map(function (part) {
	          return trim(part, true);
	        }).join(':');
	      }).join('; ');
	      p.setAttribute('style', fixStyle(st));
	      return p;
	    };
	    p.empty = function () {
	      p.innerHTML = '';
	      return p;
	    };
	    p.html = function (s) {
	      if (isUndefined(s)) {
	        return p.innerHTML;
	      }
	      p.innerHTML = s;
	      return p;
	    };
	    p.destroy = function () {
	      if (p.parentNode) {
	        p.parentNode.removeChild(p);
	      }
	    };
	    p.___BEHAVIORS_ATTACHED = 1;
	  }
	  return p;
	};
	var Event = function () {
	  var isGecko = function (ua) {
	    var n = ua.toLowerCase();
	    return (/gecko/i.test(n)
	    );
	  }(nav.userAgent);
	  return {
	    on: function on(element, event, fn) {
	      if (fn && isFunction(fn)) {
	        var el = isString(element) ? get$$1(element) : element;
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
	    off: function off(element, event, fn) {
	      if (fn && isFunction(fn)) {
	        var el = isString(element) ? get$$1(element) : element;
	        if (el && isElement(el)) {
	          if (el.removeEventListener) {
	            el.removeEventListener(event, fn, false);
	          } else if (el.detachEvent) {
	            el.detachEvent('on' + event, fn);
	          }
	        }
	      }
	    },
	    simulate: function simulate(element, event) {
	      var evt = void 0;
	      var el = isString(element) ? get$$1(element) : element;
	      if (doc.createEventObject) {
	        evt = doc.createEventObject();
	        el.fireEvent('on' + event, evt);
	      } else {
	        evt = doc.createEvent('HTMLEvents');
	        evt.initEvent(event, true, true);
	        el.dispatchEvent(evt);
	      }
	    },
	    stop: function stop(e) {
	      e.cancelBubble = true;
	      if (e.stopPropagation) {
	        e.stopPropagation();
	      }
	      if (e.preventDefault) {
	        e.preventDefault();
	      }
	      return false;
	    },
	    locate: function locate(e) {
	      var evt = e || win.event;
	      var targ = evt.target || evt.srcElement;
	      if (targ && targ.nodeType === 3) {
	        targ = targ.parentNode;
	      }
	      return get$$1(targ);
	    }
	  };
	}();
	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	function unwrapExports (x) {
		return x && x.__esModule ? x['default'] : x;
	}
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	var siema_min = createCommonjsModule(function (module, exports) {
	  !function (e, t) {
	    module.exports = t();
	  }(commonjsGlobal, function () {
	    return function (e) {
	      function t(s) {
	        if (i[s]) return i[s].exports;var r = i[s] = { i: s, l: !1, exports: {} };return e[s].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
	      }var i = {};return t.m = e, t.c = i, t.i = function (e) {
	        return e;
	      }, t.d = function (e, i, s) {
	        t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: s });
	      }, t.n = function (e) {
	        var i = e && e.__esModule ? function () {
	          return e.default;
	        } : function () {
	          return e;
	        };return t.d(i, "a", i), i;
	      }, t.o = function (e, t) {
	        return Object.prototype.hasOwnProperty.call(e, t);
	      }, t.p = "", t(t.s = 0);
	    }([function (e, t, i) {
	      "use strict";
	      function s(e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	      }Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	        return typeof e === 'undefined' ? 'undefined' : _typeof(e);
	      } : function (e) {
	        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === 'undefined' ? 'undefined' : _typeof(e);
	      },
	          n = function () {
	        function e(e, t) {
	          for (var i = 0; i < t.length; i++) {
	            var s = t[i];s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
	          }
	        }return function (t, i, s) {
	          return i && e(t.prototype, i), s && e(t, s), t;
	        };
	      }(),
	          o = function () {
	        function e(t) {
	          var i = this;s(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.startIndex, this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler"].forEach(function (e) {
	            i[e] = i[e].bind(i);
	          }), this.init();
	        }return n(e, [{ key: "init", value: function value() {
	            if (window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null }, this.selector.addEventListener("touchstart", this.touchstartHandler, { passive: !0 }), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler, { passive: !0 }), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler)), null === this.selector) throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(), this.selector.style.overflow = "hidden", this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab");for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) {
	              var i = document.createElement("div");i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i);
	            }this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent(), this.config.onInit.call(this);
	          } }, { key: "resolveSlidesNumber", value: function value() {
	            if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === r(this.config.perPage)) {
	              this.perPage = 1;for (var e in this.config.perPage) {
	                window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
	              }
	            }
	          } }, { key: "prev", value: function value() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
	                t = arguments[1];if (!(this.innerElements.length <= this.perPage)) {
	              var i = this.currentSlide;0 === this.currentSlide && this.config.loop ? this.currentSlide = this.innerElements.length - this.perPage : this.currentSlide = Math.max(this.currentSlide - e, 0), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
	            }
	          } }, { key: "next", value: function value() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
	                t = arguments[1];if (!(this.innerElements.length <= this.perPage)) {
	              var i = this.currentSlide;this.currentSlide === this.innerElements.length - this.perPage && this.config.loop ? this.currentSlide = 0 : this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
	            }
	          } }, { key: "goTo", value: function value(e, t) {
	            if (!(this.innerElements.length <= this.perPage)) {
	              var i = this.currentSlide;this.currentSlide = Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
	            }
	          } }, { key: "slideToCurrent", value: function value() {
	            this.sliderFrame.style[this.transformProperty] = "translate3d(-" + this.currentSlide * (this.selectorWidth / this.perPage) + "px, 0, 0)";
	          } }, { key: "updateAfterDrag", value: function value() {
	            var e = this.drag.endX - this.drag.startX,
	                t = Math.abs(e),
	                i = Math.ceil(t / (this.selectorWidth / this.perPage));e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent();
	          } }, { key: "resizeHandler", value: function value() {
	            this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.slideToCurrent();
	          } }, { key: "clearDrag", value: function value() {
	            this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null };
	          } }, { key: "touchstartHandler", value: function value(e) {
	            e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY;
	          } }, { key: "touchendHandler", value: function value(e) {
	            e.stopPropagation(), this.pointerDown = !1, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag();
	          } }, { key: "touchmoveHandler", value: function value(e) {
	            e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo && (this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) * -1 + "px, 0, 0)");
	          } }, { key: "mousedownHandler", value: function value(e) {
	            e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX;
	          } }, { key: "mouseupHandler", value: function value(e) {
	            e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag();
	          } }, { key: "mousemoveHandler", value: function value(e) {
	            e.preventDefault(), this.pointerDown && (this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) * -1 + "px, 0, 0)");
	          } }, { key: "mouseleaveHandler", value: function value(e) {
	            this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.updateAfterDrag(), this.clearDrag());
	          } }, { key: "updateFrame", value: function value() {
	            this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab");for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) {
	              var i = document.createElement("div");i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i);
	            }this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
	          } }, { key: "remove", value: function value(e, t) {
	            if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e, 1), this.currentSlide = e <= this.currentSlide ? this.currentSlide - 1 : this.currentSlide, this.updateFrame(), t && t.call(this);
	          } }, { key: "insert", value: function value(e, t, i) {
	            if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");if (this.innerElements.indexOf(e) !== -1) throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t, 0, e), this.currentSlide = t <= this.currentSlide ? this.currentSlide + 1 : this.currentSlide, this.updateFrame(), i && i.call(this);
	          } }, { key: "prepend", value: function value(e, t) {
	            this.insert(e, 0), t && t.call(this);
	          } }, { key: "append", value: function value(e, t) {
	            this.insert(e, this.innerElements.length + 1), t && t.call(this);
	          } }, { key: "destroy", value: function value() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
	                t = arguments[1];if (window.removeEventListener("resize", this.resizeHandler), this.selector.style.cursor = "auto", this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), e) {
	              for (var i = document.createDocumentFragment(), s = 0; s < this.innerElements.length; s++) {
	                i.appendChild(this.innerElements[s]);
	              }this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
	            }t && t.call(this);
	          } }], [{ key: "mergeSettings", value: function value(e) {
	            var t = { selector: ".siema", duration: 200, easing: "ease-out", perPage: 1, startIndex: 0, draggable: !0, threshold: 20, loop: !1, onInit: function onInit() {}, onChange: function onChange() {} },
	                i = e;for (var s in i) {
	              t[s] = i[s];
	            }return t;
	          } }, { key: "webkitOrNot", value: function value() {
	            var e = document.documentElement.style;return "string" == typeof e.transform ? "transform" : "WebkitTransform";
	          } }]), e;
	      }();t.default = o, e.exports = t.default;
	    }]);
	  });
	});
	var Siema = unwrapExports(siema_min);
	var preloadImages = function preloadImages(images) {
	  var imgPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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
	var getElementPosition = function getElementPosition(el) {
	  var xPos = 0;
	  var yPos = 0;
	  while (el) {
	    if (el.tagName === 'BODY') {
	      var docEl = document.documentElement;
	      var xScroll = el.scrollLeft || docEl.scrollLeft;
	      var yScroll = el.scrollTop || docEl.scrollTop;
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
	var tplMainLayout = "\n  <div class=\"pps__frame--left\">\n    <div class=\"pps__frame--top\">\n      <div class=\"pps__techlogo-outer\">\n        <div class=\"pps__techlogo\">\n          <label class=\"pps__label pps__label--no-padding\">{{labelTech}}</label>\n          <div class=\"pps__techlogo-image\"></div>\n          <span class=\"pps__techselect-arrow\"></span>\n        </div>\n        <div class=\"pps__select-outer\">\n          <select class=\"pps__select pps__stack-selector\">\n            {{options}}\n          </select>\n        </div>\n      </div>\n      <div class=\"pps__block--people\">\n        <label class=\"pps__label\">\n          {{labelPeople}} <span class=\"pps__teamnumber--small\"></span>\n        </label>\n        <div class=\"pps__swiper-wrapper\">\n          <div class=\"pps__swiper--nav pps__swiper--prev\">\n            <span class=\"pps__btn-link prev\"></span>\n          </div>\n          <div class=\"pps__swiper-container\"></div>\n          <div class=\"pps__swiper--nav pps__swiper--next\">\n            <span class=\"pps__btn-link next\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pps__frame--bottom\">\n      <div class=\"pps__block--project\">\n        <label class=\"pps__label\">\n          {{labelProject}}\n        </label>\n        <div class=\"pps__list--project\"></div>\n        <div class=\"pps__view-all pps__is-disabled\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pps__frame--right\">\n    <div class=\"pps__block--stack\">\n      <label class=\"pps__label\">\n        {{labelTech}}\n      </label>\n      <div class=\"pps__list--stack\"></div>\n    </div>\n  </div>\n";
	var tplBtnViewAll = "<span class=\"pps__btn-viewall\"><b>+{{count}}</b> more</span>";
	var tplSimpleLayout = "\n  <div class=\"pps__swiper-wrapper pps__swiper-wrapper-simple\">\n    <div class=\"pps__swiper--nav pps__swiper--prev\">\n      <span class=\"pps__btn-link prev\"></span>\n    </div>\n    <div class=\"pps__swiper-container pps__swiper-container-simple\">{{content}}</div>\n    <div class=\"pps__swiper--nav pps__swiper--next\">\n      <span class=\"pps__btn-link next\"></span>\n    </div>\n  </div>\n";
	var tplPersonCard = "\n  <div class=\"pps__swiper-slide\">\n    <div class=\"pps__person-avatar\" style=\"background-image:url({{image}})\"></div>\n    <div class=\"pps__person-name\">{{name}}</div>\n  </div>\n";
	var TECH_STACK_NUMBER = 27;
	var DELTA_TO_START = -80;
	var PERSON_CARD_SIZE = 200;
	var imgPath = '';
	var people = [];
	var projects = [];
	var techstacks = [];
	var pickedStacks = [];
	var $elLogo = void 0;
	var $elTeamNum = void 0;
	var $elSelector = void 0;
	var $elContentBlock = void 0;
	var $elPeople = void 0;
	var $elProject = void 0;
	var $elStack = void 0;
	var $btnViewAllProject = void 0;
	var _isInitialized = false;
	var _isStarted = false;
	var shuffle = function shuffle(arr) {
	  return arr.sort(function () {
	    var r = Math.random();
	    if (r === 0 || r === 0.5 || r === 1) {
	      return 0;
	    }
	    return r > 0.5;
	  });
	};
	var existsInArray = function existsInArray(v, arr) {
	  return arr.some(function (k) {
	    return k === v;
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
	    return existsInArray(sk, stacks);
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
	    if (ipath.indexOf(ipath.length - 1) === '/') {
	      ipath = ipath.slice(0, -1);
	    }
	  }
	  return ipath;
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
	  var bprev = get$$1(btns[0]);
	  var bnext = get$$1(btns[1]);
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
	        var b = get$$1(btn);
	        var p = get$$1(b.parentNode);
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
	    $btnViewAllProject.html(tplBtnViewAll.replace('{{count}}', rest));
	    $btnViewAllProject.onclick = function () {
	      randerProjectPanel(remain, true);
	    };
	  }
	  return result;
	};
	var randerPeoplePanel = function randerPeoplePanel(ppl) {
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
	    var t = 20;
	    var arr = peopleCards.splice(0, perPage);
	    arr.filter(function (item) {
	      return item && item.$el;
	    }).map(function (item) {
	      return item.$el;
	    }).map(function (el) {
	      el.addClass('pps-card--transition');
	      t += 40;
	      return setTimeout(function () {
	        el.removeClass('pps-card--transition');
	      }, t);
	    });
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
	  randerPeoplePanel(_people);
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
	  var members = getProjectMembers(project).filter(function (mem) {
	    return mem.image && mem.person;
	  });
	  var total = members.length;
	  if (total > 0) {
	    var html = shuffle(members).map(function (mem) {
	      var name = mem.person;
	      var avatar = ipath + mem.image;
	      return tplPersonCard.replace('{{image}}', avatar).replace('{{name}}', name);
	    }).join('');
	    var layout = tplSimpleLayout.replace('{{content}}', html);
	    container.innerHTML = layout;
	    setupSlider(container);
	  }
	  return false;
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
	  preloadImages(avatars.concat(logos), imgPath);
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
	  var layout = tplMainLayout.replace(new RegExp('{{labelTech}}', 'gi'), labels[2]).replace('{{labelProject}}', labels[1]).replace('{{labelPeople}}', labels[0]).replace('{{options}}', sltOption);
	  contentBlock.html(layout);
	  $elStack = contentBlock.query('.pps__list--stack');
	  $elPeople = contentBlock.query('.pps__swiper-container');
	  $elProject = contentBlock.query('.pps__list--project');
	  $elLogo = contentBlock.query('.pps__techlogo-image');
	  $elTeamNum = contentBlock.query('.pps__teamnumber--small');
	  $elSelector = contentBlock.query('.pps__stack-selector');
	  $btnViewAllProject = contentBlock.query('.pps__view-all');
	  $elContentBlock = contentBlock;
	  var onscroll = function onscroll() {
	    if (!_isStarted) {
	      var offsetTop = getElementPosition($elContentBlock).y;
	      var wHeight = window.innerHeight;
	      var delta = offsetTop - wHeight;
	      if (delta < DELTA_TO_START) {
	        start(delta, offsetTop, wHeight);
	      }
	    }
	  };
	  setupSelectorEvent();
	  randerStackPanel(pickedStacks);
	  window.onscroll = onscroll;
	  window.onload = function () {
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
