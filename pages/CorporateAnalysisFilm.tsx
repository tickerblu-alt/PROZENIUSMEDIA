import React from 'react';
import {  BrainCircuit, ShieldAlert, Zap, Target, Lock, ArrowRight, Activity, Fingerprint, Microscope, Radio, FileWarning } from 'lucide-react';

const CorporateAnalysisFilm: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const sector = formData.get('sector') as string;
    
    const msg = encodeURIComponent(`🚨 CORPORATE ANALYSIS FILM REQ\n\nBrand: ${businessName}\nEmail: ${email}\nSector: ${sector}`);
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-black min-h-screen font-sans text-slate-300 selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION - THE WEAPON CONCEPT */}
      <div className="pt-36 pb-24 px-4 relative overflow-hidden border-b border-red-900/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
             <div className="inline-flex items-center gap-3 border border-red-900/50 bg-slate-900/80 backdrop-blur-md px-5 py-2 mb-10 rounded-sm">
                <span className="w-2 h-2 bg-red-600 animate-pulse rounded-full"></span>
                <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase">
                    Classified Protocol
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 leading-[0.9] tracking-tighter">
                Corporate <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-700">Analysis Film</span>
            </h1>

            <div className="max-w-4xl mx-auto border-x border-red-900/30 bg-slate-900/30 p-8 md:p-12 mb-12">
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed font-serif italic">
                    "This is not a corporate video. It is a <strong className="text-red-500 not-italic">neurological weapon</strong>. A 3-7 minute film that reverse-engineers your market's hidden anxieties and rewrites your brand as the only logical choice."
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                <button onClick={() => document.getElementById('deployment')?.scrollIntoView({behavior:'smooth'})} className="bg-gold-600 hover:bg-gold-500 text-white px-10 py-5 font-black uppercase tracking-widest text-sm transition shadow-[0_0_30px_rgba(234,179,8,0.3)] rounded-lg">
                    Initiate Deployment
                </button>
                <div className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
                    <ShieldAlert size={16}/> Warning: Irreversible Brand Positioning
                </div>
            </div>
        </div>
      </div>

      {/* 2. THE 5 ACTION POINTS - DARK FRAMEWORK */}
      <div className="container mx-auto px-4 py-32 border-b border-slate-900">
         <div className="max-w-6xl mx-auto">
             
             <div className="mb-24 text-center">
                 <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">The Superbrand Engine</h2>
                 <div className="w-24 h-1 bg-red-600 mx-auto"></div>
             </div>

             <div className="space-y-32">
                 
                 {/* Point 1 */}
                 <div className="flex flex-col md:flex-row gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -mr-4">01</div>
                             <Microscope size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Dark DNA Extraction</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 We scan 10,000+ data points to find the "Unspoken Problem". 
                                 <br/><br/>
                                 <em className="text-slate-500 border-l-2 border-red-900 pl-4 block">
                                     Case Study: EdTech parents didn't fear "bad grades"; they feared "child's future shame." We sold dignity, not tutoring.
                                 </em>
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pl-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 1</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Monopoly Blueprint Mapping</h2>
                         <p className="text-slate-400">We don't brainstorm. We extract the exact psychological coordinates where your competitors are invisible.</p>
                     </div>
                 </div>

                 {/* Point 2 */}
                 <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 left-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -ml-4">02</div>
                             <BrainCircuit size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Proneurotic Scripting</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Every frame triggers dopamine or cortisol. We bypass logic and hit primal identity fear.
                                 <br/><br/>
                                 <em className="text-slate-500 border-l-2 border-red-900 pl-4 block">
                                     Case Study: Auto SaaS film opened with a father being judged at a family function. The software became his "status resurrection tool."
                                 </em>
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pr-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 2</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Neuro-Linguistic Engineering</h2>
                         <p className="text-slate-400">We don't write "copy". We write code for the human brain that installs your brand as a necessity.</p>
                     </div>
                 </div>

                 {/* Point 3 */}
                 <div className="flex flex-col md:flex-row gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -mr-4">03</div>
                             <Fingerprint size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Authority Hijack</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 We drop the film in 500+ private WhatsApp groups. It looks like "insider info," not an ad.
                                 <br/><br/>
                                 <em className="text-slate-500 border-l-2 border-red-900 pl-4 block">
                                     Case Study: Fintech client's "Security Deep Dive" film spread to 12,000 SMEs with ₹0 ad spend because it felt like a leak.
                                 </em>
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pl-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 3</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Dark Social Seeding</h2>
                         <p className="text-slate-400">The most powerful marketing channel is the one you can't see. We weaponize private sharing.</p>
                     </div>
                 </div>

                 {/* Point 4 */}
                 <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 left-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -ml-4">04</div>
                             <Target size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Competition Erasure</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 The film defines a new category where you are the only option.
                                 <br/><br/>
                                 <em className="text-slate-500 border-l-2 border-red-900 pl-4 block">
                                     Case Study: Supplement brand created "Scientific Validation Fitness". Competitors immediately looked like "bro-science" risks.
                                 </em>
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pr-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 4</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">Category Creation</h2>
                         <p className="text-slate-400">We don't compete. We move the entire battlefield to a place where they can't follow.</p>
                     </div>
                 </div>

                 {/* Point 5 */}
                 <div className="flex flex-col md:flex-row gap-12 items-center">
                     <div className="md:w-1/2 relative group">
                         <div className="absolute inset-0 bg-red-900/20 blur-xl group-hover:bg-red-900/40 transition duration-700"></div>
                         <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl overflow-hidden">
                             <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none -mt-4 -mr-4">05</div>
                             <Radio size={48} className="text-red-500 mb-6" />
                             <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Performance Looping</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Every view triggers follow-up content that deepens the wedge. The film is the key; the loop is the lock.
                                 <br/><br/>
                                 <em className="text-slate-500 border-l-2 border-red-900 pl-4 block">
                                     Result: LTV tripled. Repeat purchase rate hit 87%. It is performance disguised as brand.
                                 </em>
                             </p>
                         </div>
                     </div>
                     <div className="md:w-1/2 text-left md:pl-10">
                         <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">Step 5</h4>
                         <h2 className="text-4xl font-serif text-white mb-4">ROI Lock-In</h2>
                         <p className="text-slate-400">A film without a funnel is art. We don't make art. We make systems.</p>
                     </div>
                 </div>

             </div>
         </div>
      </div>

      {/* 3. DEPLOYMENT SECTION - DISTINCT FEE */}
      <div id="deployment" className="bg-slate-950 py-32 border-t border-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
              
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left Column: Context */}
                  <div className="lg:col-span-5 space-y-12">
                      <div>
                          <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-pulse">Classified Access</span>
                          <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
                              Engage the <span className="italic text-slate-500">Engine</span>
                          </h2>
                          <p className="text-slate-400 text-lg font-light leading-relaxed border-l border-red-900 pl-6">
                              This protocol is reserved for brands ready to aggressive dominate their sector.
                          </p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 p-8">
                          <h3 className="font-serif text-2xl text-white mb-6 italic">The War Chest Includes:</h3>
                          <ul className="space-y-4">
                              {[
                                  "Dark DNA Market Audit (PDF)",
                                  "3-7 Minute Analysis Film (4K)",
                                  "Proneurotic Script Architecture",
                                  "500+ Group Seeding Plan",
                                  "Performance Loop Strategy"
                              ].map((f, i) => (
                                  <li key={i} className="flex items-center gap-4 text-slate-300 group">
                                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:scale-150 transition-transform"></div>
                                      <span className="font-light tracking-wide">{f}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>

                  {/* Right Column: Form */}
                  <div className="lg:col-span-7">
                      <div className="bg-gradient-to-br from-slate-900 to-black border border-red-900/30 p-8 md:p-12 relative shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                          
                          <div className="flex justify-between items-end mb-10 pb-6 border-b border-slate-800">
                              <div>
                                  <h3 className="text-xl font-bold text-white uppercase tracking-widest">Protocol Cost</h3>
                                  <p className="text-slate-500 text-xs mt-1">Full IP Transfer Included</p>
                              </div>
                              <div className="text-right">
                                  <div className="text-3xl font-serif text-white">₹24,999</div>
                                  <div className="text-red-600 text-xs font-bold uppercase tracking-wider">Base Investment</div>
                              </div>
                          </div>
                          
                          <form onSubmit={handleSubmit} className="space-y-8">
                              <div className="grid md:grid-cols-2 gap-8">
                                  <div className="group">
                                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Target Entity (Brand)</label>
                                      <input name="businessName" type="text" required placeholder="e.g. Apex Corp" className="w-full bg-slate-950 border-b border-slate-700 focus:border-red-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                                  </div>
                                  <div className="group">
                                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Sector</label>
                                      <input name="sector" type="text" required placeholder="e.g. Fintech" className="w-full bg-slate-950 border-b border-slate-700 focus:border-red-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                                  </div>
                              </div>
                              
                              <div className="group">
                                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Command Channel (Email)</label>
                                  <input name="email" type="email" required placeholder="director@company.com" className="w-full bg-slate-950 border-b border-slate-700 focus:border-red-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                              </div>
                              
                              <div className="pt-6">
                                  <button type="submit" className="group w-full bg-gold-600 hover:bg-gold-500 text-white font-black py-6 px-8 shadow-lg transition-all duration-300 text-lg uppercase tracking-widest flex items-center justify-center gap-4 border border-transparent rounded-lg">
                                      <span className="relative z-10">Commission Analysis</span>
                                      <FileWarning size={20} className="group-hover:text-black transition-colors" />
                                  </button>
                                  <div className="flex justify-center items-center gap-2 mt-4 text-[10px] text-slate-600 uppercase tracking-widest">
                                      <Lock size={10} /> Secure Encrypted Transmission
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    </div>
  );
};

export default CorporateAnalysisFilm;