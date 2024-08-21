import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Evento - Find events around you",
  description: "Browse more than 10,000 events worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-y-scroll bg-gray-950 text-white`}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
