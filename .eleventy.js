const dayjs = require('dayjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", dateObj => {
    return dateObj.getFullYear();
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return dayjs(dateObj).format('YYYY年M月D日');
  });

  eleventyConfig.addPassthroughCopy("src/assets")

  return {
    dir: {
      input: "src",
    }
  };
};