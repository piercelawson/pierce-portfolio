const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add the missing "split" filter
  eleventyConfig.addFilter("split", function(str, sep) {
    return (str || "").split(sep);
  });

  // All projects sorted by order
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md").sort((a, b) => {
      return (a.data.order || 999) - (b.data.order || 999);
    });
  });

  // Featured projects only
  eleventyConfig.addCollection("featured", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md")
      .filter(p => p.data.featured)
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  // Markdown filter for rendering markdown strings in templates
  const md = markdownIt({ html: true, b
