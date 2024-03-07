/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:["Montserrat Alternates", "sans-serif"],
        new:["Playfair Display"],
        tilt_prism:["Tilt Prism", "sans-serif"],
        josefin:["Josefin Sans", "sans-serif"],
        poppins:[ "Poppins", "sans-serif"],
        orbitron:["Orbitron", "sans-serif"],
        lobster:["Lobster", "sans-serif"],
        rancho:["Rancho", "cursive"],
        rock_salt:["Rock Salt", "cursive"],
        sail:["Sail", "system-ui"],
        kaushan:["Kaushan Script", "cursive"]
      },
      colors:{
        light_dark:["#2d283e","#802bb1","#6e22a3"],
        white_new:["#d1d7e0"],
        green_new:["#1f2605","#1f6521","#53900f"],
        yellow_new:["#a4a71e","#d6ce15"],
        whatsapp_green:["#25D366"],
        gradient_rainbow: ['linear-gradient(45deg, #ff0000, #ffaa00, #ffff00, #00ff00, #0000ff, #aa00ff, #ff00ff)']
        

      },
      dropShadow:{
        'mist':['0 0.8rem 0.8rem rgba(128, 43, 177, 1)'],
        'mist2':['0 1rem 1rem rgba(128, 43, 177, 0.3)'],
        
      },
      boxShadow:{
        'shadow-top':['0 -1rem 10rem rgba(0,0,0,0.5)'],
        'shadow1':['0 35px 60px -15px rgba(0,0,0,0.8)'],
        'shadow2':['-5px -5px rgba(110, 34, 163, 0.8), -10px -10px rgba(110, 34, 163, 0.6), -15px -15px rgba(110, 34, 163, 0.4), -20px -20px rgba(110, 34, 163, 0.2), -25px -25px rgba(110, 34, 163, 0.05)'],
        'shadow3':['-5px 5px 0px 0px rgba(0, 0, 0)'],
        'shadow4':['-10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15)'],
        'shadow5':['1rem 1rem 0 rgba(110, 34, 163, 1)']
      }

    },

  },
  plugins: [],
}

