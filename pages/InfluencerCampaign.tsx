import React from 'react';
import { Users, TrendingUp, ShoppingBag, CheckCircle, ArrowRight, Zap, Fingerprint, Megaphone, Radio, MousePointerClick, Lock, Repeat, MessageCircle, Smartphone, Eye, Clock, RotateCw, AlertTriangle, Timer, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfluencerCampaign: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pb-24 font-sans text-slate-200">
        
        {/* 1. HERO SECTION - SUPERSALE X */}
        <div className="pt-32 pb-24 px-4 relative overflow-hidden border-b border-red-900/30">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            
            <div className="container mx-auto max-w-6xl relative z-10 text-center">
                <div className="inline-block mb-8 px-4 py-1.5 border border-red-500/30 rounded-full bg-slate-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <span className="text-red-400 text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Revenue Extraction Event
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tighter">
                    Supersale <span className="italic text-red-600">X</span> <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-white to-red-200 text-3xl md:text-6xl font-sans font-black tracking-normal">The Campaign Protocol</span>
                </h1>
                
                <div className="max-w-3xl mx-auto border-l-2 border-red-600 pl-8 text-left mb-12 bg-slate-900/50 p-6 rounded-r-xl backdrop-blur-sm">
                    <p className="text-xl text-slate-300 font-light leading-relaxed font-serif italic">
                        "Traditional influencer marketing is about 'Awareness'. <strong>Supersale X</strong> is about 'Extraction'. We coordinate 10-50 influencers to strike simultaneously, creating an artificial 'Black Friday' event for your brand, any day of the year."
                    </p>
                </div>

                <a href="#packages" className="bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all hover:scale-105 inline-flex items-center gap-3">
                    <ShoppingBag size={18} /> Deploy Sales Engine
                </a>
            </div>
        </div>

        {/* 2. THE CONVERSION ARSENAL (7 WEAPONS) */}
        <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-4">The Conversion Arsenal</h2>
                <p className="text-slate-400">7 Psychological Weapons we deploy to force the sale.</p>
            </div>

            <div className="space-y-32">
                
                {/* WEAPON 1: DISCOUNT CODE ENGINE */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-purple-500">
                                <Lock size={24}/>
                            </div>
                            <h2 className="text-3xl font-serif text-white">1. The Discount Code Engine</h2>
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
                    {/* Visual */}
                    <div className="relative group mx-auto max-w-xs">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative bg-black rounded-3xl overflow-hidden aspect-[9/16] border border-slate-800 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-60" alt="Influencer" />
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

                {/* WEAPON 2: SWIPE UP FUNNEL */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-pink-500">
                                <Smartphone size={24}/>
                            </div>
                            <h2 className="text-3xl font-serif text-white">2. The Swipe-Up Funnel</h2>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-pink-900 pl-6">
                            Zero friction. Influencer Stories link directly to a custom landing page optimized for mobile conversion. No searching, no typing.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-pink-500"/> <span>Direct deep-link to Product Page</span></li>
                            <li className="flex items-center gap-3 text-slate-300"><CheckCircle size={16} className="text-pink-500"/> <span>"See More" animated stickers</span></li>
                        </ul>
                    </div>
                    {/* Visual */}
                    <div className="lg:order-1 relative group mx-auto max-w-xs">
                        <div className="absolute -inset-1 bg-gradient-to-br from-pink-600 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative bg-black rounded-3xl overflow-hidden aspect-[9/16] border border-slate-800 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Story" />
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

                {/* WEAPON 3: PINNED COMMENT */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-blue-500">
                                <MessageCircle size={24}/>
                            </div>
                            <h2 className="text-3xl font-serif text-white">3. Pinned Comment Links</h2>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-blue-900 pl-6">
                            The "Link in Bio" is too far. We place the checkout link right where the conversation happens. The Pinned Comment is prime real estate for impulsive clickers.
                        </p>
                    </div>
                    {/* Visual */}
                    <div className="relative group mx-auto w-full max-w-sm">
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl p-4">
                            <div className="flex gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4 relative">
                                <div className="absolute top-2 right-2 text-[10px] text-slate-400 flex items-center gap-1">
                                    <ArrowRight size={10}/> Pinned
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-full h-full rounded-full object-cover" alt="Influencer"/>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900 mb-1">SarahLifestyle <span className="text-blue-500 text-[10px]">✔</span></div>
                                    <p className="text-xs text-slate-700 leading-relaxed mb-2">
                                        Guys! The stock is running super low. Grab yours here before it's gone: 👇
                                    </p>
                                    <a href="#" className="text-blue-600 text-xs font-bold hover:underline">bit.ly/Supersale-Deal</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WEAPON 4: RETARGETING */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-green-500">
                                <RotateCw size={24}/>
                            </div>
                            <h2 className="text-3xl font-serif text-white">4. Influencer Retargeting</h2>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-green-900 pl-6">
                            Goal: "I want it — and I want it now." We take the influencer's video and run it as a paid ad to people who visited your site but didn't buy.
                        </p>
                    </div>
                    {/* Visual */}
                    <div className="lg:order-1 relative group mx-auto w-full max-w-md">
                        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
                            <div className="flex justify-between items-center mb-8 relative z-10">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-2"><Eye size={20}/></div>
                                    <div className="text-[10px] text-slate-500 uppercase font-bold">Views Video</div>
                                </div>
                                <div className="h-0.5 bg-slate-700 flex-grow mx-4"></div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-green-900/30 border border-green-500/50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-2 animate-pulse"><MousePointerClick size={20}/></div>
                                    <div className="text-[10px] text-green-500 uppercase font-bold">Sees Ad & Buys</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WEAPON 5: DARK DM AUTOMATION (NEW) */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-gold-500">
                                <Zap size={24}/>
                            </div>
                            <h2 className="text-3xl font-serif text-white">5. Dark DM Automation</h2>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-gold-900 pl-6">
                            The highest converting link is the one sent privately. We set up automation where users comment a keyword (e.g., "PRICE"), and an AI bot instantly DMs them the checkout link.
                        </p>
                        <div className="flex gap-2">
                            <span className="bg-slate-800 text-xs px-2 py-1 rounded text-slate-400">#HighConversion</span>
                            <span className="bg-slate-800 text-xs px-2 py-1 rounded text-slate-400">#ZeroFriction</span>
                        </div>
                    </div>
                    {/* Visual */}
                    <div className="relative bg-white rounded-2xl p-4 max-w-sm mx-auto shadow-2xl">
                        <div className="bg-slate-50 p-3 rounded-lg mb-2">
                            <p className="text-xs text-black font-bold">User:</p>
                            <p className="text-xs text-slate-700">PRICE please! 😍</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <p className="text-xs text-blue-800 font-bold">Brand (Bot):</p>
                            <p className="text-xs text-blue-900">Hey! Check your DM, I just sent you the secret link with 20% off! 🤫</p>
                        </div>
                    </div>
                </div>

                {/* WEAPON 6: THE ANTI-REVIEW (NEW) */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:order-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-red-500">
                                <AlertTriangle size={24}/>
                            </div>
                            <h2 className="text-3xl font-serif text-white">6. The Anti-Review</h2>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-red-900 pl-6">
                            Reverse psychology at scale. Influencers start with "Don't buy this..." and pivot to "...unless you hate saving time." This hook destroys skepticism and skyrockets retention.
                        </p>
                    </div>
                    {/* Visual */}
                    <div className="lg:order-1 bg-slate-900 border border-red-500/30 p-8 rounded-3xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-900/10 animate-pulse"></div>
                        <h3 className="text-3xl font-black text-white text-center mb-2">"DO NOT BUY THIS"</h3>
                        <p className="text-center text-red-400 text-sm font-bold uppercase tracking-widest">Hook Deployed</p>
                    </div>
                </div>

                {/* WEAPON 7: FLASH-WALL LANDING PAGE (NEW) */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-orange-500">
                                <Timer size={24}/>
                            </div>
                            <h2 className="text-3xl font-serif text-white">7. The Flash-Wall Page</h2>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-orange-900 pl-6">
                            We create a dedicated landing page for the campaign that literally expires. When the influencer says "24 hours only," the page actually locks after 24 hours. Real urgency = Real sales.
                        </p>
                    </div>
                    {/* Visual */}
                    <div className="relative bg-white rounded-2xl overflow-hidden max-w-sm mx-auto shadow-2xl border-4 border-slate-800">
                        <div className="bg-red-600 text-white text-center py-2 font-bold text-xs uppercase tracking-widest animate-pulse">
                            Offer Expires in 04:12:09
                        </div>
                        <div className="p-8 text-center">
                            <div className="text-3xl font-black text-slate-900 mb-2">Supersale X</div>
                            <button className="bg-black text-white w-full py-3 rounded font-bold uppercase text-sm">Claim Offer</button>
                        </div>
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center flex-col opacity-0 hover:opacity-100 transition duration-500">
                            <XCircle className="text-red-500 w-12 h-12 mb-2"/>
                            <span className="text-white font-bold uppercase">Page Locked</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* 3. CAMPAIGN PACKAGES */}
        <div id="packages" className="bg-gradient-to-b from-slate-950 to-red-950/20 py-24 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-white mb-4">Select Deployment Scale</h2>
                    <p className="text-slate-400">Choose the velocity of your sales event.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    
                    {/* TIER 1: PILOT */}
                    <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 hover:border-red-500/50 hover:bg-slate-900 transition duration-300 group">
                        <div className="text-slate-500 font-bold uppercase tracking-wider text-xs mb-4">Pilot Injection</div>
                        <div className="text-4xl font-serif text-white mb-2">₹25,000</div>
                        <div className="text-slate-500 text-xs mb-8">+ Ad Spend (Optional)</div>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-red-500 w-5 h-5 flex-shrink-0"/> 3 Micro Influencers</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-red-500 w-5 h-5 flex-shrink-0"/> Discount Code Engine</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-red-500 w-5 h-5 flex-shrink-0"/> Basic Narrative Brief</li>
                        </ul>
                        
                        <a href="https://wa.me/919004221717?text=Interested%20in%20Starter%20Supersale%20Pack" target="_blank" rel="noreferrer" className="block w-full text-center border border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold py-4 rounded-xl transition uppercase tracking-widest text-xs">
                            Start Pilot
                        </a>
                    </div>

                    {/* TIER 2: SUPERSALE X (FEATURED) */}
                    <div className="bg-slate-900 p-8 rounded-3xl border border-gold-600 shadow-[0_0_40px_rgba(220,38,38,0.2)] relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg tracking-widest uppercase">Most Popular</div>
                        <div className="text-gold-400 font-bold uppercase tracking-wider text-xs mb-4">Supersale X</div>
                        <div className="text-5xl font-serif text-white mb-2">₹49,000</div>
                        <div className="text-slate-500 text-xs mb-8">/ Month</div>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-white text-sm font-medium"><CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0"/> 10 Niche Influencers</li>
                            <li className="flex gap-3 text-white text-sm font-medium"><CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0"/> Dark DM Automation Setup</li>
                            <li className="flex gap-3 text-white text-sm font-medium"><CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0"/> The Anti-Review Scripting</li>
                            <li className="flex gap-3 text-white text-sm font-medium"><CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0"/> Swarm Launch Coordination</li>
                        </ul>
                        
                        <a href="https://wa.me/919004221717?text=Interested%20in%20Supersale%20X%20Pack" target="_blank" rel="noreferrer" className="block w-full text-center bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition shadow-lg uppercase tracking-widest text-xs">
                            Launch Supersale X
                        </a>
                    </div>

                    {/* TIER 3: DOMINATION */}
                    <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-900 transition duration-300 group">
                        <div className="text-slate-500 font-bold uppercase tracking-wider text-xs mb-4">MarketApex</div>
                        <div className="text-4xl font-serif text-white mb-2">₹1.2 Lakh</div>
                        <div className="text-slate-500 text-xs mb-8">/ Month</div>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0"/> 25+ Influencer Army</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0"/> Flash-Wall Landing Pages</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0"/> Full Retargeting Ads Mgmt</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0"/> Dedicated Strategist</li>
                        </ul>
                        
                        <a href="https://wa.me/919004221717?text=Interested%20in%20Domination%20Pack" target="_blank" rel="noreferrer" className="block w-full text-center border border-gold-600 text-gold-400 hover:bg-gold-600 hover:text-white font-bold py-4 rounded-xl transition uppercase tracking-widest text-xs">
                            Initiate Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default InfluencerCampaign;