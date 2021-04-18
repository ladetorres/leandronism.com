module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("blogs");
  eleventyConfig.addPassthroughCopy("views");
  return {
    includes: "_includes",
    data: "_data",
  };
};
