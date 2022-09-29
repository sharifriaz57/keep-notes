/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkColor': '#202124',
        'lightColor': '#fff',
        'dark-opacity-1': 'rgba(232,234,237,.08)',
        'dark-opacity-2': 'rgba(241,243,244,.24)'
      },
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
