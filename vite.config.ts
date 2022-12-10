import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import laravel from 'laravel-vite-plugin'
import preact from '@preact/preset-vite'

export default defineConfig({
  esbuild: {
    legalComments: 'none',
  },
  plugins: [
    laravel({
      input: ['resources/application/main.tsx'],
      ssr: 'resources/application/ssr.tsx',
      refresh: true,
    }),
    preact(),
  ],
  ssr: {
    noExternal: ['@inertiajs/server'],
  },
  legacy: {
    buildSsrCjsExternalHeuristics: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/', import.meta.url)),
    },
  },
})
