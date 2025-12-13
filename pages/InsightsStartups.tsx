import React, { useState } from 'react';
import { Rocket, Zap, ArrowRight, Lock, Target, TrendingUp, Users, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsStartups: React.FC = () => {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
      e.preventDefault();
      if(email) {
          setUnlocked(true);
          // In a real app, trigger API call here
      }
  };

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-300 selection:bg-blue-500 selection:text-white">
      
      {/* 1. HERO - VELOCITY TRACK */}
      <div className="pt-32 pb-24 relative overflow-hidden border-b border-blue-900/30">
         {/* Tech Background */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>

         <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-4xl mx-auto text-center">
                 <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-500/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                     <Rocket size={14} className="text-blue-400" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">Velocity Track: Active</span>
                 </div>
                 
                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                     SCALE FROM ZERO <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">TO BILLION</span>
                 </h1>
                 
                 <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                     Classified frameworks engineered for <strong className="text-white">Product-Market Fit</strong>, <strong className="text-white">Investor Neuro-Triggers</strong>, and <strong className="text-white">Category Creation</strong>.
                 </p>
                 
                 <div className="flex justify-center gap-6">
                     <button onClick={() => document.getElementById('frameworks')?.scrollIntoView({behavior:'smooth'})} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all hover:scale-105 flex items-center gap-3">
                         Access Protocols <ArrowRight size={16}/>
                     </button>
                 </div>
             </div>
         </div>
      </div>

      {/* 2. FRAMEWORKS GRID - TACTICAL CARDS */}
      <div id="frameworks" className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                  {
                      id: 'zero-to-one',
                      title: "Zero-to-One Dark Launch",
                      desc: "Achieve PMF and first 10,000 users with ₹0 ad spend using dark social engineering and psychological trigger stacking. Includes 23 launch sequences that bypass traditional channels.",
                      metric: "23 D2C startups hit ₹1Cr in 6mo.",
                      icon: <Zap className="text-yellow-400" />,
                      color: "border-yellow-500/50 hover:border-yellow-400"
                  },
                  {
                      id: 'investor-neuro',
                      title: "Investor Neuro-Trigger",
                      desc: "47 pitch deck formulas that rewire investor risk assessment, triggering FOMO and urgency biases. Includes slide-by-slide psychological architecture for 10x valuation jumps.",
                      metric: "Secured Series A for 12 portfolios.",
                      icon: <TrendingUp className="text-green-400" />,
                      color: "border-green-500/50 hover:border-green-400"
                  },
                  {
                      id: 'category-creation',
                      title: "Category Creation DNA",
                      desc: "Map unoccupied mental real estate in your industry and inject your startup into the gap before competitors detect it. Based on 55+ Indian brand transformations.",
                      metric: "Verified by 55+ Case Studies.",
                      icon: <Target className="text-purple-400" />,
                      color: "border-purple-500/50 hover:border-purple-400"
                  },
                  {
                      id: 'blind-spot',
                      title: "Incumbent Blind Spot",
                      desc: "Identify Fortune 500 vulnerabilities specific to Indian market conditions—where they're too slow or culturally disconnected. Exploit these gaps for 340% faster penetration.",
                      metric: "340% Faster Market Penetration.",
                      icon: <Users className="text-blue-400" />,
                      color: "border-blue-500/50 hover:border-blue-400"
                  }
              ].map((f, i) => (
                  <div key={i} className={`bg-slate-900/50 backdrop-blur-sm border ${f.color} p-8 rounded-3xl relative group overflow-hidden transition-all duration-500 hover:-translate-y-2`}>
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
                      
                      <div className="relative z-10">
                          <div className="flex justify-between items-start mb-6">
                              <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-800 shadow-xl group-hover:scale-110 transition duration-500">
                                  {React.cloneElement(f.icon as React.ReactElement<any>, { size: 28 })}
                              </div>
                              <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                  Module 0{i+1}
                              </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{f.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-6 border-b border-slate-800 pb-6">
                              {f.desc}
                          </p>
                          
                          <div className="flex items-center justify-between">
                              <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                                  <Check className="text-green-500" size={12}/> {f.metric}
                              </div>
                              <Link to={`/insights/framework/${f.id}`} className="text-blue-400 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all">
                                  Decrypt <ChevronRight size={12}/>
                              </Link>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* 3. UNLOCK GATE - THE VAULT */}
      <div className="py-24 border-t border-slate-900 bg-[#050b1e]">
          <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto bg-gradient-to-b from-slate-900 to-black border border-blue-900/30 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
                  {/* Glowing Lock */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-500 shadow-[0_0_20px_#3b82f6]"></div>
                  
                  <div className="relative z-10">
                      <div className="mb-8 flex justify-center">
                          <div className="w-20 h-20 bg-blue-900/20 rounded-full flex items-center justify-center border border-blue-500/50 animate-pulse">
                              <Lock size={32} className="text-blue-400"/>
                          </div>
                      </div>
                      
                      <h2 className="text-3xl font-black text-white mb-4">Unlock The Growth Vault</h2>
                      <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                          Join 423 Founders. Access the full library of 50+ scaling frameworks. <br/>
                          <span className="text-blue-400 font-bold">Free for 14 days, then ₹999/month.</span>
                      </p>
                      
                      {!unlocked ? (
                          <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
                              <input 
                                  type="email" 
                                  required
                                  placeholder="Corporate Email Address" 
                                  className="flex-grow p-4 bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none text-white transition-colors"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                              />
                              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition shadow-lg uppercase tracking-widest text-xs whitespace-nowrap">
                                  Unlock 1 Free
                              </button>
                          </form>
                      ) : (
                          <div className="bg-green-900/20 border border-green-900/50 text-green-400 p-4 rounded-lg font-bold mb-8 animate-fade-in">
                              <Check className="inline mr-2" size={18}/> Access Granted. Check your inbox.
                          </div>
                      )}
                      
                      <button className="w-full sm:w-auto border border-slate-700 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs transition flex items-center justify-center gap-3 mx-auto">
                         <Lock size={14} /> Subscribe Full Access (₹999/mo)
                      </button>
                      <p className="text-[10px] text-slate-600 mt-4 uppercase tracking-widest">Secured by Razorpay • Cancel anytime</p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default InsightsStartups;