/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
        'prots': ['Protest Guerrilla', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'pacifi': ['Pacifico', 'sans-serif'],

        },
    },
  },
  plugins: [],
}