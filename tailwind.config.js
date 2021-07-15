module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'sans': ['Metropolis', 'Helvetica', 'Arial', 'sans-serif'],
		},
		extend: {
			height: theme => ({
			}),

			screens: {
				'portrait': {'raw': '(orientation: portrait)'},
				'landscape': {'raw': '(orientation: landscape)'},
				// => @media (orientation: portrait) { ... }
			}
		},
	},
	variants: {
		extend: {
				
		},
	},
	plugins: [],
}
