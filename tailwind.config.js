/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 20px #e9d022, -2px -2px 20px #e60b09',
      },
      backgroundImage: {
        'gradient-to-r-yellow-orange-red': 'linear-gradient(to right, #D97706, #EA580C, #DC2626)',
      },
    },
  },                 
  plugins: [],
}
