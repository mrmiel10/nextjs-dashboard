import type { Config } from 'tailwindcss';

const config: Config = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // container:{
    //   screens:{
    //     "s-352":"352px",
    //   }
    // },

    extend: {
       screens:{
        xs:"384px",
       },
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
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      "spin":{
        to:{
          transform: "rotate(360deg)",
        }
      }
    },
    animation:{
      "shimmer": "shimmer 2s infinite",
      "spin": "spin 1s linear infinite",
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
