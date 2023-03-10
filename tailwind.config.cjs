/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'roboto' : 'Roboto , sans-serif',
        'exo' : 'Exo 2 , sans-serif',
        'lob' : 'Lobster, cursive',
        'osv' : 'Oswald, sans-serif',
        'mork' : 'Marck Script, cursive',
        'cov' : 'Caveat, cursive'
      },
    },
  },
  plugins: [],
}
