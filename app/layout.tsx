import { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nishant Painter",
  description: "Computer Programmer",
  authors: {
    name: "Nishant Painter",
    url: "https://github.com/nishantpainter",
  },
  openGraph: {
    title: "Nishant Painter",
    url: "https://nishantpainter.com",
    description: "Portfolio",
  },
  twitter: {
    title: "Nishant Painter",
    description: "Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-171631214-1"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
  
        gtag("config", "UA-171631214-1");
        `}
      </Script>
      <Script
        data-ad-client="ca-pub-4302795410966209"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <body>{children}</body>
    </html>
  );
}
