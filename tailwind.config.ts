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
        background: "#FBFBFB",
        foreground: "#000000",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-libre-baskerville)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "Consolas", "monospace"],
      },
      animation: {
        float: "float 2s ease-in-out infinite",
        shake: "shake 2s ease-in-out infinite",
        "pop-in": "popIn 0.4s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shake: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "55%, 65%, 75%": { transform: "rotate(-5deg)" },
          "60%, 70%, 80%": { transform: "rotate(5deg)" },
          "85%": { transform: "rotate(0deg)" },
        },
        popIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "70%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
