"use server";
import { signUpFormSchema } from "@/lib/schemas";
import prisma from "@/lib/db";
import { hashUserPassword } from "@/lib/hash";
import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";
import { redirect } from "next/navigation";

type SignUpState =
  | {
      errors: {
        email?: string[];
        password?: string[];
      };
    }
  | undefined;

export async function signUp(state: SignUpState, formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const result = signUpFormSchema.safeParse({ email, password });

  // validate the data

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  try {
    // store it in the db
    await prisma.user.create({
      data: {
        email: result.data.email,
        password: await hashUserPassword(result.data.password),
      },
    });
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
      return { errors: { email: ["Already Taken!"] } };
    }

    throw err;
  }

  redirect("/training");
}
