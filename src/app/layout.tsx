import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import Sidebar from "@/components/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "urFolio - Portfolio web",
  description: "urFolio - a Open Source portfolio web application",
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
        {children}
      </body>
    </html>
  );
}
