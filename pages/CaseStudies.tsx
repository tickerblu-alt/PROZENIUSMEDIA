import React from 'react';
import { ArrowRight, TrendingUp, Users, Zap, Target, BarChart3, Briefcase, Building2, LineChart, Globe, Lock, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const cases = [
    { 
        id: "PZ-1001",
        title: "Apex Autos", 
        sector: "Automobile", 
        result: "+450% Traffic", 
        metric: "₹2.5 Cr Revenue", 
        desc: "Transformed a local dealership into a luxury brand destination using cinematic drone tours and scarcity-based test drive events.",
        icon: <Zap className="text-gold-500" />
    },
    { 
        id: "PZ-1002",
        title: "Bright Star Gym", 
        sector: "Fitness", 
        result: "+300% Members", 
        metric: "60% CAC Reduction", 
        desc: "Implemented 'Transformation Documentary' ads that sold the identity shift, not just the gym equipment. Reduced CAC by 60%.",
        icon: <Users className="text-gold-500" />
    },
    { 
        id: "PZ-1003",
        title: "EduPeak Academy", 
        sector: "Education", 
        result: "100x Scale", 
        metric: "Zero CAC (Organic)", 
        desc: "Leveraged founder-led thought leadership films to build massive trust. Filled 5 new centers in 6 months purely on organic brand strength.",
        icon: <Building2 className="text-gold-500" />
    },
    { 
        id: "PZ-1004",
        title: "Kasturi Shikshan", 
        sector: "Tech Education", 
        result: "2350 Admissions", 
        metric: "15M+ Reach", 
        desc: "Used DARK DNA Social campaign to get them admissions in tech education by 476% growth in just 1.5 years of campaigns!",
        icon: <TrendingUp className="text-gold-500" />
    },
    { 
        id: "PZ-1005",
        title: "TechNova", 
        sector: "B2B Tech", 
        result: "Market Leader", 
        metric: "₹2.87 Cr Sales", 
        desc: "Created a corporate narrative film that positioned them as a global leader in print solutions, offering innovative and world-class products.",
        icon: <Target className="text-gold-500" />
    },
    { 
        id: "PZ-1006",
        title: "Local Hero Retail", 
        sector: "Retail / Fashion", 
        result: "National Brand", 
        metric: "47 Store Expansion", 
        desc: "Shifted from 'product catalog' ads to 'lifestyle identity' films, allowing them to compete with and beat international fast-fashion giants.",
        icon: <Briefcase className="text-gold-500" />
    },
    { 
        id: "PZ-1007",
        title: "Urban Eats", 
        sector: "Hospitality", 
        result: "3 New Franchises", 
        metric: "200% Revenue", 
        desc: "From a single food cart to a franchise empire. We filmed the 'founder story' that created an emotional connection with every customer.",
        icon: <Users className="text-gold-500" />
    },
  ];

  const handleAuditClick = () => {
    window.location.hash = '#/';
    setTimeout(() => {
      const el = document.getElementById('growth-audit');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-200 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO - Minimalist Dark Editorial */}
      <div className="pt-32 pb-20 border-b border-slate-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-3 border border-slate-800 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 mb-8">
                    <Globe size={12} className="text-gold-500" />
                    <span className="text-gold-500 text-xs font-black tracking-[0.3em] uppercase">
                        Global Impact Report
                    </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight">
                    Strategic <br/> <span className="italic text-gold-500">Transformations</span>
                </h1>
                
                <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed border-l border-gold-500/30 pl-8">
                    A curated portfolio of enterprises that leveraged the ProZenius Dark DNA framework to achieve non-linear growth trajectories and market dominance.
                </p>
            </div>
        </div>
      </div>

      {/* 2. STATS - Brutalist Dark Strip */}
      <div className="border-b border-slate-900 bg-black">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-900 border-x border-slate-900">
                  {[
                      { label: "Valuation Added", value: "₹392 Cr+", icon: <LineChart size={16} className="text-slate-600 mb-2"/> },
                      { label: "Brands Scaled", value: "55+", icon: <Building2 size={16} className="text-slate-600 mb-2"/> },
                      { label: "Avg. ROI Uplift", value: "450%", icon: <BarChart3 size={16} className="text-slate-600 mb-2"/> },
                      { label: "Sectors Dominated", value: "12+", icon: <Globe size={16} className="text-slate-600 mb-2"/> }
                  ].map((stat, i) => (
                      <div key={i} className="p-8 text-center group hover:bg-slate-900/50 transition duration-500">
                          <div className="flex justify-center mb-2 group-hover:text-gold-500 transition-colors">{stat.icon}</div>
                          <div className="text-3xl font-serif text-white mb-1">{stat.value}</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* 3. CASE STUDIES - Architectural Grid */}
      <div className="container mx-auto px-4 py-24">
          <div className="flex justify-between items-end mb-16 border-b border-slate-900 pb-8">
              <div>
                  <h2 className="text-4xl font-serif text-white mb-2">The Archives</h2>
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Confidential Growth Metrics</p>
              </div>
              <div className="hidden md:block">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-800 px-3 py-1 bg-slate-900/50">
                      FY 2024-2025
                  </span>
              </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((c, i) => (
                  <div key={i} className="group relative bg-slate-900/20 border border-slate-800 hover:border-gold-500/50 hover:bg-slate-900 transition-all duration-500 flex flex-col h-full">
                      
                      {/* Top Bar */}
                      <div className="px-8 py-6 border-b border-slate-800/50 flex justify-between items-center group-hover:border-gold-500/20 transition-colors">
                          <div className="flex items-center gap-3">
                               <div className="p-1.5 border border-slate-700 rounded-sm bg-slate-950 group-hover:border-gold-500/50 transition-colors">
                                  {c.icon}
                               </div>
                               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.sector}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-600 group-hover:text-gold-500/50 transition-colors">{c.id}</span>
                      </div>

                      {/* Main Content */}
                      <div className="p-8 flex-grow">
                          <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-gold-200 transition-colors leading-tight">
                              {c.title}
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="bg-slate-950/50 p-3 border-l border-gold-500/30">
                                   <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Impact</div>
                                   <div className="text-white font-mono text-sm">{c.result}</div>
                              </div>
                              <div className="bg-slate-950/50 p-3 border-l border-slate-700">
                                   <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Revenue</div>
                                   <div className="text-white font-mono text-sm">{c.metric}</div>
                              </div>
                          </div>

                          <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-6">
                              "{c.desc}"
                          </p>
                      </div>

                      {/* Footer Action */}
                      <div className="px-8 py-4 border-t border-slate-800/50 bg-slate-950/30 group-hover:bg-gold-500/5 transition-colors flex justify-between items-center">
                           <div className="flex items-center gap-2 text-xs font-bold text-slate-500 group-hover:text-gold-500 transition-colors uppercase tracking-wider">
                               <Lock size={12} /> Verified Data
                           </div>
                           <button onClick={handleAuditClick} className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                               Access Protocol <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                           </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* 4. CTA - Dark Luxury */}
      <div className="border-t border-slate-900 bg-gradient-to-b from-slate-950 to-black py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 border border-slate-800 p-12 bg-slate-900/50 backdrop-blur-sm">
                  <div className="text-left">
                      <div className="flex items-center gap-2 text-gold-500 mb-4">
                          <Shield size={16} />
                          <span className="text-xs font-bold uppercase tracking-[0.2em]">Secure Partnership</span>
                      </div>
                      <h2 className="text-4xl font-serif text-white mb-4 leading-tight">Engineer Your <br/><span className="italic text-slate-500">Market Dominance</span></h2>
                      <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl">
                          We engage with brands demonstrating scalable DNA. If you are prepared for non-linear growth, initiate the audit protocol.
                      </p>
                  </div>
                  <div className="flex flex-col gap-4 flex-shrink-0 w-full md:w-auto">
                      <Link to="/brand-films" className="bg-white text-slate-950 px-8 py-5 font-black text-sm uppercase tracking-widest hover:bg-gold-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
                          Initiate Partnership <ArrowRight size={16}/>
                      </Link>
                      <a href="mailto:corporate@prozenius.com" className="bg-transparent border border-slate-600 text-slate-300 px-8 py-5 font-black text-sm uppercase tracking-widest transition-colors hover:border-white hover:text-white flex items-center justify-center gap-2">
                          <FileText size={16}/> Contact Sales
                      </a>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default CaseStudies;