module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: '', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      profile: 'var(--profile)',
      pattern: 'var(--pattern)',
    },
    colors: {
      primary: 'var(--primary)',
      text: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        active: 'var(--text-active)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        dark: 'var(--accent-dark)',
        darkest: 'var(--accent-darkest)',
      },
      nav: {
        accent: 'var(--nav-accent)',
        button: 'var(--nav-button)',
      },
      border: 'var(--border)',
    },
    extend: {
      boxShadow: {
        shadow: 'var(--shadow)',
      },
      transitionProperty: {
        'height': 'height, max-height',
       },
    },
  },
  variants: {},
  plugins: [],
}
