/*
 * @Date: 2020-05-29 10:53:26
 * @LastEditTime: 2020-05-29 14:16:31
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'no-extra-boolean-cast': 'off',
    // 'react-hooks/exhaustive-deps': 'off', // 检查 effect 的依赖
    'no-unused-vars': 'off', // 如果无效，请看下webpack的eslintcache是否设置为false
    'react/no-direct-mutation-state': 'off',
    'react/display-name': 'off',
    'react/jsx-no-target-blank': 'off',
  },
};
