/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		...defaultTheme,
		extend: {
			colors: {
				'secondary': "rgb(87,87,87)",
			  },
			maxWidth: {
			  '1/2': '50%',
			}
		  },
		  fontFamily: {
			'sans': ['Lato', 'system-ui', ...defaultTheme.fontFamily.sans],
		  },
		  typography: {
			DEFAULT: { // PROSE DEFAULTS
			  css: {
				color: 'inherit',
				a: {
				  color: '#3182ce',
				  '&:hover': {
					color: '#2c5282',
				  },
				},
			  },
			},
		  },
	},
	plugins: [require('@tailwindcss/typography')],
}
