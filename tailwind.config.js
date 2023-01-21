/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url(/images/bg-curvy-mobile.svg)",
        desktop: "urlwww(/images/bg-curvy-desktop.svg)",
      },
      colors: {
        darkBlueIntro: "hsl(217, 28%, 15%)",
        darkBlueBg: "hsl(218, 28%, 13%)",
        darkBlueFBg: "hsl(216, 53%, 9%)",
        darkBluetBg: "hsl(219, 30%, 18%)",
        cyanCta: "hsl(176, 68%, 64%)",
        blueCta: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
