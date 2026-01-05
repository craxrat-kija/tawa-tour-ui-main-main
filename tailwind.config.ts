import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Safari Theme Colors
        jungle: {
          DEFAULT: "hsl(var(--jungle))",
          light: "hsl(var(--jungle-light))",
          dark: "hsl(var(--jungle-dark))",
        },
        earth: {
          DEFAULT: "hsl(var(--earth))",
          light: "hsl(var(--earth-light))",
        },
        "jungle-yellow": {
          DEFAULT: "hsl(var(--jungle-yellow))",
          light: "hsl(var(--jungle-yellow-light))",
        },
        "jungle-teal": {
          DEFAULT: "hsl(var(--jungle-teal))",
          light: "hsl(var(--jungle-teal-light))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          dark: "hsl(var(--cream-dark))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "shine-rotate": {
          "0%": { transform: "rotate(0deg) translateX(-50%) translateY(-50%)" },
          "100%": { transform: "rotate(360deg) translateX(-50%) translateY(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-10px)" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "scale-pulse": "scale-pulse 4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        shine: "shine 3s ease-in-out infinite",
        "shine-rotate": "shine-rotate 20s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 15s ease infinite",
      },
      backgroundImage: {
        "gradient-jungle": "var(--gradient-jungle)",
        "gradient-safari": "var(--gradient-safari)",
        "gradient-gold": "var(--gradient-gold)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-shine": "var(--gradient-shine)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        glow: "var(--shadow-glow)",
        "gold-glow": "var(--shadow-gold-glow)",
      },
      backgroundImage: {
        "gradient-jungle": "var(--gradient-jungle)",
        "gradient-safari": "var(--gradient-safari)",
        "gradient-gold": "var(--gradient-gold)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-shine": "var(--gradient-shine)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
