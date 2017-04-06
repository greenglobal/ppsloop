// setup

var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;

var debug = require('debug');
var info = debug('rst:info');

var cpdir = require('copy-dir').sync;

var generateJSON = require('./generateJSON');

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

var setup = async (source, dist) => {
  info('Start setting up...');
  if (fs.existsSync(dist)) {
    exec('rm -rf ' + dist);
  }
  exec('mkdir ' + dist);
  exec(`mkdir ${dist}/images`);
  exec(`mkdir ${dist}/fonts`);
  exec(`mkdir ${dist}/pps-widget`);

  cpdir(`${source}/images`, `${dist}/images`);
  cpdir(`${source}/fonts`, `${dist}/fonts`);
  cpdir(`${source}/pps-widget`, `${dist}/pps-widget`);

  copyFile(`${source}/favicon.ico`, dist);

  let jsonFile = `${source}/pps-widget/ppsdata.json`;
  if (!fs.existsSync(jsonFile)) {
    let data = await generateJSON();
    fs.writeFileSync(jsonFile, JSON.stringify(data), 'utf8');
  }
};


module.exports = setup;
