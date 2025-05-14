import { fetchUsers } from "@/repository";
import { redirect } from "next/navigation";

export default async function Home() {
  const [firstUser]: User[] = await fetchUsers();

  redirect(`/users/${firstUser.id}`);
}
