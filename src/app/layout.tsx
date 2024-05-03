import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import './../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="px-5">
        {children}
        </main>
      </body>
    </html>
  );
}
