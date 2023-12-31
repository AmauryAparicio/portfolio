import { Providers } from "@/app/providers";

import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amaury Aparicio - Software Engineer",
  description: "Software Engineer, Full Stack Developer. I build things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
