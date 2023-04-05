/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
}
