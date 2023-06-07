import { ApolloServer } from '@apollo/server';
import { schema } from "@/backend/schema"

export const server = new ApolloServer({schema});

