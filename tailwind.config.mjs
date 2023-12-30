import daisyui from "daisyui";
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			byellow: "#FADF0B",
			bpink: "#FF00F5",
			blightblue: "#7DF9FF",
			borange: "#FF4911",
			bblue: "#3300FF",
			blightviolet: "#C4A1FF",
		},
		extend: {
			fontFamily: {
				sans: ["Lexend Mega", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
