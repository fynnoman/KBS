import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#F5F6F8",
          100: "#EBECF0",
          200: "#D6D9E0",
          300: "#B1B6C0",
          400: "#7A8290",
          500: "#4B5563",
          600: "#2E3540",
          700: "#1E232C",
          800: "#141821",
          900: "#0A0D14"
        },
        accent: {
          50: "#F1FAEC",
          100: "#DEF3D2",
          200: "#BEE6A6",
          300: "#94D373",
          400: "#74C851",
          500: "#58C038",
          600: "#469B2C",
          700: "#377A24",
          800: "#2C601D",
          900: "#234C18"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      },
      backdropBlur: {
        xs: "6px",
        "3xl": "48px"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,25,35,0.04), 0 8px 30px -12px rgba(20,25,35,0.10)",
        card: "0 1px 2px rgba(20,25,35,0.04), 0 20px 60px -28px rgba(20,25,35,0.18)",
        lift: "0 30px 80px -30px rgba(20,25,35,0.24)",
        glass:
          "0 10px 30px -18px rgba(20,25,35,0.28), inset 0 1px 0 rgba(255,255,255,0.9)"
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem"
      }
    }
  },
  plugins: []
};

export default config;
