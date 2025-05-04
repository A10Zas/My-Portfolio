// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				press: 'var(--font-press-start)',
				roboto: 'var(--font-roboto)',
			},
		},
	},
	plugins: [],
};
