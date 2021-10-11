module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      width: {
        76: '19rem',
        112: '28rem',
        128: '36rem',
      },
      minHeight: {
        'min': 'min-content',
      },
      maxHeight: {
        18: '4.5rem',
        112: '28rem',
      },
      spacing: {
        22: '5.5rem',
      },
      borderWidth: {
        '3': '3px',
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
        accent: {
          DEFAULT: '#eb7171',
          dark: '#e24951',
        },
        overlay: '#00000032',
        'white-50': '#ffffff32',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
}
