/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('./assets/bg.png')",
        "profile": "url('./assets/profile_orange.jpg')",
      },
      colors:{
      "accent": "#FF5733"}
    },
  },
  plugins: [],
}