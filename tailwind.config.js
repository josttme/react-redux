/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#000021'
				},
				blue: {
					primary: '#00388f',
					secondary: '#0080ff'
				},
				red: {
					heart: '#ff234e'
				},
				'text-color': '#eae8e5'
			},
			gridTemplateColumns: {
				card: 'repeat(auto-fit, minmax(300px, 320px))'
			}
		}
	},
	plugins: []
}
