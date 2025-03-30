/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/routes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':'475px',
        'sm': '575px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1140px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'text-gradient': 'linear-gradient(to bottom, #ffffff 17%, rgba(255, 255, 255, 0.5) 19%, rgba(255, 255, 255, 0.15) 100%)',
          'text-gradient-2': 'linear-gradient(to bottom, #000000 17%, rgba(0, 0, 0, 0.5) 19%, rgba(0, 0, 0, 0.15) 100%)',
      },
      fontFamily: {
        'primaryFont': ['Inter'],
        'secondaryFont': ['Nico Moji'],
      },
      container: {
        center: true,
        screens: {
          'xs': '475px',
          'sm': '575px',
          // => @media (min-width: 575px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1140px',
        },
        padding: {
          DEFAULT: '1rem',
          'md': '1.563rem',
          'lg': '1.25rem',
          'xl': '0.75rem',
        },
      },
      colors: {
        'akhil-black': {
          100: '#101010',
          200: '#403D3D',
          300: '#1B1919',
          400: '#403D3D',
          500: '#333333',
        },
        'akhil-white': {
          100: '#fff',
          200: '#f2f2f2'
        },
        'akhil-blue': {
          100: '#2196F3',
          200: '#0D6EFD'
        },
      },

      // fontSize: {
      //   'size-10': '0.625rem',
      //   'size-12': '0.75rem',
      //   'size-14': '0.875rem',
      //   'size-16': '1rem',
      //   'size-18': '1.125rem',
      //   'size-20': '1.25rem',
      //   'size-22': '1.375rem',
      //   'size-24': '1.5rem',
      //   'size-26': '1.625rem',
      //   'size-28': '1.75rem',
      //   'size-30': '1.875rem',
      //   'size-32': '2rem',
      //   'size-34': '2.125rem',
      //   'size-36': '2.25rem',
      //   'size-38': '2.375rem',
      //   'size-40': '2.5rem',
      //   'size-42': '2.625rem',
      //   'size-44': '2.75rem',
      //   'size-46': '2.875rem',
      //   'size-48': '3rem',
      //   'size-50': '3.125rem',
      //   'size-52': '3.25rem',
      //   'size-54': '3.375rem',
      //   'size-56': '3.5rem',
      //   'size-58': '3.625rem',
      //   'size-60': '3.75rem'
      // },
      boxShadow: {
        '1': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        '2': '0 2px 4px 0 rgba(199, 205, 214, .2)'
      }
    },

  },
  plugins: [],
};
