import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import preact from "@preact/preset-vite";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [nitro(), preact()],
  environments: {
    client: {
      build: {
        rollupOptions: {
          input: "./src/entry-client.tsx",
        },
      },
    },
  },
});
