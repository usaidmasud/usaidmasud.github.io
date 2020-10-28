module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    inset: {
      "1/2": "50%",
      "-16": "-4rem",
      "-20": "-6rem",
      "-24": "-8rem",
    },
    extend: {
      colors: {
        primary: "#171738",
        warning: "#F9E784",
        danger: "#C33C54",
        success: "#09BC8A",
        secondary: "#C5CBD3",
      },
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  variants: {
    inset: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
