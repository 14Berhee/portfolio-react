/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        fontFamily: {
          title: ["Rubik-mono-one"],
        },
      },
    },
  },
  plugins: [],
};
