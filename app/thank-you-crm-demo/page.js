import GoogleAdsConversionTracker from "@/components/GoogleAdsConversionTracker";

export const metadata = {
  title: "Thank You | CRM Demo Request Received",
  description: "Your CRM demo request has been received.",
};

export default function ThankYouCrmDemoPage() {
  return (
    <main data-thank-you-page="crm-demo" className="relative min-h-screen overflow-hidden bg-[#030b1b] px-6 py-16 text-white md:py-24">
      <GoogleAdsConversionTracker />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,178,116,0.16),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(30,64,175,0.28),transparent_44%)]" />

      <section className="relative mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-[32px] border border-white/15 bg-[linear-gradient(160deg,rgba(13,25,47,0.92),rgba(8,18,35,0.94))] p-8 text-center shadow-[0_34px_95px_rgba(0,0,0,0.5)] sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#7ef7c4]/35 bg-[#00b274]/18 text-[#7ef7c4] shadow-[0_0_40px_rgba(0,178,116,0.25)]">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9deccf]">
            Request Confirmed
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Thank you!</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Your free CRM demo request has been received. Our team will contact you shortly.
          </p>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-widest text-[#7ef7c4]">Step 1</p>
              <p className="mt-2 text-sm text-white/80">Our specialist reviews your requirements.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-widest text-[#7ef7c4]">Step 2</p>
              <p className="mt-2 text-sm text-white/80">We call you to understand your process and goals.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-widest text-[#7ef7c4]">Step 3</p>
              <p className="mt-2 text-sm text-white/80">You get a tailored CRM walkthrough for your business.</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#00b274]/30 bg-[#00b274]/10 px-4 py-3 text-sm text-[#c7ffe7]">
            We usually respond quickly during business hours.
          </div>

          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#00b274] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,178,116,0.35)] transition hover:bg-[#009661]"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
