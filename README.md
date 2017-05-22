# ppsloop
Demo animation effect for new home page

[![Build Status](https://travis-ci.org/greenglobal/ppsloop.svg?branch=master)](https://travis-ci.org/greenglobal/ppsloop)
[![Dependency Status](https://gemnasium.com/badges/github.com/greenglobal/ppsloop.svg)](https://gemnasium.com/github.com/greenglobal/ppsloop)

[![Video](http://i3.ytimg.com/vi/wCwRiyowXO0/maxresdefault.jpg)](https://www.youtube.com/watch?v=wCwRiyowXO0)

## Usage

To add this widget to a web page, you need:

- Include CSS and JS files (see [CDN links](#cdns))
- Insert `<PPSWidget></PPSWidget>` to right place on the web page

Example:

```
<html>
  <head>
    <title>Hello</title>
    <link rel="stylesheet" href="https://rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.css">
  </head>
  <body>
  <!-- add widget here -->
  <PPSWidget id="widgetTechTeam" section-labels="Team|Projects|Tech stacks" image-path="/img/widgetimage"></PPSWidget>

  <!-- or display people only version -->
  <PPSWidget type="simple" project="escope" image-path="/img/widgetimage/"></PPSWidget>

  <script src="https://rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.js"></script>
  </body>
</html>
```

## APIs

By adding this widget, you got a global object `PPSW` with the following methods:


#### getPeople()

Return an array which contains the list of people.


#### getProjects()

Return list of projects.


#### getTechstacks()

Return list of tech stacks.


#### getPeopleBySkill(skillName)

Return people who has the given skill.

Ex:

```
let whoCanUseAngular = PPSW.getPeopleBySkill('angular');
console.log(whoCanUseAngular);
```

#### getProjectStacks(skillName)

Return an array of people who has the given skill.

Ex:

```
let whatBuiltWithAngular = PPSW.getProjectStacks('angular');
console.log(whatBuiltWithAngular);
```

#### getProjectMembers(projectName)

Return an array of people who involved in the given project.

Ex:

```
let whoInvolveEscope = PPSW.getProjectMembers('Escope');
console.log(whoInvolveEscope);
```


#### init(data)

Start initializing with given data. This method can be called just once. The second call does nothing.

```
PPSW.init(data);
```


#### isInititalized()

Return true if init() has been called at least once early.



#### CDNs

- Dev (fast update)

  - [ppsloop.css](https://rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.css)
  - [ppsloop.js](https://rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.js)
  - [ppsloop.json](https://rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.json)

- Production (stable)

  - [ppsloop.css](https://cdn.rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.css)
  - [ppsloop.js](https://cdn.rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.js)
  - [ppsloop.json](https://cdn.rawgit.com/greenglobal/ppsloop/master/dist/ppsloop.json)


## Installation

```
git clone https://github.com/greenglobal/ppsloop.git
cd ppsloop
yarn
npm start
```

If everything goes well, it would build a compiled version to "/dist", open at 8080 and start watching changes.

To dev, just modify source codes from /src, then reload webpage to see updates. Then, run `npm run release` to get the last result in "/docs".


# License

The MIT License (MIT)
