"use client";

import { signOut } from "next-auth/react";

export default function ManageProfileForm() {
  const signOutClickHandler = () => {
    signOut();
  };

  return (
    <div className="flex flex-col items-stretch justify-center space-y-4 min-w-xl">
      <button
        onClick={signOutClickHandler}
        className="border py-2 cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
}
