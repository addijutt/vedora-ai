import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";

import "./globals.css";
import "./ui.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vedora.ai",
  description:
    "Vedora.ai is a Layer 2 blockchain that serves as the infrastructure layer for AI-enabled applications.   ",
  metadataBase: new URL("https://vedora.ai"),
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
    
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
      </body>
    </html>
  );
}
