import React from 'react';
import { ArrowRight, Search, Compass, Cpu, Zap, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Framework: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-24 font-sans text-slate-200 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO HEADER - Business Scaling Consultancy */}
      <div className="container mx-auto px-4 mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 border border-gold-500/30 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 mb-8 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                      <span className="text-gold-400 text-xs font-black tracking-[0.3em] uppercase">
                          Business Scaling Consultancy
                      </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                      Market Apex <br/>
                      <span className="italic text-gold-500">Dark DNA Consulting</span>
                  </h1>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl">
                  <div className="prose prose-invert prose-lg max-w-none text-slate-400 leading-relaxed font-light">
                      <p className="text-xl text-white font-serif italic mb-6">
                          "Business scaling consultancy is a specialized advisory service that helps a company:"
                      </p>
                      <ul className="list-none space-y-4 pl-0 mb-8">
                          <li className="flex gap-4 items-start">
                              <span className="text-gold-500 font-bold mt-1">01</span>
                              <span>Build a scalable business model where revenue can grow without proportional increases in cost or chaos.</span>
                          </li>
                          <li className="flex gap-4 items-start">
                              <span className="text-gold-500 font-bold mt-1">02</span>
                              <span>Design and implement growth frameworks (market expansion, sales acceleration, operations, tech stack) so the business can handle 2x–10x demand consistently.</span>
                          </li>
                      </ul>
                      <div className="border-t border-slate-700 pt-6">
                          <p className="font-bold text-white mb-2">In ProZenius language:</p>
                          <p>
                              It is <span className="text-gold-400 font-serif text-lg">“Market Apex Consulting”</span>—engineering a brand and business so it can rise to the top of its segment and stay there, backed by data, processes, and performance content.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 2. THE 5-STEP ACTION PLAN */}
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Market Apex Dark DNA <br/><span className="text-gold-500">ProZenius Action Plan</span></h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block"></div>
              
              {[
                  { 
                      id: "01",
                      title: "Dark DNA Business & Market Diagnostic", 
                      icon: <Search className="text-gold-500" />, 
                      desc: "Map the “business DNA” of the client: pricing logic, offer structure, funnels, sales calls, customer fears, and competitor narratives to find the hidden psychological and structural gaps.",
                      deliverable: "A Dark DNA map showing where the brand can create a Market Apex position (a narrow, defensible segment where they can become the most obvious choice)."
                  },
                  { 
                      id: "02",
                      title: "Apex Positioning & Pro-Brand Narrative", 
                      icon: <Compass className="text-gold-500" />, 
                      desc: "Redesign the brand story, category definition, and messaging so the client owns a specific high-value wedge (e.g., “India’s most trusted X for Y,” “the fastest way to Z for [segment]”).",
                      deliverable: "Market Apex Positioning Doc—new category name, promise, proof structure, and emotional hooks that plug directly into the Dark DNA insights."
                  },
                  { 
                      id: "03",
                      title: "Performance Architecture & Offer Engineering", 
                      icon: <Cpu className="text-gold-500" />, 
                      desc: "Restructure offers, pricing, and funnels so every piece of communication pushes a measurable outcome: leads, demos, trials, or sales.",
                      deliverable: "Performance funnels (ads → landing pages → follow‑ups) designed to convert at each stage, with clear KPIs like CAC, LTV, lead‑to‑sale %, and payback period."
                  },
                  { 
                      id: "04",
                      title: "ProZenius Brand Films & Blue Guerrilla Content Layer", 
                      icon: <Zap className="text-gold-500" />, 
                      desc: "Create one flagship Brand Performance Film plus a stack of short‑form assets (reels, ads, testimonials) that encode the Dark DNA triggers and Market Apex story. These are then deployed with Blue Guerrilla tactics—ambush moments, dark social seeding, influencer protégés—to drive both perception shift and immediate revenue.",
                      deliverable: "A content armoury (brand film + ad set + reels + scripts) wired to specific KPIs (trial signups, booked calls, order uplift)."
                  },
                  { 
                      id: "05",
                      title: "Scaling Systems, Dashboards & Iteration Loops", 
                      icon: <LayoutDashboard className="text-gold-500" />, 
                      desc: "Implement simple but strict performance dashboards (weekly KPI board, cohort data, channel ROAS, content attribution) so decisions move from gut‑feel to data‑driven.",
                      deliverable: "A “Market Apex Control Room” view—what to watch weekly, what to kill, what to double down on, and a 90‑day experiment calendar to keep compounding results."
                  }
              ].map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      
                      {/* Step Card */}
                      <div className="flex-1 bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-gold-500/50 transition duration-300 w-full relative group">
                          <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-500">{step.id}</div>
                          
                          <div className="w-12 h-12 bg-slate-950 border border-slate-700 rounded-lg flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                              {step.icon}
                          </div>
                          
                          <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">
                              {step.title}
                          </h3>
                          
                          <p className="text-slate-400 text-sm leading-relaxed mb-6">
                              {step.desc}
                          </p>
                          
                          <div className="bg-slate-950/50 border-t border-slate-800 pt-4 mt-4">
                              <span className="text-gold-500 text-xs font-bold uppercase tracking-widest block mb-1">Deliverable</span>
                              <p className="text-slate-300 text-xs italic font-medium">
                                  {step.deliverable}
                              </p>
                          </div>
                      </div>

                      {/* Spacer for Center Line */}
                      <div className="hidden md:flex w-12 items-center justify-center relative">
                          <div className="w-4 h-4 bg-slate-950 border-2 border-gold-500 rounded-full z-10"></div>
                      </div>

                      <div className="flex-1 hidden md:block"></div>
                  </div>
              ))}
          </div>

          {/* 3. EXECUTION SUMMARY */}
          <div className="max-w-4xl mx-auto mt-20 p-10 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-700 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm relative z-10">The ProZenius Formula</h4>
              <p className="text-lg md:text-xl font-serif text-slate-300 italic mb-8 relative z-10">
                  "Decode Dark DNA → Design Market Apex position → Build performance funnels → Fire with brand films & guerrilla content → Scale with systems and dashboards."
              </p>

              <div className="relative z-10">
                  <Link to="/contact" className="group bg-gold-600 text-slate-950 px-10 py-4 rounded-lg font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all inline-flex items-center gap-3 hover:bg-gold-500">
                      Apply For Consultancy <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Framework;