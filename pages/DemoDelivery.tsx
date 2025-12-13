import React from 'react';
import { ArrowRight, ShoppingBag, Smartphone, MessageCircle, RotateCw, ExternalLink, Play, Lock, Eye, MousePointerClick, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoDelivery: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pb-24 font-sans text-slate-200">
      
      {/* 1. HERO - THE CONVERSION LAYER */}
      <div className="pt-32 pb-24 px-4 relative overflow-hidden border-b border-purple-900/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
             <div className="inline-flex items-center gap-3 border border-purple-500/30 bg-slate-900/80 backdrop-blur-md px-5 py-2 mb-10 rounded-full">
                <span className="w-2 h-2 bg-purple-500 animate-pulse rounded-full"></span>
                <span className="text-purple-400 text-xs font-black tracking-[0.3em] uppercase">
                    The Conversion Layer
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.0] tracking-tighter">
                Push Them to <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">Buy Now.</span>
            </h1>

            <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                Influencers build desire. We build the checkout engine. <br/>
                See how we turn "passive views" into "active revenue" using 4 distinct conversion mechanics.
            </p>
            
            <a href="#demos" className="inline-flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest text-sm hover:text-white transition group">
                See Live Demos <ArrowRight size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
        </div>
      </div>

      {/* 2. DEMO SECTION */}
      <div id="demos" className="container mx-auto px-4 py-24 space-y-32">
          
          {/* DEMO 1: THE DISCOUNT CODE ENGINE */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-purple-500">
                          <Lock size={24}/>
                      </div>
                      <h2 className="text-3xl font-serif text-white">The Discount Code Engine</h2>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-purple-900 pl-6">
                      We don't just "mention" a code. We burn it into the screen. Unique codes track every sale back to specific creators, incentivizing their audience with exclusivity.
                  </p>
                  <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-purple-500"/> <span>Full-screen text overlays</span></li>
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-purple-500"/> <span>Verbal call-to-action (Auditory Hook)</span></li>
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-purple-500"/> <span>Scarcity Timer (24h Only)</span></li>
                  </ul>
              </div>
              
              {/* VISUAL MOCKUP */}
              <div className="relative group mx-auto max-w-xs">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative bg-black rounded-3xl overflow-hidden aspect-[9/16] border border-slate-800 shadow-2xl">
                      {/* Fake Video BG */}
                      <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-60" alt="Influencer" />
                      
                      {/* Overlay Elements */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                      
                      <div className="absolute bottom-20 left-0 right-0 px-6 text-center">
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl mb-4 transform scale-105 shadow-xl">
                              <p className="text-xs text-slate-300 uppercase tracking-widest mb-1">Use Code</p>
                              <div className="text-3xl font-black text-white tracking-widest">APEX20</div>
                              <p className="text-[10px] text-green-400 mt-1 font-bold">20% OFF • ENDS TONIGHT</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* DEMO 2: THE SWIPE-UP FUNNEL */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-pink-500">
                          <Smartphone size={24}/>
                      </div>
                      <h2 className="text-3xl font-serif text-white">The Swipe-Up Funnel</h2>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-pink-900 pl-6">
                      Zero friction. Influencer Stories link directly to a custom landing page optimized for mobile conversion. No searching, no typing.
                  </p>
                  <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-pink-500"/> <span>Direct deep-link to Product Page</span></li>
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-pink-500"/> <span>Pre-loaded Cart functionality</span></li>
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-pink-500"/> <span>"See More" animated stickers</span></li>
                  </ul>
              </div>
              
              {/* VISUAL MOCKUP */}
              <div className="lg:order-1 relative group mx-auto max-w-xs">
                  <div className="absolute -inset-1 bg-gradient-to-br from-pink-600 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative bg-black rounded-3xl overflow-hidden aspect-[9/16] border border-slate-800 shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Story" />
                      
                      {/* Swipe UI */}
                      <div className="absolute bottom-0 left-0 right-0 pb-8 pt-20 bg-gradient-to-t from-black to-transparent text-center">
                          <div className="animate-bounce mb-2">
                              <div className="w-8 h-8 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                                  <ArrowRight className="-rotate-90 text-black" size={16} strokeWidth={3}/>
                              </div>
                          </div>
                          <div className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full inline-block uppercase tracking-wide shadow-lg">
                              Shop Now
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* DEMO 3: PINNED COMMENT STRATEGY */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-blue-500">
                          <MessageCircle size={24}/>
                      </div>
                      <h2 className="text-3xl font-serif text-white">Pinned Comment Links</h2>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-blue-900 pl-6">
                      The "Link in Bio" is too far. We place the checkout link right where the conversation happens. The Pinned Comment is prime real estate for impulsive clickers.
                  </p>
                  <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-blue-500"/> <span>Top-of-fold visibility</span></li>
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-blue-500"/> <span>Social Proof context (surrounded by fans)</span></li>
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-blue-500"/> <span>Trackable UTM parameters</span></li>
                  </ul>
              </div>
              
              {/* VISUAL MOCKUP */}
              <div className="relative group mx-auto w-full max-w-sm">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl p-4">
                      {/* Comments Header */}
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Comments (482)</div>
                      
                      {/* Pinned Comment */}
                      <div className="flex gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4 relative">
                          <div className="absolute top-2 right-2 text-[10px] text-slate-400 flex items-center gap-1">
                              <ExternalLink size={10}/> Pinned
                          </div>
                          <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0">
                              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-full h-full rounded-full object-cover" alt="Influencer"/>
                          </div>
                          <div>
                              <div className="text-xs font-bold text-slate-900 mb-1">SarahLifestyle <span className="text-blue-500 text-[10px]">✔</span></div>
                              <p className="text-xs text-slate-700 leading-relaxed mb-2">
                                  Guys! The stock is running super low. Grab yours here before it's gone: 👇
                              </p>
                              <a href="#" className="text-blue-600 text-xs font-bold hover:underline">bit.ly/ProZenius-Deal</a>
                          </div>
                      </div>

                      {/* Random Comments */}
                      <div className="space-y-3 opacity-50">
                          <div className="flex gap-3">
                              <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                              <div className="h-2 bg-slate-200 w-3/4 rounded"></div>
                          </div>
                          <div className="flex gap-3">
                              <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                              <div className="h-2 bg-slate-200 w-1/2 rounded"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* DEMO 4: RETARGETING ADS */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-green-500">
                          <RotateCw size={24}/>
                      </div>
                      <h2 className="text-3xl font-serif text-white">Influencer Retargeting</h2>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-green-900 pl-6">
                      Goal: "I want it — and I want it now." We take the influencer's video and run it as a paid ad to people who visited your site but didn't buy. It's the ultimate trust seal to close the deal.
                  </p>
                  <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-green-500"/> <span>Targets Cart Abandoners</span></li>
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-green-500"/> <span>Uses Influencer Face (Not Brand Logo)</span></li>
                      <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-green-500"/> <span>Hard "Shop Now" Call To Action</span></li>
                  </ul>
              </div>
              
              {/* VISUAL DIAGRAM */}
              <div className="lg:order-1 relative group mx-auto w-full max-w-md">
                  <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
                      <div className="flex justify-between items-center mb-8 relative z-10">
                          {/* Step 1 */}
                          <div className="text-center">
                              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-2">
                                  <Eye size={20}/>
                              </div>
                              <div className="text-[10px] text-slate-500 uppercase font-bold">Views Video</div>
                          </div>
                          
                          {/* Arrow */}
                          <div className="h-0.5 bg-slate-700 flex-grow mx-4 relative">
                              <div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-slate-700 transform rotate-45"></div>
                          </div>

                          {/* Step 2 */}
                          <div className="text-center">
                              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-2">
                                  <Clock size={20}/>
                              </div>
                              <div className="text-[10px] text-slate-500 uppercase font-bold">Waits 24h</div>
                          </div>

                          {/* Arrow */}
                          <div className="h-0.5 bg-slate-700 flex-grow mx-4 relative">
                              <div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-slate-700 transform rotate-45"></div>
                          </div>

                          {/* Step 3 */}
                          <div className="text-center">
                              <div className="w-12 h-12 bg-green-900/30 border border-green-500/50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-2 animate-pulse">
                                  <MousePointerClick size={20}/>
                              </div>
                              <div className="text-[10px] text-green-500 uppercase font-bold">Sees Ad & Buys</div>
                          </div>
                      </div>
                      
                      {/* AD PREVIEW */}
                      <div className="bg-white rounded-lg p-3 max-w-[200px] mx-auto shadow-lg transform rotate-2">
                          <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                              <div className="text-[10px] font-bold text-black">Sponsored</div>
                          </div>
                          <div className="h-24 bg-slate-100 rounded mb-2 flex items-center justify-center text-slate-300">
                              <Play size={20} fill="currentColor"/>
                          </div>
                          <div className="bg-blue-600 text-white text-[10px] font-bold text-center py-1 rounded">
                              Shop Now
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>

      {/* 3. CTA */}
      <div className="border-t border-slate-900 bg-gradient-to-b from-slate-950 to-black py-24 text-center">
          <div className="container mx-auto px-4">
              <h2 className="text-4xl font-serif text-white mb-8">Ready to Build Your <span className="text-purple-500 italic">Sales Engine</span>?</h2>
              <Link to="/influencer-campaign" className="bg-gold-600 hover:bg-gold-500 text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-sm shadow-xl transition-all hover:scale-105 inline-flex items-center gap-3">
                  <ShoppingBag size={18} /> Deploy Conversion Layer
              </Link>
          </div>
      </div>

    </div>
  );
};

export default DemoDelivery;