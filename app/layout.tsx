import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nikolay Koreshkov — Frontend Developer | Portfolio",
  description:
    "Portfolio of Nikolay Koreshkov, a frontend developer specializing in React, Next.js, and modern web technologies. Explore my projects, skills, personal and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
