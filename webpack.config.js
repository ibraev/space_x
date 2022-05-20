const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = function (_env, argv) {
    const isProduction = argv.mode === "production"
    const isDevelopment = !isProduction;
    return {
        devtool: isDevelopment && "cheap-module-source-map",
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "assets/js/[name].[contenthash:8].js",
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test:/\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use:["babel-loader"]
                },
                {
                    test: /\.(css|scss)$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                    use: ["file-loader"],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "src", "index.html")
            })
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            compress: true,
            port: 9009
        }
    }
}

