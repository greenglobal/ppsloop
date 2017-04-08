/**
 * server.js
 * app start
**/

var minimist = require('minimist');
var express = require('express');
var builder = require('./builder');

var consumerApp = express();

consumerApp.use(express.static('dist'));

consumerApp.use((req, res) => {
  return res.status(404).send('File not found');
});

var widgetApp = express();

widgetApp.use(express.static('dist/widget'));

widgetApp.use((req, res) => {
  return res.status(404).send('File not found');
});


var argv = minimist(process.argv.slice(2));
var port = argv.port || argv.p;
if (port && port >= 0 && port <= 65535) {
  consumerApp.listen(port, () => {
    console.log(`Server started running at ${port}`);
    console.log(`http://localhost:${port}`);
  });
  let widgetAppPort = port + 1;
  widgetApp.listen(widgetAppPort, async () => {
    console.log(`Widget is provided via the following URLs:`);
    console.log(`http://localhost:${widgetAppPort}/ppsloop.widget.js`);
    console.log(`http://localhost:${widgetAppPort}/ppsloop.widget.css`);
    console.log(`http://localhost:${widgetAppPort}/ppsloop.widget.json`);

    await builder.start();
    await builder.prepare();
    await builder.update();
    builder.watch();
  });
}
