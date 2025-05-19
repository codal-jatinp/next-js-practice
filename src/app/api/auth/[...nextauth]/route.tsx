import prisma from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
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
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      if (session?.user && token?.name) {
        session.user.name = token.name;
      }
      return session;
    },

    jwt({ token, trigger, session }) {
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }

      return token;
    },
  },
  events: {
    updateUser: async ({ user }) => {
      // This event is triggered after a successful update to the user in the database
      console.log("[UpdateUser Event]", user);
    },
  },
  adapter: PrismaAdapter(prisma),
};

const inst = NextAuth(authOptions);

export const GET = inst;
export const POST = inst;
export const PATCH = inst;
