// setup

var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;

var debug = require('debug');
var info = debug('pps:info');

var cpdir = require('copy-dir').sync;

var copyFile = (source, target) => {
  if (fs.lstatSync(target).isDirectory()) {
    let filename = path.basename(source);
    target += `/${filename}`;
  }
  if (fs.existsSync(target)) {
    fs.unlinkSync(target);
  }
  let rd = fs.createReadStream(source);
  let wr = fs.createWriteStream(target);
  rd.pipe(wr);
};

var setup = (source, dist) => {
  info('Start setting up...');
  if (fs.existsSync(dist)) {
    exec('rm -rf ' + dist);
  }
  exec(`mkdir ${dist}`);
  cpdir(`${source}`, `${dist}`);

  copyFile(`${source}/favicon.ico`, dist);
  exec(`mkdir ${dist}/widget`);
};


module.exports = setup;
