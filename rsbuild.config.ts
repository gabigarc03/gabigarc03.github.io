import { defineConfig } from '@rsbuild/core';
import { pluginPreact } from '@rsbuild/plugin-preact';
import { pluginSass } from '@rsbuild/plugin-sass';
import { withZephyr } from 'zephyr-rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginPreact(),
    pluginSass({
      rewriteUrls: false,
    }),
    withZephyr(),
  ],
  html: {
    title: 'G.C. Garcia',
  },
  output: {
    assetPrefix: '/gabigarc03.github.io/',
  },
});
