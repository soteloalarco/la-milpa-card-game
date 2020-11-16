const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        extend: {},
        colors: {
            ...defaultTheme.colors,
            primary: "#f1f1e8",
            dark: "#0e0e10",
            darkFont: "rgb(239, 239, 241)",
            verde0: "#206a5d",
            verde1: "#81b214",
            verde2: "#bfdcae"
        },
    },
    variants: {},
    plugins: [],
};
