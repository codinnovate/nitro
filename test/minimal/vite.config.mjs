import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [!process.env.TEST && nitro()],
});
