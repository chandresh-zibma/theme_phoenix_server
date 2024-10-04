import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-color": "#ed3237",
        "heading-text-color": "#4f3737",
        "paragraph-text-color": "#352b2b",
        "button-bg-color": "#140000",
        "section-bg-color": "#fff9f9",
        "footer-bg-color": "#07080A",
        "dummy-use-color": "#ad3cff",
        "testimonial-sec-bg-color": "#EDEFF8",
        "testimonial-message-bg-color": "#111124",
        "not-found-img": "#7b7b7b",
      },
    },
  },
  plugins: [],
};
export default config;
