const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["./src/app.ts"],
		outfile: "./public/bundle.js",
		bundle: true,
		minify: true,
		platform: "node",
		external: ["bcrypt", "cors", "express", "joi", "jsonwebtoken", "pg"],
		minifySyntax: true,
		minifyWhitespace: true,
		minifyIdentifiers: true,
		target: "es6",
	})
	.catch(() => process.exit(1))
