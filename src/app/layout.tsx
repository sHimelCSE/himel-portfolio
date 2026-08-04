import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MD. SHAHIDUZZAMAN | Full Stack Shopify Developer",
    template: "%s | MD. SHAHIDUZZAMAN",
  },
  description:
    "Full Stack Shopify & Web Developer with 1+ years of experience and 50+ completed e-commerce projects.",
  verification: {
    google: "lckpvS4U3i_DIG-uJPzQdq4_oKQgNv_NFgdVfRYhSnk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} min-h-full antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
