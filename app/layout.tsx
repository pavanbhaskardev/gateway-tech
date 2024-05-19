import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";

const dmSans = DM_Sans({ subsets: ["latin"] });

const details = {
  title: "Gateway Tech",
  description:
    "Empower your business, with the transformative potential of IoT services.",
};

export const metadata: Metadata = {
  ...details,
  openGraph: {
    ...details,
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  colorScheme: "light",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <html lang="en">
        <body
          className={`${dmSans.className} bg-white text-brandText overflow-x-hidden`}
        >
          <Navbar />
          {children}
          <FooterSection />
        </body>
      </html>
    </SmoothScrollProvider>
  );
}
