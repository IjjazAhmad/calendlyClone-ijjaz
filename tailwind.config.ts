import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/(components)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#0069FF",
        primaryII: "rgba(0, 105, 255, 0.5)",
        white: {
          default: "#FFFFFF",
          100: "#FAFAFA",
          line: "#F2F2F2",
        },
        borderClr: {
          default: "#DADADA",
          1: "#DADADA",
          2: "#B2B2B2",
        },
        black: "#1A1A1A",
        lightBlack: "#959595",
        danger: "#C84545",
        // body: "#64748B",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        stroke: "#E2E8F0",
        gray: "#F2F8FF",
        graydark: "#333A48",
        "gray-2": "#F7F9FC",
        "gray-3": "#FAFAFA",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
      },
      fontSize: {
        // "title-xxl": ["44px", "55px"],
      },
      spacing: {
        5.5: "1.375rem",
        6.5: "1.625rem",
        9.5: "2.375rem",
        11: "2.75rem",
      },
      maxWidth: {
        270: "67.5rem",
      },
      maxHeight: {
        300: "18.75rem",
      },
      minWidth: {
        // 22.5: "5.625rem",
        // 42.5: "10.625rem",
        // 47.5: "11.875rem",
        // 75: "18.75rem",
      },
      zIndex: {
        99999: "99999",
        9999: "9999",
        999: "999",
      },

      transitionProperty: { width: "width", stroke: "stroke" },
      borderWidth: {
        6: "6px",
        10: "10px",
        12: "12px",
      },
      boxShadow: {
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        1: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        2: "0px 1px 5px 0px #004A7426",
      },
      dropShadow: {
        1: "0px 1px 0px #E2E8F0",
      },
    },
  },
  plugins: [],
};
export default config;
