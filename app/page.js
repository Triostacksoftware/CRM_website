import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsMetricsSection from "@/components/ResultsMetricsSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TestimonialSection from "@/components/TestimonialSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import ConsultationSection from "@/components/ConsultationSection";
import GooglePlaySection from "@/components/GooglePlaySection";
import SEOComponent from "@/components/SEOComponent";

export const metadata = {
  title: "CRM Solutions | Best CRM for Indian Enterprises & MSMEs",
  description: "Boost your sales with CRM Solutions. Features WhatsApp automation, GST-ready invoicing, and multi-branch management tailored for Indian businesses.",
  alternates: {
    canonical: "https://triostack.in",
  },
};
export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-[#0b1220]">
      <SEOComponent 
        title="Best CRM for Indian Enterprises"
        description="Boost your sales with CRM Solutions. Features WhatsApp automation, GST-ready invoicing, and multi-branch management."
      />
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ProblemSolutionSection showCta={false} />
      <HowItWorksSection />
      <FeaturesSection />
      <IntegrationsSection />
      <ResultsMetricsSection />
      <ProductShowcase />
      <UseCasesSection />
      <PricingSection />
      <TestimonialSection />
      <TrustSecuritySection />
      <ConsultationSection />
      <GooglePlaySection />
      <FAQSection />

      <ContactSection />
    </main>

  );
}
