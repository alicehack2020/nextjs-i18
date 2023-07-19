"use client";
import "./globals.css";
import type { Metadata } from "next";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./navbar/page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "info page",
  description: "info page",
};
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const [lang, setlang] = useState(params.lang);
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (e: any) => {
    let selectedLanguage = e.target.value;
    setlang(selectedLanguage);

    if (pathname === "/hi" || pathname === "/en") {
      const newPath = `/${selectedLanguage}`;
      router.push(newPath);
    } else {
      const newPath = convertPath(pathname, selectedLanguage);
      router.push(newPath);
    }
  };

  const convertPath = (path: any, selectedLanguage: string) => {
    if (path.startsWith("/en/")) {
      return (path = path.replace("/en/", `/${selectedLanguage}/`));
    } else if (path.startsWith("/hi/")) {
      return (path = path.replace("/hi/", `/${selectedLanguage}/`));
    }
    // else {
    //   return (path = path.replace("/mh/", `/${selectedLanguage}/`));
    // }
  };

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <select name="" id="" onChange={handleLangChange}>
          <option value="">Language</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          {/* <option value="mh">Marathi</option> */}
        </select>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
