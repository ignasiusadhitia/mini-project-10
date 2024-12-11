/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Saira', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#23262F',
        white: '#ffffff',
        gray: '#EAEEF3',
        'light-silver': '#D9D9D9',
        purple: '#6D5DD3',
        green: '#286F6C',
      },
    },
  },
  plugins: [],
};
