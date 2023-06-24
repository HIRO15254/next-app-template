import { ContextFunction } from "@apollo/server";
import { User } from "@prisma/client"
import { authOptions } from "lib/nextAuth";
import { prisma } from "lib/prisma";
import { NextApiHandler } from "next";
import { getServerSession } from "next-auth";

export type Context = {
  currentUser: User | null;
}

type CreateContextType = ContextFunction<Parameters<NextApiHandler>, Context>;

export const createContext: CreateContextType = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  const currentUser = await prisma.user.findUnique({
    where: {
      userId: session?.user?.userId ?? '',
    }
  });
  return {
    currentUser,
  };
};