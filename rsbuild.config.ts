import { defineConfig } from '@rsbuild/core';
import { pluginPreact } from '@rsbuild/plugin-preact';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [
    pluginPreact(),
    pluginSass({
      rewriteUrls: false,
    }),
  ],
  output: {
    sourceMap: true,
  },
  tools: {
    lightningcssLoader: false,
  },
});
