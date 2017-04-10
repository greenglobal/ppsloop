# ppsloop
Demo animation effect for new home page


## Usage

Add this widget to your web page with the following steps:

- Include CSS and JS files (see [CDN links](#cdns))
- Insert `<PPSWidget></PPSWidget>` to right place in webpage
- Call PPWS.start() method to start rendering the items

Examples:

```
<html>
  <head>
    <title>Hello</title>
    <link rel="stylesheet" href="https://rawgit.com/greenglobal/ppsloop/master/docs/widget/ppsloop.widget.css">
  </head>
  <body>
  <!-- add widget here -->
  <PPSWidget id="widgetTechTeam"></PPSWidget>

  <script src="https://rawgit.com/greenglobal/ppsloop/master/docs/widget/ppsloop.widget.js"></script>
  <script>PPSW.start();</body>
  </body>
</html>
```

## APIs

By adding widget, you got a global object `PPSW` that has the following methods:


#### getPeople()

Return an array which contains the list of people.


#### getProjects()

Return an array which contains the list of projects.


#### getTechstacks()

Return an array which contains the list of tech stacks.


#### getPeopleWhoHas(skillName)

Return an array of people who has the given skill.

Ex:

```
let whoCanUseAngular = PPSW.getPeopleWhoHas('angular');
console.log(whoCanUseAngular);
```

#### getProjectsThatUse(skillName)

Return an array of people who has the given skill.

Ex:

```
let whatBuiltWithAngular = PPSW.getProjectsThatUse('angular');
console.log(whatBuiltWithAngular);
```


#### init(data)

Start initializing with given data. This method can be called just once. The second call does nothing.

```
PPSW.init(data);
```


#### isInititalized()

Return true if init() has been called at least once early.



#### start()


Start rendering. Use this to manual handle the rendering process, for example based on scrollTop:

For example, just render when user scroll to the point of 250px above widget:

```
$(window).scroll(function() {
  if(!PPSW.isStarted() && $(window).scrollTop() > $('#widgetTechTeam').offset().top - 250) {
    PPSW.start();
  }
});
```

This method can be called just once. The second call does nothing.


#### isStarted()

Return true if start() has been called at least once early.


#### CDNs

- Dev (fast update)

  - [ppsloop.widget.css](https://rawgit.com/greenglobal/ppsloop/master/docs/widget/ppsloop.widget.css)
  - [ppsloop.widget.js](https://rawgit.com/greenglobal/ppsloop/master/docs/widget/ppsloop.widget.js)

- Production (stable)

  - [ppsloop.widget.css](https://cdn.rawgit.com/greenglobal/ppsloop/6c9000a4/docs/widget/ppsloop.widget.css)
  - [ppsloop.widget.js](https://cdn.rawgit.com/greenglobal/ppsloop/6c9000a4/docs/widget/ppsloop.widget.js)



## Installation

```
git clone https://github.com/greenglobal/ppsloop.git
cd ppsloop
yarn
npm start
```

If everything goes well, it would build a compiled version to "/dist", open at 8080 and start watching changes.

To dev, just modify source codes from /src, then reload webpage to see updates.


# License

The MIT License (MIT)
