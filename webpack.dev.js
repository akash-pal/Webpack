const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: 'source-map',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM 
                    "css-loader",  //2. Turns css into commonjs
                    "sass-loader" //1. Turns scss into css
                ]
            },
        ]
    }
});
