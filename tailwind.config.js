/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind where to look for class names
  ],// Make sure this line is correct for your setup
  theme: {
    extend: {
      colors: {
        yellow: '#FFE600',
        creame:'#C2B7BC',
        off:'#FBFBFB',
        lcreame:'#FFFDE7'
      },
  
    },
  },
  plugins: [],
};
