/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0F172A",
        secondaryBg: "#111827",
        accent: "#3B82F6",
        highlight: "#22C55E",
        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",
        btn: "#BBCB2E",
        aboutBg: "#EEF5D9",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
        heading: ["Inter", "Poppins", "system-ui", "sans-serif"],
        mono: ["Fira Code", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

