/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#334155',
      },
    },
  },
  plugins: [],
}

