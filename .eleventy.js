const dayjs = require('dayjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", dateObj => {
    return dateObj.getFullYear();
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return dayjs(dateObj).format('YYYY年M月D日');
  });

  return {
    dir: {
      input: "src",
    }
  };
};