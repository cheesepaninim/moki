# MOKI
작성한 게시글을 모듈로 다른 게시글에서 불러와 쓸 수 있는 블로그 

## NPM task
```shell script
## setup
$ npm install

## Runs the app in development mode.
$ npm start

## Builds the app for production to the build folder.
$ npm run build
```

## Structure
```
moki
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── docs
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── api
    ├── assets
    │   └── images
    ├── components
    │   ├── atoms
    │   ├── modules
    │   │   └── layout
    │   └── templates
    ├── constants
    │   ├── schemes
    │   ├── APIs.js
    │   ├── Dialogs.js
    │   └── URLs.js
    ├── features
    ├── lib
    ├── routes
    │   └── index.js
    ├── store
    │   ├── reducer.js
    │   └── store.js
    ├── utils
    │   └── history.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```
