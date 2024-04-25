module.exports = {
  extends: [
    'mantine',
    './node_modules/gts/',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['testing-library', 'jest'],
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
    ]
  },
};
