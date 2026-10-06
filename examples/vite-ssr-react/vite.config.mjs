import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [nitro(), react()],
  environments: {
    client: {
      build: { rollupOptions: { input: "./src/entry-client.tsx" } },
    },
  },
});
