import React from 'react';
import { Users, TrendingUp, DollarSign, CheckCircle, ArrowRight, ShieldCheck, Zap, Fingerprint, Megaphone, Radio, MousePointerClick, BarChart3, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfluencerCampaign: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pb-24 font-sans text-slate-200">
        
        {/* 1. HERO SECTION - Ultra Classic Editorial */}
        <div className="pt-32 pb-20 px-4 relative overflow-hidden border-b border-purple-900/30">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="container mx-auto max-w-6xl relative z-10 text-center">
                <div className="inline-block mb-8 px-4 py-1.5 border border-purple-500/30 rounded-full bg-slate-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                    <span className="text-purple-400 text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        The Influencer DNA Protocol
                    </span>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
                    How Prozenius <span className="italic text-purple-500">Influencer DNA</span> program builds a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300">superbrand!</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed border-b border-slate-800 pb-12 font-serif italic">
                    "We don't buy posts. We rent credibility. A systematic injection of your brand into the bloodstream of the internet."
                </p>
            </div>
        </div>

        {/* 2. THE 5-STEP SYSTEMATIC PLAN */}
        <div className="container mx-auto px-4 py-24">
            <div className="max-w-6xl mx-auto">
                
                <div className="mb-24 text-center">
                    <h2 className="text-3xl font-bold text-slate-300 mb-4 uppercase tracking-widest">The 5-Step DNA Sequence</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        From selection to conversion: The operational blueprint for viral dominance.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Connector Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent transform -translate-x-1/2"></div>

                    {/* Step 1: Matching */}
                    <div className="mb-32 relative">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 group">
                            {/* Text Side */}
                            <div className="md:w-5/12 text-right">
                                <div className="inline-block bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs font-bold text-purple-500 uppercase tracking-widest mb-4">Phase 1: Selection</div>
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-purple-400 transition-colors">DNA Matching</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    We don't just check follower counts. We profile creators based on <strong>Psychographic Resonance</strong>. We find voices that your customers secretly trust more than their friends.
                                </p>
                                <div className="bg-slate-900/50 p-4 border-r-2 border-purple-500/50 inline-block text-right">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Strategic Effectiveness</div>
                                    <div className="text-white font-serif italic">"Guarantees trust transfer, not just impression reach."</div>
                                </div>
                            </div>
                            
                            {/* Center Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-slate-950 border border-purple-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:scale-110 transition duration-500">
                                    <Fingerprint className="text-purple-500" size={28} />
                                </div>
                                <div className="absolute top-1/2 left-full w-8 h-px bg-purple-500/30 hidden md:block"></div>
                                <div className="absolute top-1/2 right-full w-8 h-px bg-purple-500/30 hidden md:block"></div>
                            </div>

                            {/* Context/Image Side */}
                            <div className="md:w-5/12">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 text-[100px] font-serif font-black text-white/5 leading-none -mt-4 -mr-4">01</div>
                                    <h4 className="text-purple-500 font-bold mb-2 text-sm uppercase">Why it works</h4>
                                    <p className="text-slate-400 text-sm">Followers smell "paid shills" instantly. They can't detect a DNA match because the endorsement feels biologically natural.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Narrative */}
                    <div className="mb-32 relative">
                        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 group">
                            {/* Text Side */}
                            <div className="md:w-5/12 text-left">
                                <div className="inline-block bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Phase 2: Briefing</div>
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-indigo-400 transition-colors">Narrative Injection</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    We don't let influencers "wing it". We inject a specific <strong>Wedge Narrative</strong> into their scripts—a single, disruptive idea about your brand that they repeat in their own style.
                                </p>
                                <div className="bg-slate-900/50 p-4 border-l-2 border-indigo-500/50 inline-block text-left">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Strategic Effectiveness</div>
                                    <div className="text-white font-serif italic">"Creates a unified market perception across diverse voices."</div>
                                </div>
                            </div>
                            
                            {/* Center Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-slate-950 border border-indigo-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:scale-110 transition duration-500">
                                    <Megaphone className="text-indigo-500" size={28} />
                                </div>
                                <div className="absolute top-1/2 left-full w-8 h-px bg-indigo-500/30 hidden md:block"></div>
                                <div className="absolute top-1/2 right-full w-8 h-px bg-indigo-500/30 hidden md:block"></div>
                            </div>

                            {/* Context/Image Side */}
                            <div className="md:w-5/12">
                                <div className="bg-gradient-to-bl from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 text-[100px] font-serif font-black text-white/5 leading-none -mt-4 -ml-4">02</div>
                                    <h4 className="text-indigo-400 font-bold mb-2 text-sm uppercase">Why it works</h4>
                                    <p className="text-slate-400 text-sm">If 20 people say different nice things, it's noise. If 20 people say the <em>same</em> specific thing, it's a Truth.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Swarm */}
                    <div className="mb-32 relative">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 group">
                            {/* Text Side */}
                            <div className="md:w-5/12 text-right">
                                <div className="inline-block bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs font-bold text-pink-500 uppercase tracking-widest mb-4">Phase 3: Deployment</div>
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-pink-400 transition-colors">The Swarm Launch</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    We coordinate all influencers to post within a tight <strong>48-Hour Window</strong>. This floods the algorithm, tricking social platforms into believing your brand is a breaking trend.
                                </p>
                                <div className="bg-slate-900/50 p-4 border-r-2 border-pink-500/50 inline-block text-right">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Strategic Effectiveness</div>
                                    <div className="text-white font-serif italic">"Triggers artificial FOMO and algorithmic virality."</div>
                                </div>
                            </div>
                            
                            {/* Center Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-slate-950 border border-pink-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.2)] group-hover:scale-110 transition duration-500">
                                    <Zap className="text-pink-500" size={28} />
                                </div>
                                <div className="absolute top-1/2 left-full w-8 h-px bg-pink-500/30 hidden md:block"></div>
                                <div className="absolute top-1/2 right-full w-8 h-px bg-pink-500/30 hidden md:block"></div>
                            </div>

                            {/* Context/Image Side */}
                            <div className="md:w-5/12">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 text-[100px] font-serif font-black text-white/5 leading-none -mt-4 -mr-4">03</div>
                                    <h4 className="text-pink-500 font-bold mb-2 text-sm uppercase">Why it works</h4>
                                    <p className="text-slate-400 text-sm">The user sees you once: they ignore. They see you 5 times in 2 days from different people: they panic-buy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Amplify */}
                    <div className="mb-32 relative">
                        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 group">
                            {/* Text Side */}
                            <div className="md:w-5/12 text-left">
                                <div className="inline-block bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs font-bold text-blue-500 uppercase tracking-widest mb-4">Phase 4: Boost</div>
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-blue-400 transition-colors">Algorithmic Amplification</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    We identify the top 10% performing posts and put paid ad spend behind them immediately. We don't boost your ads; we boost <em>their</em> endorsements.
                                </p>
                                <div className="bg-slate-900/50 p-4 border-l-2 border-blue-500/50 inline-block text-left">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Strategic Effectiveness</div>
                                    <div className="text-white font-serif italic">"Scales the winners, kills the losers. Max ROI efficiency."</div>
                                </div>
                            </div>
                            
                            {/* Center Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-slate-950 border border-blue-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:scale-110 transition duration-500">
                                    <Radio className="text-blue-500" size={28} />
                                </div>
                                <div className="absolute top-1/2 left-full w-8 h-px bg-blue-500/30 hidden md:block"></div>
                                <div className="absolute top-1/2 right-full w-8 h-px bg-blue-500/30 hidden md:block"></div>
                            </div>

                            {/* Context/Image Side */}
                            <div className="md:w-5/12">
                                <div className="bg-gradient-to-bl from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 text-[100px] font-serif font-black text-white/5 leading-none -mt-4 -ml-4">04</div>
                                    <h4 className="text-blue-500 font-bold mb-2 text-sm uppercase">Why it works</h4>
                                    <p className="text-slate-400 text-sm">An influencer post dies in 24 hours. A boosted influencer post lives as a high-converting asset forever.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 5: Harvest */}
                    <div className="mb-12 relative">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 group">
                            {/* Text Side */}
                            <div className="md:w-5/12 text-right">
                                <div className="inline-block bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">Phase 5: Conversion</div>
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-emerald-400 transition-colors">Trust Harvesting</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    We retarget everyone who watched the influencer content with a direct "Hard Offer" ad. They are no longer cold leads; they are pre-indoctrinated fans.
                                </p>
                                <div className="bg-slate-900/50 p-4 border-r-2 border-emerald-500/50 inline-block text-right">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Strategic Effectiveness</div>
                                    <div className="text-white font-serif italic">"Turns social admiration into immediate bankable revenue."</div>
                                </div>
                            </div>
                            
                            {/* Center Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-slate-950 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition duration-500">
                                    <MousePointerClick className="text-emerald-500" size={28} />
                                </div>
                                <div className="absolute top-1/2 left-full w-8 h-px bg-emerald-500/30 hidden md:block"></div>
                                <div className="absolute top-1/2 right-full w-8 h-px bg-emerald-500/30 hidden md:block"></div>
                            </div>

                            {/* Context/Image Side */}
                            <div className="md:w-5/12">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 text-[100px] font-serif font-black text-white/5 leading-none -mt-4 -mr-4">05</div>
                                    <h4 className="text-emerald-500 font-bold mb-2 text-sm uppercase">Why it works</h4>
                                    <p className="text-slate-400 text-sm">You don't ask for marriage on the first date. The influencers date them; you marry them (convert them).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* 3. CAMPAIGN PACKAGES */}
        <div id="pricing" className="bg-gradient-to-b from-slate-950 to-purple-950/20 py-24 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-white mb-4">Campaign Architectures</h2>
                    <p className="text-slate-400">Choose the scale of your market infiltration.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* STARTER */}
                    <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 hover:border-purple-500/50 hover:bg-slate-900 transition duration-300 group">
                        <div className="text-slate-500 font-bold uppercase tracking-wider text-xs mb-4">Pilot Injection</div>
                        <div className="text-4xl font-serif text-white mb-2">₹25,000</div>
                        <div className="text-slate-500 text-xs mb-8">+ Ad Spend (Optional)</div>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-purple-500 w-5 h-5 flex-shrink-0"/> 2 Targeted Voices</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-purple-500 w-5 h-5 flex-shrink-0"/> 20k DNA-Matched Reach</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-purple-500 w-5 h-5 flex-shrink-0"/> Narrative Briefing</li>
                        </ul>
                        
                        <a href="https://wa.me/919004221717?text=Interested%20in%20Starter%20Influencer%20Pack" target="_blank" rel="noreferrer" className="block w-full text-center border border-gold-600 text-gold-400 hover:bg-gold-600 hover:text-white font-bold py-4 rounded-xl transition uppercase tracking-widest text-xs">
                            Start Pilot
                        </a>
                    </div>

                    {/* GROWTH - FEATURED */}
                    <div className="bg-slate-900 p-8 rounded-3xl border border-gold-600 shadow-[0_0_30px_rgba(234,179,8,0.15)] relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-gold-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg tracking-widest uppercase">High Velocity</div>
                        <div className="text-gold-400 font-bold uppercase tracking-wider text-xs mb-4">Growth Swarm</div>
                        <div className="text-4xl font-serif text-white mb-2">₹50,000</div>
                        <div className="text-slate-500 text-xs mb-8">Full Management</div>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-white text-sm font-medium"><CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0"/> 7 Targeted Voices</li>
                            <li className="flex gap-3 text-white text-sm font-medium"><CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0"/> 100k+ Reach Surge</li>
                            <li className="flex gap-3 text-white text-sm font-medium"><CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0"/> Viral Hook Scripting</li>
                            <li className="flex gap-3 text-white text-sm font-medium"><CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0"/> Boosting Strategy</li>
                        </ul>
                        
                        <a href="https://wa.me/919004221717?text=Interested%20in%20Growth%20Influencer%20Pack" target="_blank" rel="noreferrer" className="block w-full text-center bg-gold-600 hover:bg-gold-500 text-white font-bold py-4 rounded-xl transition shadow-lg uppercase tracking-widest text-xs">
                            Launch Swarm
                        </a>
                    </div>

                    {/* DOMINATION */}
                    <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-900 transition duration-300 group">
                        <div className="text-slate-500 font-bold uppercase tracking-wider text-xs mb-4">MarketApex</div>
                        <div className="text-4xl font-serif text-white mb-2">₹1 Lakh</div>
                        <div className="text-slate-500 text-xs mb-8">Total Ecosystem</div>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0"/> 20+ Influencer Army</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0"/> 500k+ Dominance Reach</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0"/> Dedicated Strategist</li>
                            <li className="flex gap-3 text-slate-300 text-sm font-medium"><CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0"/> Trust Harvesting Funnel</li>
                        </ul>
                        
                        <a href="https://wa.me/919004221717?text=Interested%20in%20Domination%20Influencer%20Pack" target="_blank" rel="noreferrer" className="block w-full text-center border border-gold-600 text-gold-400 hover:bg-gold-600 hover:text-white font-bold py-4 rounded-xl transition uppercase tracking-widest text-xs">
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