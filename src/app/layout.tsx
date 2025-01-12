import "./globals.css";
import Header from "@/app/_components/header";
import React from "react";
import Footer from "@/app/_components/footer";
import { Metadata, Viewport } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: "Акимпресс - Акиматы и новости Казахстана",
    template: "%s | Акимпресс",
  },
  description: "Все акиматы (органы местного самоуправления) и последние новости Казахстана на Akimpress / Акимпресс.",
  metadataBase: new URL("https://www.akimpress.kz.com"),
  authors: [{ name: "Akimpress" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Акимпресс - Акиматы и новости Казахстана",
    description: "Все акиматы (органы местного самоуправления) и последние новости Казахстана на Akimpress / Акимпресс.",
    url: "https://www.akimpress.kz.com",
    images: [
      {
        url: "https://akimpress.kz/_next/image?url=%2FakimpressLogo.png&w=96&q=75",
        alt: "Akimpress Logo",
      },
    ],
    type: "website",
  },
}


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
        <title></title>
      </Head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
