import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BugHuntProvider } from "@/components/BugHuntProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HuntModeNudge } from "@/components/HuntModeNudge";
import { Toast } from "@/components/Toast";
import { SITE } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <BugHuntProvider>
          <div className="grid-bg flex min-h-full flex-1 flex-col">
            <Header />
            <HuntModeNudge />
            {children}
            <Footer />
            <Toast />
          </div>
        </BugHuntProvider>
      </body>
    </html>
  );
}
