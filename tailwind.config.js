/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-georgia)"],
        elegante: "var(--font-elegante)",
        georgia: "var(--font-georgia)"
      },
      colors: {
        // "dark-purple": "#522888",
        // "purple": "#66369D",
        // "mid-purple": "#967BB6",
        // "light-purple": "#CDC7D9",
        // "light-gold": "#BF9553",
        // "gold": "#B97F24"
        purple: "#F2E2FC",
        periwinkle: "#B7B0EB",
        lavender: "#CD84ED",
        purpureus: "#9C49BD",
        glaucous: "#6679B3"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
