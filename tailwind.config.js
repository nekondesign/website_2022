module.exports = {
  mode: "jit",
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    plugins: [
      require("@tailwindcss/forms"),
      // ...
    ],
    extend: {
      fontFamily: {
        ud: ["BIZ UDPGothic"],
        noto: ["Noto Sans JP"],
      },
      colors: {
        "company-black": "#070707",
      },
      backgroundImage: {
        "hero-monomonitoring": "url('/images/Monom/Top2.png')",
        "Intro-monomonitoring": "url('/images/Monom/Intro.png')",
        "Propose-monomonitoring": "url('/images/Monom/Propose.png')",
        "Content1-monomonitoring": "url('/images/Monom/thumbnail-1.png')",
        "Content2-monomonitoring": "url('/images/Monom/thumbnail-2.jpeg')",
        "hero-ichi": "url('/images/Ichi/Top.png')",
        "Tool-ichi": "url('/images/Ichi/Tool-bg-mini.png')",
        "Hito-top": "url('/images/Hito/Hito-top-mini.png')",
        "Hito-Price": "url('/images/Hito/Price-bg-mini.png')",
        "Home-bg": "url('/images/Home/tokyo.jpg')",
        "Home-contact": "url('/images/Home/contact-image-min-min.png')",
        "Company-bg": "url('/images/Company/company-bg-min.png')",
      },
    },
  },
  plugins: [],
};
