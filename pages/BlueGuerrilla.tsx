import React from 'react';
import { Target, Zap, Shield, MessageCircle, UserCheck, Users, AlertTriangle, Crosshair, ArrowRight, Lock, TrendingUp, BrainCircuit, Scale, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlueGuerrilla: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pb-24 font-sans text-slate-200 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <div className="pt-32 pb-24 px-4 relative overflow-hidden border-b border-gold-900/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <div className="inline-block mb-8 px-4 py-1.5 border border-gold-500/30 rounded-full bg-slate-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                <span className="text-gold-400 text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                    MarketApex Protocol
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
                The ProZenius <span className="italic text-gold-500">MarketApex</span> <br />
                Brand Performance Campaign
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed border-b border-slate-800 pb-12 font-serif italic">
                "We don't seek reach. We engineer revenue. A tactical deployment of Dark DNA to secure immediate ROI."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 text-left">
                 <div className="bg-slate-900/50 p-6 border border-slate-800 rounded-xl">
                    <div className="text-xs text-gold-500 font-bold uppercase tracking-widest mb-2">Execution Time</div>
                    <div className="text-3xl font-serif text-white">5 Days</div>
                 </div>
                 <div className="bg-slate-900/50 p-6 border border-slate-800 rounded-xl">
                    <div className="text-xs text-green-500 font-bold uppercase tracking-widest mb-2">Average ROI</div>
                    <div className="text-3xl font-serif text-white">340% <span className="text-sm text-slate-500">/ 30 Days</span></div>
                 </div>
                 <div className="bg-slate-900/50 p-6 border border-slate-800 rounded-xl">
                    <div className="text-xs text-blue-500 font-bold uppercase tracking-widest mb-2">Legal Risk</div>
                    <div className="text-3xl font-serif text-white">Zero</div>
                 </div>
            </div>
        </div>
      </div>

      {/* 2. THE CORE DIFFERENCE - Editorial Comparison */}
      <div className="container mx-auto px-4 py-24 border-b border-slate-900">
          <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Critical Distinction</span>
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                          Performance vs. <br/><span className="text-slate-600">Social Media</span>
                      </h2>
                      <p className="text-slate-400 text-lg leading-relaxed mb-8">
                          Most brands confuse "noise" with "signal". Understanding the core difference between vanity metrics and engineered revenue is the first step to dominance.
                      </p>
                  </div>
                  
                  <div className="space-y-8">
                      {/* Brand Performance Card */}
                      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-gold-500/30 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl"></div>
                          <h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-3">
                              <Target className="text-gold-500"/> Brand Performance
                          </h3>
                          <p className="text-slate-400 leading-relaxed text-sm mb-4">
                              Engineered for immediate, measurable ROI—conversions, sales, leads. Every rupee is tracked to a specific outcome. The goal is <strong className="text-white">revenue</strong>, not reach. 
                          </p>
                          <p className="text-slate-400 leading-relaxed text-sm border-t border-slate-800 pt-4 mt-4">
                              Uses <span className="text-gold-400 italic">Dark DNA sequencing</span> to exploit psychological triggers that bypass rational thought and drive action within 24-72 hours.
                          </p>
                      </div>

                      {/* Social Media Card */}
                      <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 relative overflow-hidden grayscale hover:grayscale-0 transition duration-500">
                          <h3 className="text-2xl font-serif text-slate-300 mb-4 flex items-center gap-3">
                              <MessageCircle className="text-slate-500"/> Social Media
                          </h3>
                          <p className="text-slate-500 leading-relaxed text-sm mb-4">
                              Focuses on visibility, engagement, and community building. The goal is awareness, likes, shares, comments. ROI is indirect and long-term.
                          </p>
                          <p className="text-slate-500 leading-relaxed text-sm border-t border-slate-800 pt-4 mt-4">
                              These campaigns tell stories, build trust, and create brand recall over months. Necessary, but slow.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 3. THE 5-ACTION EXECUTION ORDER */}
      <div className="container mx-auto px-4 py-24">
         <div className="max-w-6xl mx-auto">
             
             <div className="mb-24 text-center">
                 <h2 className="text-3xl font-bold text-slate-300 mb-4 uppercase tracking-widest">The 5-Action Execution Order</h2>
                 <p className="text-slate-500 max-w-2xl mx-auto font-serif italic">
                     ProZenius MarketApex Protocol
                 </p>
             </div>

             <div className="relative space-y-24">
                 {/* Vertical Connector Line (Desktop) */}
                 <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent transform -translate-x-1/2"></div>

                 {/* ACTION 1 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-gold-500 font-black text-6xl opacity-20 absolute -top-10 right-0 md:right-12 z-0">01</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Hour 0-24</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Dark DNA Extraction</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Scan your target market's unconscious triggers—fears, desires, biases they can't articulate. Use AI tools to analyze 10,000+ competitor data points and identify the psychological void your product can own.
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 md:border-l-0 md:border-r-2 border-gold-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">"EdTech client discovered parents feared 'child's future shame' more than 'education quality'."</div>
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.1)] relative z-10">
                             <BrainCircuit size={40} className="text-gold-500" />
                         </div>
                     </div>
                 </div>

                 {/* ACTION 2 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="flex justify-center md:justify-end order-2 md:order-1">
                         <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.1)] relative z-10">
                             <Scale size={40} className="text-indigo-500" />
                         </div>
                     </div>
                     <div className="md:text-left order-1 md:order-2">
                         <div className="text-indigo-500 font-black text-6xl opacity-20 absolute -top-10 left-0 md:left-12 z-0">02</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">Hour 24-48</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Psychological Wedge Engineering</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Create performance assets that position your product as the *only* relief for the Dark DNA trigger. Not better—only.
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 border-indigo-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">Fintech film didn't say "easy loans"—it said "stop feeling like a failure to your family." <span className="text-green-400">47% Conversion.</span></div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* ACTION 3 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-red-500 font-black text-6xl opacity-20 absolute -top-10 right-0 md:right-12 z-0">03</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Hour 48-72</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Dark Social Infiltration</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Deploy assets into 500+ WhatsApp/Telegram groups where targets already discuss their anxiety. Use "insider leak" mechanics—content that feels contraband, not promotional.
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 md:border-l-0 md:border-r-2 border-red-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">D2C brand got 3,400 users in 72h with ₹0 ad spend. Sharing signaled "I care about you".</div>
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.1)] relative z-10">
                             <Users size={40} className="text-red-500" />
                         </div>
                     </div>
                 </div>

                 {/* ACTION 4 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="flex justify-center md:justify-end order-2 md:order-1">
                         <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.1)] relative z-10">
                             <Activity size={40} className="text-emerald-500" />
                         </div>
                     </div>
                     <div className="md:text-left order-1 md:order-2">
                         <div className="text-emerald-500 font-black text-6xl opacity-20 absolute -top-10 left-0 md:left-12 z-0">04</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">Hour 72-96</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Real-Time Performance Looping</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Track every micro-conversion. AI automatically generates personalized follow-up content deepening the psychological wedge. Each interaction makes competitors feel irrelevant.
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 border-emerald-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">Automotive SaaS saw 47% conversion increase.</div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* ACTION 5 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-purple-500 font-black text-6xl opacity-20 absolute -top-10 right-0 md:right-12 z-0">05</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-2">Hour 96-120</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Category Ownership Lock-In</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Deploy dark pattern testimonials and engineered social proof that makes alternatives psychologically uncomfortable. 
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 md:border-l-0 md:border-r-2 border-purple-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">Fitness brand achieved 340% market capture. Not using them felt like "missing out on science".</div>
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.1)] relative z-10">
                             <Lock size={40} className="text-purple-500" />
                         </div>
                     </div>
                 </div>

             </div>
         </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to <span className="text-gold-500 italic">Execute the Protocol</span>?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                  This level of warfare is not for everyone. It requires the will to dominate, not just compete.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <Link to="/ai-tools" className="inline-flex items-center justify-center gap-3 bg-gold-600 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-500 transition shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                      Access Dark DNA Tools <ArrowRight size={20}/>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-3 border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/5 transition hover:text-white hover:border-white">
                      Initiate Ambush Campaign <Lock size={20}/>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BlueGuerrilla;