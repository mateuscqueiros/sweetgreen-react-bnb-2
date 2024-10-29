/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'content-width': '80rem',
      },
      colors: {
        'main-background': 'rgb(244, 243, 233)',
        button: '#eefc7e',
        card: '#e4dcc9',
        'header-text': '#2b473e',
        'faded-text': '#96958c',
      },
    },
  },
  plugins: [],
};
