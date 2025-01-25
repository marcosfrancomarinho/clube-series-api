const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["./src/app.ts"],
		outfile: "./dist/app.js",
		bundle: false,
		minify: true,
		platform: "node",
		external: ["bcrypt", "cors", "express", "joi", "jsonwebtoken", "pg"],
		minifySyntax: true,
		minifyWhitespace: true,
		minifyIdentifiers: true,
		target: "es6",
	})
	.catch(() => process.exit(1));
