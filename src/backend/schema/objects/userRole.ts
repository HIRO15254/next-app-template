import {UserRole} from '@prisma/client';

import {builder} from '../../lib/pothos';

export const UserRoleEnum = builder.enumType(UserRole, {
  name: 'UserRole',
});
