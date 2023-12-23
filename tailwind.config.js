/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './layouts/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        'sp': {'max': '300px'}, 
        'pm': {'max': '370px'}, 
        'bt': {'max': '540px'}, 
        'sm': {'max': '640px'}, 
        'md': { 'max': '768px'}, 
        'sr': { 'max': '1000px'},
        'lg': { 'max': '1024px'}, 
        'slg': { 'max': '1100px'}, 
        'xl': { 'max': '1200px'},
        'xxl': { 'max': '1350px'}
      },
    },
  },
  plugins: [],
}