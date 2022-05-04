import { createVuePlugin as vue } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue({})],
  base: "/dist/",
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: `${resolve(__dirname, "./src")}/`,
      },
    ],
  },
  server: {
    host: "localhost",
    port: 8000,
  },
  build: {
    rollupOptions: {
      plugins: [
        getBabelOutputPlugin({
          configFile: resolve(__dirname, "babel.config.js"),
        }),
      ],
    },
  },
});
