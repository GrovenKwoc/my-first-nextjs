import { publicDecrypt } from 'crypto';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      animation: {
        none: 'none',
        spin: 'spin 2s linear infinite',
        spin_ease: 'spin 2s ease infinite',
        spin_reverse_ease: 'spin_reverse 2s ease-in-out infinite',
        spin_ease_in_out: 'spin 2s ease-in-out infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      spin:{
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      },
      spin_reverse:{
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(-360deg)' }
      },
      ping:{
        '75%, 100%': { transform:'scale(1.5)', opacity: '0' },
      },
      pulse:{
        '0%': { transform:'scale(1)', opacity: '1' },
        '50%': { transform:'scale(1.1)', opacity: '0.5' },
        '100%': { transform:'scale(1)', opacity: '1' },
      },
      bounce:{
        '0%, 100%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'},
        '50%':{transform: 'translateY(0)','animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'},
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({strategy: 'class'})],
};
export default config;
