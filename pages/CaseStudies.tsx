import React from 'react';
import { ArrowRight, TrendingUp, Users, Zap, Target, BarChart3, Briefcase, Building2, LineChart, Globe, Lock, Shield, FileText, Activity, Rocket, ShoppingBag, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  
  // Sector-based Styling Engine
  const getCaseStyle = (sector: string) => {
    switch (sector) {
      case 'Automobile':
        return {
          gradient: 'from-red-950/80 via-red-900/20 to-black',
          border: 'border-red-500/30 group-hover:border-red-500',
          accent: 'text-red-500',
          bgAccent: 'bg-red-500',
          shadow: 'group-hover:shadow-[0_0_50px_rgba(239,68,68,0.2)]'
        };
      case 'Fitness':
        return {
          gradient: 'from-emerald-950/80 via-emerald-900/20 to-black',
          border: 'border-emerald-500/30 group-hover:border-emerald-500',
          accent: 'text-emerald-400',
          bgAccent: 'bg-emerald-500',
          shadow: 'group-hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]'
        };
      case 'Education':
      case 'Tech Education':
        return {
          gradient: 'from-blue-950/80 via-blue-900/20 to-black',
          border: 'border-blue-500/30 group-hover:border-blue-500',
          accent: 'text-blue-400',
          bgAccent: 'bg-blue-500',
          shadow: 'group-hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]'
        };
      case 'B2B Tech':
        return {
          gradient: 'from-violet-950/80 via-violet-900/20 to-black',
          border: 'border-violet-500/30 group-hover:border-violet-500',
          accent: 'text-violet-400',
          bgAccent: 'bg-violet-500',
          shadow: 'group-hover:shadow-[0_0_50px_rgba(139,92,246,0.2)]'
        };
      case 'Retail / Fashion':
        return {
          gradient: 'from-pink-950/80 via-pink-900/20 to-black',
          border: 'border-pink-500/30 group-hover:border-pink-500',
          accent: 'text-pink-400',
          bgAccent: 'bg-pink-500',
          shadow: 'group-hover:shadow-[0_0_50px_rgba(236,72,153,0.2)]'
        };
      case 'Hospitality':
        return {
          gradient: 'from-orange-950/80 via-orange-900/20 to-black',
          border: 'border-orange-500/30 group-hover:border-orange-500',
          accent: 'text-orange-400',
          bgAccent: 'bg-orange-500',
          shadow: 'group-hover:shadow-[0_0_50px_rgba(249,115,22,0.2)]'
        };
      default:
        return {
          gradient: 'from-slate-900 via-slate-900/50 to-black',
          border: 'border-slate-700 group-hover:border-white',
          accent: 'text-slate-200',
          bgAccent: 'bg-slate-500',
          shadow: 'group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]'
        };
    }
  };

  const cases = [
    { 
        id: "PZ-1001",
        title: "Apex Autos", 
        sector: "Automobile", 
        result: "+450%", 
        resultLabel: "Showroom Traffic",
        revenue: "₹2.5 Cr", 
        revenueLabel: "Addt. Revenue",
        desc: "Transformed a local dealership into a luxury destination. We replaced static car photos with cinematic 'lifestyle' drone tours, targeting status anxiety in upper-middle-class buyers.",
        icon: <Rocket />,
        tags: ["Status Engineering", "Drone Tech", "Scarcity"]
    },
    { 
        id: "PZ-1002",
        title: "Bright Star Gym", 
        sector: "Fitness", 
        result: "+300%", 
        resultLabel: "Membership Surge",
        revenue: "60%", 
        revenueLabel: "Lower CAC",
        desc: "Stopped selling 'equipment' and started selling 'Identity'. We filmed a raw, gritty transformation documentary series that made joining the gym feel like joining a warrior tribe.",
        icon: <Activity />,
        tags: ["Tribe Building", "Identity Shift", "Documentary Ads"]
    },
    { 
        id: "PZ-1003",
        title: "EduPeak Academy", 
        sector: "Education", 
        result: "100x", 
        resultLabel: "Scale Factor",
        revenue: "Zero", 
        revenueLabel: "Ad Spend (Organic)",
        desc: "Parents don't buy courses; they buy 'Future Safety'. We positioned the founder as a visionary thought leader through a series of high-production value manifestos.",
        icon: <Building2 />,
        tags: ["Founder Brand", "Trust Architecture", "Organic Viral"]
    },
    { 
        id: "PZ-1004",
        title: "Kasturi Shikshan", 
        sector: "Tech Education", 
        result: "2,350", 
        resultLabel: "New Admissions",
        revenue: "₹18 Cr", 
        revenueLabel: "Pipeline Value",
        desc: "Leveraged Dark DNA triggers around 'Career Obsolescence'. We created a campaign that highlighted the danger of outdated skills, positioning their tech courses as the only survival gear.",
        icon: <Zap />,
        tags: ["Fear of Missing Out", "Career Survival", "Mass Reach"]
    },
    { 
        id: "PZ-1005",
        title: "TechNova", 
        sector: "B2B Tech", 
        result: "#1", 
        resultLabel: "Market Position",
        revenue: "₹2.87 Cr", 
        revenueLabel: "Enterprise Sales",
        desc: "B2B doesn't have to be boring. We used 'Spy Thriller' aesthetics to demonstrate their cybersecurity product, turning a dry tech demo into a gripping narrative about corporate espionage.",
        icon: <Lock />,
        tags: ["Narrative Warfare", "Thriller Aesthetic", "Enterprise Trust"]
    },
    { 
        id: "PZ-1006",
        title: "Local Hero Retail", 
        sector: "Retail / Fashion", 
        result: "47", 
        resultLabel: "New Stores",
        revenue: "National", 
        revenueLabel: "Brand Recognition",
        desc: "Shifted from 'product catalog' ads to 'lifestyle identity' films. We made the clothes look like the uniform of the 'Cool & Successful', allowing them to beat international giants.",
        icon: <ShoppingBag />,
        tags: ["Aspirational", "Fast Fashion", "Visual Hook"]
    },
    { 
        id: "PZ-1007",
        title: "Urban Eats", 
        sector: "Hospitality", 
        result: "200%", 
        resultLabel: "Revenue Jump",
        revenue: "3 New", 
        revenueLabel: "Franchises Opened",
        desc: "Food is emotional. We filmed the 'Founder's Struggle' story—blood, sweat, and tears in the kitchen. Customers didn't just come to eat; they came to support the hero.",
        icon: <Utensils />,
        tags: ["Founder Story", "Emotional Connection", "Sensory Visuals"]
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
    <div className="bg-[#050505] min-h-screen font-sans text-slate-200 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO - MAGNITUDE & SCALE */}
      <div className="pt-40 pb-24 border-b border-slate-900 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-900/10 rounded-full blur-[150px]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 border border-slate-800 bg-black/50 backdrop-blur-xl px-6 py-2 rounded-full mb-8 shadow-2xl">
                <Globe size={14} className="text-gold-500 animate-spin-slow" />
                <span className="text-slate-300 text-xs font-bold tracking-[0.3em] uppercase">
                    Classified Growth Archives
                </span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white mb-6 leading-[0.85] tracking-tighter mix-blend-screen">
                STRATEGIC <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-white to-slate-500 italic pr-4 pb-2 inline-block">TRANSFORMATIONS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mt-8 font-serif italic">
                "We don't just improve metrics. We fundamentally alter the <span className="text-white font-medium">market trajectory</span> of our partners."
            </p>
        </div>
      </div>

      {/* 2. STATS - BRUTALIST DATA STRIP */}
      <div className="border-b border-slate-900 bg-black sticky top-0 z-40 backdrop-blur-md bg-black/80">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 border-x border-slate-800">
                  {[
                      { label: "Valuation Added", value: "₹392 Cr", color: "text-green-500" },
                      { label: "Brands Scaled", value: "55+", color: "text-white" },
                      { label: "Avg. ROI Uplift", value: "450%", color: "text-gold-500" },
                      { label: "Sectors Dominated", value: "12+", color: "text-blue-500" }
                  ].map((stat, i) => (
                      <div key={i} className="py-6 px-4 text-center group hover:bg-white/5 transition duration-300 cursor-default">
                          <div className={`text-2xl md:text-4xl font-black font-sans mb-1 ${stat.color}`}>{stat.value}</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* 3. CASE STUDIES - THE "MASONRY DOSSIER" LAYOUT */}
      <div className="container mx-auto px-4 py-24">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div>
                  <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-3">
                      <FileText className="text-gold-500"/> The Case Files
                  </h2>
                  <p className="text-slate-500 text-sm max-w-lg">
                      Each module represents a bespoke strategy engineered for specific market conditions. 
                      <span className="text-white font-bold ml-1">Hover to decrypt data.</span>
                  </p>
              </div>
              <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-75"></span>
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse delay-150"></span>
                  <span className="text-[10px] uppercase font-bold text-slate-600 tracking-widest ml-2">Live Systems</span>
              </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((c, i) => {
                  const style = getCaseStyle(c.sector);
                  return (
                    <div key={i} className={`group relative bg-slate-900/40 border ${style.border} rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${style.shadow} flex flex-col h-full`}>
                        
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-20 transition duration-700`}></div>
                        
                        {/* Header: ID & Sector */}
                        <div className="p-8 pb-0 relative z-10 flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-70 ${style.accent}`}>
                                    {c.sector} Division
                                </span>
                                <span className="font-mono text-xs text-slate-600 group-hover:text-white transition-colors">{c.id}</span>
                            </div>
                            <div className={`p-3 rounded-2xl bg-black/40 border border-white/5 ${style.accent} backdrop-blur-md`}>
                                {React.cloneElement(c.icon as React.ReactElement<any>, { size: 24 })}
                            </div>
                        </div>

                        {/* Body: Title & Metrics */}
                        <div className="p-8 pt-6 flex-grow relative z-10">
                            <h3 className="text-3xl font-serif text-white mb-8 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                                {c.title}
                            </h3>
                            
                            {/* Distinctive Metric Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-black/40 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition">
                                     <div className={`text-3xl font-black ${style.accent} mb-1 tracking-tight`}>{c.result}</div>
                                     <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">{c.resultLabel}</div>
                                </div>
                                <div className="bg-black/40 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition">
                                     <div className="text-2xl font-bold text-white mb-1 tracking-tight font-mono">{c.revenue}</div>
                                     <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">{c.revenueLabel}</div>
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-6 group-hover:text-slate-300 transition-colors">
                                {c.desc}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                {c.tags.map((tag, t) => (
                                    <span key={t} className="text-[9px] uppercase font-bold px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer: Action */}
                        <div className="p-4 relative z-10">
                             <button onClick={handleAuditClick} className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group/btn bg-white/5 hover:bg-white text-white hover:text-black border border-white/10`}>
                                 Access Full Protocol <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                             </button>
                        </div>
                    </div>
                  );
              })}
          </div>
      </div>

      {/* 4. FINAL AUTHORITY CTA */}
      <div className="border-t border-slate-900 bg-gradient-to-b from-black to-slate-900 py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
              <Shield size={48} className="text-gold-500 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                  Are You Ready for <br/><span className="italic text-slate-500">Non-Linear Growth</span>?
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                  We don't sell services. We sell <strong className="text-white">outcome certainty</strong>. 
                  If you have a scalable product, we have the engine.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <Link to="/brand-films" className="bg-white text-black px-10 py-5 font-black text-sm uppercase tracking-widest hover:bg-gold-400 transition-colors shadow-2xl flex items-center gap-3 rounded-lg">
                      Initiate Partnership <ArrowRight size={16}/>
                  </Link>
                  <a href="mailto:corporate@prozenius.com" className="bg-transparent border border-slate-700 text-slate-300 px-10 py-5 font-black text-sm uppercase tracking-widest transition-colors hover:border-white hover:text-white flex items-center gap-3 rounded-lg">
                      <FileText size={16}/> Request Strategy Deck
                  </a>
              </div>
          </div>
      </div>

    </div>
  );
};

export default CaseStudies;