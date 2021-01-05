module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", dateObj => {
    return dateObj.getFullYear();
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    let YYYY = dateObj.getFullYear();
    let M = dateObj.getMonth() + 1;
    let D = dateObj.getDate();
    return `${YYYY}年${M}月${D}日`;
  });

  return {
    dir: {
      input: "src",
    }
  };
};