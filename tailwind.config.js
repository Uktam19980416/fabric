/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #31384d 9%, #616884 50%)',
        'custom-gradient-2': 'linear-gradient(0deg,#2e2549 9%,#625686 50%)',
        'custom-gradient-3': 'linear-gradient(0deg,#224f4d 9%,#307e7a 50%)',
      },
      boxShadow: {
        'custom-lg':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-hover':
          '0 15px 20px -5px rgba(255, 0, 0, 0.3), 0 8px 10px -4px rgba(255, 0, 0, 0.2)',
      },
    },
    screens: {
      smallest: '320px',
      iphone: '500px',
      sm: '640px',
      md: '768px',
      forSofaOnly: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
