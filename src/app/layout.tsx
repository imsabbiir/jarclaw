import React from "react";
import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JarClaw",
  description: "Your Ai Assistant",
};

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="relative">
        <div className="scan-line"></div>
        <div
          className="fixed inset-0 opacity-[0.5] -z-1"
          style={{
            backgroundImage: ` linear-gradient(rgba(255, 77, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 77, 0, 0.05) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default layout;
