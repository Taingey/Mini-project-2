import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import Header from "@/components/menu/Header";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  icons: {
    icon: "/public/Logo_not_bg.",
  },
  title: {
    template: "%s - MyShop",
    default: "MyShop"
  },
  description: "This is description shop",
  openGraph: {
    title: {
      template: "%s - MyShop",
      default: "MyShop"
    },
    description: "This is description shop",
    images: ["/Logo_not_bg.png"]
  }
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
