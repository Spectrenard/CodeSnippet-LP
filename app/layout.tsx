import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CodeSnippet - Save and Share Your Code Snippets",
  description:
    "Modern platform to save, organize and share your code snippets. Join the developer community on ProductHunt.",
  keywords:
    "code snippets, code sharing, development, productHunt, programming",
  openGraph: {
    title: "CodeSnippet - Your Code Library",
    description: "Save and share your code snippets with ease",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeSnippet Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeSnippet - Live on ProductHunt",
    description: "Discover the new way to manage your code snippets",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-white text-zinc-900`}
      >
        <div className="min--screen">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
