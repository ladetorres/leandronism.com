module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    inset: {
      header: "-14px",
    },
    height: {
      o: "0",
      auto: "auto",
      "footer-icon": "32px",
      70: "70px",
      50: "50px",
      32: "32px",
      4: "4px",
      full: "100%",
      screen: "600px",
      test: "1500px",
      chevron: "26px",
      checkbox: "20px",
      "checkbox-sm": "18px",

      "blog-home": "380px",

      blog: "280px",
      "blog-xs": "160px",
      "blog-sm": "200px",
      "blog-md": "240px",

      "blog-page": "360px",
      "blog-page-xs": "260px",
      "blog-page-sm": "290px",
      "blog-page-md": "320px",

      card: "360px",
      "card-md": "340px",
      "card-sm": "320px",
      "card-xs": "300px",

    },
    width: {
      o: "0",
      auto: "auto",
      "footer-icon": "32px",
      full: "100%",
      screen: "350px",
      chevron: "26px",
      checkbox: "20px",
      "checkbox-sm": "18px",

      "blog-home": "520px",
      "blog-home-md": "460px",
      "blog-home-sm": "380px",
      "blog-home-xs": "80%",

      blog: "520px",
      "blog-xs": "100%",
      "blog-sm": "100%",
      "blog-md": "100%",

      "blog-page": "720px",
      "blog-page-xs": "100%",
      "blog-page-sm": "80%",
      "blog-page-md": "70%",

      "blog-content": "560px",
      "blog-content-xs": "80%",
      "blog-content-sm": "58%",
      "blog-content-md": "48%",

      "blog-credits": "120px",
      "blog-credits-md": "100px",

      card: "560px",
      "card-md": "480px",
      "card-sm": "360px",
      "card-xs": "100%",

    },
    margin: {
      "neg-8": "-8px",
      auto: "auto",
      50: "50px",
      40: "40px",
      30: "30px",
      16: "16px",
      6: "6px",
      4: "4px",
    },
    padding: {
      50: "50px",
      40: "40px",
      30: "30px",
      20: "20px",
      16: "16px",
      10: "10px",
      8: "8px",
      4: "4px",
      2: "2px"
    },
    fontSize: {
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
    },
    fontWeight: {
      700: "700",
      600: "600",
      300: "300",
      200: "200"
    },
    fontFamily: {
      noto: ["Noto Sans JP", "Montserrat", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      nanum: ["Nanum Myeongjo", "sans-serif"],
    },
    zIndex: {
      9999: "9999",
      9998: "9998"
    },
    letterSpacing: {
      2: "2px",
      1: "1px"
    },
    colors: {
      white: {
        DEFAULT: "#fff",
        dark: "#808080",
      },
      "off-white": {
        DEFAULT: "#808080",
        dark: "#808080",
      },
      "almost-white": {
        DEFAULT: "#F8F8F8",
        dark: "#808080",
      },
      "not-white": {
        DEFAULT: "#F5F5F5",
        dark: "#808080",
      },
      "not-white-1": {
        DEFAULT: "#D3D3D3",
        dark: "#808080",
      },
      "screen-bg-white": {
        DEFAULT: "#303030",
        dark: "#808080",
      },
      cerulean: {
        DEFAULT: "#9BB7D4",
        dark: "#808080",
      },
      quiet: {
        DEFAULT: "#1B7340",
        dark: "#808080",
      },
      "burnt-coral": {
        DEFAULT: "#E9897E",
        dark: "#808080",
      },
      "french-blue": {
        DEFAULT: "#0072B5",
        dark: "#808080",
      },
      rust: {
        DEFAULT: "#B55A30",
        dark: "#808080",
      },
      marigold: {
        DEFAULT: "#FDAC53",
        dark: "#808080",
      },
      "green-ash": {
        DEFAULT: "#A0DAA9",
        dark: "#808080",
      },
      "brave-ground": {
        DEFAULT: "#F19828",
        dark: "#808080",
      },
      "link": {
        DEFAULT: "#0089c7",
        dark: "#808080",
      },
      "tropical-humid": {
        DEFAULT: "#d7ede2",
        dark: "#808080",
      },
      "tropical-humid-2": {
        DEFAULT: "#f7fffb",
        dark: "#808080",
      },
      foliage: {
        DEFAULT: "#68864f",
        dark: "#808080",
      },
      "granite-rock": {
        DEFAULT: "#494941",
        dark: "#808080",
      },
      "morning-mist": {
        DEFAULT: "#cbccbc",
        dark: "#808080",
      },
      "blue-link": {
        DEFAULT: "#1a0dab",
        dark: "#808080",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
