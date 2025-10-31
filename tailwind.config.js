 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
    screens: {
      'xs': '375px', 
            'ph': '480px', 
            'sm': '640px', 
            'md': '768px', 
            'lg': '1024px',
            'xl': '1280px',
            'dt': '1440px',
            '2xl': '1536px',
            '3xl': '1920px',
    },
   },
   plugins: [],
 }