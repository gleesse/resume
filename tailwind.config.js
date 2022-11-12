module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sand-pattern': "url('./images/SandPattern.png')",
      }),
      colors: {
        primary: '',
        secondary: {
          100: '#34D399',
          200: '#059669'
        }
      },
      fontFamily: {
        josefin: ['Josefin Sans'],
        roboto: ['Roboto']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
