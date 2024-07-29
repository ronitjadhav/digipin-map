import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Navbar} from "@/components/navbar";
import {FloatingNavDemo} from "@/components/navbar-demo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digipin",
  description: "Get your Digipin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
          <FloatingNavDemo />
        {children}
      </ThemeProvider></body>
    </html>
  );
}
