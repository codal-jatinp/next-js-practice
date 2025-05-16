import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default function RootLayout({ children }: PropsWithChildren) {
  console.log(process.env);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
