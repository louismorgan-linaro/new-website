import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import markdownIntegration from '@astropub/md'

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    tailwind({config: { applyBaseStyles: false }}),
    markdownIntegration(),
  ],
});