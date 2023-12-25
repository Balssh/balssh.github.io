import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://balssh.github.io"
  // base: "/balssh.github.io",
  ,
  integrations: [solidJs()]
});