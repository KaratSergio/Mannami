module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react/prop-types': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    quotes: ['error', 'single'],
    'no-unused-vars': ['error', { varsIgnorePattern: 'React|ReactDOM' }],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-uses-react': 'off',
      },
    },
  ],
};
