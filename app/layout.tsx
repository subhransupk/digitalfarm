import "./globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import Header from "@/components/header";
import { Space_Grotesk } from 'next/font/google';
import BackgroundEffect from "@/components/background-effect";
import Footer from "./components/footer";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Digital Farm",
  description: "Digital Farm Platform",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={spaceGrotesk.className}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <BackgroundEffect />
      </body>
    </html>
  );
}
