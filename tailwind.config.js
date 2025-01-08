/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				mainBox:
					'0px 1px 4px rgba(0, 0, 0, 0.3), 0px 0px 40px rgba(0, 0, 0, 0.1) inset',
			},
		},
	},
	plugins: [],
};
