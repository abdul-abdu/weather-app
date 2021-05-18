const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js",
	},

	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: 3000,
		publicPath: "http://localhost:3000/dist",
		hotOnly: true,
		// compress: true,
	},

	mode: process.env.NODE_ENV || "development",

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["ts-loader"],
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ["file-loader"],
			},
		],
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public/", "index.html"),
		}),
		new Dotenv(),
	],
};
