import { PropsWithChildren } from "react";
import "./globals.css";
import NextAuthProvider from "./components/NextAuthProvider";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
