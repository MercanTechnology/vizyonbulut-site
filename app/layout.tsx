import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "VizyonBulut",
    template: "%s | VizyonBulut",
  },
  description:
    "VizyonBulut, Mercan Technology Group A.Ş. markasıdır. Kurumsal bulut altyapısı, yönetilen servisler ve güvenlik operasyonları ile sürdürülebilir teknoloji sağlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[rgb(var(--vb-bg))] text-[rgb(var(--vb-fg))]">
        {children}
      </body>
    </html>
  );
}
