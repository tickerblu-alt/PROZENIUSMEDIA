import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-4 font-noto">Growth Arsenal</h1>
            <p className="text-xl text-slate-400">Download the frameworks we use to build empires.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
                { title: "200x Screenwriting Hacks", desc: "The exact beat-sheet for viral ads.", type: "PDF Guide" },
                { title: "Influencer Scaling Framework", desc: "How to manage 1,000 creators without HR.", type: "Spreadsheet" },
                { title: "PsychoViz Playbook", desc: "Understanding audience retention heatmaps.", type: "Whitepaper" },
                { title: "The Mumbai Mogul Path", desc: "90-day roadmap to billion-scale.", type: "E-Book" },
            ].map((r, i) => (
                <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-gold-500 transition hover:bg-slate-750 group cursor-pointer">
                    <div className="flex items-start justify-between mb-6">
                        <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-gold-500/20 group-hover:text-gold-400 transition">
                            <FileText size={32} />
                        </div>
                        <div className="bg-slate-900 text-xs font-bold px-3 py-1 rounded-full text-slate-400 border border-slate-700">{r.type}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{r.title}</h3>
                    <p className="text-slate-400 mb-8">{r.desc}</p>
                    <button className="flex items-center gap-2 text-gold-400 font-bold group-hover:text-gold-300">
                        <Download size={20} /> Download Now
                    </button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;