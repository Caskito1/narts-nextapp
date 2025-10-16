import "@/styles/globals.css";
import { Providers } from "./providers";
import { Merriweather, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  title: "Landing NARTS",
  description: "Landing Narts Foundation"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="scroll-smooth">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}