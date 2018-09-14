 Boilerplate React Components Project Setup
 ================================
### Terminal

- Create Project folder
  ```
  mkdir <project folder name>
  ```
- initialize node modules 
  ```
  ..Desktop/project~: npm init
  ```

- Install dependencies in project folder
    ```
    ../Desktop/project~: npm install babel-cli@6.24.1
    ../Desktop/project~: npm install babel-core@6.25.0
    ../Desktop/project~: npm install babel-loader@7.1.1
    ../Desktop/project~: npm install babel-preset-env@1.5.2
    ../Desktop/project~: npm install babel-preset-react@6.24.1
    ../Desktop/project~: npm install live-server
    ../Desktop/project~: npm install react@t@16.0.0
    ../Desktop/project~: npm install react-dom@16.0.0
    ../Desktop/project~: npm install webpack@3.1.0
    ```
- confirm dependencies loaded in package.json

### Editor 
- Create project/public folder
 Create project/public/images folder
Add favicon.ico file

- Create project/public/index.html 
Insert boilerplate code

  ```javascript
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/images/favicon.ico">
    <title>App Title</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/bundle.js"></script>
  </body>
  ```

- Create project/src folder
Create project/src/app.js
Insert boilerplate code

    ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  const template = <p>JSX from Webpack</p>;
  const app = document.getElementById('app');
  
  ReactDOM.render(template, app);
    ```

- Open  package.json
Add scripts to main object

    ```javascript
    "scripts": {
        "serve": "live-server public/",
        "build": "webpack",
        "dev-server": "webpack-dev-server"
    },
    ```

- Create project/webpack.config.js file
Open project/webpack.config.js 
add entry and output file names and path
   ```javascript
  const path = require('path')
  
  module.exports = {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  };
  ```

- Create project/.babelrc file
Insert react presets 
   ```javascript
    {
      "presets": [
        "env",
        "react"
      ]
    }
   ```

- run webpack build and live-server with npm or yarn commands in the terminal 
 __babel will rewrite public/scripts/app.js with each build__

## Launch live-server
### Terminal 1
```
../Desktop/project~: npm run build
```

## Launch babel
### Terminal 2
  ```
  ../Desktop/project~:npm run serve
  ```


- Confirm app.js is up and running in browser console  
