import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CircleUserRound, Menu } from "lucide-react";
import Container from "@/components/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokeTcg Album",
  description: "album of pokemon tcg cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-violet-950`}
      >
        <Container>
          <Header className="sticky top-0 left-0 right-0 ">
            <Button className="bg-black/50 size-auto w-1/20 border-black/50 border hover:bg-black/75">
              <Menu className="size-auto" />
            </Button>
            <Button className="bg-black/50 size-auto w-1/20 border-black/50 border hover:bg-black/75">
              <CircleUserRound className="size-auto" />
            </Button>
          </Header>

          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
