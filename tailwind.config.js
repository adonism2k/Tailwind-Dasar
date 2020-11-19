module.exports = {
  purge: [
    './resource/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'phone': "400px",
      //  => @media (min-width: 400px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
