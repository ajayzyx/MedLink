/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'oakes': ['Oakes Grotesk', 'sans-serif'],
        'sofia': ['Sofia Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
