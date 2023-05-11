import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import vue from "@vitejs/plugin-vue";

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// eslint-disable-next-line no-undef
const path = require('path')

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // eslint-disable-next-line no-undef
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  rules: [
    {
      test: /\.scss$/,
      use: ["vue-style-loader", "css-loader", "sass-loader"],
    },
  ],
});
