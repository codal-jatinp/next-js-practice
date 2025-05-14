import { fetchPostById } from "@/repository";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { userId: string; postId: string };
}) {
  const postId = Number.parseInt(params.postId, 10);

  if (Number.isNaN(postId)) {
    notFound();
  }

  const post: Post = await fetchPostById(postId);

  if (!post) notFound();

  return (
    <main className="px-4 py-4 w-full">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <hr className="mb-2" />
      <pre>{post.body}</pre>
    </main>
  );
}
