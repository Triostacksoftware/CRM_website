import "./globals.css";
import BookCallModalProvider from "@/components/BookCallModalProvider";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStickyBar from "@/components/SocialStickyBar";
import BottomHelpBar from "@/components/BottomHelpBar";
import Script from "next/script";

export const dynamic = 'force-dynamic';

export const metadata = {
  metadataBase: new URL('https://triostack.in'),
  title: {
    default: "CRM Solutions | Premium Enterprise Software Solution",
    template: "%s | CRM Solutions"
  },
  description: "Custom-built CRM solutions for Indian enterprises. Specialized in GST compliance, WhatsApp automation, and multi-branch sales operations.",
  keywords: ["CRM India", "GST CRM", "WhatsApp Automation CRM", "Enterprise CRM", "Sales Automation Software", "Triostack", "CRM for MSME"],
  authors: [{ name: "Triostack Team" }],
  creator: "Triostack",
  publisher: "Triostack",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://triostack.in",
    siteName: "CRM Solutions",
    title: "CRM Solutions | Enterprise Software Solution",
    description: "Scale your business with India's most compliant and automated CRM solution.",
    images: [
      {
        url: "/img.png",
        width: 1200,
        height: 630,
        alt: "CRM Solutions Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Solutions | Enterprise Software Solution",
    description: "Scale your business with India's most compliant and automated CRM solution.",
    images: ["/img.png"],
  },
  icons: {
    icon: "/trio-logo.png",
    shortcut: "/trio-logo.png",
    apple: "/trio-logo.png",
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {gaId ? (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="antialiased">
        <BookCallModalProvider />
        <SocialStickyBar />
        {children}
        <div className="hidden md:block">
          <Chatbot />
          <WhatsAppButton />
        </div>
        <BottomHelpBar />
      </body>
    </html>
  );
}
