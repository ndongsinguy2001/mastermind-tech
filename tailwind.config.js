/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon': '#A8FF00',
        'dark-bg': '#050505',
        'dark-card': '#0A0A0A',
        'dark-elevated': '#141414',
        'metal-grey': '#2A2A2A',
        'text-muted': '#A0A0A0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(168, 255, 0, 0.3)',
        'neon-glow-strong': '0 0 40px rgba(168, 255, 0, 0.5)',
        'neon-glow-subtle': '0 0 15px rgba(168, 255, 0, 0.15)',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(168, 255, 0, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168, 255, 0, 0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mastermind: {
          "primary": "#A8FF00",
          "primary-content": "#050505",
          "secondary": "#2A2A2A",
          "secondary-content": "#FFFFFF",
          "accent": "#A8FF00",
          "accent-content": "#050505",
          "neutral": "#141414",
          "neutral-content": "#A0A0A0",
          "base-100": "#050505",
          "base-200": "#0A0A0A",
          "base-300": "#141414",
          "base-content": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
    darkTheme: "mastermind",
    logs: false,
  },
}