import daisyui from "daisyui";
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				byellow: "#FADF0B",
				bpink: "#FF00F5",
				blightblue: "#7DF9FF",
				borange: "#FF4911",
				bblue: "#3300FF",
				blightviolet: "#C4A1FF",
				bwhite: "#FFFFFF",
				bblack: "#000000",
			},
			fontFamily: {
				sans: ["Lexend Mega Variable", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					"base-100": "#FADF0B",
				},
				mythemedark: {
					"base-100": "#151515",
					white: "#FFFFFF",
				},
			},
		],
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [require("daisyui")],
};
