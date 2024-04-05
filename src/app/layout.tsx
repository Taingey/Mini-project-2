import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import Header from "@/components/menu/Header";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import HomePage from "./homePage/page";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={poppins.variable}>
        <Header />
      <Suspense>
      <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
      </Suspense>
      <Footer />
      </body>
    </html>
  );
}
