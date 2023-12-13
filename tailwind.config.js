/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-light": "#3E6E70",
        "dark-med": "#295556",
        "dark-high": "#194244",
        "dark-most": "#0D3638",
        "bright-light": "#E8C5C0",
        "bright-med": "#D5AFAA",
        "bright-high": "#B98F8A",
        "bright-most": "#9D706B",
      },
    },
  },
  plugins: [],
};
