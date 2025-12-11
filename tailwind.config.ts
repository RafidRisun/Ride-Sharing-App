/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // Enable dark mode
	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '1024px',
			},
			fontFamily: {
				sfpro: ['sfpro'],
				sfpromedium: ['sfpromedium'],
				sfprobold: ['sfprobold'],
				poppins: ['Poppins'],
			},
			colors: {
				yellow: '#ffcc00',
				'yellow-50': '#fffae6',
				'yellow-100': '#ffefb0',
				'yellow-200': '#ffe88a',
				'yellow-300': '#ffdd54',
				'yellow-400': '#ffd633',
				'yellow-500': '#ffcc00',
				'yellow-600': '#e8ba00',
				'yellow-700': '#b59100',
				'yellow-800': '#8c7000',
				'yellow-900': '#6b5600',
				green: '#28A745',
				'green-50': '#eaf6ec',
				'green-100': '#bce4c5',
				'green-200': '#9cd7a9',
				'green-300': '#6fc482',
				'green-400': '#53b96a',
				'green-500': '#28a745',
				'green-600': '#24983f',
				'green-700': '#1c7731',
				'green-800': '#165c26',
				'green-900': '#11461d',
			},
		},
	},
	plugins: [],
};
