import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        Mona: "Mona Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
        Shopify: "aktiv-grotesk-extended, ShopifySans, sans-serif",
        poppins: ["var(--font-poppins)"]
      },
      screens: {
        lgs: { max: "1050px" },
        xls: { max: "1023px" },
        mds: { max: "858px" },
        sms: { max: "767px" },
        smp: { max: "650px" },
        sp: { max: "550px" }
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",

        // "2xl": "1536px"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
export default config;
