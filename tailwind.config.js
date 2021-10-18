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
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      width: {
        17: '4.25rem',
        240: '60rem',
      },
      height: {
        'nav': '3.75rem',
        'nav-open': '21rem',
      },
      boxShadow: {
        shadow: 'var(--shadow)',
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
       },
    },
  },
  variants: {},
  plugins: [],
}
