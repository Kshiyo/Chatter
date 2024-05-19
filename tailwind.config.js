/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto' : ['Roboto'],
     },
      colors: {
        'button': '#5e548e',
      },
     keyframes: {
      'zoom-in-out': {
        "0%": {
          transform: "scale(1)" ,
        },
        "50%": {
          transform: "scale(1.05)" ,
        },
        "100%": {
          transform: "scale(1)" ,
        }
      },
      'appear': {
        "0%": {
           opacity: "0",
        },
        "100%": {
           opacity: "1",
        }
      },
      'message1': {
        '30%': {
          transform: "translateX(-95px)",
        },
        '34%': { opacity: "0.7"
                },
        '38%':{
          opacity: "0.7"
        } ,       
        '40%': {
            opacity: "0"
        }
      },
      'message2': {
        '30%': {
          transform: "translateX(220px)",
        },
        '34%': { opacity: "0.7"
                },
        '38%':{
          opacity: "0.7"
        } ,       
        '40%': {
            opacity: "0"
        }
      }
     },
     animation: {
      'zoom-in-out' : 'zoom-in-out 10s linear infinite',
      'appear' : 'appear 1900ms',
      'message1': 'message1 6s linear infinite',
      'message2': 'message2 6s linear infinite'
     },
    },
  },
  plugins: [],
}

