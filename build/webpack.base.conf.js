const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, "../src"),
    dist: path.join(__dirname, "../dist"),
    assets: ""
};

const PAGES_DIR = PATHS.src;
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith(".html"));

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].[contenthash].js`,
        path: PATHS.dist,
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendors",
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                // JavaScript
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },
        ]
    },
    resolve: {
        alias: {
            "~": PATHS.src
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            // {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
            // {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`}
        ]),
        ...PAGES.map(
            page =>
                new HtmlWebpackPlugin({
                    template: `${PAGES_DIR}/${page}`,
                    filename: `./${page}`,
                    minify: {
                        minifyCSS: true
                    }
                })
        )
    ]
};
