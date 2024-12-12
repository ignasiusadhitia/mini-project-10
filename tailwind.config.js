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
        'platinum-transparent': 'rgba(226, 226, 226, 0.4)',
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1240px',
          xl: '1240px',
          '2xl': '1240px',
        },
      },
      padding: {
        7.5: '1.875rem',
      },
      fontSize: {
        '4.5xl': '2.5rem',
        '6.5xl': '4rem',
      },
      spacing: {
        7.5: '1.875rem',
      },
    },
  },
  plugins: [],
};
