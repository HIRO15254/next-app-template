import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import RelayPlugin from '@pothos/plugin-relay'
import { DateResolver } from 'graphql-scalars'

import type PrismaTypes from '@pothos/plugin-prisma/generated'

import { prisma } from './../../lib/prisma'
import { Context } from '../lib/context'

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date }
  }
  PrismaTypes: PrismaTypes
  Context: Context
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: prisma,
  },
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'String',
  },
})

builder.addScalarType('Date', DateResolver, {})