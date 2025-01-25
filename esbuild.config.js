const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["./src/app.ts"],
		bundle: true,
		outfile: "./dist/app.js",
		minify: true,
		platform: "node",
		target: "node16",
		external: ["bcrypt", "cors", "express", "joi", "jsonwebtoken", "pg"],
		minifySyntax: true,
		minifyWhitespace: true,
		minifyIdentifiers: true,
	})
	.catch(() => process.exit(1));
