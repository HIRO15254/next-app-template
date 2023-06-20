
import { schema } from "./src/backend/schema";
import type { CodegenConfig } from '@graphql-codegen/cli';
import { printSchema } from 'graphql';

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  schema: printSchema(schema),
  // documents: ['src/**/*.gql'],
  generates: {
    './src/gql/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
