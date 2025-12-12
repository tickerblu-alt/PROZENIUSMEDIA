import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Factory, ArrowRight, BookOpen, BrainCircuit, PenTool, Radar } from 'lucide-react';

const InsightsHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="pt-12 pb-12 bg-gradient-to-r from-navy-900 to-navy-800 text-white text-center">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Insights <span className="text-brand-500">Hub</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Select your business type to access exclusive frameworks engineered for scaling and dominance.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                <BrainCircuit size={16} className="text-brand-400"/>
                <span className="text-sm font-bold text-slate-300">1,247+ Brand Heads Subscribed</span>
            </div>
        </div>
      </div>

      {/* Split Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* STARTUP CARD */}
              <Link to="/insights/startups" className="group relative bg-gradient-to-br from-brand-900 to-indigo-900 text-white p-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300 border-2 border-brand-700">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/30 transition"></div>
                  <div className="relative z-10">
                      <div className="bg-brand-500/20 inline-block p-4 rounded-2xl mb-6 backdrop-blur-sm border border-brand-500/30">
                          <Rocket size={40} className="text-brand-300" />
                      </div>
                      <h2 className="text-3xl font-black mb-4">I'm a Startup Founder</h2>
                      <p className="text-brand-100 mb-8 leading-relaxed">
                          Zero-to-One scaling, investor triggers, and category creation.
                      </p>
                      <span className="inline-flex items-center gap-2 font-bold text-brand-300 group-hover:text-white transition">
                          Access 4 Startup Frameworks <ArrowRight size={20}/>
                      </span>
                  </div>
              </Link>

              {/* MSME CARD */}
              <Link to="/insights/msme" className="group relative bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300 border-2 border-slate-600">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/20 transition"></div>
                  <div className="relative z-10">
                      <div className="bg-gold-500/20 inline-block p-4 rounded-2xl mb-6 backdrop-blur-sm border border-gold-500/30">
                          <Factory size={40} className="text-gold-300" />
                      </div>
                      <h2 className="text-3xl font-black mb-4">I'm an MSME Owner</h2>
                      <p className="text-slate-300 mb-8 leading-relaxed">
                          Digital transformation, local market neuro-dominance, and cash flow automation.
                      </p>
                      <span className="inline-flex items-center gap-2 font-bold text-gold-300 group-hover:text-white transition">
                          Access 4 MSME Frameworks <ArrowRight size={20}/>
                      </span>
                  </div>
              </Link>
          </div>
      </div>

      {/* Cross-Sector Frameworks */}
      <div className="py-24">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2 block">Universal Strategies</span>
                  <h2 className="text-4xl font-black text-slate-900">Cross-Sector Frameworks</h2>
                  <p className="text-slate-600">Available to all subscribers.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[
                      { 
                          id: 'dark-dna',
                          title: "The Dark DNA Architecture™", 
                          desc: "How Fortune 500 brands secretly manipulate choice architecture.",
                          icon: <BrainCircuit className="text-purple-600"/>
                      },
                      { 
                          id: 'proneurotic-copy',
                          title: "Proneurotic Copywriting", 
                          desc: "87 headline formulas that bypass rational thought.",
                          icon: <PenTool className="text-pink-600"/>
                      },
                      { 
                          id: 'market-weakness',
                          title: "Market Weakness Radar", 
                          desc: "Real-time competitor vulnerability tracking systems.",
                          icon: <Radar className="text-red-600"/>
                      }
                  ].map((f, i) => (
                      <Link to="/contact" key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition group">
                          <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">{f.icon}</div>
                          <h3 className="text-xl font-bold mb-2 text-slate-900">{f.title}</h3>
                          <p className="text-slate-600 text-sm mb-4">{f.desc}</p>
                          <div className="text-brand-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                              Find your business's DARK DNA <ArrowRight size={14}/>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </div>

    </div>
  );
};

export default InsightsHub;