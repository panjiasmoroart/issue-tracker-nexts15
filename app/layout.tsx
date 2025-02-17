import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./NavBar";
import { Container, Theme } from "@radix-ui/themes";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
        <QueryClientProvider>
          <AuthProvider>
            <Theme appearance="light" accentColor="violet">
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
              {/* <ThemePanel /> */}
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
