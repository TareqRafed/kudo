import { resolve } from 'node:path';
import { makeEntryPointPlugin } from '@kudo/hmr';

import { watchPublicPlugin, watchRebuildPlugin } from '@kudo/hmr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');
const publicDir = resolve(rootDir, 'public');

const outDir = resolve(rootDir, '..', '..', 'dist', 'kudo');

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  const isProduction = mode === 'production';

  return {
    resolve: {
      alias: {
        '@root': rootDir,
        '@src': srcDir,
        '@assets': resolve(srcDir, 'assets'),
      },
    },
    plugins: [
      react(),
      watchPublicPlugin(),
      isDev && watchRebuildPlugin({ reload: true }),
      isDev && makeEntryPointPlugin(),
    ],
    build: {
      lib: {
        entry: resolve(srcDir, 'index.tsx'),
        name: 'Toolbar',
        formats: ['iife'],
        fileName: 'index',
      },

      outDir,
      publicDir,
      emptyOutDir: false,
      sourcemap: isDev,
      minify: isProduction,
      reportCompressedSize: isProduction,

      rollupOptions: {
        external: ['chrome'],
      },
    },
  };
});
