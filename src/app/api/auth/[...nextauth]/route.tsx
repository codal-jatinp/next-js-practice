import NextAuth, { AuthOptions } from "next-auth";
import Auth0 from "next-auth/providers/auth0";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0({
      clientId: process.env.AUTH_AUTH0_ID!,
      clientSecret: process.env.AUTH_AUTH0_SECRET!,
      issuer: process.env.AUTH_AUTH0_ISSUER!,
    }),
  ],
};

const inst = NextAuth(authOptions);

export const GET = inst;
export const POST = inst;
