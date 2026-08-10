/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "cod-gray": "#1c1b1b",
        kabul: "#594139",
        ebb: "#e5e2e1",
        "burning-orange": "#ff6b35",
        "cavern-pink": "#e1bfb5",
        fire: "#ab3500",
        "global-sand": "#f5f5f5",
        "vista-white": "#fcf9f8",
      },
    },
  },
  plugins: [],
};
