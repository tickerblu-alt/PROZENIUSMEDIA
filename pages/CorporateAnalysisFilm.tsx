import React, { useState } from 'react';
import {  Smartphone, ShieldAlert, Zap, Target, Lock, ArrowRight, Video, Fingerprint, Layers, Radio, FileWarning, CheckCircle, BarChart3, Repeat, Crown, Gem, Sword } from 'lucide-react';

const CorporateAnalysisFilm: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('Drifto Pack (₹60,000)');

  const handleSelectPackage = (pkg: string) => {
    setSelectedPackage(pkg);
    // Smooth scroll to the contact form so the user knows what to do next
    setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const sector = formData.get('sector') as string;
    const pkg = formData.get('package') as string;
    
    const msg = encodeURIComponent(`👑 ELITE SUPERBRAND INQUIRY\n\nPackage: ${pkg}\nBrand: ${businessName}\nEmail: ${email}\nSector: ${sector}`);
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-black min-h-screen font-sans text-slate-300 selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION - ELITE SUPERBRAND */}
      <div className="pt-36 pb-24 px-4 relative overflow-hidden border-b border-red-900/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* Integrated Relevant Image - Dynamic Social Network */}
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20 mix-blend-color-dodge" alt="Social Media Network"/>
             <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
             <div className="inline-flex items-center gap-3 border border-red-900/50 bg-slate-900/80 backdrop-blur-md px-5 py-2 mb-10 rounded-sm">
                <Crown size={14} className="text-gold-500 animate-pulse" />
                <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase">
                    Global Authority Status
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-10 leading-[0.9] tracking-tighter">
                Elite Social Media <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gold-500 to-red-700">Superbrand Package</span>
            </h1>

            <div className="max-w-4xl mx-auto border-x border-red-900/30 bg-slate-900/30 p-8 md:p-12 mb-12 backdrop-blur-sm">
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed font-serif italic">
                    "In a digital ocean of noise, competence is invisible. Only <strong className="text-white">Aesthetics</strong> and <strong className="text-white">Authority</strong> command attention. This is not a 'service'. It is a military-grade brand elevation protocol designed to install your company as the undisputed <strong className="text-red-500 not-italic">King of your category</strong>."
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                <button onClick={() => document.getElementById('deployment')?.scrollIntoView({behavior:'smooth'})} className="bg-gold-600 hover:bg-gold-500 text-white px-10 py-5 font-black uppercase tracking-widest text-sm transition shadow-[0_0_30px_rgba(234,179,8,0.3)] rounded-lg flex items-center gap-3">
                    <Gem size={16}/> View Elite Plans
                </button>
                <div className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
                    <ShieldAlert size={16}/> For Market Leaders Only
                </div>
            </div>
        </div>
      </div>

      {/* 2. THE SUPERBRAND PROTOCOL - 5 POINTS */}
      <div className="container mx-auto px-4 py-32 border-b border-slate-900">
         <div className="max-w-6xl mx-auto">
             
             <div className="mb-24 text-center">
                 <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">The Superbrand Protocol</h2>
                 <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                 <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
                     We don't just "post content". We execute a 5-stage dominance strategy designed to obliterate competition perception.
                 </p>
             </div>

             <div className="space-y-32">
                 
                 {/* Point 1 */}
                 <div className="flex flex-col md:flex-row gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -mr-4">01</div>
                             <Target size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">The Authority Audit</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Before cameras roll, we deconstruct your current market perception. We identify the precise gap between "Just a Business" and "Industry Icon" and build the bridge.
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pl-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 1</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Identity Deconstruction</h2>
                         <p className="text-slate-400">We find your 'Dark DNA'—the psychological hook that makes you unforgettable.</p>
                     </div>
                 </div>

                 {/* Point 2 */}
                 <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 left-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -ml-4">02</div>
                             <Video size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Aesthetic Sovereignty</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 We establish a visual language that screams "Market Leader". High-end color grading, proprietary soundscapes, and cinematic framing that separates you from the amateur noise.
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pr-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 2</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Cinematic Supremacy</h2>
                         <p className="text-slate-400">Perception is reality. We upgrade your digital reality to 'World Class'.</p>
                     </div>
                 </div>

                 {/* Point 3 */}
                 <div className="flex flex-col md:flex-row gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -mr-4">03</div>
                             <Sword size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Narrative Warfare</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 We stop talking about "features". We start talking about "beliefs". Superbrands lead movements; they don't just sell products. We write scripts that polarize and magnetize.
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pl-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 3</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Belief Engineering</h2>
                         <p className="text-slate-400">Your content becomes a manifesto. Your customers become disciples.</p>
                     </div>
                 </div>

                 {/* Point 4 */}
                 <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 left-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -ml-4">04</div>
                             <Layers size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">The Omnipresence Grid</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Strategic deployment across Reels, LinkedIn, and Shorts. We don't just post; we occupy mental real estate. We engineer a "frequency illusion" where your client sees you everywhere.
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pr-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 4</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Total Mindshare</h2>
                         <p className="text-slate-400">Repetition creates truth. We flood the zone with high-value assets.</p>
                     </div>
                 </div>

                 {/* Point 5 */}
                 <div className="flex flex-col md:flex-row gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -mr-4">05</div>
                             <Fingerprint size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">The Legacy Lock-In</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Converting fleeting attention into permanent brand equity. We move the audience from "Aware" to "Loyal" using psychological trust anchors embedded in every frame.
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pl-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 5</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Brand Equity</h2>
                         <p className="text-slate-400">We don't just make noise. We build history.</p>
                     </div>
                 </div>

             </div>
         </div>
      </div>

      {/* 3. DEPLOYMENT SECTION - 4 TIERS */}
      <div id="deployment" className="bg-slate-950 py-32 border-t border-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
              
              <div className="text-center mb-20">
                  <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-pulse">Investment Tiers</span>
                  <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
                      Select Your <span className="italic text-slate-500">Dominance Level</span>
                  </h2>
                  <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                      Four tiers of engagement. From rapid market entry to total category monopoly.
                  </p>
              </div>

              {/* PRICING GRID */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                  
                  {/* TIER 1: IGNITION */}
                  <div 
                    className={`bg-slate-900 border ${selectedPackage.includes('Ignition') ? 'border-gold-500 ring-2 ring-gold-500/20' : 'border-slate-800'} p-8 rounded-xl relative hover:border-gold-500/50 transition cursor-pointer flex flex-col`} 
                    onClick={() => handleSelectPackage('Ignition Pack (₹15,000)')}
                  >
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Entry</div>
                      <h3 className="text-2xl font-serif text-white mb-2">Ignition Pack</h3>
                      <div className="text-3xl font-black text-white mb-6">₹15,000</div>
                      <ul className="space-y-4 mb-8 flex-grow">
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> 3 High-Impact Reels</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> Basic Scripting</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> Stock + Text Overlays</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> 48hr Turnaround</li>
                      </ul>
                      <button 
                        type="button" 
                        onClick={(e) => { e.stopPropagation(); handleSelectPackage('Ignition Pack (₹15,000)'); }} 
                        className="w-full py-3 rounded-lg border border-gold-600 text-gold-500 font-bold uppercase text-xs tracking-widest hover:bg-gold-600 hover:text-white transition"
                      >
                        Select
                      </button>
                  </div>

                  {/* TIER 2: VELOCITY */}
                  <div 
                    className={`bg-slate-900 border ${selectedPackage.includes('Velocity') ? 'border-gold-500 ring-2 ring-gold-500/20' : 'border-slate-800'} p-8 rounded-xl relative hover:border-gold-500/50 transition cursor-pointer flex flex-col`} 
                    onClick={() => handleSelectPackage('Velocity Pack (₹30,000)')}
                  >
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Growth</div>
                      <h3 className="text-2xl font-serif text-white mb-2">Velocity Pack</h3>
                      <div className="text-3xl font-black text-white mb-6">₹30,000</div>
                      <ul className="space-y-4 mb-8 flex-grow">
                          <li className="flex gap-3 text-white text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> 1 Corporate Brand Film (60s)</li>
                          <li className="flex gap-3 text-white text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> 5 Snippet Reels</li>
                          <li className="flex gap-3 text-white text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> Pro Voiceover</li>
                          <li className="flex gap-3 text-white text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> Dynamic Motion Graphics</li>
                      </ul>
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleSelectPackage('Velocity Pack (₹30,000)'); }}
                        className="w-full py-3 rounded-lg border border-gold-600 text-gold-500 font-bold uppercase text-xs tracking-widest hover:bg-gold-600 hover:text-white transition"
                      >
                        Select
                      </button>
                  </div>

                  {/* TIER 3: DRIFTO (RECOMMENDED) */}
                  <div 
                    className={`bg-slate-900 border ${selectedPackage.includes('Drifto') ? 'border-gold-500 ring-2 ring-gold-500/20' : 'border-slate-800'} p-8 rounded-xl relative hover:border-gold-500/50 transition cursor-pointer flex flex-col transform md:-translate-y-4 shadow-xl`} 
                    onClick={() => handleSelectPackage('Drifto Pack (₹60,000)')}
                  >
                      <div className="absolute top-0 right-0 bg-gold-600 text-black text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-wider">Recommended</div>
                      <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-4">Scale</div>
                      <h3 className="text-2xl font-serif text-white mb-2">Drifto Pack</h3>
                      <div className="text-3xl font-black text-white mb-6">₹60,000</div>
                      <ul className="space-y-4 mb-8 flex-grow">
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> 1 Premium Film (3 mins)</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> 10 Vertical Reels</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> On-site Shoot (1 Day)*</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-gold-500 shrink-0"/> Drone Cinematography</li>
                      </ul>
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleSelectPackage('Drifto Pack (₹60,000)'); }}
                        className="w-full py-3 rounded-lg bg-gold-600 text-white font-bold uppercase text-xs tracking-widest hover:bg-gold-500 transition shadow-lg"
                      >
                        Select
                      </button>
                  </div>

                  {/* TIER 4: MARKETAPEX */}
                  <div 
                    className={`bg-gradient-to-b from-slate-900 to-black border ${selectedPackage.includes('MarketApex') ? 'border-red-600 ring-2 ring-red-600/20' : 'border-slate-800'} p-8 rounded-xl relative hover:border-red-600/50 transition cursor-pointer flex flex-col`} 
                    onClick={() => handleSelectPackage('MarketApex Pack (₹1,00,000)')}
                  >
                      <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Superbrand</div>
                      <h3 className="text-2xl font-serif text-white mb-2">MarketApex Pack</h3>
                      <div className="text-3xl font-black text-white mb-6">₹1,00,000</div>
                      <ul className="space-y-4 mb-8 flex-grow">
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-600 shrink-0"/> 3 Premium Films (Brand/Prod/Culture)</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-600 shrink-0"/> 20 Reels (Full Month Content)</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-600 shrink-0"/> Dark DNA Strategy Map</li>
                          <li className="flex gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-600 shrink-0"/> Distribution Blueprint</li>
                      </ul>
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleSelectPackage('MarketApex Pack (₹1,00,000)'); }}
                        className="w-full py-3 rounded-lg bg-red-900/50 border border-red-600 text-red-500 font-bold uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition"
                      >
                        Select
                      </button>
                  </div>

              </div>

              {/* CONTACT FORM */}
              <div id="contact-form" className="max-w-3xl mx-auto scroll-mt-24">
                  <div className="bg-gradient-to-br from-slate-900 to-black border border-red-900/30 p-8 md:p-12 relative shadow-[0_0_50px_rgba(220,38,38,0.1)] rounded-2xl">
                      
                      <div className="flex justify-between items-end mb-10 pb-6 border-b border-slate-800">
                          <div>
                              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Order Summary</h3>
                              <p className="text-slate-500 text-xs mt-1">Selected: {selectedPackage}</p>
                          </div>
                          <div className="text-right">
                              <div className="text-red-600 text-xs font-bold uppercase tracking-wider">Priority Support</div>
                          </div>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-8">
                          <input type="hidden" name="package" value={selectedPackage} />
                          
                          <div className="grid md:grid-cols-2 gap-8">
                              <div className="group">
                                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Company Name</label>
                                  <input name="businessName" type="text" required placeholder="e.g. Apex Corp" className="w-full bg-slate-950 border-b border-slate-700 focus:border-red-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                              </div>
                              <div className="group">
                                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Sector</label>
                                  <input name="sector" type="text" required placeholder="e.g. Fintech" className="w-full bg-slate-950 border-b border-slate-700 focus:border-red-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                              </div>
                          </div>
                          
                          <div className="group">
                              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Business Email</label>
                              <input name="email" type="email" required placeholder="director@company.com" className="w-full bg-slate-950 border-b border-slate-700 focus:border-red-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                          </div>
                          
                          <div className="pt-6">
                              <button type="submit" className="group w-full bg-gold-600 hover:bg-gold-500 text-white font-black py-6 px-8 shadow-lg transition-all duration-300 text-lg uppercase tracking-widest flex items-center justify-center gap-4 border border-transparent rounded-lg">
                                  <span className="relative z-10">Initiate {selectedPackage.split(' ')[0]} Protocol</span>
                                  <FileWarning size={20} className="group-hover:text-black transition-colors" />
                              </button>
                              <div className="flex justify-center items-center gap-2 mt-4 text-[10px] text-slate-600 uppercase tracking-widest">
                                  <Lock size={10} /> Secure Request
                              </div>
                          </div>
                      </form>
                  </div>
              </div>

          </div>
      </div>
    </div>
  );
};

export default CorporateAnalysisFilm;