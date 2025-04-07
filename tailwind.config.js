/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        ...defaultTheme.maxWidth, // Spread default maxWidth values
        sm: "560px", // Full width on small screens
        md: "800px", // Custom width for medium screens
        lg: "1024px", // Custom width for large screens
        xl: "1280px", // Custom width for extra-large screens
        "2xl": "1460px", // Add a custom maxWidth value
      },
      container: {
        screens: {
          sm: "560px", // Full width on small screens
          md: "800px", // Custom width for medium screens
          lg: "1024px", // Custom width for large screens
          xl: "1280px", // Custom width for extra-large screens
          "2xl": "1460px",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        allura: ["var(--font-allura)"],
        inter: ["var(--font-inter)"],
        dm_mono: ["var(--font-dm-mono)"],
        noto_sans: ["var(--font-noto-sans)"],
        ibm_plex_mono: ["var(--font-ibm-plex-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        textColor: {
          DEFAULT: "var(--primary-text)",
          origin: "var(--origin-text)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
