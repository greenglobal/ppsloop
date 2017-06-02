/** ppsw@0.7.22 - minified, init data */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define("PPSW",["exports"],t):t(e.PPSW=e.PPSW||{})}(this,function(e){"use strict";Array.from||(Array.from=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t}),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(e){if("Element"in e){var t="classList",n="prototype",r=e.Element[n],i=Object,s=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[n].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1},o=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},l=function(e,t){if(""===t)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return a.call(e,t)},c=function(e){for(var t=s.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):[],r=0,i=n.length;i>r;r++)this.push(n[r]);this._updateClassName=function(){e.setAttribute("class",""+this)}},u=c[n]=[],p=function(){return new c(this)};if(o[n]=Error[n],u.item=function(e){return this[e]||null},u.contains=function(e){return e+="",-1!==l(this,e)},u.add=function(){var e,t=arguments,n=0,r=t.length,i=!1;do{e=t[n]+"",-1===l(this,e)&&(this.push(e),i=!0)}while(++n<r);i&&this._updateClassName()},u.remove=function(){var e,t,n=arguments,r=0,i=n.length,s=!1;do{for(e=n[r]+"",t=l(this,e);-1!==t;)this.splice(t,1),s=!0,t=l(this,e)}while(++r<i);s&&this._updateClassName()},u.toggle=function(e,t){e+="";var n=this.contains(e),r=n?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!n},u.toString=function(){return this.join(" ")},i.defineProperty){var d={get:p,enumerable:!0,configurable:!0};try{i.defineProperty(r,t,d)}catch(e){(void 0===e.number||-2146823252===e.number)&&(d.enumerable=!1,i.defineProperty(r,t,d))}}else i[n].__defineGetter__&&r.__defineGetter__(t,p)}}(self),function(){var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var n,r=arguments.length;for(n=0;r>n;n++)e=arguments[n],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:n.call(this,e)}}e=null}());var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},i=function(e){return{}.toString.call(e)},s=function(e){return void 0===e},a=function(e){return!s(e)&&"object"===(void 0===e?"undefined":n(e))},o=function(e){return"string"==typeof e},l=function(e){return"number"==typeof e},c=function(e){return i(e).match(/^\[object HTML\w*Element]$/)},u=function(e){return e&&"[object Function]"===i(e)},p=function(e,t){if(!o(e))return"";var n=e?e.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):e||"";return n&&t?n.replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "):n},d=function(e,t){var n=/^([a-z]+)([A-Z]{1})([a-z]+)$/,r=e.match(n);if(r&&0===r.index){var i=[];i.push(r[1]),i.push("-"),i.push(r[2]),i.push(r[3]),e=i.join("").toLowerCase()}return l(t)&&(t+="px"),{key:e,value:t}},h=navigator,f=window,v=document,m=function(e){var n=(o(e)?v.getElementById(e):e)||null;return n&&!n.___BEHAVIORS_ATTACHED?t(n):n},g=function(e,t){var n=t?m(t):v.body,r=c(e)?e:v.createElement(e);return n.appendChild(r),m(r)},y=function(e){return m(v.createElement(e))},_=function(e){var t=void 0,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:v).querySelector(e);return n&&(t=m(n)),t},b=function(e){var t=[],n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:v).querySelectorAll(e);return n&&Array.from(n).forEach(function(e){t.push(m(e))}),t};t=function(e){if(e&&c(e)){e.query=function(t){return _(t,e)},e.queryAll=function(t){return b(t,e)};var t=e.classList;e.hasClass=function(e){var n=p(e,!0);return!!n&&t.contains(n)},e.addClass=function(n){var i=p(n,!0);if(!i)return!1;var s=i.split(" ");return t.add.apply(t,r(s)),e},e.removeClass=function(n){var i=p(n,!0);if(!i)return!1;var s=i.split(" ");return t.remove.apply(t,r(s)),e},e.toggleClass=function(n){var r=p(n,!0);if(!r)return!1;var i=r.split(" ");return i.length>1?i.forEach(function(e){t.toggle(e)}):t.toggle(r),e},e.replaceClass=function(t,n){var r=p(t,!0),i=p(n,!0);return e.removeClass(r),e.addClass(i),e},e.setProperty=function(t){for(var n in t)if(""!==t[n]){var r=t[n];(o(r)||l(r))&&e.setAttribute(n,r)}return e};var n=function(e){return e.replace(/;+/gi,";").replace(/:/gi,": ")+";"};e.setStyle=function(t){var r=[];if(a(t)){for(var i in t)if(""!==t[i]){var s=t[i];if(o(s)||l(s)){var c=d(i,s);r.push([c.key,c.value].join(":"))}}}else o(t)&&(r=t.split(";"));var u=e.getAttribute("style");u&&(r=u.split(";").concat(r)),r.push("");var h=r.filter(function(e){return p(e,!0).length>0}).map(function(e){return e.split(":").map(function(e){return p(e,!0)}).join(":")}).join("; ");return e.setAttribute("style",n(h)),e},e.empty=function(){return e.innerHTML="",e},e.html=function(t){return s(t)?e.innerHTML:(e.innerHTML=t,e)},e.destroy=function(){e.parentNode&&e.parentNode.removeChild(e)},e.___BEHAVIORS_ATTACHED=1}return e};var w=function(){var e=function(e){var t=e.toLowerCase();return/gecko/i.test(t)}(h.userAgent);return{on:function(t,n,r){if(r&&u(r)){var i=o(t)?m(t):t;i&&c(i)&&("wheel"===n&&(n=e?"DOMMouseScroll":"mousewheel"),i.addEventListener?i.addEventListener(n,r,!1):i.attachEvent&&i.attachEvent("on"+n,r))}},off:function(e,t,n){if(n&&u(n)){var r=o(e)?m(e):e;r&&c(r)&&(r.removeEventListener?r.removeEventListener(t,n,!1):r.detachEvent&&r.detachEvent("on"+t,n))}},simulate:function(e,t){var n=void 0,r=o(e)?m(e):e;v.createEventObject?(n=v.createEventObject(),r.fireEvent("on"+t,n)):((n=v.createEvent("HTMLEvents")).initEvent(t,!0,!0),r.dispatchEvent(n))},stop:function(e){return e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),!1},locate:function(e){var t=e||f.event,n=t.target||t.srcElement;return n&&3===n.nodeType&&(n=n.parentNode),m(n)}}}(),E=function(e){return{}.toString.call(e)},k=function(e){return"[object String]"===E(e)},C=function(e){return"[object Number]"===E(e)},S=function(e){return Array.isArray(e)},P=function(e,t){return!(!e||!t)&&Object.prototype.hasOwnProperty.call(e,t)},L=function(e){var t=C(e)?String(e):e;if(!k(t))throw new Error("InvalidInput: String required.");return t},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=L(e);return(n=n.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""))&&t&&(n=n.replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," ")),n},A=function e(t,n,r){var i=L(t);if(C(n)&&(n=String(n)),C(r)&&(r=String(r)),k(n)&&k(r)){var s=i.split(n);i=s.join(r)}else if(S(n)&&k(r))n.forEach(function(t){i=e(i,t,r)});else if(S(n)&&S(r)&&n.length===r.length){var a=n.length;if(a>0)for(var o=0;o<a;o++){var l=n[o],c=r[o];i=e(i,l,c)}}return i},x=function(e){var t=L(e),n={a:"á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|ä",A:"Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|Ä",c:"ç",C:"Ç",d:"đ",D:"Đ",e:"é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|ë",E:"É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ë",i:"í|ì|ỉ|ĩ|ị|ï|î",I:"Í|Ì|Ỉ|Ĩ|Ị|Ï|Î",o:"ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|ö",O:"Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ô|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|Ö",u:"ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|û",U:"Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự|Û",y:"ý|ỳ|ỷ|ỹ|ỵ",Y:"Ý|Ỳ|Ỷ|Ỹ|Ỵ"},r=function(e,n){t=A(t,e,n)};for(var i in n)!function(e){P(n,e)&&n[e].split("|").forEach(function(t){return r(t,e)})}(i);return t},H=function(e,t){var n=T(x(e)),r=t||"-";return n.toLowerCase().replace(/\W+/g," ").replace(/\s+/g," ").replace(/\s/g,r)},D=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,function(e){return e&&e.__esModule?e.default:e}(function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){!function(t,r){e.exports=function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var n=this;i(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(e){n[e]=n[e].bind(n)}),this.init()}return a(e,[{key:"init",value:function(){if(window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null},this.selector.addEventListener("touchstart",this.touchstartHandler,{passive:!0}),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler)),null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var n=document.createElement("div");n.style.cssFloat="left",n.style.float="left",n.style.width=100/this.innerElements.length+"%",n.appendChild(this.innerElements[t]),e.appendChild(n)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===s(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-e,0),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide=Math.min(Math.max(e,0),this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=this.drag.endX-this.drag.startX,t=Math.abs(e),n=Math.ceil(t/(this.selectorWidth/this.perPage));e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(n):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(n),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null}}},{key:"touchstartHandler",value:function(e){e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mousedownHandler",value:function(e){e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){e.preventDefault(),this.pointerDown&&(this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var n=document.createElement("div");n.style.cssFloat="left",n.style.float="left",n.style.width=100/this.innerElements.length+"%",n.appendChild(this.innerElements[t]),e.appendChild(n)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e,1),this.currentSlide=e<=this.currentSlide?this.currentSlide-1:this.currentSlide,this.updateFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,n){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t,0,e),this.currentSlide=t<=this.currentSlide?this.currentSlide+1:this.currentSlide,this.updateFrame(),n&&n.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),e){for(var n=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)n.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(n),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},n=e;for(var r in n)t[r]=n[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=o,e.exports=t.default}])}()}()}))),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!function n(){var r=e.shift(),i=function(){e.length>0&&n()},s=new Image;s.onerror=i,s.onload=i,s.src=t+r}()},j=function(e){for(var t=0,n=0;e;){if("BODY"===e.tagName){var r=document.documentElement,i=e.scrollLeft||r.scrollLeft,s=e.scrollTop||r.scrollTop;t+=e.offsetLeft-i+e.clientLeft,n+=e.offsetTop-s+e.clientTop}else t+=e.offsetLeft-e.scrollLeft+e.clientLeft,n+=e.offsetTop-e.scrollTop+e.clientTop;e=e.offsetParent}return{x:t,y:n}},F=encodeURIComponent("People"),M=encodeURIComponent("Logo Project"),O=encodeURIComponent("LogoTechStack"),X=/greenglobal\.vn/.test(document.URL),N="",q=[],W=[],R=[],$=void 0,B=void 0,V=void 0,z=void 0,U=void 0,Y=void 0,G=void 0,J=void 0,Z=!1,K=!1,Q=function(e){return e.sort(function(){var e=Math.random();return 0===e||.5===e||1===e?0:e>.5})},ee=function(e,t){return t.some(function(t){return t===e})},te=function(){R=[].concat(r(R)).map(function(e){return{id:e[0],name:e[1],logo:"/"+O+"/"+encodeURIComponent(e[1])+".png",count:e[2],alias:H(e[1])}}),q=[].concat(r(q)).map(function(e){return{id:e[0],name:e[1],avatar:"/"+F+"/"+encodeURIComponent(e[2])+".png",skills:e[3]}}),W=[].concat(r(W)).map(function(e){return{name:e[0],alias:H(e[0]),logo:"/"+M+"/"+encodeURIComponent(e[0])+".png",stacks:e[1],members:e[2]}})},ne=function(){return[].concat(r(q))},re=function(){return[].concat(r(W))},ie=function(){return[].concat(r(R))},se=function(e){return{by:function(t,n){var r=e.filter(function(e){return e[t]===n});return r.length>0&&r[0]}}},ae=function(e){return se(ie()).by("id",e)},oe=function(e){return se(ne()).by("id",e)},le=function(e){return se(re()).by("id",e)},ce=function(e){var t=[],n=ne();if(k(e)){var r=e.toLowerCase(),i=se(ie()).by("alias",r);t=n.filter(function(e){return ee(i.id,e.skills)})}else t=n.filter(function(t){return ee(e,t.skills)});return t.map(function(e){return{name:e.name,avatar:e.avatar}})},ue=function(e){var t=[],n=re();if(k(e)){var r=e.toLowerCase(),i=se(ie()).by("alias",r);t=n.filter(function(e){return ee(i.id,e.stacks)})}else t=n.filter(function(t){return ee(e,t.stacks)});return t.map(function(e){return{alias:e.alias,name:e.name,logo:e.logo}})},pe=function(e){var t=e.toLowerCase(),n=re().filter(function(e){var n=e.name.toLowerCase();return t===n||t===e.alias});return n.length>0?n[0].members.map(function(e){return oe(e)}):[]},de=function(e){var t=e.getAttribute("image-path");return t&&"/"===t.indexOf(t.length-1)&&(t=t.slice(0,-1)),t},he=function(e){for(var t=e.query(".pps__swiper-wrapper"),n=t.query(".pps__swiper-container"),r=1,i=t.offsetWidth;200*r<i;)r++;var s=void 0,a=e.queryAll(".pps__swiper--nav"),o=m(a[0]),l=m(a[1]),c="pps__swiper--nav--enable",u="pps__swiper--nav--disable",p=c+" "+u,d=function(t){o.removeClass(p),l.removeClass(p);var i=n.queryAll(".pps__swiper-slide").length,a=i-r;i>r&&(t<1?(o.addClass(u),l.addClass(c)):t>=a?(o.addClass(c),l.addClass(u)):(o.addClass(c),l.addClass(c)),e.queryAll(".pps__btn-link").forEach(function(e){var t=m(e),n=m(t.parentNode);n.hasClass(c)?(t.addClass("ripple"),n.onclick=function(){t.hasClass("prev")?s.prev(r):t.hasClass("next")&&s.next(r)}):setTimeout(function(){t.removeClass("ripple")},500)}))};return s=new D({selector:n,duration:200,easing:"ease-out",perPage:r,startIndex:0,draggable:!0,threshold:20,loop:!1,onInit:function(){d(0)},onChange:function(){d(s.currentSlide)}}),{siema:s,perPage:r}},fe=function(e){b(".pps__list--stack-item.pps-active").forEach(function(e){e.removeClass("pps-active");var t=e.query(".pps-ripple");t&&t.destroy()}),e.addClass("pps-active");var t=e.query(".pps-inner");g("DIV",t).addClass("pps-ripple")},ve=function(e){var t=y("DIV");t.addClass("pps__list--stack-item");var n=e.id,r=e.logo,i=g("SPAN",t);return i.addClass("pps-inner"),i.style.backgroundImage="url("+N+r+")",i.setAttribute("stackid",n),t},me=function(e,t){$.style.backgroundImage="url("+N+t+")",$.setAttribute("title",e)},ge=function(e){var t=y("DIV");t.addClass("pps__swiper-slide pps-card pps-card--transition");var n=e.avatar,r=e.name,i=g("DIV",t);i.addClass("pps__person-avatar"),i.style.backgroundImage="url("+N+n+")";var s=g("DIV",t);return s.addClass("pps__person-name"),s.html(r),t},ye=function(e){var t=y("DIV");t.addClass("pps__list--project-item pps-card pps-card--transition");var n=e.logo,r=e.alias,i=g("A",t);return i.addClass("pps-inner"),X&&i.setAttribute("href","/"+r),i.style.backgroundImage="url("+N+n+")",t},_e=function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n||Y.empty(),!t.length)return!1;var r=[];if(!n&&t.length>4){var i=Q(t);r=i.slice(4,t.length),t=i.slice(0,4)}var s=20,a=t.map(function(e){var t=ye(e);if(n){var r=Y.query(".pps__view-all");Y.insertBefore(t,r)}else Y.appendChild(t);return setTimeout(function(){t.removeClass("pps-card--transition")},s),s+=120,{$el:t,data:e}});J.onclick=null,J.addClass("pps__is-disabled");var o=r.length;return o>0&&(J.removeClass("pps__is-disabled"),J.html('<span class="pps__btn-viewall"><b>+{{count}}</b> more</span>'.replace("{{count}}",o)),J.onclick=function(){e(r,!0)}),a},be=function(e){U.empty();var t=Q(e).map(function(e){var t=ge(e);return U.appendChild(t),{$el:t,data:e}}),n=t.reduce(function(e,t){return e.concat(t)},[]),r=t.length,i="0 member";if(1===r?i="1 member":r>1&&(i=r+" members"),B.html(i),he(z),n.length){var s=10;n.filter(function(e){return e&&e.$el}).map(function(e){return e.$el}).map(function(e){return s+=180,setTimeout(function(){e.removeClass("pps-card--transition")},s)})}return t},we=function(e,t){var n=e.id;me(n,e.logo),fe(t),be(ce(n)),_e(ue(n))},Ee=function(e){var t=e.$el,n=e.data;return w.on(t,"click",function(){we(n,t)}),n},ke=function(){V.onchange=function(){var e=Number(V.value);if(e>=0){var t=void 0,n=ae(e);b(".pps__list--stack-item").forEach(function(n){var r=n.query(".pps-inner");Number(r.getAttribute("stackid"))===e&&(t=n)}),t&&we(n,t)}}},Ce=function(e){return G.empty(),e.map(function(e){var t=ve(e);return G.appendChild(t),{$el:t,data:e}}).map(Ee)},Se=function(){if(K)return!1;K=!0;var e=b(".pps__list--stack-item");return!!e.length&&(we(ie()[0],e[0]),K)},Pe=function(e,t){var n=de(e),r=pe(t).filter(function(e){return e.avatar&&e.name});if(r.length>0){var i=Q(r).map(function(e){var t=e.name,r=n+e.avatar;return'\n  <div class="pps__swiper-slide">\n    <div class="pps__person-avatar" style="background-image:url({{image}})"></div>\n    <div class="pps__person-name">{{name}}</div>\n  </div>\n'.replace("{{image}}",r).replace("{{name}}",t)}).join(""),s='\n  <div class="pps__swiper-wrapper pps__swiper-wrapper-simple">\n    <div class="pps__swiper--nav pps__swiper--prev">\n      <span class="pps__btn-link prev"></span>\n    </div>\n    <div class="pps__swiper-container pps__swiper-container-simple">{{content}}</div>\n    <div class="pps__swiper--nav pps__swiper--next">\n      <span class="pps__btn-link next"></span>\n    </div>\n  </div>\n'.replace("{{content}}",i);e.innerHTML=s,he(e)}return!1},Le=function(e){if("simple"===e.getAttribute("type")){var t=e.getAttribute("project");return Pe(e,t)}var n=["Team","Projects","Our expertise"];N=de(e);var r=q.map(function(e){return e.avatar}),i=W.map(function(e){return e.logo});I(r.concat(i),N);var s=e.getAttribute("section-labels");if(s)for(var a=s.split("|"),o=0;o<n.length;o++)a[o]&&(n[o]=a[o]);var l=g("DIV",e);l.addClass("pps__wrapper--fluid");var c=R.map(function(e){return'<option value="'+e.id+'">'+e.name+"</option>"}).join(""),u='\n  <div class="pps__frame--left">\n    <div class="pps__frame--top">\n      <div class="pps__techlogo-outer">\n        <div class="pps__techlogo">\n          <label class="pps__label pps__label--no-padding">{{labelTech}}</label>\n          <div class="pps__techlogo-image"></div>\n          <span class="pps__techselect-arrow"></span>\n        </div>\n        <div class="pps__select-outer">\n          <select class="pps__select pps__stack-selector">\n            {{options}}\n          </select>\n        </div>\n      </div>\n      <div class="pps__block--people">\n        <label class="pps__label">\n          {{labelPeople}} <span class="pps__teamnumber--small"></span>\n        </label>\n        <div class="pps__swiper-wrapper">\n          <div class="pps__swiper--nav pps__swiper--prev">\n            <span class="pps__btn-link prev"></span>\n          </div>\n          <div class="pps__swiper-container"></div>\n          <div class="pps__swiper--nav pps__swiper--next">\n            <span class="pps__btn-link next"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="pps__frame--bottom">\n      <div class="pps__block--project">\n        <label class="pps__label">\n          {{labelProject}}\n        </label>\n        <div class="pps__list--project"></div>\n        <div class="pps__view-all pps__is-disabled"></div>\n      </div>\n    </div>\n  </div>\n  <div class="pps__frame--right">\n    <div class="pps__block--stack">\n      <label class="pps__label">\n        {{labelTech}}\n      </label>\n      <div class="pps__list--stack"></div>\n    </div>\n  </div>\n'.replace(new RegExp("{{labelTech}}","gi"),n[2]).replace("{{labelProject}}",n[1]).replace("{{labelPeople}}",n[0]).replace("{{options}}",c);l.html(u),G=l.query(".pps__list--stack"),U=l.query(".pps__swiper-container"),Y=l.query(".pps__list--project"),$=l.query(".pps__techlogo-image"),B=l.query(".pps__teamnumber--small"),V=l.query(".pps__stack-selector"),J=l.query(".pps__view-all"),z=l;var p=function(){if(!K){var e=j(z).y,t=window.innerHeight,n=e-t;n<-80&&Se()}};return ke(),Ce(R),window.onscroll=p,window.onload=function(){p()},e},Te=function(e){try{var t="string"==typeof e?JSON.parse(e):e,n=t.people,i=t.projects,s=t.techstacks;q=[].concat(r(n)),W=[].concat(r(i)),R=[].concat(r(s)),te(),b("ppswidget").map(Le)}catch(e){console.log(e)}},Ae=function(e){Z||(Te(e),Z=!0)},xe=function e(){return e};e.getPeople=ne,e.getProjects=re,e.getTechstacks=ie,e.getTechstackById=ae,e.getPersonById=oe,e.getProjectById=le,e.getPeopleBySkill=ce,e.getProjectStacks=ue,e.getProjectMembers=pe,e.init=Ae,e.isInitialized=xe,Object.defineProperty(e,"__esModule",{value:!0})});
if (window.PPSW) {PPSW.init({"people":[[2,"Thuy Bui","thuybtt",[5,4,23,26,151]],[3,"Toan Dang","toandtc",[38,60,5,4,9,23,26]],[4,"Trong Dinh","trongdd",[41,44,4,43,60,63,69,153,78]],[5,"Tran Dinh","trandtb",[41,44,43,60,78]],[6,"Thang Do","thangdq",[4,5,39,38,60,153,63,6,9]],[10,"Tuan Ho","tuanhm",[5,4,23,9,152,27,38,60,153,63,69]],[12,"Truong Hoang","truonghn",[5,6,32,152,153,4,9,27,30,26,63]],[13,"Thang Huynh","thanghq",[4,43,41,44,60,6,5,23,9,153,63]],[14,"Duc Le","ducl",[4,5,9,23,27,30,63,152,153,34,69,80,14]],[15,"Tan Le","tanld",[4,5,38,39,60,6,23,38,39,60]],[16,"Tuan Le","tuanlk",[41,118,41]],[17,"Khanh Le","khanhlp",[5,4,27,26,34,153,152]],[18,"Oanh Le","oanhltk",[44,51,41,43,60]],[19,"Tinh Le","tinhlv",[5,4,23,9,26,153,27]],[20,"Vinh Le","vinhlv",[4,5,6,9,23,26,63,151,153,4]],[21,"Tin Le","tinlvv",[6,5,4,23,9,38,39,60,153,69]],[22,"Dong Nguyen","dongnd",[4,5,9,63,80,14]],[23,"Hoa Nguyen","hoand",[41,51,118]],[24,"Vu Nguyen","vunh",[5,152,153,6,4,9,27,30,26,153,63,80]],[26,"Vy Nguyen","vynln",[41,51,118,9,63]],[27,"Bao Nguyen","baonq",[6,5,4,23,9,38,39,153,60,80]],[28,"Hoa Nguyen","hoantt",[6,5,4,9,27,30,32,153,152]],[29,"Giang Nguyen","giangnt",[5,4,153,27,152,26,35]],[30,"Thanh Nguyen","thanhnt1",[4,5,9,27,30,34,35,63,69,152,153,6,23,41,151,60,14]],[31,"Thanh Nguyen","thanhnt",[4,5,9,23,27,30,63,69,152,153,80,14]],[32,"Toan Pham","toanpc",[4,9,26,27,30,34,60,63,69,80,152,153,6,5,23,14]],[33,"Thao Pham","thaopn",[118]],[34,"Thanh Pham","thanhpx",[4,43,44,60,6,5,44,153,78]],[35,"Viet Phan","vietpq",[38,39,80,153,69,60,32]],[36,"Thien Phung","thienpd",[118]],[37,"Binh Quan","binhqd",[4,6,9,14,23,63,69,80,151,152,153]],[38,"Huy Ta","huytbt",[4,6,9,14,23,26,27,30,34,35,60,63,69,80,151,152,153]],[39,"Minh Than","minhtv",[26,4,5,153,152]],[41,"Toan Ton","toantt",[41,6,5,4,43,44,153,60,69,78,41,6,5,4,9,153,69]],[42,"Phu Tran","phutlq",[41,51,60,153,43,5]],[43,"Hoai Tran","hoaitt",[6,5,23,9,26,151,153,63]],[45,"Lanh Tran","lanhtv",[5,32,152,27,26,60,153,4]],[47,"Nam Tran","namtvd",[4,43,44,60,5,153,69,6,5,153,69,153,69]],[48,"Sang Tran","sangtx",[5,4,23]],[49,"Au Truong","autn",[5,27,30,32,34,152,4,6,23,9,26,153,60]],[50,"Tien Truong","tientn",[60,153,6,5,4,23,9,27,26,60,63,69,152]],[52,"Ninh Vo","ninhva",[6,5,4,23,9,151]],[53,"Dung Vo","dungvhp",[51,41]],[54,"An Vo","anvt",[4,6,5,44,43,153,60,69,153,69]],[55,"Thanh Vo","thanhvv",[26,152,153,4,27,6]],[65,"Thanh Ho","thanhhc",[63,153,80]]],"projects":[["ATeam",[38,6,80,69],[21,15,2,6,27]],["Bible",[51,151,118,9],[2,36,23,28]],["Bookstoop",[118,4,69,80],[32,30,14,15]],["BQ Shoes",[4,34,35],[49,2,12,16]],["Escope",[4,5,9,14,23,51,63,118,80],[16,33,26,52,20,23,24,22,32,14]],["Himalayan Bowls",[34,60,152,153],[30,37,38,43]],["Images Luxury Nail Lounge",[4,5,9,23,27,60,152,153,38,118],[14,52,49,16,53,33,2,10,6,27]],["IoT Sensor",[9,14,23,63,80],[36,38,22,14,30,32,24]],["iTravelLocal",[4,27,80,9,63,5],[22,2,52]],["Lyad",[151,69,4,80,9,153,63,152],[20,10,55,14,43,50]],["MeiReve",[6,118,4,27,152],[20,24,33,52,23,49,31]],["Read This Next",[118],[37,23,18,21]],["Roomi",[118,51,152,27,69],[20,2,32,52,26,24]],["Stuff N Style",[4,35,5],[38,29,4,14]],["Swivel",[27,60,152,153,118,23],[48,30,20,26,24,38,31,15,16,52,20,28,36]],["YouLook",[153,80,4,5,9,30,51,60,63,69,118,152,6],[37,22,38,49,16,33,26,36,20,15]],["Youth1",[32,60,152,153],[28,49,45,12]],["Pack",[118,80,51,6],[36,53,23,33,26]],["Allamanda",[38,4,39],[15,48,3,6]],["Cham Islands",[41,78,43,44],[34,41,13,47,26]],["Da Nang DIFF",[26],[48,52,43,55,2]],["Da Nang Party Committee Portal",[78,41,44,43],[42,16,34,41,47,50,5,4]],["eBid",[38,4,39],[6,15,21,2]],["Grand Tourane Hotel",[4,39,38],[15,27,6,16]],["Hai Tran",[26,4,5,152],[48,55,29,16]],["Thach Ban",[4,5,152,30,23,63],[20,30,38,24]],["The Da Nang Citizen and Tourist Support System",[41,44,80],[34,41,54,43]],["Tien Thu",[6,38,4,39],[20,2,12,14]],["Top 5",[118,27,152],[4,31,36,23]],["University of Economics",[38,4,5],[35,21,3,6]],["Sungrand City",[26,4,5,38],[48,2,15,55]],["Navmobi",[51,41],[38,36,17,65]]],"techstacks":[[9,"NodeJS",25],[38,"DotNET",8],[41,"Java",14],[118,"iOS",5],[51,"Android",5],[23,"ReactJS",21],[6,"AngularJS",24],[151,"Ionic",7],[27,"Laravel",16],[34,"Magento",6],[26,"Wordpress",16],[32,"Drupal",5],[35,"Shopify",3],[44,"Java Spring",10],[63,"MongoDB",18],[152,"PHP",17],[4,"jQuery",36],[5,"Bootstrap",35],[30,"Yii",9],[14,"LoopBack",7],[39,"Umbraco",6],[43,"ZK Framework",9],[80,"AWS",10],[60,"SQL",25],[153,"MySQL",38],[69,"Elastic Search",18],[78,"Apache Solr",4]]});};