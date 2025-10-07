// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#EE4D2D",
          primaryDark: "#D8431F",
          accent: "#FFD9CF",
          accentSoft: "#FFF4F0",
        },
      },
    },
  },
  plugins: [],
};
