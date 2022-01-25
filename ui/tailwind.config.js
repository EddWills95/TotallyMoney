module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",
  theme: {
    extend: {
      colors: {
        mirage: {
          DEFAULT: "#161925",
          50: "#5A6798",
          100: "#535E8B",
          200: "#444D72",
          300: "#343C58",
          400: "#252A3F",
          500: "#161925",
          600: "#010102",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        "cloud-burst": {
          DEFAULT: "#23395B",
          50: "#6E91C7",
          100: "#6086C2",
          200: "#4570B3",
          300: "#3A5E96",
          400: "#2E4B78",
          500: "#23395B",
          600: "#132032",
          700: "#04060A",
          800: "#000000",
          900: "#000000",
        },
        ming: {
          DEFAULT: "#406E8E",
          50: "#ACC7DA",
          100: "#9EBDD3",
          200: "#82AAC7",
          300: "#6697BA",
          400: "#4D84AA",
          500: "#406E8E",
          600: "#2F5067",
          700: "#1D3241",
          800: "#0C141A",
          900: "#000000",
        },
        nepal: {
          DEFAULT: "#8EA8C3",
          50: "#FFFFFF",
          100: "#F9FAFC",
          200: "#DEE6ED",
          300: "#C3D1DF",
          400: "#A9BDD1",
          500: "#8EA8C3",
          600: "#698CB0",
          700: "#4E7093",
          800: "#3B546E",
          900: "#27384A",
        },
        "humming-bird": {
          DEFAULT: "#CBF7ED",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#EEFCF9",
          500: "#CBF7ED",
          600: "#9AF0DC",
          700: "#6AE8CB",
          800: "#39E1BB",
          900: "#1EC49E",
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
