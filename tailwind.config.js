module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: '', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      profile: 'var(--profile)',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: 'var(--primary)',
        highlight: 'var(--primary-highlight)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        light: 'var(--secondary-light)',
        mute: 'var(--secondary-mute)',
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
      },
    },
    extend: {
      screens: {
        xs: '420px',
      },
      transitionProperty: {
        size: 'width, max-width, height, max-height',
        spacing: 'margin, padding',
      },
    },
  },
  variants: {},
  plugins: [],
}
