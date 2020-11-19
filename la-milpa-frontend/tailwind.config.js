const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        extend: {},
        colors: {
            ...defaultTheme.colors,
            primary: "#cdb30c",
            dark: "#0e0e10",
            darkFont: "rgb(239, 239, 241)",
            amber: {
                DEFAULT: "#cdb30c"},
        },
    },
    variants: {},
    plugins: [],
};
