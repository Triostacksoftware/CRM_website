"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/submitLead";

export default function ContactSection({ 
  title = "Talk to Our CRM Experts", 
  subtitle = "CONTACT US", 
  description = "Learn how TrioCRM can help you capture leads, automate workflows, and close deals faster. Get a personalized consultation tailored to your business needs.",
  tagline = "Trusted by 1000+ growing business across India",
  buttonText = "Book a Free Demo",
  bottomNote = "No obligation • Quick response • 100% secure"
}) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitState, setSubmitState] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitState("submitting");
    setSubmitError("");

    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formId: "contact-section",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setSubmitState("success");
      
      // Attempt to redirect if the page exists, otherwise stay on page with success message
      try {
        router.push("/thank-you-crm-demo");
      } catch (e) {
        console.log("Redirect failed, staying on page.");
      }
    } catch (error) {
      setSubmitState("error");
      setSubmitError(
        error instanceof Error ? error.message : "Unable to send your message right now."
      );
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative scroll-mt-28 py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#00b274]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content + Contact Details */}
          <div className={`${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <span className="text-[#00b274] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
              {subtitle}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 leading-[1.1] tracking-tight">
              {title}
            </h2>
            <div className="space-y-4 mb-10 max-w-lg">
              <p className="text-slate-600 text-base leading-relaxed">
                {description}
              </p>
              {tagline && (
                <p className="text-slate-500 text-sm font-medium">
                  {tagline}
                </p>
              )}
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[#00b274]/20 hover:shadow-xl transition-all group max-w-md">
                <div className="w-12 h-12 rounded-xl bg-[#00b274]/10 flex items-center justify-center border border-[#00b274]/10 group-hover:bg-[#00b274]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#00b274]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-950 text-[15px] font-bold">+91 9211941924</p>
                  <p className="text-slate-500 text-xs mt-0.5">Speak directly with our CRM consultant</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[#00b274]/20 hover:shadow-xl transition-all group max-w-md">
                <div className="w-12 h-12 rounded-xl bg-[#00b274]/10 flex items-center justify-center border border-[#00b274]/10 group-hover:bg-[#00b274]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#00b274]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-950 text-[15px] font-bold">Info@triostack.in</p>
                  <p className="text-slate-500 text-xs mt-0.5">Get detailed product information & support</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[#00b274]/20 hover:shadow-xl transition-all group max-w-md">
                <div className="w-12 h-12 rounded-xl bg-[#00b274]/10 flex items-center justify-center border border-[#00b274]/10 group-hover:bg-[#00b274]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#00b274]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-950 text-[15px] font-bold">India</p>
                  <p className="text-slate-500 text-xs mt-0.5">Serving businesses across India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className={`${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'} [animation-delay:200ms] transition-all duration-500`}>
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-[0_28px_80px_rgba(15,23,42,0.12)] relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00b274]/5 blur-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-[#00b274] focus:ring-1 focus:ring-[#00b274]/20 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">Email *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-[#00b274] focus:ring-1 focus:ring-[#00b274]/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">Phone Number *</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-[#00b274] focus:ring-1 focus:ring-[#00b274]/20 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-[#00b274] focus:ring-1 focus:ring-[#00b274]/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button 
                    type="submit"
                    disabled={submitState === "submitting"}
                    className="w-full bg-[#00b274] text-white text-base font-bold py-5 rounded-2xl shadow-xl shadow-[#00b274]/20 hover:shadow-[#00b274]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {submitState === "submitting" ? "Processing..." : buttonText}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                  {bottomNote && (
                    <p className="text-[11px] text-slate-500 mt-5 font-medium tracking-wide">
                      {bottomNote}
                    </p>
                  )}
                </div>

                {submitError ? (
                  <p className="text-sm text-red-500 text-center">{submitError}</p>
                ) : null}

                {submitState === "success" ? (
                  <p className="text-sm text-[#00b274] text-center font-bold">Your message was sent successfully. We will call you back soon.</p>
                ) : null}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
