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

<br>

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

<br>

## Component structure
### atoms
Atomic Design 5계층을 간단화한 3계층(Atoms, Modules, Templates)에서 1단계인 Atoms 단계의 컴포넌트가 위치함.    
ex. icon, text, image 등 유닛 단위 레벨의 컴포넌트

<br>

### modules
Atomic Design 5계층을 간단화한 3계층(Atoms, Modules, Templates)에서 2단계 Modules 단계의 컴포넌트가 위치함.  
ex. form, card, list 등 모듈 단위 레벨의 컴포넌트 또는, header, footer, sidebar 등 레이아웃 단위 레벨의 컴포넌트

#### layout
Atomic Design 5계층을 간단화한 3계층(Atoms, Modules, Templates)에서 2단계 Modules 단계의 컴포넌트가 위치함.  
ex. form, card, list 등 모듈 단위 레벨의 컴포넌트 또는, header, footer, sidebar 등 레이아웃 단위 레벨의 컴포넌트
 
<br>

### Templates
Atomic Design 5계층을 간단화한 3계층(Atoms, Modules, Templates)에서 3단계 Templates 단계의 컴포넌트가 위치함.  
ex. 페이지 단위 레벨의 컴포넌트(route 기반)
