const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const config = merge(base, {
  entry: {
    app: "./src/entry-client.js",
  },
  resolve: {
    alias: {},
  },
  plugins: [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.VUE_ENV": '"client"',
    }),
    new VueSSRClientPlugin(),
  ],
});

// client webpack => html js css
// PrerenderSPAPlugin headless chrome puperteer
if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: "src/prerender.template.html",
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, "../dist"),
      routes: ["/about"],
    })
  );
}
module.exports = config;
