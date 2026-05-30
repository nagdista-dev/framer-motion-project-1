import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Framer Motion Project 1",
  description: "Created by @nagdista | nagdista.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}
