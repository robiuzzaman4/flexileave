import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/block/navbar";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme/theme-provider";
import connectDb from "@/lib/db";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Flexi Leave",
  description: "Reflects Flexibility in Leave Handling.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // connect db
  await connectDb();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" className="font-sans" />
          <Navbar />
          <main className="min-h-[calc(100vh-56px)] mt-14">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
