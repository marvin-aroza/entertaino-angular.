const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const angularTemplateParser = require('@angular-eslint/template-parser');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const tsConfigs = compat
  .extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
  )
  .map((config) => ({
    ...config,
    files: ['**/*.ts'],
  }));

const htmlConfigs = compat.extends('plugin:@angular-eslint/template/recommended').map((config) => ({
  ...config,
  files: ['**/*.html'],
}));

module.exports = [
  {
    ignores: ['dist/**', 'node_modules/**', '.angular/**'],
  },
  ...tsConfigs,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['tsconfig.app.json', 'tsconfig.spec.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angular,
      '@angular-eslint/template': angularTemplate,
    },
    processor: angularTemplate.processors['extract-inline-html'],
  },
  ...htmlConfigs,
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
  },
];
