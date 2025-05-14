import { fetchPosts } from "@/repository";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function UsersLayout({
  children,
  params,
}: PropsWithChildren<{ params: Promise<{ userId: string }> }>) {
  const userIdInt = Number.parseInt((await params).userId, 10);

  if (Number.isNaN(userIdInt)) {
    notFound();
  }

  const posts: Post[] = await fetchPosts(
    Number.parseInt((await params).userId, 10)
  );

  return (
    // <div className="py-4 px-2 max-w-full overflow-x-hidden flex flex-row">
    <>
      <aside className="max-w-60 w-full overflow-x-hidden pt-4 overflow-y-auto border-r px-2">
        <ul className="space-y-2">
          <li>
            <h2 className="text-xl font-semibold">Posts</h2>
            <hr />
          </li>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                className="block overflow-hidden px-2 py-2  bg-slate-300 hover:bg-slate-400 rounded-sm"
                href={`/users/${userIdInt}/posts/${post.id}`}
              >
                <span className="line-clamp-2">{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {children}
    </>
    // </div>
  );
}
