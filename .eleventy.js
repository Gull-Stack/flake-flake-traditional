module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/css/");

  // Markdown options
  eleventyConfig.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
  }));

  // Create collections
  eleventyConfig.addCollection("pages", function(collection) {
    return collection.getAll().filter(function(item) {
      return item.inputPath.includes("/pages/");
    });
  });

  eleventyConfig.addCollection("services", function(collection) {
    return collection.getAll().filter(function(item) {
      return item.inputPath.includes("/services/");
    });
  });

  eleventyConfig.addCollection("attorneys", function(collection) {
    return collection.getAll().filter(function(item) {
      return item.inputPath.includes("/attorneys/");
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};