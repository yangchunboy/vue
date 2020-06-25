const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@pages", resolve("src/pages"))
      .set("@utils", resolve("src/utils"))
      .set("@api", resolve("src/api"))
      .set("@components", resolve("src/components"));
  }
};
