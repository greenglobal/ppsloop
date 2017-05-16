/**
 * Import specs
 */

var fs = require('fs');
var path = require('path');

let where = './tests/specs/';
if (fs.existsSync(where)) {
  fs.readdirSync(where).forEach((file) => {
    require(path.join('.' + where, file));
  });
}

