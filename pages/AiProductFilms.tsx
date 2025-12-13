import React from 'react';
import { ArrowRight, Layers, Cpu, Zap, Box, Lock, MonitorPlay, Sparkles, Check, X, Star, Hexagon, Film, Aperture, Globe, Repeat, Rocket, Users, Smartphone, Eye } from 'lucide-react';

const AiProductFilms: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const productUrl = formData.get('productUrl') as string;
    
    const msg = encodeURIComponent(`🤖 AI FILM BUNDLE INQUIRY\n\nBrand: ${businessName}\nEmail: ${email}\nProduct URL: ${productUrl}\n\nI'm interested in the 5-Film Infinite Scale Bundle.`);
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-[#030014] min-h-screen font-sans text-slate-200 selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION - Digital Hallucinations */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden border-b border-purple-900/30">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#030014] to-[#030014]"></div>
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            {/* Animated Orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
             
             {/* Badge */}
             <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-900/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <Sparkles size={14} className="text-purple-400 animate-spin-slow" />
                <span className="text-purple-300 text-xs font-bold tracking-[0.2em] uppercase">
                    Generative Reality Engine v4.0
                </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-sans text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl py-2">
                DIGITAL <br/>
                {/* Fixed clipping issue with padding-right and nbsp */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 italic pr-6 pb-2 inline-block">
                    HALLUCINATIONS&nbsp;
                </span>
            </h1>

            <div className="max-w-3xl mx-auto mb-12">
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                    Stop filming reality. <strong className="text-white">Upgrade it.</strong> <br/>
                    We take your boring product shots and toss them into a digital blender with pure adrenaline. No cameras. No crews. Just 100% computed dominance.
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                <button 
                    onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior:'smooth'})} 
                    className="group relative bg-white text-black px-10 py-5 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 rounded-none skew-x-[-10deg]"
                >
                    <span className="block skew-x-[10deg] flex items-center gap-2">
                        Get The Bundle <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                    </span>
                </button>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030014] bg-slate-800 flex items-center justify-center overflow-hidden">
                                <img src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} alt="User" className="w-full h-full object-cover grayscale opacity-70"/>
                            </div>
                        ))}
                    </div>
                    <span>Join 200+ Futurist Brands</span>
                </div>
            </div>
        </div>
      </section>

      {/* 2. THE GOD MODE TABLE (5 BENEFITS) */}
      <section className="relative py-24 bg-[#05021a] overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 max-w-5xl">
             
             <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-4">The <span className="text-purple-500">God Mode</span> Advantage</h2>
                 <p className="text-slate-400 text-lg">Why legacy production houses are terrified of us.</p>
             </div>

             {/* THE TABLE */}
             <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
                 {/* Glowing Border effect */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600"></div>

                 {/* Header Row */}
                 <div className="grid grid-cols-12 bg-slate-900/80 p-6 border-b border-slate-800 text-xs font-bold uppercase tracking-widest text-slate-500">
                     <div className="col-span-4 md:col-span-3">Feature</div>
                     <div className="col-span-4 md:col-span-4 text-center text-red-500">Old School Video</div>
                     <div className="col-span-4 md:col-span-5 text-center text-green-400">ProZenius AI</div>
                 </div>

                 {/* Row 1: Speed */}
                 <div className="grid grid-cols-12 p-6 border-b border-slate-800/50 hover:bg-white/5 transition items-center">
                     <div className="col-span-4 md:col-span-3 font-bold text-white flex items-center gap-3">
                         <Zap size={20} className="text-yellow-500"/> <span className="hidden md:inline">Velocity</span>
                     </div>
                     <div className="col-span-4 md:col-span-4 text-center text-slate-400 text-sm">
                         4-6 Weeks (Slow)
                     </div>
                     <div className="col-span-4 md:col-span-5 text-center text-white font-bold text-sm bg-green-500/10 py-1 rounded border border-green-500/20">
                         48 Hours (Light Speed)
                     </div>
                 </div>

                 {/* Row 2: Cost */}
                 <div className="grid grid-cols-12 p-6 border-b border-slate-800/50 hover:bg-white/5 transition items-center">
                     <div className="col-span-4 md:col-span-3 font-bold text-white flex items-center gap-3">
                         <Lock size={20} className="text-green-500"/> <span className="hidden md:inline">Budget</span>
                     </div>
                     <div className="col-span-4 md:col-span-4 text-center text-slate-400 text-sm">
                         ₹2 Lakh+ (Burn Cash)
                     </div>
                     <div className="col-span-4 md:col-span-5 text-center text-white font-bold text-sm bg-green-500/10 py-1 rounded border border-green-500/20">
                         Fraction of the Cost
                     </div>
                 </div>

                 {/* Row 3: Visuals */}
                 <div className="grid grid-cols-12 p-6 border-b border-slate-800/50 hover:bg-white/5 transition items-center">
                     <div className="col-span-4 md:col-span-3 font-bold text-white flex items-center gap-3">
                         <Globe size={20} className="text-blue-500"/> <span className="hidden md:inline">Locations</span>
                     </div>
                     <div className="col-span-4 md:col-span-4 text-center text-slate-400 text-sm">
                         Rented Studio (Boring)
                     </div>
                     <div className="col-span-4 md:col-span-5 text-center text-white font-bold text-sm bg-green-500/10 py-1 rounded border border-green-500/20">
                         Mars, Tokyo, Cyberpunk City
                     </div>
                 </div>

                 {/* Row 4: Actors */}
                 <div className="grid grid-cols-12 p-6 border-b border-slate-800/50 hover:bg-white/5 transition items-center">
                     <div className="col-span-4 md:col-span-3 font-bold text-white flex items-center gap-3">
                         <Users size={20} className="text-pink-500"/> <span className="hidden md:inline">Talent</span>
                     </div>
                     <div className="col-span-4 md:col-span-4 text-center text-slate-400 text-sm">
                         Divas & Scheduling Nightmares
                     </div>
                     <div className="col-span-4 md:col-span-5 text-center text-white font-bold text-sm bg-green-500/10 py-1 rounded border border-green-500/20">
                         Perfect AI Humans (No Drama)
                     </div>
                 </div>

                 {/* Row 5: Iteration */}
                 <div className="grid grid-cols-12 p-6 hover:bg-white/5 transition items-center">
                     <div className="col-span-4 md:col-span-3 font-bold text-white flex items-center gap-3">
                         <Repeat size={20} className="text-purple-500"/> <span className="hidden md:inline">Changes</span>
                     </div>
                     <div className="col-span-4 md:col-span-4 text-center text-slate-400 text-sm">
                         "Reshoot Day" ($$$)
                     </div>
                     <div className="col-span-4 md:col-span-5 text-center text-white font-bold text-sm bg-green-500/10 py-1 rounded border border-green-500/20">
                         Instant Regenerate (Zero Cost)
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* 3. THE INFINITE SCALE BUNDLE (5 FILMS) */}
      <section className="py-24 relative">
          <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black px-4 py-1 rounded mb-4 transform -rotate-2">
                      LIMITED TIME OFFER
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-6">The "Infinite Scale" Bundle</h2>
                  <p className="text-xl text-slate-300">Don't buy one video. Buy an entire media empire.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                      { title: "The Hype Teaser", desc: "15s High-octane visuals to stop the scroll.", icon: <Rocket/>, color: "from-red-500 to-orange-500" },
                      { title: "The Explainer", desc: "60s Abstract 3D breakdown of how it works.", icon: <Box/>, color: "from-blue-500 to-cyan-500" },
                      { title: "The Vertical Short", desc: "9:16 Viral bait for Reels/TikTok.", icon: <Smartphone size={24}/>, color: "from-purple-500 to-pink-500" },
                      { title: "The Vision Film", desc: "Cinematic founder story set in the future.", icon: <Eye/>, color: "from-green-500 to-emerald-500" },
                      { title: "The Product Demo", desc: "Hyper-real closeups that look better than real life.", icon: <MonitorPlay/>, color: "from-yellow-500 to-amber-500" }
                  ].map((film, i) => (
                      <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${film.color}`}></div>
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${film.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                              {film.icon}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 leading-tight">{film.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">{film.desc}</p>
                      </div>
                  ))}
              </div>

              {/* Bundle Price */}
              <div className="mt-16 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>
                  <h3 className="text-2xl font-bold text-purple-200 mb-2 uppercase tracking-widest">Total Bundle Value: ₹1.5 Lakh</h3>
                  <div className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-lg">
                      ₹49,999
                  </div>
                  <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                      Get all 5 assets generated, edited, and sound-designed. Ready to deploy across your entire funnel.
                  </p>
                  <button onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior:'smooth'})} className="bg-white text-purple-900 hover:bg-purple-50 font-black px-12 py-4 rounded-full text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] transition transform hover:scale-105">
                      Grab The Deal
                  </button>
              </div>
          </div>
      </section>

      {/* 4. TESTIMONIALS - VERIFIED HALLUCINATIONS */}
      <section className="py-24 border-t border-slate-900 bg-black">
          <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-3">
                  <Star fill="white" className="text-yellow-500"/> Verified Hallucinations
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { quote: "We looked like a billion-dollar startup overnight. The AI visuals were impossible to shoot physically.", author: "Rahul V.", role: "Founder, FinTech" },
                      { quote: "Standard video production quoted us ₹5 Lakhs and 3 weeks. ProZenius did it in 48 hours for a fraction.", author: "Sneha M.", role: "CMO, Beauty Brand" },
                      { quote: "The 'Infinite Scale Bundle' gave us content for 2 months. Our ROAS doubled because the ads look so premium.", author: "Arjun K.", role: "D2C Owner" }
                  ].map((t, i) => (
                      <div key={i} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 relative">
                          <div className="text-purple-500 text-4xl font-serif absolute top-4 left-4 opacity-50">"</div>
                          <p className="text-slate-300 relative z-10 mb-6 italic leading-relaxed">
                              {t.quote}
                          </p>
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                              <div>
                                  <div className="text-white font-bold text-sm">{t.author}</div>
                                  <div className="text-slate-500 text-xs uppercase font-bold">{t.role}</div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. FORM - CONTROL DECK */}
      <section id="order-form" className="relative py-32 bg-[#030014] border-t border-purple-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black"></div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-10 md:p-14 relative shadow-2xl rounded-3xl group hover:border-purple-500/30 transition-all duration-500">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_#a855f7]"></div>
                  
                  <div className="text-center mb-12">
                      <h3 className="text-3xl font-black text-white uppercase tracking-wide mb-2">Initiate Sequence</h3>
                      <p className="text-purple-400 font-mono tracking-wider">SECURE CHANNEL // 5-FILM BUNDLE</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                          <div className="group relative">
                              <input name="businessName" type="text" required className="block w-full bg-slate-950 border border-slate-700 rounded-lg py-4 px-4 text-white focus:border-purple-500 focus:outline-none transition-colors text-lg" placeholder="Brand Name" />
                          </div>
                          <div className="group relative">
                              <input name="email" type="email" required className="block w-full bg-slate-950 border border-slate-700 rounded-lg py-4 px-4 text-white focus:border-purple-500 focus:outline-none transition-colors text-lg" placeholder="Email Address" />
                          </div>
                      </div>
                      
                      <div className="group relative">
                          <input name="productUrl" type="url" required className="block w-full bg-slate-950 border border-slate-700 rounded-lg py-4 px-4 text-white focus:border-purple-500 focus:outline-none transition-colors text-lg" placeholder="Product / Website URL" />
                      </div>
                      
                      <div className="pt-4">
                          <button type="submit" className="group w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black py-6 px-8 shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 text-lg uppercase tracking-[0.2em] flex items-center justify-center gap-4 rounded-xl transform hover:-translate-y-1">
                              <span className="relative z-10">Start Production</span>
                              <Rocket size={24} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                          <div className="flex justify-center items-center gap-2 mt-6 text-[10px] text-slate-500 uppercase tracking-widest opacity-60">
                              <Lock size={10} /> Encrypted Order Processing
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </section>
    </div>
  );
};

export default AiProductFilms;