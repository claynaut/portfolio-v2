
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: '', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      profile: 'var(--profile)',
    },
    colors: {
      'transparent': 'transparent',
      primary: {
        DEFAULT: 'var(--primary)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        light: 'var(--secondary-light)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        light: 'var(--accent-light)',
        lighter: 'var(--accent-lighter)',
        lightest: 'var(--accent-lightest)',
        mute: 'var(--accent-mute)',
        text: 'var(--accent-text)',
      },
      highlight: {
        DEFAULT: 'var(--highlight)',
      }
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