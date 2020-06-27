/**
 * vue的webpack配置
 * 参考文档: https://cli.vuejs.org/zh/config/
 *
 */

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  outputDir: "dist",
  devServer: {
    port: "8000",
    proxy: {
      // 设置本地调试域名的路径解决跨域问题
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true
      },
      "/foo": {
        target: "<other_url>"
      }
    }
  },
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
