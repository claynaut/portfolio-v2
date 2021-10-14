module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
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
      maxHeight: {
        600: '150rem',
      },
      spacing: {
        22: '5.5rem',
      },
      borderWidth: {
        '1': '1px',
      },
      boxShadow: {
        light: '0 4px 12px 0 rgba(0, 0, 0, 0.4)',
        dark: '0 4px 12px 0 rgba(0, 0, 0, 0.6)',
      },
      colors: {
        primary: {
          DEFAULT: '#f2f2f2',
          dark: '#1f2026',
        },
        text: {
          primary: {
            DEFAULT: '#424248',
            dark: '#b9bdc7',
          },
          secondary: {
            DEFAULT: '#000',
            dark: '#fff',
          },
          active: {
            DEFAULT: '#fff',
            dark: '#1f2026',
          },
        },
        accent: {
          DEFAULT: '#eb7171',
          dark: '#e24951',
        },
        nav: {
          DEFAULT: '#f2f2f2d7',
          dark: '#1f2026c7',
          accent: {
            DEFAULT: '#e4e4e4d7',
            dark: '#18181dc7',
          },
          button: {
            DEFAULT: '#cfcfd0',
            dark: '#11111a',
          },
        },
        border: {
          DEFAULT: '#d7dadd',
          dark: '#121318'
        },
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
