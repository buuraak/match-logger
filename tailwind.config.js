/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['Courier New', 'Courier', 'monospace'],
      },
      colors: {
        black: '#111729',
        primary: '#3562E3',
        secondary: '#F3F5F9',
      },
    },
  },
  plugins: [],
}
