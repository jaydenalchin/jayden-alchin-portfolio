/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#FA5F71', 
        secondary: '#FFDEDE', 
        tertiary: '#B5EFE1', 
      }
    },
  },
  plugins: [],
}

