var path = require("path")
module.exports = { }
module.exports.entry = path.resolve("code", "main.js")

module.exports.output = { }
module.exports.output.path = path.resolve("public")
module.exports.output.filename = "final.js"

module.exports.module = { }
module.exports.module.rules = [
	{
		test: /js$/,
		use: {
			loader: "babel-loader",
			options: {
				presets: [
				"@babel/preset-env", 
				"@babel/preset-react"]
			}
		},
		exclude: /node_modules/,
	}
]

