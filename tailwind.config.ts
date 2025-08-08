const { nextui } = require("@nextui-org/react");
//import type { Config } from "tailwindcss";

const config: any = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        hebbo: ["var(--font-heebo)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem", // reduced padding for default
        },
        margin: {
          default: "0.5rem",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          //   DEFAULT: "hsl(var(--card))",
          //   foreground: "hsl(var(--card-foreground))",
        },
        // border: 'hsl(var(--border))',
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
    colors: {
      primary: "#0472B2",
      secondary: "#ffffff",
      white: "#fff",
      red: "#D00000",
      stroke: "#EBEBEB",
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      max: "1920px",
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#193c6d",
            secondary: "#ffffff",
            gray: "#F5F5F7",
            lightbg: "#F5F5FE",
            white: "#ffffff",
            red: "#D00000",
            stroke: "#EBEBEB",
            primaryLight: "#e3eeef",
            textlight: "#6B7280",
            lightYellow: "#FFF7E9",
            green: "#70B944",
            blue: "#4A8CDA",
            orange: "#EC8153",
            purple: "#6647BF",
            black: "#181818",
            yellow: "#FFAB1F",
            headertop: "#252525",
          },
        },
      },
    }),
    require("tailwindcss-animate"),
  ],
};
export default config;
