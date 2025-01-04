import type { Metadata } from "next";
import { Poppins, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-text",
});

export const metadata: Metadata = {
  title: "Socially Web App",
  description: "Socially Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${dmSerifText.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
