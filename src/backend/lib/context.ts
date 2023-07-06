import { ContextFunction } from "@apollo/server";
import { authOptions } from "../../lib/nextAuth";
import { NextApiHandler } from "next";
import { getServerSession } from "next-auth";

export type Context = {
  currentUserId: string;
}

type CreateContextType = ContextFunction<Parameters<NextApiHandler>, Context>;

export const createContext: CreateContextType = async () => {
  const session = await getServerSession(authOptions).catch((e) => {
    console.error(e)
    return null;
  });
  const currentUserId = session?.user?.userId ?? "";
  return {
    currentUserId,
  };
};