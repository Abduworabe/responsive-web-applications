/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // slate-200
        input: "var(--color-input)", // slate-200
        ring: "var(--color-ring)", // blue-600
        background: "var(--color-background)", // slate-50
        foreground: "var(--color-foreground)", // gray-800
        primary: {
          DEFAULT: "var(--color-primary)", // blue-600
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // blue-800
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-500
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // slate-100
          foreground: "var(--color-muted-foreground)", // slate-500
        },
        accent: {
          DEFAULT: "var(--color-accent)", // amber-500
          foreground: "var(--color-accent-foreground)", // gray-800
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-800
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-800
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-500
          foreground: "var(--color-warning-foreground)", // gray-800
        },
        error: {
          DEFAULT: "var(--color-error)", // red-500
          foreground: "var(--color-error-foreground)", // white
        },
        civic: {
          blue: "var(--color-civic-blue)", // blue-600
          deep: "var(--color-deep-civic)", // blue-800
          orange: "var(--color-community-orange)", // orange-600
          white: "var(--color-civic-white)", // slate-50
          charcoal: "var(--color-civic-charcoal)", // slate-800
          gray: "var(--color-civic-gray)", // slate-500
          red: "var(--color-action-red)", // red-600
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)", // 0.75rem
        md: "var(--radius)", // 0.5rem
        sm: "calc(var(--radius) - 4px)",
        card: "var(--radius-card)", // 0.75rem
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "civic-xs": ["0.75rem", { lineHeight: "1rem" }],
        "civic-sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "civic-base": ["1rem", { lineHeight: "1.5rem" }],
        "civic-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "civic-xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "civic-2xl": ["1.5rem", { lineHeight: "2rem" }],
        "civic-3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "civic-4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "civic-5xl": ["3rem", { lineHeight: "1.2" }],
      },
      spacing: {
        "civic-xs": "0.5rem", // 8px
        "civic-sm": "1rem", // 16px
        "civic-md": "1.5rem", // 24px
        "civic-lg": "2rem", // 32px
        "civic-xl": "3rem", // 48px
        "civic-2xl": "4rem", // 64px
      },
      boxShadow: {
        "civic-sm": "0 4px 16px rgba(37, 99, 235, 0.08)",
        "civic-md": "0 8px 32px rgba(37, 99, 235, 0.12)",
        "civic-lg": "0 12px 48px rgba(37, 99, 235, 0.16)",
        "civic-glow": "0 0 20px rgba(37, 99, 235, 0.3)",
      },
      keyframes: {
        "civic-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "progress-ring": {
          from: { strokeDasharray: "0 100" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "civic-pulse": "civic-pulse 3s ease-in-out infinite",
        "progress-ring": "progress-ring 1.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
      },
      transitionTimingFunction: {
        civic: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "civic-fast": "200ms",
        "civic-normal": "300ms",
        "civic-slow": "500ms",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
