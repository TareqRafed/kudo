import pluginQuery from '@tanstack/eslint-plugin-query';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import reactCompilerPlugin from 'eslint-plugin-react-compiler';
import tailwind from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...pluginQuery.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  ...compat.extends('next/core-web-vitals', 'prettier', 'next/typescript'),
  {
    name: 'react-compiler/recommended',
    plugins: {
      'react-compiler': reactCompilerPlugin,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },
];

export default config;
