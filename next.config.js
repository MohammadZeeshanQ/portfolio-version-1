/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
	env: {
		EMAIL_SERVICE: process.env.EMAIL_SERVICE,
		EMAIL_TEMPLATE: process.env.EMAIL_TEMPLATE,
		EMAIL_KEY: process.env.EMAIL_KEY,
	},
	// images: {
	// 	loader: "imgix",
	// 	path: "",
	// },
};
