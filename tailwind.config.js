export default {

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {

    extend: {

      colors: {

        ivory: {

          DEFAULT: '#F4F1EA',

          50: '#FBF9F4',

          100: '#F4F1EA',

          200: '#EAE5D8',

          300: '#DCD4C0',

        },

        bone: '#F4F1EA',

        obsidian: {

          DEFAULT: '#121412',

          50: '#1F221F',

          100: '#161816',

          200: '#1F221F',

          300: '#191C19',

          400: '#0D0E0D',

        },

        espresso: {

          DEFAULT: '#26251F',

          50: '#6E6A5E',

          100: '#4E4B41',

          200: '#37352D',

          300: '#26251F',

          400: '#1B1A15',

        },

        plum: {

          DEFAULT: '#3A382E',

          50: '#8B867A',

          100: '#6B675C',

          200: '#504D43',

          300: '#3A382E',

          400: '#2C2B22',

          500: '#222119',

          600: '#171611',

        },

        mauve: {

          DEFAULT: '#A79D8B',

          light: '#CFC7B8',

          dark: '#857B6A',

        },

        brass: {

          DEFAULT: '#8A9A7E',

          light: '#A9B79E',

          dark: '#66755C',

        },

        sage: {

          DEFAULT: '#8A9A7E',

          light: '#C3CDB8',

          dark: '#66755C',

        },

        champagne: {

          DEFAULT: '#B89B72',

          light: '#D2BB98',

          dark: '#96784F',

        },

      },

      fontFamily: {

        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],

        sans: ['Inter', 'system-ui', 'sans-serif'],

        mono: ['Inter', 'system-ui', 'sans-serif'],

      },

      letterSpacing: {

        'wide-2': '0.15em',

        'wide-3': '0.22em',

        'wide-4': '0.32em',

      },

      animation: {

        'fade-up': 'fadeUp 0.8s ease-out forwards',

        'fade-in': 'fadeIn 1s ease-out forwards',

        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',

        marquee: 'marquee 30s linear infinite',

        float: 'floatY 7s ease-in-out infinite',

        'float-slow': 'floatY 11s ease-in-out infinite',

      },

      keyframes: {

        fadeUp: {

          '0%': { opacity: '0', transform: 'translateY(30px)' },

          '100%': { opacity: '1', transform: 'translateY(0)' },

        },

        fadeIn: {

          '0%': { opacity: '0' },

          '100%': { opacity: '1' },

        },

        slowZoom: {

          '0%': { transform: 'scale(1)' },

          '100%': { transform: 'scale(1.06)' },

        },

        marquee: {

          '0%': { transform: 'translateX(0)' },

          '100%': { transform: 'translateX(-50%)' },

        },

        floatY: {

          '0%, 100%': { transform: 'translateY(0) rotate(var(--float-r, 0deg))' },

          '50%': { transform: 'translateY(-16px) rotate(var(--float-r, 0deg))' },

        },

      },

    },

  },

  plugins: [],

};
