function _toConsumableArray(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}function _toConsumableArray(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,n){if("undefined"!=typeof module&&module.exports)module.exports=n();else{var e=window||{};e.define&&e.define.amd?e.define([],n):e.exports?e.exports=n():e.stabilize=n()}}(0,function(){var t=function(t){return Array.isArray(t)},n=function(n){return null!==n&&"object"===(void 0===n?"undefined":_typeof(n))&&!1===t(n)},e=function(t){return"[object String]"==={}.toString.call(t)},r=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.enumerable,a=void 0!==o&&o,i=r.configurable,c=void 0!==i&&i,u=r.writable,l=void 0!==u&&u,s=r.value,f=void 0===s?e:s;return Object.defineProperty(t,n,{enumerable:a,configurable:c,writable:l,value:f}),t},a=function(t,n){var e=t,r=n-t+1;return Math.floor(Math.random()*r)+e},i=function(){var c=function(t){var c=[].concat(_toConsumableArray(t)),u=function(){for(var t=[].concat(_toConsumableArray(c)),n=[],e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return i(n)},l=function(){return Math.min.apply({},c)},s=function(){return Math.max.apply({},c)},f=function(){var t=[].concat(_toConsumableArray(c))[0];return i(t)},d=function(){var t=[].concat(_toConsumableArray(c))[c.length-1];return i(t)},v=function(){for(var t,n=arguments.length,e=Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=[].concat(_toConsumableArray(c)),u=a.slice(0,o),l=a.slice(o,a.length);return i((t=[]).concat.apply(t,[u].concat(e,[l])))},p=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return v(c.length,n)},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=[].concat(_toConsumableArray(c.slice(0,t)),_toConsumableArray(c.slice(t+n)));return i(e)},y=function(t){var n=[].concat(_toConsumableArray(c)).sort(t);return i(n)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=[].concat(_toConsumableArray(c)),a=o[0];if(1!==t&&-1!==t||o.sort(function(n,e){return n>e?t:n<e?-1*t:0}),e(t)&&r(a,t)&&o.sort(function(n,e){return n[t]>e[t]?1:n[t]<e[t]?-1:0}),n(t)){for(var u in t)!function(n){if(r(a,n)){var e=-1===t[n]?-1:1;o.sort(function(t,r){return t[n]>r[n]?e:t[n]<r[n]?-1*e:0})}}(u)}return i(o)},g=function(){var t=[].concat(_toConsumableArray(c)).reverse();return i(t)},b=function(){return y(function(){return Math.random()-.5})};return[["min",l],["max",s],["unique",u],["first",f],["last",d],["pick",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=c.shuffle(),e=Math.max(Math.min(t,n.length),1);if(e>=n.length)return n;if(1===e){return n[a(0,n.length-1)]}return i(n.splice(0,e))}],["insert",v],["append",p],["remove",m],["isort",y],["msort",h],["ireverse",g],["shuffle",b]].map(function(t){o(c,t[0],t[1])}),c},u=function(t){var e=Object.create({}),r=function(n){o(e,n,t[n],{enumerable:!0})};return Object.keys(t).map(r),o(e,"get",function(t){return e[t]}),o(e,"set",function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=Object.assign({},e),a=function(t,n){o[t]=n};return n(t)?Object.keys(t).forEach(function(n){a(n,t[n])}):a(t,r),i(o)}),e};return function(e){return t(e)?c(e):n(e)?u(e):e}}();return i});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,n){if("undefined"!=typeof module&&module.exports)module.exports=n();else{var e=window||{};e.define&&e.define.amd?e.define([],n):e.exports?e.exports=n():e.doc=n()}}(0,function(){var t,n,e,r,o,a=function(t){return void 0===t},i=function(t){return!a(t)&&"object"===(void 0===t?"undefined":_typeof(t))},c=function(t){return"string"==typeof t},u=function(t){return"number"==typeof t},l=function(t){return t instanceof HTMLElement},s=function(t){return t&&"[object Function]"==={}.toString.call(t)},f=function(t,n){if(!c(t))return"";var e=t?t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):t||"";return e&&n?e.replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "):e},d=function(t,n){var e=t.match(/^([a-z]+)([A-Z]{1})([a-z]+)$/);if(e&&0===e.index){var r=[];r.push(e[1]),r.push("-"),r.push(e[2]),r.push(e[3]),t=r.join("").toLowerCase()}return u(n)&&(n+="px"),{key:t,value:n}},v=navigator,p=window,m=document;e=function(t){var n=(c(t)?m.getElementById(t):t)||null;return n&&l(n)&&function(){var t=n.classList;n.hasClass=function(n){return!!(n=f(n,!0))&&t.contains(n)},n.addClass=function(e){if(!(e=f(e,!0)))return!1;var r=e.split(" ");return r.length>1?r.forEach(function(n){t.add(n)}):t.add(e),n},n.removeClass=function(e){if(!(e=f(e,!0)))return!1;var r=e.split(" ");return r.length>1?r.forEach(function(n){t.remove(n)}):t.remove(e),n},n.toggleClass=function(e){if(!(e=f(e,!0)))return!1;var r=e.split(" ");return r.length>1?r.forEach(function(n){t.toggle(n)}):t.toggle(e),n},n.setProperty=function(t){for(var e in t)if(""!==t[e]){var r=t[e];(c(r)||u(r))&&n.setAttribute(e,r)}return n},n.setStyle=function(t){var e=[];if(i(t)){for(var r in t)if(""!==t[r]){var o=t[r];if(c(o)||u(o)){var a=d(r,o);e.push([a.key,a.value].join(":"))}}}else c(t)&&(e=t.split(";"));var l=n.getAttribute("style");if(l){var s=l.split(";");e=e.concat(s)}return e.push(""),n.setAttribute("style",e.join(";")),n},n.empty=function(){return n.innerHTML="",n},n.html=function(t){return a(t)?n.innerHTML:(n.innerHTML=t,n)},n.destroy=function(){n.parentNode&&n.parentNode.removeChild(n)}}(),n},t=function(t,n){var r=n?e(n):m.body,o=l(t)?t:m.createElement(t);return r.appendChild(o),e(o)},n=function(t){return e(m.createElement(t))},r=function(t){var n=void 0,r=m.querySelector(t);return r&&(n=e(r)),n},o=function(t){var n=[],r=m.querySelectorAll(t);if(r)for(var o=0;o<r.length;o++)n.push(e(r[o]));return n};var y=function(t){"loading"!==m.readyState?setTimeout(t,0):m.addEventListener("DOMContentLoaded",t)},h=function(){var t=function(t){return/gecko/i.test(t.toLowerCase())}(v.userAgent);return{on:function(n,r,o){if(o&&s(o)){var a=c(n)?e(n):n;a&&l(a)&&("wheel"===r&&(r=t?"DOMMouseScroll":"mousewheel"),a.addEventListener?a.addEventListener(r,o,!1):a.attachEvent&&a.attachEvent("on"+r,o))}},off:function(t,n,r){if(r&&s(r)){var o=c(t)?e(t):t;o&&l(o)&&(o.removeEventListener?o.removeEventListener(n,r,!1):o.detachEvent&&o.detachEvent("on"+n,r))}},simulate:function(t,n){var r=void 0,o=c(t)?e(t):t;m.createEventObject?(r=m.createEventObject(),o.fireEvent("on"+n,r)):(r=m.createEvent("HTMLEvents"),r.initEvent(n,!0,!0),o.dispatchEvent(r))},stop:function(t){return t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),!1},locate:function(t){var n=t||p.event,r=n.target||n.srcElement;return r&&3===r.nodeType&&(r=r.parentNode),e(r)}}}();return{ready:y,one:r,all:o,get:e,add:t,create:n,Event:h}});var _slicedToArray=function(){function t(t,n){var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();!function(t,n){if("undefined"!=typeof module&&module.exports)module.exports=n();else{var e=window||{};e.define&&e.define.amd?e.define([],n()):e.exports?e.exports=n():e.PPSW=n()}}(0,function(){var t=[],n=[],e=[],r=void 0,o=void 0,a=void 0,i=void 0,c=void 0,u=void 0,l=!1,s=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},f=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=t.slice(0);return e.sort(function(){return s(0,100)>50}),e.splice(0,n)},d=function(){return[].concat(_toConsumableArray(t))},v=function(){return[].concat(_toConsumableArray(n))},p=function(){return[].concat(_toConsumableArray(e))},m=function(t){var n=t.toLowerCase();return d().filter(function(t){return t.skills.some(function(t){return t[0].toLowerCase()===n})})},y=function(t){var n=t.toLowerCase();return v().filter(function(t){return t.stacks.map(function(t){return t.toLowerCase()}).includes(n)})},h=function(t){var n=t.text,e=void 0===n?"?!?":n,r=t.fontSize,o=void 0===r?20:r,a=t.width,i=void 0===a?160:a,c=t.height,u=void 0===c?120:c,l=t.backgroundColor,s=void 0===l?"ffffff":l,f=t.textColor;return"https://placeholdit.imgix.net/~text?"+["txt="+e,"txtsize="+o,"w="+i,"h="+u,"bg="+s,"txtclr="+(void 0===f?"000000":f)].join("&")},g=function(t){var n={fontSize:16,width:180,height:50};return Array.isArray(t)?(t[1]||(n.text=t[0],t[1]=h(n)),t):(t.hasOwnProperty("skills")&&!t.image?(n.text=t.name.split(" ").map(function(t){return t.charAt(0)}).join(""),n.fontSize=50,n.width=160,n.height=180,n.backgroundColor="f3f5f6",t.image=h(n)):t.hasOwnProperty("stacks")&&!t.logo&&(n.text=t.name,n.width=170,n.height=50,t.logo=h(n)),t)},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tl2br",e=-200,r=-200,o=50;"b2t"===n&&(e=0,r=500),t.filter(function(t){return t&&t.$el}).map(function(t){return t.$el}).map(function(t){return e+=20,r+=20,t.style.transition="all "+o+"ms cubic-bezier(0.455, 0.03, 0.515, 0.955);",t.style.transform="translate("+e+"px, "+r+"px)",t.style.opacity="0.0",t}).forEach(function(t){setTimeout(function(){t.style.transition="all "+o+"ms cubic-bezier(0.455, 0.03, 0.515, 0.955);",t.style.transform="translate(0px, 0px)",t.style.opacity="1.0"},o),o+=50})},C=function(){return new Promise(function(t){var n=s(0,500)+250,e=s(0,100)-50,r=50;doc.all(".team-block .pps-card").forEach(function(t){setTimeout(function(){t.style.transition="all "+r+"ms cubic-bezier(0.455, 0.03, 0.515, 0.955);",t.style.transform="translate(-"+n+"px, "+e+"px)",t.style.opacity="0.0"},r),r+=50}),setTimeout(t,300)})},x=function(t){var n=10;t.filter(function(t){return t&&t.$el}).map(function(t){return t.$el}).map(function(t){return t.style.opacity="0.1",t.style.transform="translate(400px, 0px)",t}).forEach(function(t){setTimeout(function(){t.style.opacity="1.0",t.style.transform="translate(0px, 0px)"},n),n+=5})},w=function(t){var n=doc.create("DIV");n.addClass("items pps-card");var e=_slicedToArray(t,2),r=e[0],o=e[1],a='\n      <div class="item-wrap">\n        <img src="'+o+'" alt="'+r+'">\n      </div>\n    ';return n.html(a),n},A=function(t,n){r.html('<img src="'+n+'" alt="'+t+'">')},E=function(t){var n=doc.create("DIV");n.addClass("team-member pps-card");var e=t.image,r=t.name,o=t.yoe,a='\n      <div class="avata">\n        <img src="'+e+'" alt="'+r+'">\n      </div>\n      <p class="member-name"><a>'+r+'</a></p>\n      <p class="member-description">'+o+"</p>\n    ";return n.html(a),n},S=function(t){var n=doc.create("DIV");n.addClass("project-items pps-card");var e=t.logo,r=t.name,o='\n      <a class="project-link">\n        <img src="'+e+'" alt="'+r+'">\n      </a>\n    ';return n.html(o),n},k=function t(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e||a.empty();var r=[];if(n.length>4){r=n.slice(4,n.length);n=n.slice(0,4)}var o=n.map(function(t){var n=S(t);if(e){var r=a.querySelector(".view-all");a.insertBefore(n,r)}else a.appendChild(n);return{$el:n,data:t}}),i=o.reduce(function(t,n){return t.concat(n)},[]);return i.length&&x(i),u.onclick=null,u.addClass("is-disabled"),r.length>0&&(u.removeClass("is-disabled"),u.onclick=function(){t(r,!0)}),o},j=function t(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e||o.empty();var r=[];if(!e&&n.length>8){r=n.slice(8,n.length);n=n.slice(0,8)}var a=n.map(function(t){var n=E(t);if(e){var r=o.querySelector(".view-all");o.insertBefore(n,r)}else o.appendChild(n);return{$el:n,data:t}}),i=a.reduce(function(t,n){return t.concat(n)},[]);return i.length&&b(i,e?"b2t":"r2l"),c.onclick=null,c.addClass("is-disabled"),r.length>0&&(c.removeClass("is-disabled"),c.onclick=function(){t(r,!0)}),a},_=function(t){var n=t[0];A(n,t[1]);var e=m(n);e.length<8&&(e=e.concat(f(d(),20)));var r=e.map(function(t){var e=t.name,r=t.image,o=t.skills,a=void 0===o?[]:o,i=a.filter(function(t){return t[0]===n}),c="";if(i.length)c=i[0][1];else{var u=s(1,9);c=u+" year"+(u>0?"s":"")+" of experience"}return{name:e,image:r,yoe:c}});j(stabilize(r).msort({yoe:-1}));var o=y(n);if(o.length<4){var a=o.concat(f(v(),8));o=stabilize(a).unique()}o=o.map(function(t){return{name:t.name,logo:t.logo}}),k(stabilize(o).shuffle())},D=function(t){var n=t.$el,e=t.data;return doc.Event.on(n,"click",function(){C().then(function(){_(e)})}),e},I=function(t){return i.empty(),t.map(function(t){var n=w(t);return i.appendChild(n),{$el:n,data:t}}).map(D)},T=function(){l=!0;var t=p().splice(0,36),n=I(t);_(n[0])},L=function(t){var n=doc.add("DIV",t),e=doc.add("DIV",n);e.addClass("wrap-content");var l=doc.add("DIV",e);l.addClass("left-content"),doc.add("DIV",l).html('<p class="team-text show-mobile">Choose Technology</p>');var s=doc.add("DIV",l);s.addClass("logo-team");var f=doc.add("DIV",l);f.addClass("team-block");var d=doc.add("H3",f);d.addClass("block-text"),d.html("Team");var v=doc.add("DIV",f);v.addClass("team-content"),v.html("");var p=doc.add("DIV",f);p.addClass("view-all"),p.html('<a class="btn-viewall">View all</a>');var m=doc.add("DIV",l);m.addClass("project-block");var y=doc.add("H3",m);y.addClass("block-text"),y.html("Projects");var h=doc.add("DIV",m);h.addClass("project-content"),h.html("");var g=doc.add("DIV",m);g.addClass("view-all"),g.html('<a class="btn-viewall">View all</a>');var b=doc.add("DIV",e);b.addClass("right-content");var C=doc.add("H3",b);C.addClass("content-name"),C.html('<span class="content-text">Tech stacks</span>');var x=doc.add("DIV",b);x.addClass("content-details"),r=s,o=v,a=h,i=x,c=p,u=g},V=function(r){try{var o="string"==typeof r?JSON.parse(r):r,a=o.people,i=o.projects,c=o.techstacks;t=a.map(g),n=i.map(g),e=c.map(g);(doc.all("ppswidget")||[]).map(L)}catch(t){console.error(t)}};return{init:function(t){V(t)},start:function(){l||T()},isInitialized:function(){return!1},isStarted:function(){return l},getPeople:d,getProjects:v,getTechstacks:p,getPeopleWhoHas:m,getProjectsThatUse:y}});;PPSW.init({"people":[{"name":"Thuong Bui","image":"","skills":[["Sketch","1 year of experience"],["Photoshop","4 years of experience"],["Hand drawing","5 years of experience"]]},{"name":"Thuy Bui","image":"","skills":[["HTML","7 years of experience"],["CSS","7 years of experience"],["JavaScript","7 years of experience"],["jQuery","7 years of experience"],["Bootstrap","4 years of experience"],["Angular","3 years of experience"],["Photoshop","5 years of experience"]]},{"name":"Toan Dang","image":"","skills":[["HTML","2 years of experience"],["CSS","2 years of experience"],["Bootstrap","Several months"],["JavaScript","2 years of experience"],["jQuery","1 year of experience"],["React","Several months"],["TypeScript","Several months"]]},{"name":"Trong Dinh","image":"","skills":[["Liferay","5 years of experience"],["ZK","5 years of experience"],["Spring","6 years of experience"],["Hibernate","5 years of experience"],["Python","2 years of experience"],["Ruby","2 years of experience"],["RoR","2 years of experience"],["MySQL","8 years of experience"],["MariaDB","5 years of experience"],["MS SQLServer","3 years of experience"],["Oracle","4 years of experience"],["MongoDB","4 years of experience"],["Lucence","6 years of experience"],["Sphinx","5 years of experience"],["Java","9 years of experience"],["Amazon Cloud Search","4 years of experience"],["GitHub","4 years of experience"],["Apache","8 years of experience"],["Tomcat","8 years of experience"],["nginx","6 years of experience"],["IIS","5 years of experience"],["AWS","6 years of experience"],["DigitalOcean","4 years of experience"]]},{"name":"Tran Dinh","image":"","skills":[["HTML","7 years of experience"],["CSS","7 years of experience"],["Bootstrap","7 years of experience"],["jQuery","6 years of experience"],["Java","7 years of experience"],["JavaScript","8 years of experience"],["Python","3 years of experience"]]},{"name":"Thang Do","image":"","skills":[["HTML","2 years of experience"],["CSS","2 years of experience"],["Angular","1 year of experience"],["Bootstrap","2 years of experience"],["jQuery","2 years of experience"],["Node.js","1 year of experience"],[".NET","4 years of experience"]]},{"name":"Hao Duong","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/6aae0db1-fec6-4a75-8a11-80b37423af62/haoda%40greenglobal.vn.png.png","skills":[["CSS","2 years of experience"],["Photoshop","7 years of experience"],["Sketch","2 years of experience"],["JavaScript","2 years of experience"],["HTML","2 years of experience"]]},{"name":"Thanh Ha","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f71469de-3091-40a0-9a3b-1e0d4caafffa/avata-2.png","skills":[["HTML","8 years of experience"],["Java","7 years of experience"],["Spring","6 years of experience"]]},{"name":"Thanh Ho","image":"","skills":[]},{"name":"Tuan Ho","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/b9a1bc4b-51ad-408f-9f77-f8deffdbb80d/avata-6.png","skills":[["HTML","1 year of experience"],["CSS","1 year of experience"],["Bootstrap","1 year of experience"],["jQuery","1 year of experience"],["CakePHP","4 years of experience"],[".NET","1 year of experience"]]},{"name":"Vu Hoang","image":"","skills":[]},{"name":"Truong Hoang","image":"","skills":[["HTML","3 years of experience"],["CSS","3 years of experience"],["Angular","1 year of experience"],["Bootstrap","3 years of experience"],["jQuery","3 years of experience"],["Node.js","3 years of experience"],["CakePHP","3 years of experience"],["Drupal","1 year of experience"],["Wordpress","1 year of experience"]]},{"name":"Thang Huynh","image":"","skills":[["HTML","2 years of experience"],["CSS","2 years of experience"],["Angular","1 year of experience"],["Bootstrap","2 years of experience"],["jQuery","1 year of experience"],["Webpack","Several months"],["Node.js","1 year of experience"],["Sketch","1 year of experience"],["Photoshop","1 year of experience"],["AI","1 year of experience"]]},{"name":"Duc Le","image":"","skills":[["HTML","2 years of experience"],["CSS","2 years of experience"],["Angular","2 years of experience"],["Bootstrap","2 years of experience"],["jQuery","1 year of experience"],["React","1 year of experience"],["jQuery","1 year of experience"],["Webpack","1 year of experience"],["Mocha","1 year of experience"],["Node.js","1 year of experience"],["Wordpress","1 year of experience"]]},{"name":"Tan Le","image":"","skills":[["HTML","1 year of experience"],["CSS","1 year of experience"],["JavaScript","1 year of experience"],["Bootstrap","1 year of experience"],["jQuery","1 year of experience"],["React","Several months"],["Webpack","Several months"],[".NET","2 years of experience"],["Angular","Several months"]]},{"name":"Tuan Le","image":"","skills":[["Objective-C","1 year of experience"],["Swift","1 year of experience"],["SQLite","1 year of experience"],["Design Pattern","1 year of experience"]]},{"name":"Khanh Le","image":"","skills":[["HTML","Several months"],["CSS","Several months"],["Bootstrap","Several months"],["jQuery","Several months"]]},{"name":"Oanh Le","image":"","skills":[["Android","Several months"],["SQLite","Several months"]]},{"name":"Tinh Le","image":"","skills":[["HTML","1 year of experience"],["CSS","1 year of experience"],["Bootstrap","1 year of experience"],["jQuery","1 year of experience"]]},{"name":"Vinh Le","image":"","skills":[["HTML","3 years of experience"],["CSS","3 years of experience"],["Angular","1 year of experience"],["Node.js","3 years of experience"],["Bootstrap","3 years of experience"],["jQuery","3 years of experience"],["React","1 year of experience"],["Wordpress","1 year of experience"]]},{"name":"Tin Le","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/9430a433-bc97-4428-bc04-5fbc4a11037b/avata-7.png","skills":[["HTML","2017 years of experience"],["CSS","2017 years of experience"],["Angular","2017 years of experience"],["jQuery","2017 years of experience"],["Bootstrap","2017 years of experience"],[".NET","2017 years of experience"]]},{"name":"Dong Nguyen","image":"","skills":[["HTML","9 years of experience"],["CSS","9 years of experience"],["Bootstrap","9 years of experience"],["jQuery","9 years of experience"],["React","9 years of experience"],["Node.js","9 years of experience"],["Laravel","2 years of experience"],["Wordpress","2 years of experience"]]},{"name":"Hoa Nguyen","image":"","skills":[]},{"name":"Vu Nguyen","image":"","skills":[]},{"name":"Hieu Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1ae4fe7f-97fd-4c01-aa35-e3a12b84cd06/hieunh%40greenglobal.vn.png.png","skills":[]},{"name":"Vy Nguyen","image":"","skills":[]},{"name":"Bao Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/16fee454-4284-466e-a920-e613f14bf71e/baonq%40greenglobal.vn.png.png","skills":[]},{"name":"Hoa Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/61c9488f-c3b8-486f-8c75-dc02671f7107/hoanntt%40greenglobal.vn.png.png","skills":[]},{"name":"Giang Nguyen","image":"","skills":[]},{"name":"Thanh Nguyen","image":"","skills":[]},{"name":"Thanh Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/69cf94e8-cfdb-4cd1-8a52-3fc4b0b2db73/avata-4.png","skills":[]},{"name":"Toan Pham","image":"","skills":[]},{"name":"Thao Pham","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/06a8f9d9-ca94-40b0-84eb-2dcd10d282a0/avata-3.png","skills":[]},{"name":"Thanh Pham","image":"","skills":[]},{"name":"Viet Phan","image":"","skills":[]},{"name":"Thien Phung","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/32b35387-0ede-43ec-9c42-9a89626263b4/thienpd%40greenglobal.vn.png.png","skills":[]},{"name":"Binh Quan","image":"","skills":[]},{"name":"Huy Ta","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/0d54714c-e946-447c-8273-aaa7f33693b7/avata-5.png","skills":[]},{"name":"Minh Than","image":"","skills":[]},{"name":"Chinh Thoi","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/a2987efd-3381-413b-90e0-d81838ed88d3/chinhth%40greenglobal.vn.png.png","skills":[]},{"name":"Toan Ton","image":"","skills":[]},{"name":"Phu Tran","image":"","skills":[]},{"name":"Hoai Tran","image":"","skills":[]},{"name":"Huyen Tran","image":"","skills":[]},{"name":"Lanh Tran","image":"","skills":[]},{"name":"Phong Tran","image":"","skills":[]},{"name":"Nam Tran","image":"","skills":[]},{"name":"Sang Tran","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1c90042c-adbc-4be7-bc2c-5a8a0e819b39/sangtx%40greenglobal.vn.png.png","skills":[]},{"name":"Au Truong","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/9a06edfc-b4ef-4627-9d46-5394fe25a449/avata-8.png","skills":[]},{"name":"Tien Truong","image":"","skills":[]},{"name":"Anh Truong","image":"","skills":[]},{"name":"Ninh Vo","image":"","skills":[]},{"name":"Dung Vo","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c28c918b-8648-40e0-9b01-9a1f17bcf43a/dungvph%40greenglobal.vn.png.png","skills":[]},{"name":"An Vo","image":"","skills":[]},{"name":"Thanh Vo","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/df5718da-891c-44ec-9da4-aaffcf8e766f/thanhvv%40greenglobal.vn.png.png","skills":[]},{"name":"Bang Vu","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/7dec0ad6-fb2b-4cfb-9dae-06bbcc08bf2c/bangvn%40greenglobal.vn.png.png","skills":[]},{"name":"Hong Nguyen","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c966c5f4-9a03-452f-8f83-90a6afba3691/hongnt%40greenglobal.vn.png.png","skills":[]},{"name":"Nam Dinh","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/b941a7da-e09d-4087-878f-d587e181b353/namdh%40greenglobal.vn.png.png","skills":[]},{"name":"Nhung Pham","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/30f9d820-614e-4245-aeed-edb6eda012d7/nhungptc%40greenglobal.vn.png.png","skills":[]},{"name":"Thanh Truong","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f91fcae3-6233-412f-8487-99823904c2e0/thanhtcn%40greenglobal.vn.png.png","skills":[]},{"name":"Thuong Do","image":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5bdb799f-b3e3-445a-9a3f-79141be6fb30/thuongdtt%40greenglobal.vn.png.png","skills":[]}],"projects":[{"name":"ATeam","logo":"","stacks":["HTML","JavaScript"]},{"name":"Bible","logo":"","stacks":["CSS"]},{"name":"Bookstoop","logo":"","stacks":[]},{"name":"Buddha","logo":"","stacks":[]},{"name":"Business Matching","logo":"","stacks":[]},{"name":"BYTO","logo":"","stacks":[]},{"name":"Escope","logo":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5020b083-3a6e-43eb-bfbb-d7add5868eb6/Escope.png","stacks":["Node.js","React","HTML","JavaScript","Bitcoin","Coinbase","Auth0","LoopBack","Webpack"]},{"name":"Happy ever after dating","logo":"","stacks":[]},{"name":"Himalayan Bowls","logo":"","stacks":[]},{"name":"IdeaPod","logo":"","stacks":["Angular","Node.js","Hapijs"]},{"name":"Images Luxury Nail Lounge","logo":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/a6b811f0-d917-455e-9639-b1869c43c8d2/Luxury%20Nail.png","stacks":["Laravel","Node.js","React",".NET","MySQL","Android","Swift"]},{"name":"IoT Sensor","logo":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/461470da-f856-4e6a-b318-de6f1cacd2b3/IoT.png","stacks":["Node.js","LoopBack","React","Bootstrap","MongoDB"]},{"name":"iTravelLocal","logo":"","stacks":["HTML","CSS","JavaScript","Node.js","MongoDB"]},{"name":"JustLook","logo":"","stacks":[]},{"name":"Koe Kyogakusha","logo":"","stacks":[]},{"name":"Lyad","logo":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/2711d909-2d66-4496-907b-9ce6751fc1b7/Lyad.png","stacks":["Angular","Ionic","Elastic Search","MariaDB"]},{"name":"MeiReve","logo":"","stacks":[]},{"name":"NavMobi","logo":"","stacks":[]},{"name":"OneDoor","logo":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/9f8f5c82-bcfb-478a-a9fd-e77c5da960ea/Onedoor.png","stacks":["Laravel","Angular","TypeScript","MySQL","Android","Swift"]},{"name":"Read This Next","logo":"","stacks":[]},{"name":"Roomi","logo":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/36dfbd39-2c78-4d1a-83d7-fe2326702994/Roomi.png","stacks":["Angular","JavaScript","Node.js","Socket.io","AWS"]},{"name":"Slidelane","logo":"","stacks":[]},{"name":"Space Race","logo":"","stacks":[]},{"name":"Stuff N Style","logo":"","stacks":[]},{"name":"Swivel","logo":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c256b209-e5d8-4ac1-b5a3-1395f5306eef/Swivel.png","stacks":["Swift","Java"]},{"name":"The Gong Shop","logo":"","stacks":[]},{"name":"YouLook","logo":"","stacks":[]},{"name":"Youth1","logo":"https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/23f3b980-a2eb-4ff2-90fe-196653786f32/Youth1.png","stacks":["Drupal","HTML","Bootstrap","CSS","jQuery"]}],"techstacks":[["HTML","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/dc1b1233-6459-4152-bb67-85ef86c80467/HTML.png",16],["CSS","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/0cf900f2-6f7a-4601-848a-08c4265f59dc/CSS.png",15],["jQuery","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/0f245caa-6dc6-48e2-8aea-75d12092327f/jQuery.png",15],["Bootstrap","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/570fd505-4534-4814-998c-b9904d66078f/Bootstrap.png",14],["Angular","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/df3a9cec-58f3-491d-9f7a-29fa84d73c52/Angular.png",8],["Node.js","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/ee2bbe21-51b9-4a49-bf10-954b755f7b7d/Node.js.png",6],["JavaScript","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/49fb64d1-1865-40f2-b658-619bb3311990/JavaScript.png",5],["React","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1652823a-f5f1-4ab3-a6ef-786920480e9a/React%20Native.png",5],["Photoshop","",4],["Wordpress","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/58bbcb4e-ab41-4c3e-a0d2-43b894feb5a6/Wordpress.png",4],[".NET","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/c3951cc4-cfcb-4c8e-8e20-458d4c22cd69/NET.png",4],["Webpack","",3],["Java","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/3ef1d14e-c080-41d5-b955-f0c490101569/Java.png",3],["Sketch","",3],["SQLite","",2],["CakePHP","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/3a27863f-94b1-4ce9-bc3a-0c0da9d0eda9/CakePHP.png",2],["Spring","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/12132c38-1a45-434f-9840-234c3e45542e/Spring.png",2],["Python","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/cce0e42a-4009-4b2a-8b0b-99cb081db3dd/Python.png",2],["IIS","",1],["Ruby","",1],["DigitalOcean","",1],["AWS","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/87caee1f-58f5-43ca-a19c-392e202c5e86/details-7.jpg",1],["nginx","",1],["Apache","",1],["Oracle","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/0e78bc38-ea2e-4ab9-a4cb-dd7375817fec/details-11.jpg",1],["Laravel","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/3d1e3ea7-f0aa-425b-a498-e4f16a092a51/Laravel%20Copy%205.png",1],["Tomcat","",1],["GitHub","",1],["Amazon Cloud Search","",1],["Swift","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/d701ab17-b38b-4112-aee4-cc8171f8a8a6/Swift.png",1],["Drupal","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/a6f75bf6-9dc7-46fe-a86c-3e41906b0550/Drupal.png",1],["Sphinx","",1],["Lucence","",1],["MongoDB","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/7512e1c7-165d-47d1-a7e7-f8da98481160/details-16.jpg",1],["MS SQLServer","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/e4812daa-8b5a-4228-a980-f1c4815a4f16/details-1.jpg",1],["MariaDB","",1],["Design Pattern","",1],["MySQL","",1],["AI","",1],["Hand drawing","",1],["Liferay","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/b3d84b31-0985-4efc-9ddb-fd78acb519b4/Liferay.png",1],["ZK","",1],["TypeScript","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/6ec74e7b-d275-4edb-9bf4-78aff7f606af/TypeScript.png",1],["Hibernate","",1],["Objective-C","",1],["Mocha","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/4f1dec2b-f64c-4ef7-b734-0c619d68a8c6/Mocha.png",1],["Android","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/d595f200-0e91-402c-be21-d6fb4976fe57/Android.png",1],["RoR","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5dab709a-d8dc-4955-b51f-064bdbb0c5f2/Ruby%20on%20Rails.png",1],["Machine Learning","",0],["Flask","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/af978b33-01bb-4881-9193-0518e81f6daf/Flask.png",0],["Play Framework","",0],["CocoaPod","",0],["GraphQL","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f9f34572-cdf5-4155-997c-c815b4742e92/GraphQL.png",0],["Relay","",0],["IoT","",0],["DotNetNuke","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/fd30fad5-ae40-4d8c-afa9-360a63118d69/DotNetNuke%20Copy.png",0],["Umbraco","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/3b9339fa-971c-4546-a6e5-72cc1ff89480/Umbraco.png",0],["Opencart","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/04e31c2c-9f48-4a59-b2d7-590ddd989850/Opencart.png",0],["Prestashop","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/91b335d3-78d5-43ed-8367-bbcf2033d7c7/Prestashop.png",0],["PostgreSQL","",0],["Cassandra","",0],["Shopify","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/d5d0c902-8b63-4a09-82ac-1ada28f9fcb8/Shopify.png",0],["Neo4j","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/be1b74b9-b5ec-48cf-8689-990288eb0aad/details-17.jpg",0],["Redis","",0],["Magento","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/08d15504-7297-4768-94c4-dcda4b0088d2/Magento.png",0],["Joomla","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1c4e6645-554f-4fd6-8dd5-ded19c4117e9/Joomla.png",0],["Yii","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/a258635d-ac53-4ad6-ba9c-10ea8bf3bb51/Yii.png",0],["Elastic Search","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/fb8230f6-589e-4bb0-a622-b27e27ce1cb0/details-10.jpg",0],["Solr","",0],["Zend","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/5879777e-3c77-4aa6-b185-94aaba9b13ba/Zend.png",0],["Bitbucket","",0],["Docker","",0],["Vagrant","",0],["OctoberCMS","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/3a8f60c7-efd4-461e-8cfe-01ae7f0d0bb2/OctoberCMS.png",0],["CodeShip","",0],["Jenkins","",0],["NW.js","",0],["Electron","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/e743521a-baa6-4077-9af6-8822c586d5f0/Electron.png",0],["ReactNative","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1e75c3e4-7d8f-43a2-a51d-2ebcb38f6d1b/React%20Native.png",0],["Azure","",0],["Ionic","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/47e27b0e-1dfe-4577-b1b9-11a9e1213d5c/Ionic.png",0],["Firebase","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/d363a731-68c7-417a-83ec-e6785bebc6aa/details-3.jpg",0],["Stripe","",0],["Coinbase","",0],["Auth0","",0],["Karma","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/2c226ea5-0874-414a-8bd6-e48ff04d116d/Karma.png",0],["Tape","",0],["Sails.js","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/6ea7aec0-aad5-4e3b-a483-68a602297da8/Sails.js.png",0],["Visual design","",0],["3D design","",0],["VR design","",0],["Interaction design","",0],["Motion design","",0],["Prototyping","",0],["Content strategy","",0],["Metrics & Analytics","",0],["Functional Programming","",0],["Django","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/51885177-75ee-46c9-8f50-9e3a9b18f08d/Django.png",0],["Meteor","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/21d25d53-b513-486f-b72a-3f7ac466eab0/Meteor.png",0],["Virtual Reality","",0],["Network","",0],["Security","",0],["System Architect","",0],["Socket.io","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/ab645f03-ad26-4faf-9f47-4915babd7e4f/Socket.io.png",0],["OOP","",0],["DevOps","",0],["Bitcoin","",0],["POS","",0],["TensorFlow","",0],["Scikit-Learn","",0],["Big Data","",0],["Natural Language Processing","",0],["Haskell","",0],["Erlang","",0],["Go","",0],["Rust","",0],["LoopBack","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/a516378b-b010-4a64-a348-580ad4839861/LoopBack.png",0],["Scala","",0],["OpenCV","",0],["Data Visualization","",0],["Data Analysis","",0],["Data Mining","",0],["RabbitMQ","",0],["Restify","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/6cc45e75-2e1e-443c-9708-1bb25ebac8f7/Restify.png",0],["Rollup","",0],["Kubernetes","",0],["Varnish","",0],["Slicing","",0],["Hapijs","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/38b3a67c-40c9-4a41-b6e6-2b36c9488b2b/Hapijs.png",0],["LAMP","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/28c15a16-bf14-4e6e-9ebe-53bb9ba39004/details-13.jpg",0],["Symfony","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/b8f49555-e555-4def-a7dc-34edc90c7eb2/details-22.jpg",0],["Dart","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/fac1333c-a361-42ab-8dfb-3e7a18b4d0c0/details-26.jpg",0],["Forth","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/77060e18-9114-431b-ae6b-91f54fc0c7ff/details-27.jpg",0],["Julia","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/15d23eb7-2b52-47e5-ac09-ee793aa45731/details-28.jpg",0],["CoffeeScript","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/ee308580-5af9-406b-a3c9-a61c537be40d/details-29.jpg",0],["Perl","",0],["Doctrine","",0],["Koala","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/f629e738-c571-4d71-aecc-018a63949c37/details-36.jpg",0],["Redux","",0],["Titan","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/7900ee03-6a4e-4f47-b34b-444475bb5109/details-38.jpg",0],["Shinken","",0],["MEAN","",0],["MERN","",0],["Express","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/1ef2fe29-c782-4068-a621-a21514e586c8/Express.png",0],["Git","",0],["VueJS","https://fieldbook.com/attachments/58dc7b4195b7800300c2f7f3/640ab267-025f-4b7f-99d2-5e529aaa1212/VueJS.png",0],["Travis","",0]]});