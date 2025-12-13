import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Factory, ArrowRight, BrainCircuit, PenTool, Radar, Lock, Zap, Shield, ChevronRight, FileText, Database, Target } from 'lucide-react';

const InsightsHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-300 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO - INTELLIGENCE COMMAND */}
      <div className="pt-32 pb-24 relative overflow-hidden border-b border-slate-900">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
            
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 shadow-2xl">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase font-mono">
                    System Access: Granted
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-sans text-white mb-8 leading-[0.9] tracking-tighter">
                STRATEGIC <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-600">INTELLIGENCE HUB</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                Classified growth frameworks for <span className="text-white font-medium">Asymmetric Warfare</span>. <br/>
                Select your operational theater to decrypt specific scaling protocols.
            </p>

            <div className="flex justify-center gap-8 text-xs font-mono text-slate-600 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Database size={12}/> 12,400+ Data Points</span>
                <span className="flex items-center gap-2"><Target size={12}/> 98% Success Rate</span>
            </div>
        </div>
      </div>

      {/* 2. THE DUAL PATH SELECTOR - CARDS */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* PATH 1: STARTUP FOUNDERS (VELOCITY TRACK) */}
              <Link to="/insights/startups" className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                          <div className="w-16 h-16 bg-blue-950/50 border border-blue-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                              <Rocket size={32} className="text-blue-400" />
                          </div>
                          <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">
                              Velocity Track
                          </div>
                      </div>
                      
                      <h2 className="text-3xl font-serif text-white mb-4 group-hover:text-blue-200 transition-colors">Startup Founders</h2>
                      <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                          Engineered for <strong className="text-white">Zero-to-One</strong> scaling. Access protocols for PMF verification, investor neuro-triggers, and rapid category creation.
                      </p>
                      
                      <div className="border-t border-slate-800 pt-6 flex items-center justify-between text-blue-400 text-sm font-bold uppercase tracking-wider">
                          <span>Decrypt Protocols</span>
                          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
                      </div>
                  </div>
              </Link>

              {/* PATH 2: MSME OWNERS (LEGACY TRACK) */}
              <Link to="/insights/msme" className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-10 overflow-hidden hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                          <div className="w-16 h-16 bg-gold-950/50 border border-gold-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                              <Factory size={32} className="text-gold-400" />
                          </div>
                          <div className="bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">
                              Legacy Track
                          </div>
                      </div>
                      
                      <h2 className="text-3xl font-serif text-white mb-4 group-hover:text-gold-200 transition-colors">MSME & Vyapaar</h2>
                      <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                          Engineered for <strong className="text-white">Dominance & Stability</strong>. Unlock strategies for digital transformation, local market monopoly, and operational automation.
                      </p>
                      
                      <div className="border-t border-slate-800 pt-6 flex items-center justify-between text-gold-400 text-sm font-bold uppercase tracking-wider">
                          <span>Decrypt Protocols</span>
                          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
                      </div>
                  </div>
              </Link>

          </div>
      </div>

      {/* 3. UNIVERSAL ARSENAL - CROSS SECTOR FRAMEWORKS */}
      <div className="py-24 bg-slate-950 relative border-t border-slate-900">
          <div className="container mx-auto px-4 relative z-10">
              
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-900 pb-8 gap-6">
                  <div>
                      <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Universal Arsenal</span>
                      <h2 className="text-4xl md:text-5xl font-serif text-white">Cross-Sector <span className="text-slate-600 italic">Frameworks</span></h2>
                  </div>
                  <div className="text-right">
                      <p className="text-slate-500 text-sm max-w-xs ml-auto">
                          Fundamental psychological and operational levers applicable to any industry.
                      </p>
                  </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  
                  {/* FRAMEWORK 1 */}
                  <Link to="/contact" className="group bg-[#0a0f1e] border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition"></div>
                      <div className="mb-6 flex items-center justify-between">
                          <div className="p-3 bg-slate-900 rounded-lg text-purple-500 border border-slate-800 group-hover:border-purple-500/30 transition">
                              <BrainCircuit size={24} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-800 px-2 py-1 rounded">Psychology</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">The Dark DNA Architecture™</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          How Fortune 500 brands secretly manipulate choice architecture. Learn to trigger subconscious purchasing decisions.
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold text-purple-500 uppercase tracking-widest group-hover:gap-3 transition-all">
                          Access File <ChevronRight size={14} />
                      </div>
                  </Link>

                  {/* FRAMEWORK 2 */}
                  <Link to="/contact" className="group bg-[#0a0f1e] border border-slate-800 p-8 rounded-2xl hover:border-pink-500/50 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition"></div>
                      <div className="mb-6 flex items-center justify-between">
                          <div className="p-3 bg-slate-900 rounded-lg text-pink-500 border border-slate-800 group-hover:border-pink-500/30 transition">
                              <PenTool size={24} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-800 px-2 py-1 rounded">Copywriting</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">Proneurotic Copywriting</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          87 headline formulas that bypass rational thought. Write ads that feel like internal monologues of your customer.
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold text-pink-500 uppercase tracking-widest group-hover:gap-3 transition-all">
                          Access File <ChevronRight size={14} />
                      </div>
                  </Link>

                  {/* FRAMEWORK 3 */}
                  <Link to="/contact" className="group bg-[#0a0f1e] border border-slate-800 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition"></div>
                      <div className="mb-6 flex items-center justify-between">
                          <div className="p-3 bg-slate-900 rounded-lg text-red-500 border border-slate-800 group-hover:border-red-500/30 transition">
                              <Radar size={24} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-800 px-2 py-1 rounded">Strategy</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">Market Weakness Radar</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          Real-time competitor vulnerability tracking systems. Identify gaps in their armor and strike within 48 hours.
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest group-hover:gap-3 transition-all">
                          Access File <ChevronRight size={14} />
                      </div>
                  </Link>

              </div>
          </div>
      </div>

      {/* 4. FINAL CTA - COMMAND CENTER */}
      <div className="bg-[#020617] py-24 border-t border-slate-900">
          <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-12 rounded-3xl relative overflow-hidden group hover:border-gold-600/30 transition duration-500">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                  
                  <div className="relative z-10">
                      <h2 className="text-3xl font-serif text-white mb-4">Request Custom Intelligence</h2>
                      <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                          Need a bespoke strategy tailored to your specific market conditions? Our analysts can build a custom Dark DNA profile for your brand.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-6 justify-center">
                          <Link to="/contact" className="bg-gold-600 hover:bg-gold-500 text-slate-900 px-8 py-4 rounded-lg font-black uppercase tracking-widest text-xs transition shadow-lg flex items-center justify-center gap-2">
                              <Shield size={16}/> Initialize Request
                          </Link>
                          <a href="mailto:intelligence@prozenius.media" className="border border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs transition flex items-center justify-center gap-2">
                              <FileText size={16}/> Email Brief
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default InsightsHub;