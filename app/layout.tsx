import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:5173";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Necsa Lumier Technologies | Enterprise Business Software",
    description: "Necsa Lumier Technologies builds premium business software, including BrickFlow for interlock and hollow-brick companies and the Retail Boss retail platform.",
    icons: { icon: "/necsa-lumier-logo.png", apple: "/necsa-lumier-logo.png" },
    openGraph: {
      title: "Necsa Lumier Technologies",
      description: "Enterprise technology for businesses that build and sell.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Necsa Lumier Technologies — BrickFlow and Retail Boss" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Necsa Lumier Technologies",
      description: "Enterprise technology for businesses that build and sell.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
