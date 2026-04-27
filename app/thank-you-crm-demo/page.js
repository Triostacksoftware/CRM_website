import GoogleAdsConversionTracker from "@/components/GoogleAdsConversionTracker";

export const metadata = {
  title: "Thank You | CRM Demo Request Received",
  description: "Your CRM demo request has been received.",
};

export default function ThankYouCrmDemoPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-6 py-24 text-white">
      <GoogleAdsConversionTracker />

      <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00b274]/20 text-[#7ef7c4]">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white">Thank you!</h1>
        <p className="mt-4 text-lg text-white/85">
          Your free CRM demo request has been received. Our team will contact you shortly.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-left text-sm text-white/75">
          <p className="font-semibold text-white">Google Ads Conversion Placeholder</p>
          <p className="mt-2">
            Set <code>NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID</code> and{" "}
            <code>NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL</code> to fire conversion on this page only.
          </p>
          <p className="mt-2">Example send_to format: <code>AW-123456789/AbCdEfGhIjKlMnOpQr</code></p>
        </div>
      </section>
    </main>
  );
}
