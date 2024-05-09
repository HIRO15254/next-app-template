import {prisma} from '../../../lib/prisma';
import {Context} from '../../context';

export const getAuthUser = async (
  context: Context | undefined,
  sessionToken: string | null | undefined
) => {
  if (context?.currentUserId) {
    return prisma.user.findUniqueOrThrow({
      where: {
        userId: context.currentUserId,
      },
    });
  }
  const session = await prisma.session.findUniqueOrThrow({
    where: {
      sessionToken: sessionToken ?? undefined,
    },
    include: {
      user: true,
    },
  });
  return session.user;
};
