import { resolve } from 'node:path';
import { defineConfig, type PluginOption } from 'vite';
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';
import makeManifestPlugin from './utils/plugins/make-manifest-plugin';
import { watchPublicPlugin, watchRebuildPlugin } from '@kudo/hmr';
import { watchOption } from '@kudo/vite-config';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');

const outDir = resolve(rootDir, '..', '..', 'dist');
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
      libAssetsPlugin({
        outputPath: outDir,
      }),
      makeManifestPlugin({ outDir }),
      watchPublicPlugin(),
      isDev && watchRebuildPlugin({ reload: true }),
    ],
    publicDir: resolve(rootDir, 'public'),
    build: {
      lib: {
        formats: ['iife'],
        entry: resolve(__dirname, 'src/background/index.ts'),
        name: 'BackgroundScript',
        fileName: 'background',
      },

      outDir,
      emptyOutDir: false,
      sourcemap: isDev,
      minify: isProduction,
      reportCompressedSize: isProduction,
      watch: watchOption,

      rollupOptions: {
        external: ['chrome'],
      },
    },
  };
});
