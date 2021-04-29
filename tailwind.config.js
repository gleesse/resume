module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        
      },
      backgroundImage: theme => ({
        'sand-pattern': "url('./images/SandPattern.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
