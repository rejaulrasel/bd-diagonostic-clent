/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],

  daisyui: {
    colours: [
      {
        colour: {
          primary: " #0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",

        }
      }
    ]
  },

  theme: {
    extend: {
      backgroundImage: {
        'banner' : "url('/src/assets/images/bg.png')",
        'makeAppointment' : "url('/src/assets/images/appointment.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}
