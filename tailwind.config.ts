import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        moveWave: 'moveWave 5s ease-in-out infinite',
      },
      keyframes: {
        moveWave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'custom': '0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
