import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#9333EA',
          'purple-dark': '#7C3AED',
          'purple-light': '#A78BFA',
          violet: '#8B3DFF',
        },
        dark: {
          bg: '#0b0b0d',
          surface: '#151517',
          card: '#1e1e1e',
          'card-hover': '#252528',
        },
        google: {
          DEFAULT: '#8B3DFF',
          hover: '#7A2EE6',
        },
        microsoft: {
          DEFAULT: '#4A4A4A',
          hover: '#555555',
        },
        accent: {
          start: '#3b82f6',
          mid: '#6366f1',
          end: '#8b5cf6',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 61, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 61, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 61, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(139, 61, 255, 0.4)',
        'glow-xl': '0 0 60px rgba(139, 61, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config

