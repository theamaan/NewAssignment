/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkorange: "#f27d15",
        oldlace: "#fff3e3",
        black: "#000",
        steelblue: "#008dd2",
        cornflowerblue: {
          "100": "#64a5eb",
          "200": "rgba(100, 165, 235, 0.5)",
        },
        darkgreen: "#297515",
        lightgreen: "rgba(189, 252, 173, 0.4)",
        gray: "rgba(0, 0, 0, 0.5)",
        dimgray: "#536171",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        inherit: "inherit",
        "princess-sofia": "'Princess Sofia'",
        "montserrat-alternates": "'Montserrat Alternates'",
      },
      borderRadius: {
        xl: "20px",
        "131xl": "150px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      "11xl": "30px",
      xl: "20px",
      "21xl": "40px",
      "31xl": "50px",
      "13xl": "32px",
      sm: "14px",
      "81xl": "100px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
