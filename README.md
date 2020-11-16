[![Netlify Status](https://api.netlify.com/api/v1/badges/6e34855e-50be-4b42-84e6-eddbe2f7f716/deploy-status)](https://app.netlify.com/sites/frosty-curran-d9f06d/deploys)

# dieterlimeback

This is the website at [dieterlimeback.com](https://dieterlimeback.com/). Built from [Skeleventy](https://skeleventy.netlify.com/), a skeleton boilerplate built with Eleventy and TailwindCSS.

## Requirements

Node `>=` v8.9.0. Install `node` and `npm` via the install script at https://github.com/nvm-sh/nvm.


## Installation

```
npm install
```

`cd` into your project folder and run `npm run dev` to start the development server and Gulp. Eleventy has baked in hot reloading and will monitor files for changes.


## Folder Structure

The `site` folder contains all the templates, pages, and content, which Eleventy will watch and parse into HTML for us.

Within this also lives a `globals` folder, where you'll find a `site.json` file for general site config stuff.

A `navigation.json`, which we loop over in the template, will generate a nav. `helpers.js` contains a simple environment helper.

Uncompiled SCSS and JS reside in the `resources` folder - Gulp will be watching these folders for any changes (you should restart the server when creating new partials).

When in development mode, Skeleventy will use `main.css` as the stylesheet. This will be pretty chunky in filesize, due to it containing all of Tailwind's utility classes. Once you run the build command ready for deployment, Skeleventy will then reference the minified version of the stylesheet `main.min.css`.

Purge will also run via the build command and will cross reference all of Tailwind's utility classes with your templates/HTML and will remove all the unused ones.


## Deployment

This repo is currently connected to Netlify, so deploys happen automatically when merging git branches to `master`. Behind the scenes, Netlify runs `npm run build` which minifies scripts and styles, runs Purgecss, and outputs all static files to `dist`.
