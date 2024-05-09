import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';
import ValidationPlugin from '@pothos/plugin-validation';
import {DateResolver} from 'graphql-scalars';

import {Context} from '../../context';
import {prisma} from '../prisma';

import type PrismaTypes from '@pothos/plugin-prisma/generated';

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: {Input: Date; Output: Date};
  };
  PrismaTypes: PrismaTypes;
  Context: Context;
}>({
  plugins: [PrismaPlugin, RelayPlugin, ValidationPlugin],
  prisma: {
    client: prisma,
  },
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'String',
  },
});

builder.addScalarType('Date', DateResolver, {});
