import React from 'react';
import { ArrowRight, Search, Compass, Cpu, Zap, LayoutDashboard, Layers, FileText, Film, Share2, Activity, FileCheck, Lightbulb, Rocket, TrendingUp, BarChart, Target, Check, ShieldCheck, X, Database, BrainCircuit, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Framework: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-24 font-sans text-slate-200 selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO HEADER - SCALE BUSINESS PRO-INTELLIGENCE */}
      <div className="container mx-auto px-4 mb-20 relative">
          {/* Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
              <div className="inline-flex items-center gap-3 border border-red-600/30 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 mb-8 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase">
                      Systemic Growth Protocol
                  </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black font-sans text-white mb-8 leading-[0.9] tracking-tighter">
                  SCALE BUSINESS <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">PRO-INTELLIGENCE™</span>
              </h1>

              {/* 2. THE DEFINITION - "What Makes It Different?" */}
              <div className="max-w-4xl mx-auto bg-slate-900/90 border border-red-900/30 rounded-3xl overflow-hidden shadow-2xl relative mt-12 text-left">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>
                  
                  <div className="grid md:grid-cols-2">
                      <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950">
                          <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
                              What Makes <span className="text-red-600">SCALE BUSINESS PRO‑INTELLIGENCE™</span> Different?
                          </h2>
                          <div className="space-y-4">
                              <div className="flex items-center gap-3 text-slate-500 font-medium text-sm line-through decoration-red-600 decoration-2">
                                  <X className="text-red-600 w-5 h-5" /> It’s not consulting
                              </div>
                              <div className="flex items-center gap-3 text-slate-500 font-medium text-sm line-through decoration-red-600 decoration-2">
                                  <X className="text-red-600 w-5 h-5" /> It’s not coaching
                              </div>
                              <div className="flex items-center gap-3 text-slate-500 font-medium text-sm line-through decoration-red-600 decoration-2">
                                  <X className="text-red-600 w-5 h-5" /> It’s not marketing services
                              </div>
                          </div>
                      </div>

                      <div className="p-8 md:p-12 bg-gradient-to-br from-slate-900 to-red-950/20">
                          <p className="text-white font-serif text-lg leading-relaxed mb-6">
                              It is a complete <strong className="text-red-500">business intelligence system</strong> that MSMEs plug into to:
                          </p>
                          <ul className="space-y-3">
                              {["Scale Faster", "Spend Smarter", "Dominate Categories", "Build Superbrands", "Grow Without Guesswork"].map((item, i) => (
                                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                                      <Check className="text-green-500 w-5 h-5" /> {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 3. HOW WE PROVIDE IT - The Operating System */}
      <div className="container mx-auto px-4 py-24 border-b border-slate-900">
          <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-4">How It Works</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                      We don't give you a PDF. We install a <span className="text-red-500 font-bold">Growth Operating System (G-OS)</span> directly into your company.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative group hover:border-red-600/50 transition duration-500">
                      <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-white">01</div>
                      <Database className="text-red-600 w-10 h-10 mb-6" />
                      <h3 className="text-xl font-bold text-white mb-3">Data Injection</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                          We plug your business into our proprietary database of 10,000+ successful case studies. We don't guess what works; we download proven success patterns tailored to your sector.
                      </p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative group hover:border-red-600/50 transition duration-500">
                      <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-white">02</div>
                      <BrainCircuit className="text-red-600 w-10 h-10 mb-6" />
                      <h3 className="text-xl font-bold text-white mb-3">Neuro-Strategy</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                          We restructure your offer using "Dark DNA" psychology. We re-engineer your pricing, positioning, and messaging to trigger subconscious buying behavior.
                      </p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative group hover:border-red-600/50 transition duration-500">
                      <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-white">03</div>
                      <LayoutDashboard className="text-red-600 w-10 h-10 mb-6" />
                      <h3 className="text-xl font-bold text-white mb-3">Execution Dashboard</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                          No vague goals. You get a live "War Room" dashboard tracking daily execution metrics. If a metric drops, our system alerts you with the fix immediately.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* 4. THE 4-STAGE INTELLIGENCE ROADMAP */}
      <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Deployment Cycle</span>
              <h2 className="text-4xl font-serif text-white mb-4">Intelligence <span className="italic text-slate-500">Architecture</span></h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-900 via-red-900 to-slate-900 hidden md:block"></div>
              
              {[
                  { 
                      stage: "PHASE 1: VALIDATION INTEL",
                      title: "The Market Void Scan", 
                      icon: <Search className="text-white" />, 
                      desc: "Before spending a rupee, we scan the market for the 'invisible gap'. We verify if your idea has billion-scale potential or if it's a dead end.",
                      deliverable: "Output: Market Gap Report (Go/No-Go Signal)."
                  },
                  { 
                      stage: "PHASE 2: POSITIONING INTEL",
                      title: "The 'Only Choice' Protocol", 
                      icon: <Compass className="text-white" />, 
                      desc: "We package your product using Neuro-Linguistic framing so it doesn't look like a commodity. We position it as the only logical solution to a specific pain point.",
                      deliverable: "Output: Brand DNA Identity System."
                  },
                  { 
                      stage: "PHASE 3: TRACTION INTEL",
                      title: "The Viral Engine Launch", 
                      icon: <Zap className="text-white" />, 
                      desc: "We deploy the ProZenius Brand Film to prove Product-Market Fit. If this film converts cold traffic, your business model is validated.",
                      deliverable: "Output: High-Production Brand Film + 5 Ad Variants."
                  },
                  { 
                      stage: "PHASE 4: SCALING INTEL",
                      title: "Automated Empire Systems", 
                      icon: <Cpu className="text-white" />, 
                      desc: "We install automated hiring, sales, and operations protocols. This allows you to handle 10x volume without the founder burning out.",
                      deliverable: "Output: The 'CEO Control Room' Dashboard."
                  }
              ].map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      
                      {/* Step Card */}
                      <div className="flex-1 bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-red-600 transition duration-300 w-full relative group shadow-xl">
                          <div className="absolute top-0 right-0 p-3 font-bold text-[10px] tracking-widest text-red-500 bg-black rounded-bl-xl border-l border-b border-slate-800">
                              {step.stage}
                          </div>
                          
                          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(220,38,38,0.4)] group-hover:scale-110 transition-transform">
                              {step.icon}
                          </div>
                          
                          <h3 className="text-xl font-serif text-white mb-4 group-hover:text-red-400 transition-colors">
                              {step.title}
                          </h3>
                          
                          <p className="text-slate-400 text-sm leading-relaxed mb-6">
                              {step.desc}
                          </p>
                          
                          <div className="bg-black/40 border-t border-slate-800 pt-4 mt-4 rounded p-3">
                              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Deliverable</span>
                              <p className="text-white text-xs font-mono">
                                  {step.deliverable}
                              </p>
                          </div>
                      </div>

                      {/* Spacer for Center Line */}
                      <div className="hidden md:flex w-12 items-center justify-center relative">
                          <div className="w-4 h-4 bg-black border-2 border-red-600 rounded-full z-10 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                      </div>

                      <div className="flex-1 hidden md:block"></div>
                  </div>
              ))}
          </div>

          {/* 5. PRICING & BENEFITS - Red/Black Theme */}
          <div className="max-w-6xl mx-auto py-24">
              <div className="bg-gradient-to-br from-slate-900 to-black border border-red-600 rounded-[3rem] overflow-hidden relative shadow-[0_0_50px_rgba(220,38,38,0.15)]">
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                  <div className="grid md:grid-cols-2">
                      {/* Left: Pricing & Core Offer */}
                      <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-center">
                          <div className="inline-block bg-red-600/10 border border-red-600/50 rounded-full px-4 py-1 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 w-fit animate-pulse">
                              The Blueprint Phase
                          </div>
                          <h3 className="text-4xl font-serif text-white mb-4">Strategic Growth <br/> Architecture</h3>
                          <p className="text-slate-400 mb-8 leading-relaxed">
                              A 4-week deep dive into your business. We audit your market, restructure your offer, and build the exact roadmap for your next 10x leap.
                          </p>
                          
                          <div className="flex items-baseline gap-2 mb-2">
                              <span className="text-5xl font-black text-white">₹49,999</span>
                              <span className="text-slate-500 text-lg">/ one-time</span>
                          </div>
                          <p className="text-slate-500 text-xs uppercase tracking-widest mb-8">Base Strategy Fee</p>

                          <Link to="/contact" className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl text-center uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(220,38,38,0.4)] transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                              Book Strategy Session <ArrowRight size={16}/>
                          </Link>
                      </div>

                      {/* Right: 5 Benefits */}
                      <div className="p-12 md:p-16 bg-slate-950/50">
                          <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                              <ShieldCheck className="text-red-600"/> Why Partners Choose Us
                          </h4>
                          
                          <ul className="space-y-6">
                              {[
                                  { title: "Crystal Clear Direction", desc: "Stop guessing. Get a detailed 12-month execution roadmap." },
                                  { title: "Save 6+ Months", desc: "We identify shortcuts and bypass the common traps that kill momentum." },
                                  { title: "Zero Ad-Waste", desc: "We fix your offer and funnel *before* you burn cash on marketing." },
                                  { title: "Investor Readiness", desc: "We build the traction models and data stories that VCs demand." },
                                  { title: "Automated Operations", desc: "Transition from 'Founder-Dependent' chaos to 'System-Driven' scale." }
                              ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-4 group">
                                      <div className="mt-1 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 text-red-500 border border-red-600/30 group-hover:bg-red-600 group-hover:text-white transition">
                                          <Check size={14} strokeWidth={3} />
                                      </div>
                                      <div>
                                          <strong className="text-white block text-sm mb-1 group-hover:text-red-400 transition">{item.title}</strong>
                                          <span className="text-slate-400 text-xs leading-relaxed">{item.desc}</span>
                                      </div>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

          {/* 6. EXECUTION SUMMARY */}
          <div className="max-w-4xl mx-auto mt-10 p-10 bg-slate-900 rounded-3xl border border-slate-800 text-center relative overflow-hidden group hover:border-red-600/30 transition duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm relative z-10">The ProZenius Formula</h4>
              <p className="text-lg md:text-xl font-serif text-slate-300 italic mb-8 relative z-10">
                  "Validate the Idea → Build a Killer Offer → Prove it with a Film → Automate the Growth."
              </p>

              <div className="relative z-10">
                  <Link to="/contact" className="group border border-slate-600 text-slate-300 hover:text-white hover:border-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-[0.2em] transition-all inline-flex items-center gap-3 hover:bg-white/5">
                      Apply For Intelligence Access <Lock size={16} className="text-red-600"/>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Framework;