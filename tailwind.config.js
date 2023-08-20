/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        laptop: { max: "1536px" },
        tablet: { max: "1024px" },
        mobile: { max: "640px" },
        small: { max: "320px" },
      }
    },
  },
  plugins: [],
}

