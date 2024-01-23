import type { Metadata } from "next";
import type { Viewport } from "next";
import { Roboto, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--barlow",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["400", "500", "700", "900"],
});

export const viewport: Viewport = {
  themeColor: "#FF0000",
};

export const metadata: Metadata = {
  title: "Half Shiba Inu - Official Website",
  description:
    "Half Shiba Inu is one of the first tokens to be paired with $SHIB LP, To utilize $SHIB token. $SHIB0.5 The Community Driven Token! #SHIBARIUM #HALFSHIBAINU",
  openGraph: {
    type: "website",
    title: "Half Shiba Inu",
    description:
      "Half Shiba Inu is one of the first tokens to be paired with $SHIB LP, To utilize $SHIB token. $SHIB0.5 The Community Driven Token! #SHIBARIUM #HALFSHIBAINU",
    url: "https://halfshiba.site",
  },
  keywords:
    "Half Shiba Inu, Half Shiba, Shiba Inu, $ETH, $SHIB, $SHIB0.5, #SHIB-LP, Shib-LP, Half Shiba Inu-LP, Shibtoken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-body_clr ${barlow.variable} ${roboto.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
