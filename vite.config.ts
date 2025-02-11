import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import svgr from "vite-plugin-svgr";
import { robots } from "vite-plugin-robots";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    robots({}),
    createSvgSpritePlugin({
      symbolId: "icon-[name]-[hash]",
      // include: ["**/icons/**.svg", "**/icons/sections/**.svg"],
      include: ["**/sprite/**.svg"],
    }),
  ],

  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  resolve: {
    alias: {
      // "@": "/src",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // base: "./",
});
