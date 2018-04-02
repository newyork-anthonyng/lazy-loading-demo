const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // filename for files specified in the "entry" configuration
    chunkFilename: "[name].lazyLoaded.js" // filename for files not specified in the "entry" configuration
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "template.html"
    })
  ]
};
