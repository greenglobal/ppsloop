// parseHTML

var fs = require('fs');
var Mustache = require('mustache');
var cheerio = require('cheerio');
var htmlmin = require('html-minifier').minify;

var isAbsolute = (url) => {
  return url && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//'));
};

var parseHTML = (file, config) => {
  let html = fs.readFileSync(file, 'utf8');
  Mustache.parse(html);
  let compiledHTML = Mustache.render(html, config);
  let $ = cheerio.load(compiledHTML, {
    normalizeWhitespace: true
  });

  let revision = Date.now();

  let cssFiles = [];
  $('link[rel="stylesheet"]').each((i, elem) => {
    let ofile = $(elem).attr('href');
    if (!isAbsolute(ofile)) {
      cssFiles.push(ofile);
      $(elem).remove();
    }
  });
  if (cssFiles.length) {
    let styleTag = `<link rel="stylesheet" type="text/css" href="main.css?rev=${revision}" />`;
    $('head').append(styleTag);
  }

  let jsFiles = [];
  $('script').each((i, elem) => {
    let ofile = $(elem).attr('src');
    if (!isAbsolute(ofile)) {
      jsFiles.push(ofile);
      $(elem).remove();
    }
  });
  if (jsFiles.length) {
    let scriptTag = `<script type="text/javascript" src="main.js?rev=${revision}"></script>`;
    $('body').append(scriptTag);
  }

  let sHTML = htmlmin($.html(), {
    collapseWhitespace: true,
    preserveLineBreaks: true,
    quoteCharacter: '"',
    removeComments: true,
    removeEmptyAttributes: true,
    useShortDoctype: true
  });

  return {
    css: cssFiles,
    js: jsFiles,
    html: sHTML
  };
};

module.exports = parseHTML;
