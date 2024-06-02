import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Plasticor",
  description: "Plasticor Brindes Indústria e Comércio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(
        "min-h-screen bg-background font-poppins antialiased"
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
