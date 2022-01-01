const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { ESBuildPlugin, ESBuildMinifyPlugin } = require("esbuild-loader");
const path = require("path");
const fs = require("fs");

// defaults
var outputPath = [],
  entryPoints = [],
  externals = [],
  misc = [],
  loaders = [];

var outputPathFile = "./srcjs/config/output_path.json",
  entryPointsFile = "./srcjs/config/entry_points.json",
  externalsFile = "./srcjs/config/externals.json",
  miscFile = "./srcjs/config/misc.json",
  loadersFile = "./srcjs/config/loaders.json";

// Read config files
if (fs.existsSync(outputPathFile)) {
  outputPath = fs.readFileSync(outputPathFile, "utf8");
}

if (fs.existsSync(entryPointsFile)) {
  entryPoints = fs.readFileSync(entryPointsFile, "utf8");
}

if (fs.existsSync(externalsFile)) {
  externals = fs.readFileSync(externalsFile, "utf8");
}

if (fs.existsSync(miscFile)) {
  misc = fs.readFileSync(miscFile, "utf8");
}

if (fs.existsSync(loadersFile)) {
  loaders = fs.readFileSync(loadersFile, "utf8");
}

if (fs.existsSync(loadersFile)) {
  loaders = fs.readFileSync(loadersFile, "utf8");
}

// parse
loaders = JSON.parse(loaders);
misc = JSON.parse(misc);
externals = JSON.parse(externals);
entryPoints = JSON.parse(entryPoints);

// parse regex
loaders.forEach((loader) => {
  loader.test = RegExp(loader.test);
  return loader;
});

// placeholder for plugins
var plugins = [
  new HtmlWebpackPlugin({
    filename: "../index.html",
    template: "srcjs/index.html",
  }),
  new VueLoaderPlugin(),
];

// define options
var options = {
  entry: entryPoints,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, JSON.parse(outputPath)),
  },
  externals: externals,
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            // Requires >= sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true, // optional
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
          loader: "jsx", // Syntax to compile to (see options below for possible values)
        },
        exclude: "/node_modules/",
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          { loader: "css-loader", options: { esModule: false } },
        ],
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: plugins,
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015",
      }),
    ],
  },
};

// add misc
if (misc.resolve) options.resolve = misc.resolve;

// export
module.exports = options;
