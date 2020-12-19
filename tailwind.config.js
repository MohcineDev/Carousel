module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: ['./index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        slide: 'repeat(6, 100%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
