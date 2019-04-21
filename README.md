# Webpack [Module Loader]

It can quickly build, minify, split & do a whole wonder of other things to your code.
Sample Webpack Config:

```
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./js/scripts.js",
    output: {
        path: __dirname + "/js",
        filename: "scripts.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
```

Just run `webpack` and it will produce unminified output with sourcemaps.
Run `webpack --mode=development` and it will minify the output.

Basic configuration for webpack that will get you started in a project. It will build all of your Javascript and minify and dedupe the code for production
