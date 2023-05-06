/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#010725',
        midnightblue: '#010d50',
        white: '#fff',
        gray: {
          100: '#1a203b',
          200: 'rgba(255, 255, 255, 0.4)',
          300: 'rgba(255, 255, 255, 0.1)',
          400: 'rgba(255, 255, 255, 0.3)',
        },
        blue: '#0328ee',
        darkgray: '#a2a2a2',
        ghostwhite: 'rgba(241, 241, 249, 0.3)',
      },
      borderRadius: {
        '21xl': '40px',
        '11xl': '30px',
        '981xl': '1000px',
        '61xl': '80px',
        sm: '14px',
        smi: '13px',
        xl: '20px',
      },
    },
    fontSize: {
      base: '16px',
      sm: '14px',
      lg: '18px',
      '23xl': '42px',
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
