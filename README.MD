npm init
npm i --save-dev webdriverio

/project
├── features
  │   ├── example.feature
  │   └── steps
  │       └── example.steps.js
  ├── setup.js
  ├── locators.js
  ├── platform.js
  └── wdio.conf.js


  npx wdio run wdio.conf.js
