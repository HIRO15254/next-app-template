module.exports = {
  extends: [
    'mantine',
    './node_modules/gts/',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['testing-library', 'jest', 'unused-imports', 'import-access'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'n/no-unsupported-features/node-builtins': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "~/**",
            "group": "internal",
          }
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc"
        },
        "distinctGroup": false,
        "pathGroupsExcludedImportTypes": ["react"]
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'import-access/jsdoc': "error",
  },
};
