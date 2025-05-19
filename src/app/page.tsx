"use server";

import { getServerSession } from "next-auth/next";
import { redirect, RedirectType } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login", RedirectType.replace);
  }

  return <h1>{session.user?.name}</h1>;
}
