Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(f,g){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),b=e.length>>>0;if(0===b)return!1;for(var a=g|0,a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){var c=e[a],d=f;if(c===d||"number"===typeof c&&"number"===typeof d&&isNaN(c)&&isNaN(d))return!0;a++}return!1}});
