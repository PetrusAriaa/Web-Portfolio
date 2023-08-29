import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Poppins} from "next/font/google";

const inter = Inter({subsets: ["latin"]});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petrus Ariaa | Web Developer",
  description: "Petrus Aria's Portfolio Website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
