/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			byellow: "#FADF0B",
			bpink: "#FF00F5",
			blightblue: "#7DF9FF",
			borange: "#FF4911",
			bblue: "#3300FF",
			blightviolet: "#C4A1FF",
			white: "#FFFFFF",
			black: "#000000",
		},
		extend: {
			fontFamily: {
				sans: ["Lexend Mega", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
