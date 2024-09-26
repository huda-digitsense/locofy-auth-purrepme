/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#333",
        dodgerblue: "#4086f4",
        "dark-gray": "#303034",
        "gray-secondary": "#727272",
        navy: "#011b48",
        gray: "#777a7d",
        "black-primary": "#161818",
        "vivid-orange": "#f7931a",
        chocolate: "#ff8e3c",
        "green-pastel": "#baffc9",
        "success-main": "#2e7d32",
        green: "#1aaa55",
        red: "#ff5261",
        black1: "#000",
      },
      spacing: {},
      fontFamily: {
        text: "'Open Sans'",
        h3: "Raleway",
        "text-content-regular": "Verdana",
        poppins: "Poppins",
        "button-small": "Roboto",
      },
      borderRadius: {
        "11xl": "30px",
        "3xs": "10px",
        "81xl": "100px",
        number: "16px",
        "number-2": "8px",
        borderradius: "4px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      "6xl": "25px",
      xl: "20px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      smi: "13px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
