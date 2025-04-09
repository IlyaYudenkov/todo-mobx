import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint';

export default defineConfig({
  ignorePatterns: ['dist'],  // Используем ignorePatterns для игнорирования папок и файлов
  extends: [
    js.configs.recommended,
    'plugin:react/recommended',  // Для использования правил для React
    'plugin:react-hooks/recommended', // Для использования правил для React Hooks
    'plugin:@typescript-eslint/recommended', // Для правил TypeScript
  ],
  parser: '@typescript-eslint/parser',  // Парсер для TypeScript
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': '@typescript-eslint/eslint-plugin',  // Плагин для TypeScript
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], 
  },
  env: {
    browser: true,
    node: true,
  },
});
