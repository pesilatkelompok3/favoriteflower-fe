import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <main className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-3/4 lg:w-full">{children}</div>
          {/* <main>{children}</main> */}
        </main>
      </body>
    </html>
  );
}
