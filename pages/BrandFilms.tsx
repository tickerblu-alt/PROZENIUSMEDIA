import React, { useState } from 'react';
import { CheckCircle, Shield, Zap, TrendingUp, Lock, ArrowRight, Play, Database, FileText, Video, Aperture, Star, Fingerprint, Radio, MousePointerClick, Factory, Rocket, Ticket, Copy, Check, Clapperboard, MonitorPlay, Speaker, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandFilms: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const couponCode = "PROFILM20";

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaim = () => {
      const msg = encodeURIComponent(`🎥 I want to deploy a Brand Film.\n\n🎟️ Coupon Code: ${couponCode} (Claiming 20% Off Production)`);
      window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // 1. WhatsApp Notification
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const packageType = formData.get('package') as string;
    const instagram = formData.get('instagram') as string;
    
    const msg = encodeURIComponent(`🎥 FILM ORDER (Hinglish)\n\n📦 Plan: ${packageType}\n🏢 Brand: ${businessName}\n📧 Email: ${email}\n📸 Insta: ${instagram}`);
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-slate-950 min-h-screen pb-0 font-sans text-slate-200 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO SECTION - ULTRA ELEGANCE */}
      <div className="pt-32 pb-32 px-4 relative overflow-hidden border-b border-slate-900">
          {/* Background Effects - Refined */}
        <div className="absolute inset-0 bg-black">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80"></div>
             {/* Subtle noise texture */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        {/* Animated Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
            
            {/* 1. Philosophical Statement - The Truth */}
            <div className="mb-16 relative inline-block group cursor-default animate-fade-in">
                <h2 className="text-2xl md:text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-white to-gold-100 opacity-90 tracking-wide">
                    "Jo dikhta hai, wohi bikta hai."
                </h2>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mx-auto mt-4"></div>
            </div>

            {/* 2. The Anti-Statement */}
            <div className="flex flex-col items-center justify-center mb-6 animate-fade-in-up delay-100">
                <div className="flex items-baseline gap-3 md:gap-4 text-xl md:text-3xl font-light text-slate-400 tracking-[0.2em] uppercase font-sans">
                    <span>We Don't Make</span>
                    <span className="font-serif italic text-red-500 font-bold normal-case text-3xl md:text-5xl decoration-red-900/50 underline decoration-1 underline-offset-8">"Videos"</span>
                    <span className="text-red-500 font-black">.</span>
                </div>
            </div>

            {/* 3. The Core Promise - Massive Scale */}
            <div className="relative mb-12 animate-fade-in-up delay-200">
                <h1 className="flex flex-col items-center leading-none">
                    <span className="text-6xl md:text-9xl font-black font-sans text-white tracking-tighter drop-shadow-2xl z-10">
                        WE RE-ENGINEER
                    </span>
                    <span className="text-5xl md:text-8xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-gold-200 via-gold-400 to-gold-700 -mt-2 md:-mt-6 z-20 pb-4">
                        Your Business
                    </span>
                </h1>
                
                {/* 4. The Mechanism - Tech/Cyber Aesthetic */}
                <div className="my-8 animate-fade-in-up delay-300">
                    <span className="inline-block py-2 px-6 border-y border-red-900/30 bg-red-950/10 backdrop-blur-sm">
                        <span className="font-mono text-red-500 tracking-[0.3em] text-sm md:text-lg lowercase">
                            &lt; via film advocacy &gt;
                        </span>
                    </span>
                </div>
            </div>

            {/* 5. The Outcome - Authority Pill */}
            <div className="animate-fade-in-up delay-500">
                <div className="inline-flex items-center gap-4 bg-slate-900/80 backdrop-blur border border-slate-800 px-8 py-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] group hover:border-gold-600/50 transition duration-500 transform hover:scale-105">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                    <span className="text-sm md:text-base font-bold text-slate-200 tracking-[0.25em] uppercase group-hover:text-white transition">
                        To Reach Market Leadership
                    </span>
                </div>
            </div>

            {/* Down Arrow Indicator - Optional aesthetic touch */}
            <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 opacity-20">
                <div className="w-px h-24 bg-gradient-to-b from-slate-500 to-transparent"></div>
            </div>
        </div>
      </div>

      {/* 2. CORE DISTINCTION - CONTENT VS CINEMA */}
      <div className="container mx-auto px-4 py-24 border-b border-slate-900">
          <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Critical Distinction</span>
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                          Disposable Content vs. <br/><span className="text-slate-600">Brand Cinema</span>
                      </h2>
                      <p className="text-slate-400 text-lg leading-relaxed mb-8">
                          Most agencies give you "content" that expires in 24 hours. We build <strong className="text-white">Assets</strong> that anchor your brand authority for years.
                      </p>
                  </div>
                  
                  <div className="space-y-8">
                      {/* Brand Cinema Card */}
                      <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-gold-600 relative overflow-hidden group shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600/10 rounded-full blur-2xl group-hover:bg-gold-600/20 transition"></div>
                          <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                              <Clapperboard className="text-gold-500"/> Brand Cinema
                          </h3>
                          <p className="text-slate-400 leading-relaxed text-sm mb-4">
                              Engineered for <strong className="text-white">Trust & Authority</strong>. Cinematic lighting, sound design, and psychological scripting that positions you as the "Only Choice".
                          </p>
                          <p className="text-slate-400 leading-relaxed text-sm border-t border-slate-800 pt-4 mt-4">
                              Asset Life: <span className="text-gold-400 font-bold">12-24 Months</span>. Used for Ads, Website, Investor Decks.
                          </p>
                      </div>

                      {/* Content Card */}
                      <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 relative overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500">
                          <h3 className="text-2xl font-serif text-slate-300 mb-4 flex items-center gap-3">
                              <Smartphone className="text-slate-500"/> Disposable Content
                          </h3>
                          <p className="text-slate-500 leading-relaxed text-sm mb-4">
                              Trends, dances, and quick clips. Good for "engagement" but rarely builds deep trust or high-ticket sales.
                          </p>
                          <p className="text-slate-500 leading-relaxed text-sm border-t border-slate-800 pt-4 mt-4">
                              Asset Life: <span className="text-slate-400 font-bold">24 Hours</span>. Forgotten instantly.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 3. THE 5-STAGE PRODUCTION PROTOCOL */}
      <div className="container mx-auto px-4 py-24">
         <div className="max-w-6xl mx-auto">
             
             <div className="mb-24 text-center">
                 <h2 className="text-3xl font-black text-slate-200 mb-4 uppercase tracking-widest">The 5-Stage Production Protocol</h2>
                 <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-red-500 mx-auto rounded-full"></div>
                 <p className="text-slate-500 max-w-2xl mx-auto font-serif italic mt-6">
                     From Concept to Category King
                 </p>
             </div>

             <div className="relative space-y-24">
                 {/* Vertical Connector Line (Desktop) */}
                 <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-900 to-transparent transform -translate-x-1/2"></div>

                 {/* STAGE 1 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-gold-600 font-black text-8xl opacity-10 absolute -top-10 right-0 md:right-12 z-0">01</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Stage 1</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Neuro-Scripting</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 We don't write "scripts". We write <strong className="text-white">Dark DNA™ sequences</strong>. Every line is engineered to trigger a specific psychological response (Fear, Greed, Status).
                             </p>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-gold-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <FileText size={40} className="text-gold-500" />
                         </div>
                     </div>
                 </div>

                 {/* STAGE 2 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="flex justify-center md:justify-end order-2 md:order-1">
                         <div className="w-24 h-24 bg-slate-900 border border-red-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <Aperture size={40} className="text-red-500" />
                         </div>
                     </div>
                     <div className="md:text-left order-1 md:order-2">
                         <div className="text-red-600 font-black text-8xl opacity-10 absolute -top-10 left-0 md:left-12 z-0">02</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Stage 2</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Cinematic Acquisition</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 4K Cameras. Drone Flyovers. Macro Product Shots. We capture your brand with the same equipment used for Netflix documentaries.
                             </p>
                         </div>
                     </div>
                 </div>

                 {/* STAGE 3 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-gold-600 font-black text-8xl opacity-10 absolute -top-10 right-0 md:right-12 z-0">03</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Stage 3</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Sonic Branding</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 Sound makes up 50% of the experience. We use Hans Zimmer-style scores and professional voiceovers (Hindi/English) to command attention.
                             </p>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-gold-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <Speaker size={40} className="text-gold-500" />
                         </div>
                     </div>
                 </div>

                 {/* STAGE 4 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="flex justify-center md:justify-end order-2 md:order-1">
                         <div className="w-24 h-24 bg-slate-900 border border-red-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <MonitorPlay size={40} className="text-red-500" />
                         </div>
                     </div>
                     <div className="md:text-left order-1 md:order-2">
                         <div className="text-red-600 font-black text-8xl opacity-10 absolute -top-10 left-0 md:left-12 z-0">04</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Stage 4</div>
                             <h3 className="text-3xl font-serif text-white mb-4">The "Hook" Injection</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 We edit for retention. Fast cuts, dynamic text overlays, and "pattern interrupts" every 3 seconds to keep the dopamine flowing.
                             </p>
                         </div>
                     </div>
                 </div>

                 {/* STAGE 5 */}
                 <div className="relative grid md:grid-cols-2 gap-12 items-center">
                     <div className="md:text-right order-1 md:order-1">
                         <div className="text-gold-600 font-black text-8xl opacity-10 absolute -top-10 right-0 md:right-12 z-0">05</div>
                         <div className="relative z-10">
                             <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Stage 5</div>
                             <h3 className="text-3xl font-serif text-white mb-4">Format Optimization</h3>
                             <p className="text-slate-400 leading-relaxed mb-6">
                                 We deliver assets ready for war: 16:9 for YouTube/Web, and 9:16 for Reels/Shorts. One shoot, multiple weapons.
                             </p>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-start order-2 md:order-2">
                         <div className="w-24 h-24 bg-slate-900 border border-gold-900/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.2)] relative z-10 hover:scale-110 transition duration-500">
                             <Rocket size={40} className="text-gold-500" />
                         </div>
                     </div>
                 </div>

             </div>
         </div>
      </div>

      {/* 4. COUPON CODE SECTION - THE RED TICKET */}
      <div className="bg-gradient-to-b from-slate-950 to-red-950/20 py-24 border-t border-slate-900 relative">
          <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-slate-900 border-2 border-dashed border-gold-600/50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.15)] group">
                  {/* Background noise */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                      
                      {/* Left: Text */}
                      <div className="text-center md:text-left">
                          <h3 className="text-gold-500 font-black uppercase tracking-[0.2em] text-sm mb-2 animate-pulse">Production Grant</h3>
                          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                              CLAIM <span className="text-red-500">20% OFF</span> <br/>
                              YOUR FIRST SHOOT
                          </h2>
                          <p className="text-slate-400 max-w-md">
                              Limited slots for new partners. Use this code to unlock priority pricing and expedited delivery.
                          </p>
                      </div>

                      {/* Right: The Ticket */}
                      <div className="flex flex-col items-center">
                          <div 
                            className="bg-black border border-red-500/50 rounded-lg p-6 mb-6 relative group-hover:scale-105 transition duration-500 cursor-pointer"
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
                              className="bg-gold-600 hover:bg-gold-500 text-slate-900 font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full uppercase tracking-widest text-xs"
                          >
                              <Ticket size={18}/> Claim on WhatsApp
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 5. PRICING SECTION - REDESIGNED */}
      <div id="pricing" className="container mx-auto px-4 py-24">
          
          {/* --- STARTUP SECTION --- */}
          <div className="mb-24">
              <div className="flex items-center gap-4 mb-10 justify-center">
                  <div className="bg-red-600/20 p-3 rounded-full border border-red-500/50">
                      <Rocket className="text-red-500" size={24}/>
                  </div>
                  <div>
                      <h2 className="text-3xl font-bold text-white uppercase tracking-wide">For Startups</h2>
                      <p className="text-slate-500 text-sm">Tezi se growth chahiye? (Need fast growth?)</p>
                  </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* PLAN 1: VIRAL AD */}
                  <div className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-2xl hover:border-red-500/50 transition duration-300 group relative overflow-hidden flex flex-col">
                      <div className="mb-6">
                          <div className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">The Viral Hook</div>
                          <h3 className="text-3xl font-serif text-white">Reel Dhamaka</h3>
                      </div>

                      <div className="mb-6 flex items-baseline gap-2">
                          <span className="text-5xl font-black text-white">₹3,999</span>
                          <span className="text-slate-500 font-mono text-sm">/ 15-30 sec</span>
                      </div>

                      <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-slate-800 pb-8 italic">
                          "Bas 30 second mein customer ka dimaag ghumado." Perfect for Instagram Reels & Shorts.
                      </p>

                      <ul className="space-y-4 mb-8 flex-grow">
                          <li className="flex items-center gap-3 text-sm text-slate-300">
                              <Zap size={16} className="text-red-500"/> <span>High Energy Cuts</span>
                          </li>
                          <li className="flex items-center gap-3 text-sm text-slate-300">
                              <Video size={16} className="text-red-500"/> <span>Stock + AI Visuals</span>
                          </li>
                          <li className="flex items-center gap-3 text-sm text-slate-300">
                              <TrendingUp size={16} className="text-red-500"/> <span>Trending Music Sync</span>
                          </li>
                      </ul>

                      <button onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior:'smooth'})} className="w-full border border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all">
                          Select Reel Pack
                      </button>
                  </div>

                  {/* PLAN 2: BRAND FILM */}
                  <div className="bg-gradient-to-b from-slate-900 to-black border border-gold-600/50 p-8 md:p-10 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.1)] relative overflow-hidden flex flex-col transform md:-translate-y-4">
                      <div className="absolute top-0 right-0 bg-gold-600 text-black text-[10px] font-black px-4 py-1.5 rounded-bl-lg uppercase tracking-wider">Best Seller</div>

                      <div className="mb-6">
                          <div className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">The Foundation</div>
                          <h3 className="text-3xl font-serif text-white">Startup Story</h3>
                      </div>

                      <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                             <span className="text-5xl font-black text-white">₹9,999</span>
                             <span className="text-slate-500 font-mono text-sm">/ 60 sec</span>
                          </div>
                      </div>

                      <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-slate-800 pb-8 italic">
                          "Investor aur Customer dono ko impress karo." A cinematic intro to your brand.
                      </p>

                      <ul className="space-y-4 mb-8 flex-grow">
                          <li className="flex items-center gap-3 text-sm text-white font-medium">
                              <Shield size={16} className="text-gold-400"/> <span>Premium Scripting</span>
                          </li>
                          <li className="flex items-center gap-3 text-sm text-white font-medium">
                              <Aperture size={16} className="text-gold-400"/> <span>Cinematic Production</span>
                          </li>
                          <li className="flex items-center gap-3 text-sm text-white font-medium">
                              <Star size={16} className="text-gold-400"/> <span>Pro Voiceover (Hindi/Eng)</span>
                          </li>
                      </ul>

                      <button onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior:'smooth'})} className="w-full bg-gold-600 hover:bg-gold-500 text-slate-900 font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg">
                          Select Brand Film
                      </button>
                  </div>
              </div>
          </div>

          {/* --- MSME SECTION --- */}
          <div className="border-t border-slate-800 pt-16">
              <div className="flex items-center gap-4 mb-10 justify-center">
                  <div className="bg-slate-800 p-3 rounded-full border border-slate-700">
                      <Factory className="text-slate-300" size={24}/>
                  </div>
                  <div>
                      <h2 className="text-3xl font-bold text-white uppercase tracking-wide">For MSME / Vyapaar</h2>
                      <p className="text-slate-500 text-sm">Dhanda badhana hai? (Want to scale business?)</p>
                  </div>
              </div>

              <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-gold-500/30 transition duration-500">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                      <div>
                          <div className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">The Growth Engine</div>
                          <h3 className="text-4xl font-serif text-white mb-6">Market Leader Package</h3>
                          <p className="text-slate-300 text-lg leading-relaxed mb-8">
                              For established businesses who want to kill the competition. Deep research, shoot, and strategy included.
                              <br/><span className="text-gold-500 italic text-sm mt-2 block">"Competitors ki chhutti kardo."</span>
                          </p>
                          <ul className="space-y-3">
                              <li className="flex items-center gap-3 text-slate-200 text-sm"><CheckCircle size={16} className="text-gold-500"/> Full Product/Factory Shoot</li>
                              <li className="flex items-center gap-3 text-slate-200 text-sm"><CheckCircle size={16} className="text-gold-500"/> Founder Interview</li>
                              <li className="flex items-center gap-3 text-slate-200 text-sm"><CheckCircle size={16} className="text-gold-500"/> 3 Month Strategy Roadmap</li>
                          </ul>
                      </div>
                      
                      <div className="text-center bg-black/40 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
                          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Total Investment</div>
                          <div className="text-5xl font-black text-white mb-4">₹24,999</div>
                          <p className="text-gold-400 text-xs mb-8">High Ticket | High ROI</p>
                          <button onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior:'smooth'})} className="w-full bg-slate-100 hover:bg-white text-slate-900 font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg">
                              Scale My Vyapaar
                          </button>
                      </div>
                  </div>
              </div>
          </div>

      </div>

      {/* 6. ORDER FORM - RESTORED & UPDATED */}
      <div id="order-form" className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                      <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Secure Requisition</span>
                      <h2 className="text-4xl font-serif text-white mb-4">Book Your Slot</h2>
                      <p className="text-slate-400">Limited production slots available per month.</p>
                  </div>

                  <div className="bg-black border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl">
                      <form onSubmit={handleSubmit} className="space-y-8">
                          {/* Plan Selection */}
                          <div className="grid md:grid-cols-3 gap-4">
                                <label className="cursor-pointer">
                                    <input type="radio" name="package" value="Startup Reel (₹3999)" className="peer sr-only" required />
                                    <div className="p-4 border border-slate-700 rounded-lg peer-checked:border-red-500 peer-checked:bg-red-900/10 transition flex flex-col gap-2 bg-slate-900">
                                        <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-red-500 peer-checked:bg-red-500"></div>
                                        <div className="text-white font-bold text-sm">Startup Reel (₹3,999)</div>
                                    </div>
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" name="package" value="Startup Brand (₹9999)" className="peer sr-only" required defaultChecked />
                                    <div className="p-4 border border-slate-700 rounded-lg peer-checked:border-gold-500 peer-checked:bg-gold-900/10 transition flex flex-col gap-2 bg-slate-900">
                                        <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-gold-500 peer-checked:bg-gold-500"></div>
                                        <div className="text-white font-bold text-sm">Startup Brand (₹9,999)</div>
                                    </div>
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" name="package" value="MSME Growth (₹24999)" className="peer sr-only" required />
                                    <div className="p-4 border border-slate-700 rounded-lg peer-checked:border-white peer-checked:bg-slate-800 transition flex flex-col gap-2 bg-slate-900">
                                        <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-white peer-checked:bg-white"></div>
                                        <div className="text-white font-bold text-sm">MSME Growth (₹24,999)</div>
                                    </div>
                                </label>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8">
                              <div className="group">
                                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-gold-500 transition-colors">Brand Name</label>
                                  <input name="businessName" type="text" required placeholder="e.g. Apex Autos" className="w-full bg-slate-900 border-b border-slate-700 focus:border-gold-500 text-white p-4 outline-none transition-colors placeholder-slate-700 font-serif" />
                              </div>
                              <div className="group">
                                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-gold-500 transition-colors">Business Email</label>
                                  <input name="email" type="email" required placeholder="you@company.com" className="w-full bg-slate-900 border-b border-slate-700 focus:border-gold-500 text-white p-4 outline-none transition-colors placeholder-slate-700 font-serif" />
                              </div>
                          </div>
                          
                          <div className="group">
                              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-gold-500 transition-colors">Instagram URL</label>
                              <input name="instagram" type="url" required placeholder="@yourhandle" className="w-full bg-slate-900 border-b border-slate-700 focus:border-gold-500 text-white p-4 outline-none transition-colors placeholder-slate-700 font-serif" />
                          </div>
                          
                          <button type="submit" className="group w-full bg-gold-600 hover:bg-gold-500 text-slate-900 font-black py-6 px-8 shadow-lg transition-all duration-300 text-lg uppercase tracking-widest flex items-center justify-center gap-4 mt-8 rounded-lg">
                              <span className="relative z-10">Proceed to Briefing</span>
                              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default BrandFilms;