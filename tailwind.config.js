/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        myBlack: '#09131C',
        myBlack2: '#081018',
        myWhite: '#F5F5F5',
        myBlue1: '#6BE7F1',
      }
    },
  },
  plugins: [],
}
