/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
      },
      fontSize: {
        xsCustom: '12.28px',
      },
    },
  },
  plugins: [],
}
