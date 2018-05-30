let webpack = require("webpack");
let path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      SOMETHINE: '"this is something we needed."',
      FUCK: JSON.stringify("fucker"),
      OBJ: JSON.stringify({"key1": "this is value"}),
      OBJ2: {"key1": "this is value"},
      OBJ3: {"key1": "'this is value'"},
      ARRAY: JSON.stringify(["value1", "value2"]),
      ARRAY2: ["value1", "value2"],
      ARRAY3: ["'value1'", "'value2'"],
      NUMBER: 123,
      BOOL: true,
    })
  ]
};