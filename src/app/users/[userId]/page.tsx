import { fetchPosts } from "@/repository";
import { redirect } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: { userId: string };
}) {
  const userIdNbr = Number.parseInt(params.userId, 10);
  const [post]: Post[] = await fetchPosts(userIdNbr);

  redirect(`/users/${userIdNbr}/posts/${post.id}`);
}
