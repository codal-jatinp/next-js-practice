"use client";
import { signUp } from "@/actions/auth.actions";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function AuthForm() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [state, action, pending] = useFormState(signUp, {});

  return (
    <form id="auth-form" action={action}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {Object.keys(state?.errors ?? {}).length > 0 && (
        <ul id="form-errors">
          {Object.values(state?.errors ?? {})
            .map((errors) => errors)
            .flat()
            .map((error) => (
              <li key={error}>{error}</li>
            ))}
        </ul>
      )}
      <p>
        <button disabled={pending} type="submit">
          Create Account
        </button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}
