const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const typesetPlugin = require('eleventy-plugin-typeset');


module.exports = eleventyConfig => {

    // Add a readable date formatter filter to Nunjucks
    eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"))

    // Add a HTML timestamp formatter filter to Nunjucks
    eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"))

    // Minify our HTML
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if( outputPath.endsWith(".html") ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }
        return content;
    })

    // Nice typography
    eleventyConfig.addTransform("typeset", (content) => {
      let cleaned = typeset(content);
      return cleaned;
    })
    eleventyConfig.addPlugin(typesetPlugin({
      disable: ['ligatures']
    }));

    // Collections
    // eleventyConfig.addCollection('articles', collection => {
    //     return collection.getFilteredByTag('article').reverse()
    // })

    // Generate Atom XML feed
    // eleventyConfig.addPlugin(pluginRss);

    // Lint for inclusive language
    // eleventyConfig.addPlugin(inclusiveLangPlugin);

    // Layout aliases
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
    eleventyConfig.addLayoutAlias('blank', 'layouts/blank.njk')
    eleventyConfig.addLayoutAlias('full', 'layouts/full.njk')
    eleventyConfig.addLayoutAlias('article', 'layouts/article.njk')

    // Include our static assets
    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.addPassthroughCopy("javascript")
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("fonts")
    eleventyConfig.addPassthroughCopy("site/_redirects")

    return {
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: 'site',
            output: 'dist',
            includes: 'includes',
            data: 'globals'
        }
    }

}
