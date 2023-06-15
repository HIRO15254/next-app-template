import { builder } from '../builder'

export const User = builder.prismaNode('User', {
  id: { field: 'userId' },
  fields: (t) => ({
    userId: t.exposeString('userId'),
    name: t.exposeString('name'),
  }),
})
