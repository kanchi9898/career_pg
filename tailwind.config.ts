import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#e53b3a",
        gray: "#C3C1C1",
        primary: "#001C48",
        lightgray:"#e5e7eb"
      },
    },
  },
  plugins: [],
};
export default config;
