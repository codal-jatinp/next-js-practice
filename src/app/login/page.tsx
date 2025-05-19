import AuthForm from "@/components/auth-form";
import { getServerSession } from "next-auth";
import { redirect, RedirectType } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/", RedirectType.replace);
  }

  return <AuthForm />;
}
