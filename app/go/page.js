import Navbar from "@/components/Navbar";
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
      <Navbar />
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
