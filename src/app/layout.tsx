import type { Metadata } from "next";
import { Oswald, Merriweather } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/app/ui/themeSwitcher";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "St. John's Anglican Church, Bowmanville",
  description:
    "Making Jesus Known through Worship, Learning and Faithful Community Engagement in Bowmanville, Ontario, Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${merriweather.variable} antialiased bg-backgroundColor text-typography`}
      >
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
