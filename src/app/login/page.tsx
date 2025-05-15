"use client";

import { login } from "@/repository";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div
      id="container"
      className="flex w-screen min-h-screen gap-10 items-center justify-center"
    >
      <form
        className="flex flex-col space-y-4 rounded-md shadow-lg p-8 min-w-lg"
        action={action}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="outline ps-2 py-2 rounded-md focus:outline-2 focus:outline-indigo-400"
            autoComplete="off"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        {state?.errors?.email && (
          <p className="text-red-600">{state.errors.email}</p>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="outline ps-2 py-2 rounded-md focus:outline-2 focus:outline-indigo-400"
            autoComplete="off"
            id="password"
            name="password"
            type="password"
          />
        </div>
        {state?.errors?.password && (
          <div className="text-red-600">
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          disabled={pending}
          type="submit"
          className="cursor-pointer bg-slate-100 py-4 px-2 rounded-md outline-1 font-semibold focus:outline-2 focus:outline-black"
        >
          Login
        </button>
      </form>
    </div>
  );
}
