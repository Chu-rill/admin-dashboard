/** @type {import('tailwindcss').Config} */
import path from "path";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
