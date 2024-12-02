import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
			animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      colors: {
        "mindlet-white": "#F6EEFF",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1FDB99",

          secondary: "#85B8EF",

          accent: "#9758E4",

          neutral: "#1E1F22",

          "base-100": "#EAF5FF",

          "base-200": "#C7D2FE",

          info: "#85B8EF",

          success: "#1FDB99",

          warning: "#EFDC85",

          error: "#E45F58",
        },
      },
    ],
  },
  plugins: [daisyui],
};
