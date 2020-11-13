const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        extend: {},
        colors: {
            ...defaultTheme.colors,
            primary: "#f1f1e8",
            dark: "#0e0e10",
            darkFont: "rgb(239, 239, 241)",
        },
    },
    variants: {},
    plugins: [],
};
