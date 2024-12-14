import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./NavBar";
import { Container, Theme } from "@radix-ui/themes";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Web Application Issue Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
        <Theme appearance="light" accentColor="violet">
          <NavBar />
          <main className="p-5">
            <Container>{children}</Container>
          </main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
