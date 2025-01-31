import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-oswald)", "sans"],
        body: ["var(--font-merriweather)", "serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        buttons: "var(--color-buttons)",
        typography: "var(--color-typography)",
        typographySecondary: "var(--color-typography-secondary)",
        accent: "var(--color-accent)",
        backgroundColor: "var(--color-background)",
        buttonText: "var(--color-button-text)",
      },
    },
  },
  plugins: [],
} satisfies Config;
