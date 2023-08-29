"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { useEffect } from "react";
import type { Metadata } from "next";
import { oxygen400 } from "@/styles/fonts";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Phoenix Dawn",
  description: "Website for the Phoenix Dawn Clan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={`${oxygen400.className}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
