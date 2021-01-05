module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", dateObj => {
    return dateObj.getFullYear();
  });

  return {
    dir: {
      input: "src",
    }
  };
};