const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    {
        entry: {
            // index.js is just plain old Javascript
            pageOne: "./src/index.js",
        },
        output: {
            path: path.resolve(__dirname, "build"),
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.join(__dirname, "public", "index.html"),
            }),
        ],
        module: {
            // exclude node_modules
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
            ],
        },
        // pass all js files through Babel
        resolve: {
            extensions: ["*", ".js", ".jsx"],
        },// In this multi configuration setup, the devserver on the first config is taken into account and used for all the configs in the array.
        //https://webpack.js.org/configuration/dev-server/
        devServer: {
            static: {
                directory: path.join(__dirname, "build"),
            },
            port: 3030,
        }
    },
    {
        entry: {
            //index2.js is the entry point for a React root.
            pageTwo: "./src/index2.js",
        },
        output: {
            path: path.resolve(__dirname, "build"),
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index2.html",
                template: path.join(__dirname, "public", "index2.html"),
            }),
        ],
        module: {
            // exclude node_modules
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
            ],
        },
        // pass all js files through Babel
        resolve: {
            extensions: ["*", ".js", ".jsx"],
        }
    }
]

