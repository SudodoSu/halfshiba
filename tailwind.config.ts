import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
      center: true,
      
      screens: {
        sm: '720px',
        md: '960px',
        lg: '1140px',
        xl: '1320px',
      },
      // sm: '36rem',
        // md: '42rem',
        // lg: '56rem',
        // xl: '72rem',
    
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        Barlow: ["var(--barlow)", ...defaultTheme.fontFamily.sans],
        Roboto: ["var(--roboto)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        biggest_font_size: "2rem",
        normal_font_size: "1rem",
        small_font_size: "0.813rem",
        smaller_font_size: "0.75rem",
      },
      fontWeight: {
        titleBold: "var(--titleBold)",
        PRegular: "var(--PRegular)",
        Bold: "var(--Bold)",
        medium: "var(--medium)",
        ExtraBold: "(--ExtraBold)",
      },
      colors: {
        clr_primary: "#fbb040",
        clr_sec: "#ff0000",
        primary_light: "rgba(251, 176, 64, 0.2)",
        text_clr: "#e5e5e5",
        white: "#ffffff",
        btn_blue: "#40cefb",
        black_clr: "#000000",
        btn_clr: "#ffc438",
        artic: "#ffc53a",
        home_overlay: "rgba(251, 176, 64, 0.25)",
        token_color: "rgba(46, 46, 46, 1)",
        token_bg: "rgba(46, 46, 46, 1)",
        body_clr: "#141414",
      },
    },
  },
  plugins: [],
};
export default config;
