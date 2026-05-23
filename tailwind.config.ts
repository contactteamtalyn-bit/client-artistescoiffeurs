import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lait: '#FAF8F4',
        noir: {
          DEFAULT: '#1A1A18',
          profond: '#0F0F0E',
        },
        pierre: '#8C8882',
        or: {
          DEFAULT: '#A78D4A',
          clair: '#CAB77F',
        },
        sable: '#E8E2D8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'spin-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'blob-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.06) rotate(8deg)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.96) rotate(-6deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 22s linear infinite',
        'blob-float': 'blob-float 16s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
