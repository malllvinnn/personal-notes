/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#213555", // Warna utama untuk background
        secondary: "#3E5879",  // Warna elemen sekunder
        accent: "#D8C4B6",     // Warna aksen
        light: "#F5EFE7",      // Warna elemen terang
      }
    },
  },
  plugins: [],
}

