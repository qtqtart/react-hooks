import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['**/*.test.{ts,tsx}', '**/*.stories.{ts,tsx}']
    })
  ],
  build: {
    lib: {
      name: pkg.name,
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.peerDependencies ?? {}),
        'react/jsx-runtime'
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: ({ name }) => `${name}.js`
      }
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: 'esbuild'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
