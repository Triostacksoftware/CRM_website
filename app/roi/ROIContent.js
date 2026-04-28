"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import BookCallModal from "@/components/BookCallModal";
import { pricingPlans } from "@/lib/pricing-data";

export default function ROIContent() {
  // Calculator State
  const [leads, setLeads] = useState(100);
  const [convRate, setConvRate] = useState(5);
  const [dealValue, setDealValue] = useState(50000);
  const [teamSize, setTeamSize] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Results State
  const [results, setResults] = useState({
    monthlyRevenue: 0,
    annualRevenue: 0,
    potentialGrowth: 0,
    timeSaved: 0,
    crmCost: 0,
    netProfit: 0,
    recommendedPlan: "",
  });

  useEffect(() => {
    // Ensure all values are treated as numbers
    const L = Number(leads) || 0;
    const C = Number(convRate) || 0;
    const V = Number(dealValue) || 0;
    const T = Number(teamSize) || 0;

    // Determine Pricing Plan based on Team Size
    let planPrice = 0;
    let planName = "";
    if (T <= 5) {
      planPrice = pricingPlans[0].price.annual;
      planName = pricingPlans[0].name;
    } else if (T <= 10) {
      planPrice = pricingPlans[1].price.annual;
      planName = pricingPlans[1].name;
    } else {
      planPrice = pricingPlans[2].price.annual;
      planName = pricingPlans[2].name;
    }

    const monthlyCost = T * planPrice;

    // Current Monthly Performance
    const currentDeals = (L * C) / 100;
    const currentRevenue = currentDeals * V;

    // Potential Performance with Trio-CRM
    // Assumptions: 25% improvement in conversion rate
    const improvedConvRate = C * 1.25; 
    const potentialDeals = (L * improvedConvRate) / 100;
    const potentialRevenue = potentialDeals * V;

    // Savings and Growth
    const monthlyGrowth = potentialRevenue - currentRevenue;
    const annualGrowth = monthlyGrowth * 12;
    const netAnnualProfit = annualGrowth - (monthlyCost * 12);
    const hoursSavedPerRep = 32; 
    const totalHoursSaved = T * hoursSavedPerRep;

    setResults({
      monthlyRevenue: currentRevenue,
      annualRevenue: annualGrowth,
      potentialGrowth: monthlyGrowth,
      timeSaved: totalHoursSaved,
      crmCost: monthlyCost,
      netProfit: netAnnualProfit,
      recommendedPlan: planName,
    });
  }, [leads, convRate, dealValue, teamSize]);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-14 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,178,116,0.15),transparent_70%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00b274]" />
              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">Profitability Tool</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
              Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b274] to-emerald-400">Growth Potential</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              See exactly how much revenue you're leaving on the table and how Trio-CRM 360 can help you capture it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-14 md:py-16 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Inputs Card */}
            <div className="bg-white p-7 md:p-9 rounded-[2rem] shadow-xl border border-slate-100">
              <Reveal>
                <h2 className="text-2xl font-bold mb-7 flex items-center gap-3 text-slate-900">
                  <span className="w-8 h-8 rounded-lg bg-[#00b274]/10 text-[#00b274] flex items-center justify-center text-sm">1</span>
                  Business Input Metrics
                </h2>
              </Reveal>

              <div className="space-y-8">
                {/* Leads Input */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-slate-700">Monthly Inbound Leads</label>
                    <input 
                      type="number" 
                      value={leads}
                      onChange={(e) => setLeads(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-24 px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-right font-black text-[#00b274] focus:outline-none focus:border-[#00b274]"
                    />
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="5000"
                    step="10"
                    value={leads}
                    onChange={(e) => setLeads(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#00b274]"
                  />
                </div>

                {/* Conversion Rate Input */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-slate-700">Closing Ratio (%)</label>
                    <input 
                      type="number" 
                      value={convRate}
                      step="0.1"
                      onChange={(e) => setConvRate(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-24 px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-right font-black text-[#00b274] focus:outline-none focus:border-[#00b274]"
                    />
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="50"
                    step="0.5"
                    value={convRate}
                    onChange={(e) => setConvRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#00b274]"
                  />
                </div>

                {/* Deal Value Input */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-slate-700">Average Sale Value (₹)</label>
                    <input 
                      type="number" 
                      value={dealValue}
                      onChange={(e) => setDealValue(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-32 px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-right font-black text-[#00b274] focus:outline-none focus:border-[#00b274]"
                    />
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={dealValue}
                    onChange={(e) => setDealValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#00b274]"
                  />
                </div>

                {/* Team Size Input */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-slate-700">Sales Representatives</label>
                    <input 
                      type="number" 
                      value={teamSize}
                      onChange={(e) => setTeamSize(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-24 px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-right font-black text-[#00b274] focus:outline-none focus:border-[#00b274]"
                    />
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#00b274]"
                  />
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-slate-950 p-8 md:p-10 rounded-[2.25rem] shadow-2xl relative overflow-hidden text-white border border-white/5">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#00b274]/20 rounded-full blur-[100px] -mr-40 -mt-40" />
                
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                  <span className="w-8 h-8 rounded-lg bg-white/10 text-[#00b274] flex items-center justify-center text-sm">2</span>
                  ROI Summary
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-8 relative z-10">
                  <div className="space-y-1">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Net Annual Profit</p>
                    <p className="text-4xl md:text-5xl font-black text-[#00b274] tracking-tight">
                      ₹{Math.round(results.netProfit).toLocaleString()}
                    </p>
                    <p className="text-[10px] text-slate-500 italic mt-1">(After CRM cost & growth)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Recommended Plan</p>
                    <p className="text-3xl font-black text-white">
                      {results.recommendedPlan}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1">₹{results.crmCost.toLocaleString()}/mo subscription</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Admin Hours Saved</p>
                    <p className="text-3xl font-black text-white">
                      {Math.round(results.timeSaved)} Hrs/Mo
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Total Revenue Growth</p>
                    <p className="text-3xl font-black text-white">
                      ₹{Math.round(results.annualRevenue).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-7 border-t border-white/10 relative z-10">
                  <p className="text-slate-400 text-sm italic mb-8">
                    *Estimates based on average Trio-CRM customer performance data. Actual results may vary based on implementation and team usage.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-[#00b274] hover:bg-[#009661] text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_10px_40px_rgba(0,178,116,0.3)] hover:scale-[1.02]"
                  >
                    Get Your Full ROI Report
                  </button>
                </div>
              </div>

              {/* Small Tip Card */}
              <div className="bg-[#00b274]/5 border border-[#00b274]/10 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00b274]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#00b274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-600 text-sm">
                  <strong>Pro Tip:</strong> Automating lead distribution typically reduces response time by 80%, which alone can increase conversion by up to 15%.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core ROI Drivers Section */}
      <section className="py-14 md:py-16 bg-white border-t border-slate-100">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Core ROI <span className="text-[#00b274]">Drivers</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                Our platform isn't just a tool; it's a profit engine for your sales ecosystem.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={200}>
              <div className="p-7 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#00b274]/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#00b274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Zero Lead Leakage</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Never lose a lead to manual tracking errors. Automate capture from 50+ sources and assign them instantly to your best reps.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-7 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#00b274]/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#00b274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Time Arbitrage</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Reduce administrative tasks by 80%. Your team spends more time talking to customers and less time filling spreadsheets.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="p-7 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#00b274]/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#00b274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Deep Analytics</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Identify exactly where your sales pipeline is stalling. Use data-driven insights to coach your reps and close deals faster.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-14 md:py-16 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">The Cost of <span className="text-red-500">Inaction</span></h2>
            <p className="text-slate-400">What happens when you continue using spreadsheets or basic tools?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="bg-slate-900/50 p-10">
              <h4 className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-6">Without Trio-CRM</h4>
              <ul className="space-y-4">
                {["35% Leads lost in manual entry", "48hr+ Response time", "Manual follow-ups (Easy to forget)", "Zero visibility into team activity"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#00b274]/5 p-10 border-l border-white/10">
              <h4 className="text-[#00b274] font-bold uppercase tracking-widest text-[10px] mb-6">With Trio-CRM 360</h4>
              <ul className="space-y-4">
                {["100% Lead capture automation", "< 5 min Response time", "Automated smart follow-ups", "Real-time performance dashboards"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <svg className="w-5 h-5 text-[#00b274] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100 bg-white">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">© 2026 CRM Solutions. The ROI calculator provides estimates based on industry benchmarks. Actual performance may vary based on business model and CRM usage.</p>
        </div>
      </footer>
    </main>
  );
}
