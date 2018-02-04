# ppsloop
Demo animation effect for new home page

[![Build Status](https://travis-ci.org/greenglobal/ppsloop.svg?branch=master)](https://travis-ci.org/greenglobal/ppsloop)
[![Dependency Status](https://gemnasium.com/badges/github.com/greenglobal/ppsloop.svg)](https://gemnasium.com/github.com/greenglobal/ppsloop)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/94c68af0-9eee-4861-8cb8-07939b3ba87b/badge)](https://nodesecurity.io/orgs/techpush/projects/94c68af0-9eee-4861-8cb8-07939b3ba87b)

[![Video](https://i.imgur.com/jeGlO77.png)](https://youtu.be/oLzDV8Va2vE)

## Usage

To add this widget to a web page, you need:

- Include CSS and JS files (see [CDN links](#cdns))
- Insert `<PPSWidget></PPSWidget>` to right place on the web page

Example:

```
<html>
  <head>
    <title>Hello</title>
    <link rel="stylesheet" href="https://greenglobal.github.io/ppsloop/ppsloop.css">
  </head>
  <body>
  <!-- add widget here -->
  <PPSWidget id="widgetTechTeam" image-path="/path/to/images/dir/" lang="en"></PPSWidget>

  <!-- or display people only version -->
  <PPSWidget type="simple" project="escope" image-path="/path/to/images/dir/"></PPSWidget>

  <script src="https://greenglobal.github.io/ppsloop/ppsloop.js"></script>
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

  - [ppsloop.css](https://greenglobal.github.io/ppsloop/ppsloop.css)
  - [ppsloop.js](https://greenglobal.github.io/ppsloop/ppsloop.js)
  - [ppsloop.json](https://greenglobal.github.io/ppsloop/ppsloop.json)

- Production (stable)

  - [ppsloop.css](https://cdn.rawgit.com/greenglobal/ppsloop/master/docs/ppsloop.css)
  - [ppsloop.js](https://cdn.rawgit.com/greenglobal/ppsloop/master/docs/ppsloop.js)
  - [ppsloop.json](https://cdn.rawgit.com/greenglobal/ppsloop/master/docs/ppsloop.json)


## Usage

```
git clone https://github.com/greenglobal/ppsloop.git
cd ppsloop
npm i
npm start
```

If everything goes well, it would build a compiled version to "/dist", open at 8080 and start watching changes.

To dev, just modify source codes from /src, then reload webpage to see updates.


To build, run:

```
npm run build
```

The last result will be saved into "/docs".


# License

The MIT License (MIT)
