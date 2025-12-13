import React, { useState } from 'react';
import { Factory, MapPin, Database, Shield, ArrowRight, Lock, CheckCircle, ChevronRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsMSME: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    const msg = encodeURIComponent("I want to subscribe to the MSME Vault Insights Full Access Plan (₹1999/mo). Please send payment link.");
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };
  
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-slate-300 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO - LEGACY TRACK */}
      <div className="pt-32 pb-24 relative overflow-hidden border-b border-gold-900/30">
         {/* Industrial Background */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-900/20 via-[#050505] to-[#050505]"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         
         <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-4xl mx-auto text-center">
                 <div className="inline-flex items-center gap-2 bg-gold-950/50 border border-gold-500/30 backdrop-blur-md px-4 py-1.5 rounded-sm mb-8 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                     <Factory size={14} className="text-gold-500" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Legacy Track: Enterprise</span>
                 </div>
                 
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tighter">
                     BUILD AN EMPIRE <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-700 italic">THAT LASTS</span>
                 </h1>
                 
                 <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                     Operational blueprints for <strong className="text-white">Digital Transformation</strong>, <strong className="text-white">Local Dominance</strong>, and <strong className="text-white">Generational Wealth</strong>.
                 </p>
                 
                 <div className="flex justify-center gap-6">
                     <button onClick={() => document.getElementById('blueprints')?.scrollIntoView({behavior:'smooth'})} className="bg-gold-600 hover:bg-gold-500 text-black px-8 py-4 rounded-sm font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all hover:scale-105 flex items-center gap-3 border border-gold-400">
                         View Blueprints <ArrowRight size={16}/>
                     </button>
                 </div>
             </div>
         </div>
      </div>

      {/* 2. BLUEPRINTS GRID - INDUSTRIAL CARDS */}
      <div id="blueprints" className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                  {
                      id: 'digital-transform',
                      title: "Digital Transformation",
                      desc: "How MSMEs can modernize operations without disrupting cash flow. Step-by-step guide to automating sales and customer acquisition using AI tools.",
                      metric: "500% ROI for offline businesses.",
                      icon: <Database className="text-blue-400" />,
                      color: "border-blue-900 hover:border-blue-500"
                  },
                  {
                      id: 'local-dominance',
                      title: "Local Market Monopoly",
                      desc: "31 hyper-local advertising formulas that make your MSME the default choice within 5 km radius. 'Dark reputation' tactics that build trust instantly.",
                      metric: "Dominates 5km radius in 90 days.",
                      icon: <MapPin className="text-red-500" />,
                      color: "border-red-900 hover:border-red-500"
                  },
                  {
                      id: 'budget-guerrilla',
                      title: "Budget Guerrilla Ops",
                      desc: "Launch products, run promotions, and steal market share from larger competitors using less than ₹99,999/month. Real examples from 55+ Indian MSMEs.",
                      metric: "Verified by 55+ Case Studies.",
                      icon: <Shield className="text-green-500" />,
                      color: "border-green-900 hover:border-green-500"
                  },
                  {
                      id: 'competitor-scan',
                      title: "Competitor Scanner",
                      desc: "Real-time tracking of local competitor weaknesses—pricing gaps, service failures—and automated strategies to capture their market share within 72 hours.",
                      metric: "Capture share within 72 hours.",
                      icon: <CheckCircle className="text-purple-400" />,
                      color: "border-purple-900 hover:border-purple-500"
                  }
              ].map((f, i) => (
                  <div key={i} className={`bg-slate-900 border ${f.color} p-8 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1`}>
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-700 group-hover:border-white transition-colors"></div>
                      
                      <div className="relative z-10">
                          <div className="flex justify-between items-start mb-8">
                              <div className="w-14 h-14 bg-black border border-slate-800 flex items-center justify-center shadow-lg">
                                  {React.cloneElement(f.icon as React.ReactElement<any>, { size: 28 })}
                              </div>
                              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-1">
                                  File #MSME-{100+i}
                              </div>
                          </div>
                          
                          <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{f.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-8 border-l-2 border-slate-800 pl-4 font-light">
                              {f.desc}
                          </p>
                          
                          <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                              <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
                                  <Briefcase size={12} className="text-gold-500"/> {f.metric}
                              </div>
                              <Link to={`/insights/framework/${f.id}`} className="text-white hover:text-gold-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all">
                                  Open File <ChevronRight size={12}/>
                              </Link>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* 3. UNLOCK GATE - THE ARCHIVE */}
      <div className="py-24 border-t border-slate-900 bg-black">
          <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto bg-slate-900 border-2 border-gold-900/30 p-12 text-center relative shadow-2xl">
                  {/* Decorative Rivets */}
                  <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-slate-700"></div>
                  
                  <div className="relative z-10">
                      <div className="mb-8 flex justify-center">
                          <div className="w-20 h-20 bg-gold-900/10 rounded-full flex items-center justify-center border border-gold-500/50">
                              <Lock size={32} className="text-gold-500"/>
                          </div>
                      </div>
                      
                      <h2 className="text-3xl font-serif text-white mb-4">Access The MSME Archive</h2>
                      <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                          Join 824 Business Owners. Get weekly blueprints for stability and scale. <br/>
                          <span className="text-gold-500 font-bold">Free for 2 days, then ₹1999/month.</span>
                      </p>
                      
                      <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8" onSubmit={(e) => {e.preventDefault(); alert("Welcome pack sent!");}}>
                          <input 
                              type="email" 
                              required
                              placeholder="Business Email" 
                              className="flex-grow p-4 bg-black border border-slate-700 focus:border-gold-500 focus:outline-none text-white transition-colors font-serif placeholder-slate-600"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                          />
                          <button type="submit" className="bg-gold-600 hover:bg-gold-500 text-black font-bold px-8 py-4 transition shadow-lg uppercase tracking-widest text-xs whitespace-nowrap border border-gold-400">
                              Get 1 Free
                          </button>
                      </form>
                      
                      <button 
                        onClick={handleSubscribe}
                        className="w-full sm:w-auto border border-slate-700 hover:border-gold-500 text-slate-400 hover:text-white px-8 py-4 font-bold uppercase tracking-widest text-xs transition flex items-center justify-center gap-3 mx-auto"
                      >
                         <Lock size={14} /> Subscribe Full Access (₹1999/mo)
                      </button>
                      <p className="text-[10px] text-slate-600 mt-4 uppercase tracking-widest">GST Invoice Available • Secure Payment</p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default InsightsMSME;