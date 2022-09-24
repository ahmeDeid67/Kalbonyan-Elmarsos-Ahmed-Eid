module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily: {
      'display': ['GT Walsheim Pro'],
      'body': ['TT Hoves'],
    },
    extend: {
      colors: {
        'light-green': '#F1F6FA',
        'graphite': '#1E1E21',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
