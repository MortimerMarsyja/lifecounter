import fs from "node:fs";
import { loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import styleX from "vite-plugin-stylex";

import { defineConfig } from "vite";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const config = defineConfig(({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    SPZ_APP_VERSION: pkg.version,
  };

  return {
    plugins: [svgr(), styleX()],
    resolve: {
      preserveSymlinks: true,
      // TODO remove from here when migrated to typescript and styled-components
      alias: {
        "@hooks": "/src/hooks",
        "@views": "/src/views",
        "@layouts": "/src/layouts",
        "@utils": "/src/utils",
        "@store": "/src/store",
        "@containers": "/src/containers",
        "@components": "/src/components",
        "@icons": "/src/assets/icons",
        "@router": "/src/router",
        "@constants": "/src/constants",
        "@typings": "/src/typings",
        "@assets": "/src/assets",
        "@contexts": "/src/contexts",
        "@reducers": "/src/reducers",
        "@utilities": "/src/utilities",
        "@services": "/src/services",
      },
    },
  };
});

export default config;
