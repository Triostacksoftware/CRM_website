import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PricingSection from "@/components/PricingSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import FAQSection from "@/components/FAQSection";
import SEOComponent from "@/components/SEOComponent";
import { goLandingData } from "@/lib/go-landing-data";

export const metadata = {
  title: "TrioCRM Landing Page",
  description:
    "Book a TrioCRM demo and explore why businesses switch to a smarter CRM for growth, automation, and visibility.",
  alternates: {
    canonical: "https://triostack.in/go",
  },
};

export default function GoLandingPage() {
  return (
    <main className="min-h-screen relative bg-[#0b1220]">
      <SEOComponent
        title="TrioCRM Demo Landing Page"
        description="Explore TrioCRM features, pricing, integrations, security, and FAQs on the dedicated demo landing page."
      />
      <Link
        href="/"
        className="absolute left-5 top-5 z-[120] inline-flex items-center gap-2.5 sm:left-8"
        aria-label="Go to home page"
      >
        <span className="relative h-10 w-10 shrink-0 overflow-visible">
          <img
            src="/trio-logo.png"
            alt="Triostack Logo"
            className="h-full w-full object-contain"
          />
        </span>
        <span className="whitespace-nowrap text-[1.2rem] font-black leading-none tracking-normal text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Trio-CRM 360
        </span>
      </Link>
      <HeroSection {...goLandingData.hero} />
      <TrustStrip {...goLandingData.trustStrip} />
      <ProblemSolutionSection {...goLandingData.whySwitch} />
      <HowItWorksSection {...goLandingData.howItWorks} />
      <FeaturesSection {...goLandingData.features} />
      <IntegrationsSection {...goLandingData.integrations} />
      <PricingSection {...goLandingData.pricing} />
      <TrustSecuritySection {...goLandingData.trustSecurity} />
      <FAQSection {...goLandingData.faqs} />
    </main>
  );
}
