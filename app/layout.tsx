import { Metadata } from "next";
import Script from "next/script";
import Theme from "./theme";
import Header from "./header";
import Footer from "./footer";
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
    description: "Portfolio",
    url: "https://nishantpainter.com",
    siteName: "Nishant Painter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Nishant Painter",
    description: "Portfolio",
    site: "@nishantpainter",
    creator: "Nishant Painter",
  },
  metadataBase: new URL("https://nishantpainter.com"),
  category: "technology",
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
      <body>
        <Theme>
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
