import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ManageProfileForm from "./components/ManageProfileForm";

export default async function ManageProfile() {
  const session = await getServerSession();

  if (!session || !session.user) redirect("/login");

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <form
        action={async (data) => {
          "use server";
          const name = data.get("userName")!.toString();

          await prisma.user.update({
            where: { email: session.user!.email! },
            data: { name },
          });
        }}
        className="flex flex-col items-stretch justify-center space-y-4 min-w-xl"
      >
        <label className="space-y-2">
          <p>User Name</p>
          <input
            className="dark:outline-white outline px-4 py-2 w-full"
            type="text"
            name="userName"
            placeholder="User Name"
            defaultValue={session.user.name ?? ""}
          />
        </label>
        <button
          type="submit"
          className="dark:outline-white dark:border-white border py-2 cursor-pointer"
        >
          Update Profile
        </button>

        <ManageProfileForm />
      </form>
    </div>
  );
}
