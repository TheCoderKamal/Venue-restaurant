/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'xs': '575px',
        'm': '768px',
        'xmd': '992px',
        'x': '1200px',
      },
    },
  },
  plugins: [],
}

