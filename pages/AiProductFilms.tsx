import React from 'react';
import { ArrowRight, Layers, Cpu, Eye, Zap, Box, Lock, MonitorPlay, Smartphone, CheckCircle, Database } from 'lucide-react';

const AiProductFilms: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const productUrl = formData.get('productUrl') as string;
    
    const msg = encodeURIComponent(`📦 PRODUCT FILM ORDER\n\nBrand: ${businessName}\nEmail: ${email}\nProduct URL: ${productUrl}`);
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-200 selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION - Product Engineering Aesthetic */}
      <div className="pt-32 pb-24 px-4 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
             <div className="inline-flex items-center gap-3 border border-indigo-500/30 bg-slate-900/80 backdrop-blur-md px-5 py-2 mb-10 rounded-sm">
                <span className="w-1.5 h-1.5 bg-indigo-500 animate-pulse"></span>
                <span className="text-indigo-300 text-xs font-bold tracking-[0.3em] uppercase">
                    Neural Cinematography Unit
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 leading-[0.9] tracking-tighter">
                AI Product <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-400">Service Films</span>
            </h1>

            <div className="max-w-3xl mx-auto border-l-2 border-indigo-500 pl-8 text-left mb-16">
                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed font-serif">
                    "Don't just explain your product. <strong className="text-white">Install it</strong> in their minds. We use Neural Rendering to turn abstract services and complex SaaS into high-octane cinematic trailers that make the invisible, irresistible."
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <button onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior:'smooth'})} className="bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition shadow-lg rounded-sm">
                    Initiate Visualization
                </button>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest px-6 py-4 border border-slate-800 bg-slate-900/50">
                    <MonitorPlay size={16} className="text-indigo-500"/>
                    For SaaS, Fintech & Hardware
                </div>
            </div>
        </div>
      </div>

      {/* 2. THE VISUAL PROTOCOL - Architectural Layout */}
      <div className="container mx-auto px-4 py-32 border-b border-slate-900">
         <div className="max-w-6xl mx-auto">
             
             <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-8 border-b border-slate-900">
                 <div>
                     <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-2 block">The Difference</span>
                     <h2 className="text-4xl font-serif text-white">The Rendering Protocol</h2>
                 </div>
                 <p className="text-slate-500 text-sm uppercase tracking-widest mt-4 md:mt-0">
                     How we visualize the intangible
                 </p>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
                 
                 {/* Feature 1 */}
                 <div className="group bg-slate-900/40 p-10 border border-slate-800 hover:border-indigo-500/50 transition duration-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-6xl text-slate-600 group-hover:text-indigo-500 transition-colors">01</div>
                     <div className="w-12 h-12 bg-slate-950 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <Layers className="text-indigo-500"/>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">Neural UI Upscaling</h3>
                     <p className="text-slate-400 leading-relaxed mb-6">
                         Screen recordings are boring. We deconstruct your UI and rebuild it in a 3D cinematic environment. Buttons glow, charts grow dynamically, and the interface feels alive.
                     </p>
                     <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Target: SaaS & Apps</div>
                 </div>

                 {/* Feature 2 */}
                 <div className="group bg-slate-900/40 p-10 border border-slate-800 hover:border-indigo-500/50 transition duration-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-6xl text-slate-600 group-hover:text-indigo-500 transition-colors">02</div>
                     <div className="w-12 h-12 bg-slate-950 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <Box className="text-indigo-500"/>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">Metaphorical Visualization</h3>
                     <p className="text-slate-400 leading-relaxed mb-6">
                         Selling a service? We visualize the *outcome*. Cybersecurity becomes a digital shield; Logistics becomes a flowing light-stream. We make the invisible tangible.
                     </p>
                     <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Target: Services & B2B</div>
                 </div>

                 {/* Feature 3 */}
                 <div className="group bg-slate-900/40 p-10 border border-slate-800 hover:border-indigo-500/50 transition duration-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-6xl text-slate-600 group-hover:text-indigo-500 transition-colors">03</div>
                     <div className="w-12 h-12 bg-slate-950 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <Zap className="text-indigo-500"/>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">Benefit Stacking</h3>
                     <p className="text-slate-400 leading-relaxed mb-6">
                         Rapid-fire visual editing where every second introduces a new value proposition. Engineered to overwhelm the viewer's skepticism with sheer value density.
                     </p>
                     <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Target: Conversion Ads</div>
                 </div>

                 {/* Feature 4 */}
                 <div className="group bg-slate-900/40 p-10 border border-slate-800 hover:border-indigo-500/50 transition duration-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-6xl text-slate-600 group-hover:text-indigo-500 transition-colors">04</div>
                     <div className="w-12 h-12 bg-slate-950 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <Cpu className="text-indigo-500"/>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">The Trust Anchor</h3>
                     <p className="text-slate-400 leading-relaxed mb-6">
                         We visualize the "Black Box" of your technology. Showing the "AI Brain" or the "Engine" working builds immense authority and justifies premium pricing.
                     </p>
                     <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Target: High-Ticket Sales</div>
                 </div>

             </div>
         </div>
      </div>

      {/* 3. ORDER / CTA SECTION */}
      <div id="order-form" className="bg-slate-950 py-32 border-t border-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
              
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left Column: Context */}
                  <div className="lg:col-span-5 space-y-12">
                      <div>
                          <span className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Deployment</span>
                          <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
                              Visualize <span className="italic text-slate-600">Dominance</span>
                          </h2>
                          <p className="text-slate-400 text-lg font-light leading-relaxed border-l border-slate-800 pl-6">
                              Ideal for product launches, website headers, and high-stakes sales decks.
                          </p>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 p-8">
                          <h3 className="font-serif text-2xl text-white mb-6 italic">Production Suite</h3>
                          <ul className="space-y-4">
                              {[
                                  "3D Product/UI Modeling",
                                  "Motion Graphics Animation",
                                  "Sound Design & SFX",
                                  "Scripting & Storyboarding",
                                  "4K Export"
                              ].map((f, i) => (
                                  <li key={i} className="flex items-center gap-4 text-slate-300 group">
                                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div>
                                      <span className="font-light tracking-wide">{f}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>

                  {/* Right Column: Form */}
                  <div className="lg:col-span-7">
                      <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 relative shadow-2xl">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-white to-indigo-600"></div>
                          
                          <div className="flex justify-between items-end mb-10 pb-6 border-b border-slate-800">
                              <div>
                                  <h3 className="text-xl font-bold text-white uppercase tracking-widest">Production Requisition</h3>
                                  <p className="text-slate-500 text-xs mt-1">AI-Enhanced Workflow</p>
                              </div>
                              <div className="text-right">
                                  <div className="text-3xl font-serif text-white">₹14,999</div>
                                  <div className="text-indigo-500 text-xs font-bold uppercase tracking-wider">Starting Investment</div>
                              </div>
                          </div>
                          
                          <form onSubmit={handleSubmit} className="space-y-8">
                              <div className="grid md:grid-cols-2 gap-8">
                                  <div className="group">
                                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Brand / Product</label>
                                      <input name="businessName" type="text" required placeholder="e.g. NeoBank App" className="w-full bg-slate-950 border-b border-slate-700 focus:border-indigo-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                                  </div>
                                  <div className="group">
                                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Contact Protocol</label>
                                      <input name="email" type="email" required placeholder="you@company.com" className="w-full bg-slate-950 border-b border-slate-700 focus:border-indigo-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                                  </div>
                              </div>
                              
                              <div className="group">
                                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Product/Service Link</label>
                                  <input name="productUrl" type="url" required placeholder="https://..." className="w-full bg-slate-950 border-b border-slate-700 focus:border-indigo-600 text-white p-4 outline-none transition-colors placeholder-slate-800 font-serif" />
                              </div>
                              
                              <div className="pt-6">
                                  <button type="submit" className="group w-full bg-gold-600 hover:bg-gold-500 text-white font-black py-6 px-8 shadow-lg transition-all duration-300 text-lg uppercase tracking-widest flex items-center justify-center gap-4 border border-transparent rounded-lg">
                                      <span className="relative z-10">Initiate Production Sequence</span>
                                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                  </button>
                                  <div className="flex justify-center items-center gap-2 mt-4 text-[10px] text-slate-600 uppercase tracking-widest">
                                      <Lock size={10} /> Secure WhatsApp Encryption
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

export default AiProductFilms;