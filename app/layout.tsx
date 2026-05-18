import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandaime-bunji.vercel.app"),
  title: "Sandaime Bunji | Best Gyutan & Oden Izakaya in Singapore",
  description:
    "Authentic Japanese izakaya at Millenia Walk Singapore. Enjoy premium beef tongue gyutan, roast beef don, oden, sake, highballs, yakitori and charcoal-grilled dishes near Suntec City and Marina Square.",
  keywords:
    "Sandaime Bunji, Gyutan Singapore, Beef Tongue Singapore, Japanese Izakaya Singapore, Oden Singapore, Millenia Walk Japanese restaurant, Suntec Japanese food, Marina Square izakaya, Roast Beef Don Singapore",
  openGraph: {
    title: "Sandaime Bunji | Best Gyutan & Oden Izakaya in Singapore",
    description:
      "Authentic Japanese izakaya at Millenia Walk Singapore. Premium beef tongue, oden, roast beef don & sake.",
    type: "website",
    locale: "en_SG",
    images: [
      {
        url: "/images/gyutan.webp",
        width: 1200,
        height: 630,
        alt: "Sandaime Bunji Gyutan",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-neutral-950 text-stone-100 antialiased">{children}</body>
    </html>
  );
}
