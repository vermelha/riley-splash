module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.8s ease-in forwards",
        fadeInLeft: "fadeInLeft 0.6s ease-in forwards",
        fadeInRight: "fadeInRight 0.4s ease-in forwards",
        fadeInUp: "fadeInUp 0.6s ease-in forwards",
        fadeInDown: "fadeInDown 0.6s ease-in forwards",
        zoomIn: "zoomIn 0.8s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 1,  transform: "translateX(0)" }
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "100%": { opacity: 1,  transform: "translateX(0)" }
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "100%": { opacity: 1,  transform: "translateY(0)" }
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-100px)" },
          "100%": { opacity: 1,  transform: "translateY(0)" }
        },
        zoomIn: {
          "0%": { transform: "scale(1.2, 1.2)" },
          "100%": { transform: "scale(1, 1)" }
        }
      }
    },
    variants: {
      animation: ["motion-safe"]
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F9F3E1',
      'orange':'#D47F24', 
      'dark--blue': '#101D24',
      'beige': '#FFFCF1',
    },
    fontFamily: {
      body: ['Overpass', 'sans-serif'],
      title: ['Fira Sans Condensed', 'sans-serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['20px', '31px'],
      lg: ['20px', '31px'],
      xl: ['26px', '40px'],
      title: ['76px', '77px'],
    },
  },
}