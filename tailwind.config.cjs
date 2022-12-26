module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#212121',
          background: 'white',
          nav: 'white',
          link: '#fa826b',
        },
        dark: {
          text: '#e0dfe4',
          background: '#1d1d1d',
          nav: '#2a2a2a',
          link: '#fa826b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: 'class',
}
