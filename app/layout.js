import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import BookCallModalProvider from "@/components/BookCallModalProvider";

const Chatbot = dynamic(() => import("@/components/Chatbot"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const SocialStickyBar = dynamic(() => import("@/components/SocialStickyBar"));
const BottomHelpBar = dynamic(() => import("@/components/BottomHelpBar"));
const LeadSuccessToast = dynamic(() => import("@/components/LeadSuccessToast"));

const GTM_ID = "GTM-NM63CZBW";

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
        url: "/crm%20screen%20shot/Screenshot%20(505).png",
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
    images: ["/crm%20screen%20shot/Screenshot%20(505).png"],
  },
  icons: {
    icon: "/trio-logo.png",
    shortcut: "/trio-logo.png",
    apple: "/trio-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <BookCallModalProvider />
        <LeadSuccessToast />
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
