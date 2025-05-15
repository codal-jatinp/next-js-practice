"use server";

import { notFound, redirect } from "next/navigation";
import {
  FormState,
  LoginFormSchema,
  LoginFormState,
  SignupFormSchema,
} from "./definitions";
import prisma from "./prisma.server";

export const signup = async (state: FormState, formData: FormData) => {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  await prisma.user.create({
    data: {
      ...validatedFields.data,
    },
  });

  redirect("/login");
};

export const login = async (state: LoginFormState, formData: FormData) => {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const foundUser = await prisma.user.findUnique({
    where: { email: formData.get("email")?.toString() },
  });

  if (foundUser && foundUser.password === formData.get("password")) {
    redirect("/");
  }

  notFound();
};

export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return (await res.json()) as User[];
};

export const fetchPosts = async (userId: number) => {
  const url = new URL("https://jsonplaceholder.typicode.com/posts");
  url.searchParams.set("userId", userId.toString());

  const res = await fetch(url);
  return (await res.json()) as Post[];
};

export const fetchPostById = async (postId: number): Promise<Post> => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );
  return await res.json();
};
