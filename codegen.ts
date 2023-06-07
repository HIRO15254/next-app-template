
import { schema } from "./src/backend/schema";
import type { CodegenConfig } from '@graphql-codegen/cli';
import { printSchema } from 'graphql';

const config: CodegenConfig = {
  overwrite: true,
  schema: printSchema(schema),
  documents: ["src/**/*.tsx", "src/**/*.gql"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
  }
};

export default config;
