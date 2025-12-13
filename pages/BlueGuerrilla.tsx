import React, { useState } from 'react';
import { Target, Zap, Shield, MessageCircle, UserCheck, Users, AlertTriangle, Crosshair, ArrowRight, Lock, TrendingUp, BrainCircuit, Scale, Activity, Ticket, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlueGuerrilla: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const couponCode = "PROSCALE20";

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaim = () => {
      const msg = encodeURIComponent(`🔥 I want to deploy Brand Performance Marketing.\n\n🎟️ Coupon Code: ${couponCode} (Claiming 20% Off Setup)`);
      window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-slate-950 min-h-screen pb-24 font-sans text-slate-200 selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <div className="pt-32 pb-24 px-4 relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-black">
             <img 
                src="https://images.unsplash.com/photo-1605218427306-0343d6114e44?q=80&w=2670&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay filter blur-[2px]"
                alt="Red Tech Background"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-red-950/20"></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <div className="inline-block mb-8 px-6 py-2 border border-red-500/50 rounded-full bg-slate-900/80 backdrop-blur-md shadow-[0_0_25px_rgba(220,38,38,0.3)]">
                <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_#dc2626]"></span>
                    Identity Shift Protocol
                </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[0.9] tracking-tighter drop-shadow-2xl">
                "Social Media Campaigns" <span className="text-slate-600 line-through decoration-red-600 decoration-4 opacity-70">Are Dead.</span> <br />
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gold-500 to-red-600 font-sans font-black italic tracking-normal">Brand Performance Marketing.</span>
            </h1>
            
            {/* THE DEFINITION BLOCK - RED GOLD STYLE */}
            <div className="grid md:grid-cols-2 gap-0 text-left max-w-5xl mx-auto bg-slate-900/80 border border-red-900/50 rounded-2xl backdrop-blur-xl mb-16 shadow-[0_0_50px_rgba(220,38,38,0.1)] relative overflow-hidden group hover:border-red-600/50 transition duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-gold-500 to-red-600"></div>
                
                <div className="p-10 border-b md:border-b-0 md:border-r border-red-900/30 relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Target size={100} className="text-red-600" />
                    </div>
                    <h3 className="text-red-500 font-black uppercase tracking-[0.2em] text-sm mb-4 flex items-center gap-2">
                        <Target size={16}/> What Is It?
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed font-light">
                        It is the shift from <strong>Vanity</strong> (Likes, Shares) to <strong>Sanity</strong> (Revenue, ROI). 
                        We don't post to entertain; we post to <span className="text-white font-bold border-b border-red-500">extract liquidity</span>. 
                        It is a military-grade content operation designed solely to move product.
                    </p>
                </div>
                <div className="p-10 relative bg-gradient-to-br from-slate-900 to-red-950/20">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Zap size={100} className="text-gold-500" />
                    </div>
                    <h3 className="text-gold-500 font-black uppercase tracking-[0.2em] text-sm mb-4 flex items-center gap-2">
                        <Zap size={16}/> How We Achieve It
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed font-light">
                        By injecting <strong>Dark DNA™</strong> into your content. 
                        We replace "creative ideas" with <span className="text-white font-bold border-b border-gold-500">psychological triggers</span> (Scarcity, Status, Fear) that bypass logic filters and force an immediate transactional response.
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 text-left">
                 <div className="bg-slate-900/50 p-6 border border-red-900/30 rounded-xl hover:border-red-600/50 transition duration-300 group">
                    <div className="text-xs text-red-500 font-bold uppercase tracking-widest mb-2 group-hover:text-red-400">Execution Time</div>
                    <div className="text-3xl font-black text-white font-sans">5 Days</div>
                 </div>
                 <div className="bg-slate-900/50 p-6 border border-red-900/30 rounded-xl hover:border-gold-500/50 transition duration-300 group">
                    <div className="text-xs text-gold-600 font-bold uppercase tracking-widest mb-2 group-hover:text-gold-400">Average ROI</div>
                    <div className="text-3xl font-black text-white font-sans">340% <span className="text-sm text-slate-500 font-normal">/ 30 Days</span></div>
                 </div>
                 <div className="bg-slate-900/50 p-6 border border-red-900/30 rounded-xl hover:border-red-600/50 transition duration-300 group">
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2 group-hover:text-slate-300">Legal Risk</div>
                    <div className="text-3xl font-black text-white font-sans">Zero</div>
                 </div>
            </div>
        </div>
      </div>

      {/* 2. THE CORE DIFFERENCE - Editorial Comparison */}
      <div className="container mx-auto px-4 py-24 border-b border-slate-900">
          <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Critical Distinction</span>
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                          Performance vs. <br/><span className="text-slate-600">Social Media</span>
                      </h2>
                      <p className="text-slate-400 text-lg leading-relaxed mb-8">
                          Most brands confuse "noise" with "signal". Understanding the core difference between vanity metrics and engineered revenue is the first step to dominance.
                      </p>
                  </div>
                  
                  <div className="space-y-8">
                      {/* Brand Performance Card */}
                      <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-red-600 relative overflow-hidden group shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition"></div>
                          <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                              <Target className="text-red-500"/> Brand Performance
                          </h3>
                          <p className="text-slate-400 leading-relaxed text-sm mb-4">
                              Engineered for immediate, measurable ROI—conversions, sales, leads. Every rupee is tracked to a specific outcome. The goal is <strong className="text-white">revenue</strong>, not reach. 
                          </p>
                          <p className="text-slate-400 leading-relaxed text-sm border-t border-slate-800 pt-4 mt-4">
                              Uses <span className="text-red-400 italic font-bold">Dark DNA sequencing</span> to exploit psychological triggers that bypass rational thought and drive action within 24-72 hours.
                          </p>
                      </div>

                      {/* Social Media Card */}
                      <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 relative overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500">
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
                 <h2 className="text-3xl font-black text-slate-200 mb-4 uppercase tracking-widest">The 5-Action Execution Order</h2>
                 <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto rounded-full"></div>
                 <p className="text-slate-500 max-w-2xl mx-auto font-serif italic mt-6">
                     ProZenius MarketApex Protocol
                 </p>
             </div>

             <div className="relative space-y-24">
                 {/* Vertical Connector Line (Desktop) */}
                 <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-900 to-transparent transform -translate-x-1/2"></div>

                 {/* ACTION 1 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-red-600 font-black text-8xl opacity-10 absolute -top-10 right-0 md:right-12 z-0">01</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Hour 0-24</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Dark DNA Extraction</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Scan your target market's unconscious triggers—fears, desires, biases they can't articulate. Use AI tools to analyze 10,000+ competitor data points.
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 md:border-l-0 md:border-r-2 border-red-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">"Parents feared 'child's future shame' more than 'education quality'."</div>
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-red-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <BrainCircuit size={40} className="text-red-500" />
                         </div>
                     </div>
                 </div>

                 {/* ACTION 2 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="flex justify-center md:justify-end order-2 md:order-1">
                         <div className="w-24 h-24 bg-slate-900 border border-gold-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <Scale size={40} className="text-gold-500" />
                         </div>
                     </div>
                     <div className="md:text-left order-1 md:order-2">
                         <div className="text-gold-600 font-black text-8xl opacity-10 absolute -top-10 left-0 md:left-12 z-0">02</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Hour 24-48</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Wedge Engineering</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Create performance assets that position your product as the *only* relief for the Dark DNA trigger. Not better—only.
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 border-gold-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">"Stop feeling like a failure to your family." <span className="text-green-400">47% Conversion.</span></div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* ACTION 3 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-red-600 font-black text-8xl opacity-10 absolute -top-10 right-0 md:right-12 z-0">03</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Hour 48-72</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Dark Social Infiltration</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Deploy assets into 500+ WhatsApp/Telegram groups. Use "insider leak" mechanics—content that feels contraband, not promotional.
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 md:border-l-0 md:border-r-2 border-red-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">3,400 users in 72h with ₹0 ad spend via viral sharing.</div>
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-red-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <Users size={40} className="text-red-500" />
                         </div>
                     </div>
                 </div>

                 {/* ACTION 4 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="flex justify-center md:justify-end order-2 md:order-1">
                         <div className="w-24 h-24 bg-slate-900 border border-gold-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <Activity size={40} className="text-gold-500" />
                         </div>
                     </div>
                     <div className="md:text-left order-1 md:order-2">
                         <div className="text-gold-600 font-black text-8xl opacity-10 absolute -top-10 left-0 md:left-12 z-0">04</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Hour 72-96</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Performance Looping</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Track every micro-conversion. AI automatically generates personalized follow-up content deepening the wedge.
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 border-gold-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">Automotive SaaS saw 47% conversion increase.</div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* ACTION 5 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-red-600 font-black text-8xl opacity-10 absolute -top-10 right-0 md:right-12 z-0">05</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Hour 96-120</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Category Lock-In</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Deploy dark pattern testimonials and engineered social proof that makes alternatives psychologically uncomfortable. 
                             </p>
                             <div className="bg-slate-900 p-4 border-l-2 md:border-l-0 md:border-r-2 border-red-500 inline-block">
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Live Case Data</div>
                                 <div className="text-white text-sm">Fitness brand achieved 340% market capture.</div>
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-red-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <Lock size={40} className="text-red-500" />
                         </div>
                     </div>
                 </div>

             </div>
         </div>
      </div>

      {/* 4. COUPON CODE SECTION - THE RED TICKET */}
      <div className="bg-gradient-to-b from-slate-950 to-red-950/20 py-24 border-t border-slate-900 relative">
          <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-slate-900 border-2 border-dashed border-red-600/50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_60px_rgba(220,38,38,0.15)] group">
                  {/* Background noise */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                      
                      {/* Left: Text */}
                      <div className="text-center md:text-left">
                          <h3 className="text-red-500 font-black uppercase tracking-[0.2em] text-sm mb-2 animate-pulse">Limited Deployment Incentive</h3>
                          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                              GET <span className="text-gold-500">20% OFF</span> <br/>
                              YOUR FIRST CAMPAIGN
                          </h2>
                          <p className="text-slate-400 max-w-md">
                              Use this classified code during your WhatsApp consultation to unlock immediate priority pricing.
                          </p>
                      </div>

                      {/* Right: The Ticket */}
                      <div className="flex flex-col items-center">
                          <div 
                            className="bg-black border border-gold-500/50 rounded-lg p-6 mb-6 relative group-hover:scale-105 transition duration-500 cursor-pointer"
                            onClick={copyCode}
                            title="Click to Copy"
                          >
                              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 rounded-full border-r border-red-600/50"></div>
                              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 rounded-full border-l border-red-600/50"></div>
                              
                              <p className="text-slate-500 text-[10px] uppercase tracking-widest text-center mb-1">Access Code</p>
                              <div className="text-3xl font-mono font-bold text-white tracking-widest flex items-center gap-3">
                                  {couponCode} 
                                  {copied ? <Check size={20} className="text-green-500"/> : <Copy size={20} className="text-slate-600 hover:text-white transition"/>}
                              </div>
                          </div>

                          <button 
                              onClick={handleClaim}
                              className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full uppercase tracking-widest text-xs"
                          >
                              <Ticket size={18}/> Claim on WhatsApp
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 5. FINAL CTA */}
      <div className="bg-slate-950 py-16 border-t border-slate-900 text-center">
          <div className="container mx-auto px-4">
              <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest">Ready to dominate?</p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <Link to="/ai-tools" className="inline-flex items-center justify-center gap-3 text-gold-500 hover:text-white transition font-bold uppercase tracking-widest text-sm border-b border-gold-500 pb-1 hover:border-white">
                      Access Dark DNA Tools <ArrowRight size={16}/>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-3 text-red-500 hover:text-white transition font-bold uppercase tracking-widest text-sm border-b border-red-500 pb-1 hover:border-white">
                      Initiate Ambush Campaign <Lock size={16}/>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BlueGuerrilla;