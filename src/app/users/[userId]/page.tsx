import { fetchPosts } from "@/repository";
import { redirect } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userIdNbr = Number.parseInt((await params).userId, 10);
  const [post]: Post[] = await fetchPosts(userIdNbr);

  redirect(`/users/${userIdNbr}/posts/${post.id}`);
}
