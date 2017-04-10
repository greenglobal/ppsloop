function _toConsumableArray(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}function _toConsumableArray(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,n){if("undefined"!=typeof module&&module.exports)module.exports=n();else{var e=window||{};e.define&&e.define.amd?e.define([],n):e.exports?e.exports=n():e.stabilize=n()}}(0,function(){var t=function(t){return Array.isArray(t)},n=function(n){return null!==n&&"object"===(void 0===n?"undefined":_typeof(n))&&!1===t(n)},e=function(t){return"[object String]"==={}.toString.call(t)},r=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.enumerable,a=void 0!==o&&o,i=r.configurable,c=void 0!==i&&i,u=r.writable,l=void 0!==u&&u,s=r.value,f=void 0===s?e:s;return Object.defineProperty(t,n,{enumerable:a,configurable:c,writable:l,value:f}),t},a=function(t,n){var e=t,r=n-t+1;return Math.floor(Math.random()*r)+e},i=function(){var c=function(t){var c=[].concat(_toConsumableArray(t)),u=function(){for(var t=[].concat(_toConsumableArray(c)),n=[],e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return i(n)},l=function(){return Math.min.apply({},c)},s=function(){return Math.max.apply({},c)},f=function(){var t=[].concat(_toConsumableArray(c))[0];return i(t)},d=function(){var t=[].concat(_toConsumableArray(c))[c.length-1];return i(t)},v=function(){for(var t,n=arguments.length,e=Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=[].concat(_toConsumableArray(c)),u=a.slice(0,o),l=a.slice(o,a.length);return i((t=[]).concat.apply(t,[u].concat(e,[l])))},m=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return v(c.length,n)},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=[].concat(_toConsumableArray(c.slice(0,t)),_toConsumableArray(c.slice(t+n)));return i(e)},y=function(t){var n=[].concat(_toConsumableArray(c)).sort(t);return i(n)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=[].concat(_toConsumableArray(c)),a=o[0];if(1!==t&&-1!==t||o.sort(function(n,e){return n>e?t:n<e?-1*t:0}),e(t)&&r(a,t)&&o.sort(function(n,e){return n[t]>e[t]?1:n[t]<e[t]?-1:0}),n(t)){for(var u in t)!function(n){if(r(a,n)){var e=-1===t[n]?-1:1;o.sort(function(t,r){return t[n]>r[n]?e:t[n]<r[n]?-1*e:0})}}(u)}return i(o)},g=function(){var t=[].concat(_toConsumableArray(c)).reverse();return i(t)},b=function(){return y(function(){return Math.random()-.5})};return[["min",l],["max",s],["unique",u],["first",f],["last",d],["pick",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=c.shuffle(),e=Math.max(Math.min(t,n.length),1);if(e>=n.length)return n;if(1===e){return n[a(0,n.length-1)]}return i(n.splice(0,e))}],["insert",v],["append",m],["remove",p],["isort",y],["msort",h],["ireverse",g],["shuffle",b]].map(function(t){o(c,t[0],t[1])}),c},u=function(t){var e=Object.create({}),r=function(n){o(e,n,t[n],{enumerable:!0})};return Object.keys(t).map(r),o(e,"get",function(t){return e[t]}),o(e,"set",function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=Object.assign({},e),a=function(t,n){o[t]=n};return n(t)?Object.keys(t).forEach(function(n){a(n,t[n])}):a(t,r),i(o)}),e};return function(e){return t(e)?c(e):n(e)?u(e):e}}();return i});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,n){if("undefined"!=typeof module&&module.exports)module.exports=n();else{var e=window||{};e.define&&e.define.amd?e.define([],n):e.exports?e.exports=n():e.doc=n()}}(0,function(){var t,n,e,r,o,a=function(t){return void 0===t},i=function(t){return!a(t)&&"object"===(void 0===t?"undefined":_typeof(t))},c=function(t){return"string"==typeof t},u=function(t){return"number"==typeof t},l=function(t){return t instanceof HTMLElement},s=function(t){return t&&"[object Function]"==={}.toString.call(t)},f=function(t,n){if(!c(t))return"";var e=t?t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):t||"";return e&&n?e.replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "):e},d=function(t,n){var e=t.match(/^([a-z]+)([A-Z]{1})([a-z]+)$/);if(e&&0===e.index){var r=[];r.push(e[1]),r.push("-"),r.push(e[2]),r.push(e[3]),t=r.join("").toLowerCase()}return u(n)&&(n+="px"),{key:t,value:n}},v=navigator,m=window,p=document;e=function(t){var n=(c(t)?p.getElementById(t):t)||null;return n&&l(n)&&function(){var t=n.classList;n.hasClass=function(n){return!!(n=f(n,!0))&&t.contains(n)},n.addClass=function(e){if(!(e=f(e,!0)))return!1;var r=e.split(" ");return r.length>1?r.forEach(function(n){t.add(n)}):t.add(e),n},n.removeClass=function(e){if(!(e=f(e,!0)))return!1;var r=e.split(" ");return r.length>1?r.forEach(function(n){t.remove(n)}):t.remove(e),n},n.toggleClass=function(e){if(!(e=f(e,!0)))return!1;var r=e.split(" ");return r.length>1?r.forEach(function(n){t.toggle(n)}):t.toggle(e),n},n.setProperty=function(t){for(var e in t)if(""!==t[e]){var r=t[e];(c(r)||u(r))&&n.setAttribute(e,r)}return n},n.setStyle=function(t){var e=[];if(i(t)){for(var r in t)if(""!==t[r]){var o=t[r];if(c(o)||u(o)){var a=d(r,o);e.push([a.key,a.value].join(":"))}}}else c(t)&&(e=t.split(";"));var l=n.getAttribute("style");if(l){var s=l.split(";");e=e.concat(s)}return e.push(""),n.setAttribute("style",e.join(";")),n},n.empty=function(){return n.innerHTML="",n},n.html=function(t){return a(t)?n.innerHTML:(n.innerHTML=t,n)},n.destroy=function(){n.parentNode&&n.parentNode.removeChild(n)}}(),n},t=function(t,n){var r=n?e(n):p.body,o=l(t)?t:p.createElement(t);return r.appendChild(o),e(o)},n=function(t){return e(p.createElement(t))},r=function(t){var n=void 0,r=p.querySelector(t);return r&&(n=e(r)),n},o=function(t){var n=[],r=p.querySelectorAll(t);if(r)for(var o=0;o<r.length;o++)n.push(e(r[o]));return n};var y=function(t){"loading"!==p.readyState?setTimeout(t,0):p.addEventListener("DOMContentLoaded",t)},h=function(){var t=function(t){return/gecko/i.test(t.toLowerCase())}(v.userAgent);return{on:function(n,r,o){if(o&&s(o)){var a=c(n)?e(n):n;a&&l(a)&&("wheel"===r&&(r=t?"DOMMouseScroll":"mousewheel"),a.addEventListener?a.addEventListener(r,o,!1):a.attachEvent&&a.attachEvent("on"+r,o))}},off:function(t,n,r){if(r&&s(r)){var o=c(t)?e(t):t;o&&l(o)&&(o.removeEventListener?o.removeEventListener(n,r,!1):o.detachEvent&&o.detachEvent("on"+n,r))}},simulate:function(t,n){var r=void 0,o=c(t)?e(t):t;p.createEventObject?(r=p.createEventObject(),o.fireEvent("on"+n,r)):(r=p.createEvent("HTMLEvents"),r.initEvent(n,!0,!0),o.dispatchEvent(r))},stop:function(t){return t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),!1},locate:function(t){var n=t||m.event,r=n.target||n.srcElement;return r&&3===r.nodeType&&(r=r.parentNode),e(r)}}}();return{ready:y,one:r,all:o,get:e,add:t,create:n,Event:h}});var _slicedToArray=function(){function t(t,n){var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();!function(t,n){if("undefined"!=typeof module&&module.exports)module.exports=n();else{var e=window||{};e.define&&e.define.amd?e.define([],n()):e.exports?e.exports=n():e.PPSW=n()}}(0,function(){var t=[],n=[],e=[],r=void 0,o=void 0,a=void 0,i=void 0,c=void 0,u=void 0,l=!1,s=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},f=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t.slice(0);return e.sort(function(){return s(0,100)>50}),e.splice(0,n)},d=function(){return Math.floor(16777215*Math.random()).toString(16)},v=function(){return[].concat(_toConsumableArray(t))},m=function(){return[].concat(_toConsumableArray(n))},p=function(){return[].concat(_toConsumableArray(e))},y=function(t){var n=t.toLowerCase();return v().filter(function(t){return t.skills.some(function(t){return t[0].toLowerCase()===n})})},h=function(t){var n=t.toLowerCase();return m().filter(function(t){return t.stacks.map(function(t){return t.toLowerCase()}).includes(n)})},g=function(t){var n=t.text,e=void 0===n?"?!?":n,r=t.fontSize,o=void 0===r?20:r,a=t.width,i=void 0===a?160:a,c=t.height,u=void 0===c?120:c,l=t.backgroundColor,s=void 0===l?d():l,f=t.textColor;return"https://placeholdit.imgix.net/~text?"+["txt="+e,"txtsize="+o,"w="+i,"h="+u,"bg="+s,"txtclr="+(void 0===f?"000000":f)].join("&")},b=function(t){var n={fontSize:16,width:180,height:50};return Array.isArray(t)?(t[1]||(n.text=t[0],t[1]=g(n)),t):(t.hasOwnProperty("skills")&&!t.image?(n.text=t.name.split(" ").map(function(t){return t.charAt(0)}).join(""),n.fontSize=50,n.width=160,n.height=180,t.image=g(n)):t.hasOwnProperty("stacks")&&!t.image&&(n.text=t.name,n.width=170,n.height=50,t.image=g(n)),t)},C=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tl2br",e=-200,r=-200,o=50;"b2t"===n&&(e=0,r=500),t.filter(function(t){return t&&t.$el}).map(function(t){return t.$el}).map(function(t){return e+=20,r+=20,t.style.transition="all "+o+"ms cubic-bezier(0.455, 0.03, 0.515, 0.955);",t.style.transform="translate("+e+"px, "+r+"px)",t.style.opacity="0.0",t}).forEach(function(t){setTimeout(function(){t.style.transition="all "+o+"ms cubic-bezier(0.455, 0.03, 0.515, 0.955);",t.style.transform="translate(0px, 0px)",t.style.opacity="1.0"},o),o+=50})},x=function(){return new Promise(function(t){var n=s(0,500)+250,e=s(0,100)-50,r=50;doc.all(".team-block .pps-card").forEach(function(t){setTimeout(function(){t.style.transition="all "+r+"ms cubic-bezier(0.455, 0.03, 0.515, 0.955);",t.style.transform="translate(-"+n+"px, "+e+"px)",t.style.opacity="0.0"},r),r+=50}),setTimeout(t,300)})},w=function(t){var n=10;t.filter(function(t){return t&&t.$el}).map(function(t){return t.$el}).map(function(t){return t.style.opacity="0.1",t.style.transform="translate(400px, 0px)",t}).forEach(function(t){setTimeout(function(){t.style.opacity="1.0",t.style.transform="translate(0px, 0px)"},n),n+=5})},A=function(t){var n=doc.create("DIV");n.addClass("items pps-card");var e=_slicedToArray(t,2),r=e[0],o=e[1],a='\n      <div class="item-wrap">\n        <img src="'+o+'" alt="'+r+'">\n      </div>\n    ';return n.html(a),n},E=function(t,n){r.html('<img src="'+n+'" alt="'+t+'">')},S=function(t){var n=doc.create("DIV");n.addClass("team-member pps-card");var e=t.image,r=t.name,o=t.yoe,a='\n      <div class="avata">\n        <img src="'+e+'" alt="'+r+'">\n      </div>\n      <p class="member-name"><a>'+r+'</a></p>\n      <p class="member-description">'+o+"</p>\n    ";return n.html(a),n},j=function(t){var n=doc.create("DIV");n.addClass("project-items pps-card");var e=t.image,r=t.name,o='\n      <a class="project-link">\n        <img src="'+e+'" alt="'+r+'">\n      </a>\n    ';return n.html(o),n},k=function t(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e||a.empty();var r=[];if(n.length>4){r=n.slice(4,n.length);n=n.slice(0,4)}var o=n.map(function(t){var n=j(t);if(e){var r=a.querySelector(".view-all");a.insertBefore(n,r)}else a.appendChild(n);return{$el:n,data:t}}),i=o.reduce(function(t,n){return t.concat(n)},[]);return i.length&&w(i),u.onclick=null,u.addClass("is-disabled"),r.length>0&&(u.removeClass("is-disabled"),u.onclick=function(){t(r,!0)}),o},_=function t(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e||o.empty();var r=[];if(n.length>8){r=n.slice(8,n.length);n=n.slice(0,8)}var a=n.map(function(t){var n=S(t);if(e){var r=o.querySelector(".view-all");o.insertBefore(n,r)}else o.appendChild(n);return{$el:n,data:t}}),i=a.reduce(function(t,n){return t.concat(n)},[]);return i.length&&C(i,e?"b2t":"r2l"),c.onclick=null,c.addClass("is-disabled"),r.length>0&&(c.removeClass("is-disabled"),c.onclick=function(){t(r,!0)}),a},D=function(t){var n=t[0];E(n,t[1]);var e=y(n);e.length<8&&(e=e.concat(f(v(),20)));var r=e.map(function(t){var e=t.name,r=t.image,o=t.skills,a=void 0===o?[]:o,i=a.filter(function(t){return t[0]===n}),c="";if(i.length)c=i[0][1];else{var u=s(1,9);c=u+" year"+(u>0?"s":"")+" of experience"}return{name:e,image:r,yoe:c}});_(stabilize(r).msort({yoe:-1}));var o=h(n);o.length<4&&(o=o.concat(f(m(),8))),o=o.map(function(t){return{name:t.name,image:t.image}}),k(stabilize(o).shuffle())},M=function(t){var n=t.$el,e=t.data;return doc.Event.on(n,"click",function(){x().then(function(){D(e)})}),e},I=function(t){return i.empty(),t.map(function(t){var n=A(t);return i.appendChild(n),{$el:n,data:t}}).map(M)},L=function(){l=!0;var t=f(p(),42),n=I(t);D(n[0])},T=function(t){var n=doc.add("DIV",t),e=doc.add("DIV",n);e.addClass("wrap-content");var l=doc.add("DIV",e);l.addClass("left-content");var s=doc.add("DIV",l);s.addClass("logo-team");var f=doc.add("DIV",l);f.addClass("team-block");var d=doc.add("H3",f);d.addClass("block-text"),d.html("Team");var v=doc.add("DIV",f);v.addClass("team-content"),v.html("");var m=doc.add("DIV",f);m.addClass("view-all"),m.html('<a class="btn-viewall">View all</a>');var p=doc.add("DIV",l);p.addClass("project-block");var y=doc.add("H3",p);y.addClass("block-text"),y.html("Projects");var h=doc.add("DIV",p);h.addClass("project-content"),h.html("");var g=doc.add("DIV",p);g.addClass("view-all"),g.html('<a class="btn-viewall">View all</a>');var b=doc.add("DIV",e);b.addClass("right-content");var C=doc.add("H3",b);C.addClass("content-name"),C.html('<span class="content-text">Tech stacks</span>');var x=doc.add("DIV",b);x.addClass("content-details"),r=s,o=v,a=h,i=x,c=m,u=g},V=function(r){try{var o="string"==typeof r?JSON.parse(r):r,a=o.people,i=o.projects,c=o.techstacks;t=a.map(b),n=i.map(b),e=c.map(b);(doc.all("ppswidget")||[]).map(T)}catch(t){console.error(t)}};return{init:function(t){V(t)},start:function(){l||L()},isInitialized:function(){return!1},isStarted:function(){return l},getPeople:v,getProjects:m,getTechstacks:p,getPeopleWhoHas:y,getProjectsThatUse:h}});;PPSW.init({"people":[{"name":"Thuong Bui","image":"","skills":[["Sketch","1 year of experience"],["Photoshop","4 years of experience"],["Hand drawing","5 years of experience"]]},{"name":"Thuy Bui","image":"","skills":[["HTML","7 years of experience"],["CSS","7 years of experience"],["JavaScript","7 years of experience"],["jQuery","7 years of experience"],["Bootstrap","4 years of experience"],["Angular","3 years of experience"],["Photoshop","5 years of experience"]]},{"name":"Toan Dang","image":"","skills":[["HTML","2 years of experience"],["CSS","2 years of experience"],["Bootstrap","Several months"],["JavaScript","2 years of experience"],["jQuery","1 year of experience"],["React","Several months"],["TypeScript","Several months"]]},{"name":"Trong Dinh","image":"","skills":[["Liferay","5 years of experience"],["ZK","5 years of experience"],["Tech stack 44","6 years of experience"],["Hibernate","5 years of experience"],["Python","2 years of experience"],["Ruby","2 years of experience"],["RoR","2 years of experience"],["MySQL","8 years of experience"],["MariaDB","5 years of experience"],["MS SQLServer","3 years of experience"],["Oracle","4 years of experience"],["MongoDB","4 years of experience"],["Lucence","6 years of experience"],["Sphinx","5 years of experience"],["Java","9 years of experience"],["Amazon Cloud Search","4 years of experience"],["GitHub","4 years of experience"],["Apache","8 years of experience"],["Tomcat","8 years of experience"],["nginx","6 years of experience"],["IIS","5 years of experience"],["AWS","6 years of experience"],["DigitalOcean","4 years of experience"]]},{"name":"Tran Dinh","image":"","skills":[["HTML","7 years of experience"],["CSS","7 years of experience"],["Bootstrap","7 years of experience"],["jQuery","6 years of experience"],["Java","7 years of experience"],["JavaScript","8 years of experience"],["Python","3 years of experience"]]},{"name":"Thang Do","image":"","skills":[["HTML","2 years of experience"],["CSS","2 years of experience"],["Angular","1 year of experience"],["Bootstrap","2 years of experience"],["jQuery","2 years of experience"],["Node.js","1 year of experience"],[".NET","4 years of experience"]]},{"name":"Hao Duong","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/6aae0db1-fec6-4a75-8a11-80b37423af62/haoda%40greenglobal.vn.png.png","skills":[["CSS","2 years of experience"],["Photoshop","7 years of experience"],["Sketch","2 years of experience"],["JavaScript","2 years of experience"],["HTML","2 years of experience"]]},{"name":"Thanh Ha","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f71469de-3091-40a0-9a3b-1e0d4caafffa/avata-2.png","skills":[["HTML","8 years of experience"],["Java","7 years of experience"],["Tech stack 44","6 years of experience"]]},{"name":"Thanh Ho","image":"","skills":[]},{"name":"Tuan Ho","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/b9a1bc4b-51ad-408f-9f77-f8deffdbb80d/avata-6.png","skills":[["HTML","1 year of experience"],["CSS","1 year of experience"],["Bootstrap","1 year of experience"],["jQuery","1 year of experience"],["CakePHP","4 years of experience"],[".NET","1 year of experience"]]},{"name":"Vu Hoang","image":"","skills":[]},{"name":"Truong Hoang","image":"","skills":[["HTML","3 years of experience"],["CSS","3 years of experience"],["Angular","1 year of experience"],["Bootstrap","3 years of experience"],["jQuery","3 years of experience"],["Node.js","3 years of experience"],["CakePHP","3 years of experience"],["Drupal","1 year of experience"],["Wordpress","1 year of experience"]]},{"name":"Thang Huynh","image":"","skills":[["HTML","2 years of experience"],["CSS","2 years of experience"],["Angular","1 year of experience"],["Bootstrap","2 years of experience"],["jQuery","1 year of experience"],["Webpack","Several months"],["Node.js","1 year of experience"],["Sketch","1 year of experience"],["Photoshop","1 year of experience"],["AI","1 year of experience"]]},{"name":"Duc Le","image":"","skills":[["HTML","2 years of experience"],["CSS","2 years of experience"],["Angular","2 years of experience"],["Bootstrap","2 years of experience"],["jQuery","1 year of experience"],["React","1 year of experience"],["jQuery","1 year of experience"],["Webpack","1 year of experience"],["Mocha","1 year of experience"],["Node.js","1 year of experience"],["Wordpress","1 year of experience"]]},{"name":"Tan Le","image":"","skills":[["HTML","1 year of experience"],["CSS","1 year of experience"],["JavaScript","1 year of experience"],["Bootstrap","1 year of experience"],["jQuery","1 year of experience"],["React","Several months"],["Webpack","Several months"],[".NET","2 years of experience"],["Angular","Several months"]]},{"name":"Tuan Le","image":"","skills":[["Objective-C","1 year of experience"],["Swift","1 year of experience"],["SQLite","1 year of experience"],["Design Pattern","1 year of experience"]]},{"name":"Khanh Le","image":"","skills":[["HTML","Several months"],["CSS","Several months"],["Bootstrap","Several months"],["jQuery","Several months"]]},{"name":"Oanh Le","image":"","skills":[["Android","Several months"],["SQLite","Several months"]]},{"name":"Tinh Le","image":"","skills":[["HTML","1 year of experience"],["CSS","1 year of experience"],["Bootstrap","1 year of experience"],["jQuery","1 year of experience"]]},{"name":"Vinh Le","image":"","skills":[["HTML","3 years of experience"],["CSS","3 years of experience"],["Angular","1 year of experience"],["Node.js","3 years of experience"],["Bootstrap","3 years of experience"],["jQuery","3 years of experience"],["React","1 year of experience"],["Wordpress","1 year of experience"]]},{"name":"Tin Le","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/9430a433-bc97-4428-bc04-5fbc4a11037b/avata-7.png","skills":[["HTML","2017 years of experience"],["CSS","2017 years of experience"],["Angular","2017 years of experience"],["jQuery","2017 years of experience"],["Bootstrap","2017 years of experience"],[".NET","2017 years of experience"]]},{"name":"Dong Nguyen","image":"","skills":[["HTML","9 years of experience"],["CSS","9 years of experience"],["Bootstrap","9 years of experience"],["jQuery","9 years of experience"],["React","9 years of experience"],["Node.js","9 years of experience"],["Laravel","2 years of experience"],["Wordpress","2 years of experience"]]},{"name":"Hoa Nguyen","image":"","skills":[]},{"name":"Vu Nguyen","image":"","skills":[]},{"name":"Hieu Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1ae4fe7f-97fd-4c01-aa35-e3a12b84cd06/hieunh%40greenglobal.vn.png.png","skills":[]},{"name":"Vy Nguyen","image":"","skills":[]},{"name":"Bao Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/16fee454-4284-466e-a920-e613f14bf71e/baonq%40greenglobal.vn.png.png","skills":[]},{"name":"Hoa Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/61c9488f-c3b8-486f-8c75-dc02671f7107/hoanntt%40greenglobal.vn.png.png","skills":[]},{"name":"Giang Nguyen","image":"","skills":[]},{"name":"Thanh Nguyen","image":"","skills":[]},{"name":"Thanh Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/69cf94e8-cfdb-4cd1-8a52-3fc4b0b2db73/avata-4.png","skills":[]},{"name":"Toan Pham","image":"","skills":[]},{"name":"Thao Pham","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/06a8f9d9-ca94-40b0-84eb-2dcd10d282a0/avata-3.png","skills":[]},{"name":"Thanh Pham","image":"","skills":[]},{"name":"Viet Phan","image":"","skills":[]},{"name":"Thien Phung","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/32b35387-0ede-43ec-9c42-9a89626263b4/thienpd%40greenglobal.vn.png.png","skills":[]},{"name":"Binh Quan","image":"","skills":[]},{"name":"Huy Ta","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/0d54714c-e946-447c-8273-aaa7f33693b7/avata-5.png","skills":[]},{"name":"Minh Than","image":"","skills":[]},{"name":"Chinh Thoi","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/a2987efd-3381-413b-90e0-d81838ed88d3/chinhth%40greenglobal.vn.png.png","skills":[]},{"name":"Toan Ton","image":"","skills":[]},{"name":"Phu Tran","image":"","skills":[]},{"name":"Hoai Tran","image":"","skills":[]},{"name":"Huyen Tran","image":"","skills":[]},{"name":"Lanh Tran","image":"","skills":[]},{"name":"Phong Tran","image":"","skills":[]},{"name":"Nam Tran","image":"","skills":[]},{"name":"Sang Tran","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1c90042c-adbc-4be7-bc2c-5a8a0e819b39/sangtx%40greenglobal.vn.png.png","skills":[]},{"name":"Au Truong","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/9a06edfc-b4ef-4627-9d46-5394fe25a449/avata-8.png","skills":[]},{"name":"Tien Truong","image":"","skills":[]},{"name":"Anh Truong","image":"","skills":[]},{"name":"Ninh Vo","image":"","skills":[]},{"name":"Dung Vo","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c28c918b-8648-40e0-9b01-9a1f17bcf43a/dungvph%40greenglobal.vn.png.png","skills":[]},{"name":"An Vo","image":"","skills":[]},{"name":"Thanh Vo","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/df5718da-891c-44ec-9da4-aaffcf8e766f/thanhvv%40greenglobal.vn.png.png","skills":[]},{"name":"Bang Vu","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/7dec0ad6-fb2b-4cfb-9dae-06bbcc08bf2c/bangvn%40greenglobal.vn.png.png","skills":[]},{"name":"Hong Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c966c5f4-9a03-452f-8f83-90a6afba3691/hongnt%40greenglobal.vn.png.png","skills":[]},{"name":"Nam Dinh","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/b941a7da-e09d-4087-878f-d587e181b353/namdh%40greenglobal.vn.png.png","skills":[]},{"name":"Nhung Pham","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/30f9d820-614e-4245-aeed-edb6eda012d7/nhungptc%40greenglobal.vn.png.png","skills":[]},{"name":"Thanh Truong","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f91fcae3-6233-412f-8487-99823904c2e0/thanhtcn%40greenglobal.vn.png.png","skills":[]},{"name":"Thuong Do","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5bdb799f-b3e3-445a-9a3f-79141be6fb30/thuongdtt%40greenglobal.vn.png.png","skills":[]}],"projects":[{"name":"ATeam","image":"","stacks":["HTML","JavaScript"]},{"name":"Bible","image":"","stacks":["CSS"]},{"name":"Bookstoop","image":"","stacks":[]},{"name":"Buddha","image":"","stacks":[]},{"name":"Business Matching","image":"","stacks":[]},{"name":"BYTO","image":"","stacks":[]},{"name":"Escope","image":"","stacks":[]},{"name":"Happy ever after dating","image":"","stacks":[]},{"name":"Himalayan Bowls","image":"","stacks":[]},{"name":"IdeaPod","image":"","stacks":[]},{"name":"Images Luxury Nail Lounge","image":"","stacks":[]},{"name":"IoT Sensor","image":"","stacks":[]},{"name":"iTravelLocal","image":"","stacks":[]},{"name":"JustLook","image":"","stacks":[]},{"name":"Koe Kyogakusha","image":"","stacks":[]},{"name":"Lyad","image":"","stacks":[]},{"name":"MeiReve","image":"","stacks":[]},{"name":"NavMobi","image":"","stacks":[]},{"name":"OneDoor","image":"","stacks":[]},{"name":"Read This Next","image":"","stacks":[]},{"name":"Roomi","image":"","stacks":[]},{"name":"Slidelane","image":"","stacks":[]},{"name":"Space Race","image":"","stacks":[]},{"name":"Stuff N Style","image":"","stacks":[]},{"name":"Swivel","image":"","stacks":[]},{"name":"The Gong Shop","image":"","stacks":[]},{"name":"YouLook","image":"","stacks":[]},{"name":"Youth1","image":"","stacks":[]}],"techstacks":[["HTML","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/7a68a1d7-974f-42d7-a6a5-ad30eee2389c/HTML.png"],["CSS","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/89d4c2e9-4153-4964-a183-335bab7f80f6/CSS.png"],["JavaScript","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f7097db7-b2fc-4372-8b6e-8ee044ee8f00/JavaScript.png"],["jQuery","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/254ba4b2-a152-489b-a5a8-030934b4dbc8/jQuery.png"],["Bootstrap","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c03f0c0e-b36b-4960-b79f-a93e2b7568f8/Bootstrap.png"],["Angular","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/6261c5ac-3648-47c9-b939-d5efec5a3a0b/Angular.png"],["React","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1e0af19f-0b39-4ce3-9d74-0edcda7c6bb2/React.png"],["VueJS","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/e5dcbfb2-2d10-42b3-b910-61e461967aca/VueJS.png"],["Node.js","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5bd78646-955f-4604-8cb1-ee0af6b78af5/Node.js.png"],["Express","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/189d334a-3533-422c-b032-baa6423c7e97/Express.png"],["Hapijs","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f929f9f0-2790-41a6-8408-031fe18ed90b/Hapijs.png"],["Restify","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5bad520e-918e-4cb1-bc85-d754dd4f4fd7/Restify.png"],["LoopBack","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/571d5c0b-1c76-4198-bcaf-ebadefed85f4/LoopBack.png"],["Socket.io","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/62550d60-eff3-4d80-a167-42c8d86e071f/Socket.io.png"],["Meteor","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/0eea7958-bc36-4a0c-89e3-5c19c068a38e/Meteor.png"],["Sails.js","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/3ee50d98-4cd3-4921-9c16-d715c14fe665/Sails.js.png"],["TypeScript","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/a8e88aea-0add-485b-886b-a4bab31647ed/TypeScript.png"],["Mocha","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/eb34ca6c-c8c4-4004-a646-c8e7807ece9f/Mocha.png"],["Tape",""],["Karma","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/72bfdc49-f964-4236-841a-452ff3dd44ba/Karma.png"],["Ionic","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/21650044-4cff-4ddf-91df-219ba99eb5fc/details-30.jpg"],["ReactNative","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/ff8ffc2a-2864-456d-b408-6381009675ce/React%20Native.png"],["Electron","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c5edada1-0f95-496a-baf4-c3363ee5a8ca/Electron.png"],["NW.js",""],["Wordpress","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/0789e45c-3eb1-43db-9b62-bd2a013a8092/Wordpress.png"],["Laravel","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/4f16e305-ed37-471f-8cfa-4fee3758a164/Laravel.png"],["OctoberCMS","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/3625d9f3-a51b-46a2-b8b4-3ab51469b5ba/OctoberCMS.png"],["Zend","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5e5c2ca9-e214-4fa0-9f4a-810e3025b772/details-18.jpg"],["Yii","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/889bdb67-90b1-47be-a3a1-0264509a66d2/Yii.png"],["CakePHP","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c6bd6ca6-f7f3-4ac1-8c71-361ebd0e072c/CakePHP.png"],["Drupal","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/9a6eb85e-32b7-45f3-bd09-417b4af04220/Drupal.png"],["Joomla","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/82950885-1fe4-4fb4-b01b-75edd6569a63/details-32.jpg"],["Magento","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/95f772c0-0549-44b9-b142-2d94fc86c53b/details-4.jpg"],["Shopify","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/234e41e2-748d-4dec-a400-37cd60d53cc5/Shopify.png"],["Prestashop","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c69e2715-8aa2-468c-aea4-e8853fed22d3/Prestashop.png"],["Opencart","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c88fdac2-ca2c-492d-8df4-29e5ef12c301/Opencart.png"],[".NET","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/a11c8292-a91f-4801-b4df-58a3dd8810b2/details-15.jpg"],["Umbraco","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/de964983-f424-4e22-88a8-8e01a0d04f6d/Umbraco.png"],["DotNetNuke","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/b782a596-4f21-4030-96d1-aa4e8b6f81dc/DotNetNuke%20Copy.png"],["Java","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/36aec761-eb51-46bb-a801-78e63c927682/details-14.jpg"],["Liferay","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5498c6b5-b2fe-4a6a-aa03-cd768df4cc9e/Liferay.png"],["ZK",""],["Tech stack 44","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/94b81945-c69f-41d6-adf6-03deb12d08a5/details-35.jpg"],["Hibernate",""],["Play Framework",""],["Python","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/d87eedcd-6a97-47d9-9720-52bc853110bc/details-19.jpg"],["Django","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/02ed2b3b-7b29-40b6-8051-47fc0ef7a8e4/Django.png"],["Flask","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/266531a6-0219-4cd2-b0bc-5e18c659c38a/Flask.png"],["RoR","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/3ccf9c52-9981-4dfc-8da3-6db881ecbe47/details-20.jpg"],["Android","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/79a1ef59-2065-47b1-b4e0-12ecc1b708c8/Android.png"],["Objective-C",""],["CocoaPod",""],["GraphQL","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5fb213de-59ce-49ac-af19-a5ebdd18b2ae/GraphQL.png"],["Relay",""],["IoT",""],["SQLite",""],["MySQL",""],["MariaDB",""],["MS SQLServer","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/e4812daa-8b5a-4228-a980-f1c4815a4f16/details-1.jpg"],["PostgreSQL",""],["Cassandra",""],["MongoDB","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/7512e1c7-165d-47d1-a7e7-f8da98481160/details-16.jpg"],["Neo4j","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/be1b74b9-b5ec-48cf-8689-990288eb0aad/details-17.jpg"],["Redis",""],["Lucence",""],["Sphinx",""],["Amazon Cloud Search",""],["Elastic Search","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/fb8230f6-589e-4bb0-a622-b27e27ce1cb0/details-10.jpg"],["Solr",""],["GitHub",""],["Bitbucket",""],["Docker",""],["Vagrant",""],["Travis",""],["CodeShip",""],["Jenkins",""],["Apache",""],["nginx",""],["AWS","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/87caee1f-58f5-43ca-a19c-392e202c5e86/details-7.jpg"],["Azure",""],["DigitalOcean",""],["Firebase","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/d363a731-68c7-417a-83ec-e6785bebc6aa/details-3.jpg"],["Stripe",""],["Coinbase",""],["Auth0",""],["Sketch",""],["Photoshop",""],["Hand drawing",""],["Visual design",""],["3D design",""],["VR design",""],["Interaction design",""],["Motion design",""],["Prototyping",""],["Content strategy",""],["Metrics & Analytics",""],["Functional Programming",""],["Machine Learning",""],["AI",""],["Virtual Reality",""],["Network",""],["Security",""],["System Architect",""],["Design Pattern",""],["OOP",""],["DevOps",""],["Bitcoin",""],["POS",""],["TensorFlow",""],["Scikit-Learn",""],["Big Data",""],["Natural Language Processing",""],["Haskell",""],["Erlang","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/bbd88e69-b641-45f2-a1c7-2daca565ba9b/details-24.jpg"],["Go",""],["Rust",""],["Swift","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/10d13ca2-7939-48ae-9829-966032ca6d83/details-8.jpg"],["Scala","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5a3cf26e-7116-4675-a576-bb7cf18108c0/details-25.jpg"],["OpenCV",""],["Data Visualization",""],["Data Analysis",""],["Data Mining",""],["RabbitMQ",""],["Webpack",""],["Rollup",""],["Kubernetes",""],["Varnish",""],["Slicing",""],["Oracle","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/0e78bc38-ea2e-4ab9-a4cb-dd7375817fec/details-11.jpg"],["LAMP","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/28c15a16-bf14-4e6e-9ebe-53bb9ba39004/details-13.jpg"],["Symfony","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/b8f49555-e555-4def-a7dc-34edc90c7eb2/details-22.jpg"],["Dart","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/fac1333c-a361-42ab-8dfb-3e7a18b4d0c0/details-26.jpg"],["Forth","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/77060e18-9114-431b-ae6b-91f54fc0c7ff/details-27.jpg"],["Julia","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/15d23eb7-2b52-47e5-ac09-ee793aa45731/details-28.jpg"],["CoffeeScript","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/ee308580-5af9-406b-a3c9-a61c537be40d/details-29.jpg"],["Perl","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/16557781-ed80-4ac1-8d80-2b415d68d4a6/details-31.jpg"],["Doctrine","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/57f0476a-49a9-42fa-b248-bcfca8873972/details-34.jpg"],["Koala","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f629e738-c571-4d71-aecc-018a63949c37/details-36.jpg"],["Redux","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/ee298bd1-5c6d-47b2-b422-b78f27011801/details-37.jpg"],["Titan","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/7900ee03-6a4e-4f47-b34b-444475bb5109/details-38.jpg"],["Shinken","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/86ed3540-9e64-4d0b-8f76-64bec6b3eb2f/details-39.jpg"],["MEAN",""],["MERN",""],["Ruby",""],["Git",""],["Tomcat",""],["IIS",""]]});