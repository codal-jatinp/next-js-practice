import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/db";

export const PATCH: NextApiHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const session = await getServerSession(request, response, authOptions);

  if (!session) return response.status(401).json({ message: "Unauthorized" });

  await prisma.user.update({
    where: { email: session.user!.email! },
    data: { name: request.body.name },
  });

  return response.status(200);
};
