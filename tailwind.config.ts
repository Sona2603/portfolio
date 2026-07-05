import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#09090b',
        graphite: '#111114',
        glass: 'rgba(255,255,255,0.08)',
        mint: '#48f5b4',
        coral: '#ff7a66',
        iris: '#8b5cf6',
        skyglass: '#7dd3fc',
      },
      boxShadow: {
        glow: '0 0 45px rgba(72,245,180,0.18)',
        coral: '0 22px 60px rgba(255,122,102,0.14)',
      },
      backgroundImage: {
        'radial-field':
          'radial-gradient(circle at 20% 15%, rgba(72,245,180,0.18), transparent 28%), radial-gradient(circle at 80% 10%, rgba(255,122,102,0.14), transparent 24%), radial-gradient(circle at 50% 90%, rgba(125,211,252,0.12), transparent 30%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
