import React from 'react';
import { CheckCircle, Shield, Zap, TrendingUp, Lock, ArrowRight, Play, Database, FileText, Video, Aperture, Star } from 'lucide-react';

const BrandFilms: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // 1. WhatsApp Notification
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const packageType = formData.get('package') as string;
    const instagram = formData.get('instagram') as string;
    
    const msg = encodeURIComponent(`🎥 NEW FILM ORDER\n\nPlan: ${packageType}\nBrand: ${businessName}\nEmail: ${email}\nInsta: ${instagram}`);
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-slate-950 min-h-screen pb-0 font-sans text-slate-200 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO SECTION - PRODUCT FOCUS */}
      <div className="pt-32 pb-20 px-4 relative overflow-hidden border-b border-slate-900">
          {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-gold-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
             <div className="inline-flex items-center gap-3 border border-gold-500/30 bg-slate-900/80 backdrop-blur-md px-5 py-2 mb-10 rounded-full">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse"></span>
                <span className="text-gold-400 text-xs font-black tracking-[0.3em] uppercase">
                    MarketApex™ Technology
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tighter">
                ProZenius <br/>
                <span className="italic text-gold-500">Brand Films</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                We don't make videos. We engineer <span className="text-white font-serif italic">desire</span>. <br/>
                High-converting brand assets powered by Dark DNA psychology.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})} className="bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition shadow-lg">
                    View Pricing
                </button>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest px-6 py-4 border border-slate-800 bg-slate-900/50">
                    <Database size={14} className="text-gold-500"/>
                    450% Avg. Conversion Uplift
                </div>
            </div>
        </div>
      </div>

      {/* 2. PRICING SECTION - THE CORE OFFERING */}
      <div id="pricing" className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-4">Select Your Weapon</h2>
              <p className="text-slate-500">Choose the asset class for your growth stage.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* PLAN 1: VIRAL AD */}
              <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl hover:border-gold-500/50 transition duration-300 group relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 right-0 bg-slate-800 text-[10px] font-bold px-3 py-1 rounded-bl-lg text-slate-400 uppercase tracking-wider">Entry Level</div>
                  
                  <div className="mb-6">
                      <div className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">The Hook</div>
                      <h3 className="text-3xl font-serif text-white">Viral Ad Asset</h3>
                  </div>

                  <div className="mb-8 flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">₹3,999</span>
                      <span className="text-slate-500 font-mono text-sm">/ video</span>
                  </div>

                  <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-slate-800 pb-8">
                      A 15-30 second high-velocity asset designed for Instagram Reels & Shorts. Engineered for maximum retention and immediate click-through.
                  </p>

                  <ul className="space-y-4 mb-8 flex-grow">
                      <li className="flex items-center gap-3 text-sm text-slate-300">
                          <Zap size={16} className="text-gold-500"/> <span>Dark DNA Scripting</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-300">
                          <Video size={16} className="text-gold-500"/> <span>Stock + AI Hybrid Visuals</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-300">
                          <TrendingUp size={16} className="text-gold-500"/> <span>Viral Music Sync</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-300">
                          <CheckCircle size={16} className="text-gold-500"/> <span>24 Hour Delivery</span>
                      </li>
                  </ul>

                  <button onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior:'smooth'})} className="w-full bg-gradient-to-b from-gold-500 to-gold-700 hover:from-gold-400 hover:to-gold-600 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-[0_6px_0_#6E4613] active:shadow-none active:translate-y-[6px] border-t border-gold-400">
                      Select Viral Ad
                  </button>
              </div>

              {/* PLAN 2: BRAND FILM */}
              <div className="bg-gradient-to-b from-slate-900 to-black border border-gold-600/50 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(234,179,8,0.1)] relative overflow-hidden transform md:-translate-y-4 flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold-500"></div>
                  <div className="absolute top-0 right-0 bg-gold-600 text-black text-[10px] font-black px-4 py-1.5 rounded-bl-lg uppercase tracking-wider">Best Seller</div>

                  <div className="mb-6">
                      <div className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">The Anchor</div>
                      <h3 className="text-3xl font-serif text-white">MarketApex Film</h3>
                  </div>

                  <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                         <span className="text-5xl font-black text-white">₹9,999</span>
                      </div>
                      <span className="text-gold-500 font-bold text-xs uppercase tracking-wider">Base Investment</span>
                  </div>

                  <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-slate-800 pb-8">
                      A 3-minute cinematic masterpiece. Defines your category, establishes authority, and creates the "Superbrand" perception.
                  </p>

                  <ul className="space-y-4 mb-8 flex-grow">
                      <li className="flex items-center gap-3 text-sm text-white font-medium">
                          <Shield size={16} className="text-gold-400"/> <span>MarketApex Positioning Strategy</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-white font-medium">
                          <Aperture size={16} className="text-gold-400"/> <span>Cinematic Grade Production</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-white font-medium">
                          <Star size={16} className="text-gold-400"/> <span>Pro Voiceover & Sound Design</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-white font-medium">
                          <Lock size={16} className="text-gold-400"/> <span>Unlimited Revisions</span>
                      </li>
                  </ul>

                  <button onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior:'smooth'})} className="w-full bg-gradient-to-b from-gold-500 to-gold-700 hover:from-gold-400 hover:to-gold-600 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-[0_6px_0_#6E4613] active:shadow-none active:translate-y-[6px] border-t border-gold-400">
                      Select Brand Film
                  </button>
              </div>
          </div>
      </div>

      {/* 3. ORDER FORM - RESTORED */}
      <div id="order-form" className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                      <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Secure Requisition</span>
                      <h2 className="text-4xl font-serif text-white mb-4">Initiate Production</h2>
                      <p className="text-slate-400">Your brief will be analyzed by our Dark DNA specialists immediately.</p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl">
                      <form onSubmit={handleSubmit} className="space-y-8">
                          {/* Plan Selection */}
                          <div className="grid md:grid-cols-2 gap-4">
                                <label className="cursor-pointer">
                                    <input type="radio" name="package" value="Viral Ad (₹3999)" className="peer sr-only" required />
                                    <div className="p-4 border border-slate-700 rounded-lg peer-checked:border-gold-500 peer-checked:bg-gold-500/10 transition flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-gold-500 peer-checked:bg-gold-500"></div>
                                        <div className="text-white font-bold text-sm">Viral Ad (₹3,999)</div>
                                    </div>
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" name="package" value="Brand Film (₹9999)" className="peer sr-only" required defaultChecked />
                                    <div className="p-4 border border-slate-700 rounded-lg peer-checked:border-gold-500 peer-checked:bg-gold-500/10 transition flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border border-slate-500 peer-checked:border-gold-500 peer-checked:bg-gold-500"></div>
                                        <div className="text-white font-bold text-sm">MarketApex Film (₹9,999)</div>
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
                          
                          <button type="submit" className="group w-full bg-gold-600 hover:bg-gold-500 text-white font-black py-6 px-8 shadow-lg transition-all duration-300 text-lg uppercase tracking-widest flex items-center justify-center gap-4 mt-8 rounded-lg">
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