
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: '', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        'xs': '420px',
      },
      transitionProperty: {
        'size': 'width, max-width, height, max-height',
       },
    },
  },
  variants: {},
  plugins: [],
}