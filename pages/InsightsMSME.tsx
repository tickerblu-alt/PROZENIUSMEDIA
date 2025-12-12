import React, { useState } from 'react';
import { Factory, MapPin, Database, Shield, ArrowRight, Lock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsMSME: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    const msg = encodeURIComponent("I want to subscribe to the MSME Vault Insights Full Access Plan (₹1999/mo). Please send payment link.");
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };
  
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Stable Hero */}
      <div className="bg-slate-900 text-white pt-20 pb-24 relative overflow-hidden border-b-8 border-gold-500">
         <div className="container mx-auto px-4 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 mb-6">
                 <Factory size={16} className="text-gold-400" />
                 <span className="text-xs font-bold uppercase tracking-wider text-gold-100">For MSME Owners</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                 Build an Empire <br/><span className="text-gold-500">That Lasts.</span>
             </h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                 Exclusive frameworks for digital transformation and local market dominance. Proven by 824 business owners.
             </p>
             <div className="text-gold-500 font-bold text-lg inline-flex items-center gap-2 animate-bounce cursor-default select-none">
                 Strategies Below <ArrowRight className="rotate-90"/>
             </div>
         </div>
      </div>

      {/* Frameworks List */}
      <div id="frameworks" className="container mx-auto px-4 py-20">
          <div className="grid gap-8 max-w-5xl mx-auto">
              {[
                  {
                      id: 'digital-transform',
                      title: "Digital Transformation Dark Pathway™",
                      desc: "How MSMEs can modernize operations without disrupting cash flow. Step-by-step guide to automating sales, marketing, and customer acquisition using AI tools that cost less than one employee's salary.",
                      metric: "Avg 500% ROI for offline businesses.",
                      icon: <Database className="text-blue-600" />
                  },
                  {
                      id: 'local-dominance',
                      title: "Local Market Neuro-Dominance Playbook™",
                      desc: "31 hyper-local advertising formulas that make your MSME the default choice within 5 km radius. Includes 'dark reputation' tactics that build trust faster than traditional branding.",
                      metric: "Dominates 5km radius in 90 days.",
                      icon: <MapPin className="text-red-600" />
                  },
                  {
                      id: 'budget-guerrilla',
                      title: "Budget Guerrilla Operations Manual™",
                      desc: "Launch products, run promotions, and steal market share from larger competitors using less than ₹99,999/month. Real examples from 55+ Indian MSMEs.",
                      metric: "Proven by 55+ Indian MSME Case Studies.",
                      icon: <Shield className="text-green-600" />
                  },
                  {
                      id: 'competitor-scan',
                      title: "Competitor Vulnerability Scanner™",
                      desc: "Real-time tracking of local competitor weaknesses—pricing gaps, service failures, customer complaints—and automated response strategies to capture their market share within 72 hours.",
                      metric: "Capture share within 72 hours.",
                      icon: <CheckCircle className="text-purple-600" />
                  }
              ].map((f, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 hover:border-gold-500 transition group relative">
                      <div className="flex flex-col md:flex-row gap-6">
                          <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition">
                              {React.cloneElement(f.icon as React.ReactElement<any>, { size: 32 })}
                          </div>
                          <div>
                              <h3 className="text-2xl font-black text-slate-900 mb-3">{f.title}</h3>
                              <p className="text-slate-600 mb-4 leading-relaxed">{f.desc}</p>
                              <div className="bg-gold-50 text-gold-800 text-sm font-bold px-4 py-2 rounded border border-gold-200 inline-block mb-6">
                                  Result: {f.metric}
                              </div>
                              <div className="flex items-center gap-4">
                                  <Link to="/contact" className="text-slate-900 font-bold hover:text-gold-600 underline decoration-gold-500 decoration-2 underline-offset-4">Find your business's DARK DNA</Link>
                                  <span className="text-slate-300">|</span>
                                  <Link to="/case-studies" className="text-slate-500 text-sm hover:text-slate-800">View Transformation Stories</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Unlock Gate */}
      <div className="bg-slate-200 py-20 border-t border-slate-300">
          <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-10 rounded-2xl max-w-3xl mx-auto shadow-xl border border-slate-300">
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Access The MSME Vault</h2>
                  <p className="text-slate-600 mb-8">Join 824 Business Owners. Free for 2 days, then ₹1999/month.</p>
                  
                  <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto mb-6" onSubmit={(e) => {e.preventDefault(); alert("Welcome pack sent!");}}>
                      <input 
                          type="email" 
                          required
                          placeholder="Enter business email" 
                          className="flex-grow p-4 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                      />
                      <button type="submit" className="bg-gold-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-gold-500 transition shadow-lg">
                          Get 1 Free
                      </button>
                  </form>
                  
                  <div className="border-t border-slate-100 pt-8 mt-8">
                      <button 
                        onClick={handleSubscribe}
                        className="bg-gold-600 text-white w-full md:w-auto px-12 py-4 rounded-lg font-bold shadow-lg hover:bg-gold-500 transition flex items-center justify-center gap-3 mx-auto"
                      >
                         <Lock size={18} /> Subscribe Full Access (₹1999/mo)
                      </button>
                      <p className="text-xs text-slate-400 mt-4">Secure Payment via Razorpay. GST Invoice available.</p>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default InsightsMSME;