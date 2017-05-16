/**
 * server.js
 * app start
**/

var minimist = require('minimist');
var express = require('express');

var builder = require('./builder');
var {setup, compiler, readFile} = builder;

var app = express();

app.use(express.static('src/consumer'));
app.use((req, res, next) => {

  if (req.path === '/widget/ppsloop.css') {
    return compiler.css().then((css) => {
      return res.status(200).type('text/css').send(css);
    }).catch((err) => {
      return res.status(500).send(err);
    });
  }

  if (req.path === '/widget/ppsloop.js') {
    return compiler.js().then((js) => {
      return res.status(200).type('text/javascript').send(js);
    }).catch((err) => {
      return res.status(500).send(err);
    });
  }

  if (req.path === '/widget/ppsloop.json') {
    let json = readFile('./src/widget/data.json');
    return res.status(200).type('application/json').send(json);
  }

  if (req.path === '/widget/ppsloop.init.js') {
    let json = readFile('./src/widget/data.json');
    let js = `PPSW.init(${json});`;
    return res.status(200).type('text/javascript').send(js);
  }

  return next();
});

app.use((req, res) => {
  return res.status(404).send('File not found');
});

var argv = minimist(process.argv.slice(2));
var port = argv.port || argv.p;
if (port && port >= 0 && port <= 65535) {
  app.listen(port, () => {

    setup();
    console.log(`Server started running at ${port}`);
    console.log(`http://localhost:${port}`);
    console.log('Data sources:');
    console.log(`http://localhost:${port}/widget/ppsloop.css`);
    console.log(`http://localhost:${port}/widget/ppsloop.js`);
    console.log(`http://localhost:${port}/widget/ppsloop.json`);
  });
}
