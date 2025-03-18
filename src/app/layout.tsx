import type { Metadata } from "next";
import {
  Inter,
  Geist_Mono,
  Allura,
  DM_Mono,
  IBM_Plex_Mono,
  Noto_Sans,
} from "next/font/google";
import "./globals.css";
import BackgroundStyle from "@/components/apps/BackgroundStyle";
import TanstackProvider from "@/providers/tanstack-provider";
import Header from "@/components/layouts/Header";
import { ViewTransitions } from "next-view-transitions";
const noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ibm_plex_mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const dm_mono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${allura.variable} ${dm_mono.variable} ${ibm_plex_mono.variable} ${noto_sans.variable} ${inter.className} antialiased`}
      >
        <TanstackProvider>
          <BackgroundStyle type="dotted">
            <ViewTransitions>
              <Header />
              {children}
            </ViewTransitions>
          </BackgroundStyle>
          <div id="modal-root"></div>
        </TanstackProvider>
      </body>
    </html>
  );
}
