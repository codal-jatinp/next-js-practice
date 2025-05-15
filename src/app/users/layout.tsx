import { fetchUsers } from "@/repository";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default async function LayoutPage({ children }: PropsWithChildren) {
  const users: User[] = await fetchUsers();
  return (
    <>
      <aside className="border-r py-4 px-2 overflow-y-auto max-w-60 w-full">
        <ul className="space-y-2">
          <li className="mb-3">
            <h2 className="text-xl font-semibold">Users</h2>
            <hr />
          </li>
          {users.map((user) => (
            <li key={user.id}>
              <Link
                className={
                  "block overflow-hidden px-2 py-2 text-nowrap whitespace-nowrap text-ellipsis bg-slate-300 hover:bg-slate-400 rounded-sm"
                }
                href={`/users/${user.id}`}
              >
                <span>{user.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {children}
    </>
  );
}
