import {UserRole} from '@prisma/client';

import {prisma} from '../../../lib/prisma';

export const isAdmin = (userId: string) =>
  prisma.user
    .findUnique({
      where: {userId},
    })
    .then(user => user?.role === UserRole.ADMIN);
