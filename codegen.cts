import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:54321/graphql/v1",
  documents: ['src/**/*.gql'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
    './src/gql/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
