# dieterlimeback

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e34855e-50be-4b42-84e6-eddbe2f7f716/deploy-status)](https://app.netlify.com/sites/frosty-curran-d9f06d/deploys)

Website at dieterlimeback.com

### Installation

```
npm install
```

Install `node` and `npm` via the install script at https://github.com/nvm-sh/nvm if necessary first.

### Start dev server

```
npm start
```

### Build prod version

```
npm run build
```

### Features:

Started from [https://github.com/wbkd/webpack-starter](https://github.com/wbkd/webpack-starter).

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
