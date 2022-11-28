/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-bg': '#212427',
        'dark-text': '#FFFFFF', 
        'dark-select': '#D8CBBB',
        'day-bg': '#FFF5EC', 
        'day-text': '#212427',
        'day-select': '#8D806F',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'r': 'Euclid Circular A Regular',
      'bl': 'Euclid Circular A Black',
      'l': 'Euclid Circular A Light',
    },
    fontSize: {
      'big': '20rem',
    }

  },
  plugins: [],
}
}
