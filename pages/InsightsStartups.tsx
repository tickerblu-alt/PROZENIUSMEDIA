import React, { useState } from 'react';
import { Rocket, Zap, ArrowRight, Lock, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsStartups: React.FC = () => {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
      e.preventDefault();
      if(email) {
          setUnlocked(true);
          alert("One framework unlocked! Check your email.");
      }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* High Energy Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-24 relative overflow-hidden border-b-8 border-gold-500">
         <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 mb-6">
                 <Rocket size={16} className="text-gold-300" />
                 <span className="text-xs font-bold uppercase tracking-wider text-gold-100">For Founders Only</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                 Scale from Zero <br/><span className="text-gold-500">to Billion.</span>
             </h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                 Exclusive frameworks engineered for PMF, investor triggers, and category creation. Used by 423 high-growth founders.
             </p>
             <a href="#frameworks" className="bg-gold-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-500 transition shadow-[0_0_20px_rgba(234,179,8,0.3)] inline-flex items-center gap-2">
                 Access Protocols <ArrowRight/>
             </a>
         </div>
      </div>

      {/* Frameworks List */}
      <div id="frameworks" className="container mx-auto px-4 py-20">
          <div className="grid gap-8 max-w-5xl mx-auto">
              {[
                  {
                      id: 'zero-to-one',
                      title: "Zero-to-One Dark Launch Protocol™",
                      desc: "How to achieve PMF and first 10,000 users with ₹0 ad spend using dark social engineering and psychological trigger stacking. Includes 23 launch sequences that bypass traditional channels.",
                      metric: "Used by 23 D2C startups to hit ₹1Cr revenue in 6 months.",
                      icon: <Zap className="text-yellow-500" />
                  },
                  {
                      id: 'investor-neuro',
                      title: "Investor Neuro-Trigger Framework™",
                      desc: "47 pitch deck formulas that rewire investor risk assessment, triggering FOMO and urgency biases. Includes slide-by-slide psychological architecture for 10x valuation jumps.",
                      metric: " helped secure Series A for 12 portfolio companies.",
                      icon: <TrendingUp className="text-green-500" />
                  },
                  {
                      id: 'category-creation',
                      title: "Category Creation DNA Sequencer™",
                      desc: "Map unoccupied mental real estate in your industry and inject your startup into the gap before competitors detect it. Based on 55+ Indian brand transformations.",
                      metric: "Verified by 55+ Brand Case Studies.",
                      icon: <Target className="text-purple-500" />
                  },
                  {
                      id: 'blind-spot',
                      title: "Incumbent Blind Spot Mapper™",
                      desc: "Identify Fortune 500 vulnerabilities specific to Indian market conditions—where they're too slow or culturally disconnected. Exploit these gaps for 340% faster penetration.",
                      metric: "340% Faster Market Penetration avg.",
                      icon: <Users className="text-blue-500" />
                  }
              ].map((f, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-gold-300 transition group relative overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-6">
                          <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                              {React.cloneElement(f.icon as React.ReactElement<any>, { size: 32 })}
                          </div>
                          <div>
                              <h3 className="text-2xl font-black text-slate-900 mb-3">{f.title}</h3>
                              <p className="text-slate-600 mb-4 leading-relaxed">{f.desc}</p>
                              <div className="bg-gold-50 text-gold-800 text-sm font-bold px-4 py-2 rounded-lg inline-block mb-6">
                                  Metric: {f.metric}
                              </div>
                              <div className="flex items-center gap-4">
                                  <Link to="/contact" className="text-slate-900 font-bold hover:text-gold-600 underline decoration-gold-500 decoration-2 underline-offset-4">Find your business's DARK DNA</Link>
                                  <span className="text-slate-300">|</span>
                                  <Link to="/case-studies" className="text-slate-500 text-sm hover:text-slate-800">View Proof</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Unlock Gate */}
      <div className="bg-slate-900 py-20">
          <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-10 rounded-3xl max-w-3xl mx-auto shadow-2xl">
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Unlock The Growth Vault</h2>
                  <p className="text-slate-500 mb-8">Join 423 Founders. Free for 14 days, then ₹999/month.</p>
                  
                  {!unlocked ? (
                      <form onSubmit={handleUnlock} className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto mb-6">
                          <input 
                              type="email" 
                              required
                              placeholder="Enter business email" 
                              className="flex-grow p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                          />
                          <button type="submit" className="bg-gold-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-gold-500 transition shadow-lg">
                              Unlock 1 Free
                          </button>
                      </form>
                  ) : (
                      <div className="text-green-600 font-bold text-xl mb-6">
                          Framework Unlocked! Check your inbox.
                      </div>
                  )}
                  
                  <div className="border-t border-slate-100 pt-8 mt-8">
                      <button className="bg-gold-600 text-white w-full md:w-auto px-12 py-4 rounded-xl font-bold shadow-lg hover:shadow-gold-500/30 transition flex items-center justify-center gap-3 mx-auto">
                         <Lock size={18} /> Subscribe Full Access (₹999/mo)
                      </button>
                      <p className="text-xs text-slate-400 mt-4">Secured by Razorpay. Cancel anytime.</p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default InsightsStartups;