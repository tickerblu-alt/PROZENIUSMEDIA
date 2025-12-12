import React, { useState } from 'react';
import { generateBrandFilmScript } from '../services/geminiService';
import { Sector } from '../types';
import { Loader2, Clapperboard, Target, BrainCircuit, Activity } from 'lucide-react';

const DPMTools: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'dna' | 'scarcity' | 'heat'>('dna');
  
  // Script Gen State
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState<string>('');
  const [formData, setFormData] = useState({
    businessName: '',
    sector: Sector.AUTOMOBILE,
    topic: ''
  });

  const handleGenerateScript = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await generateBrandFilmScript(formData.topic, formData.sector, formData.businessName);
    setScript(result);
    setLoading(false);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-sans mb-4 text-slate-900">
            Dark DNA <span className="text-gold-600">Strategy Tools</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Dark DNA Marketing frameworks powered by AI. Engineer desire instantly.
          </p>
        </div>

        {/* TOOL NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
                onClick={() => setActiveTool('dna')}
                className={`px-6 py-3 rounded-full font-bold transition flex items-center gap-2 ${activeTool === 'dna' ? 'bg-gold-600 text-white shadow-xl' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
                <Target size={18} /> Brand DNA Script
            </button>
            <button 
                onClick={() => setActiveTool('scarcity')}
                className={`px-6 py-3 rounded-full font-bold transition flex items-center gap-2 ${activeTool === 'scarcity' ? 'bg-gold-600 text-white shadow-xl' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
                <BrainCircuit size={18} /> Scarcity Engine
            </button>
            <button 
                onClick={() => setActiveTool('heat')}
                className={`px-6 py-3 rounded-full font-bold transition flex items-center gap-2 ${activeTool === 'heat' ? 'bg-gold-600 text-white shadow-xl' : 'bg-white text-slate-600 border border-slate-200'}`}
            >
                <Activity size={18} /> Dark DNA Heatmap
            </button>
        </div>

        {/* TOOL 1: BRAND DNA SCRIPT */}
        {activeTool === 'dna' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 h-fit">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                    <Clapperboard className="text-gold-600" />
                    Film Parameters
                    </h2>
                    <form onSubmit={handleGenerateScript} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                        <input
                        type="text"
                        required
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Sector</label>
                        <select
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                        value={formData.sector}
                        onChange={(e) => setFormData({...formData, sector: e.target.value as Sector})}
                        >
                        {Object.values(Sector).map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Key Value Prop</label>
                        <textarea
                        required
                        rows={3}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                        placeholder="e.g. Luxury SUV launch in Mumbai, focus on status..."
                        value={formData.topic}
                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 rounded-lg shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Target />}
                        {loading ? 'Analyzing Brand DNA...' : 'Generate Brand Film Script'}
                    </button>
                    </form>
                </div>

                <div className="bg-slate-900 text-slate-100 p-8 rounded-2xl shadow-2xl min-h-[500px] flex flex-col border border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gold-400">Dark DNA Output</h2>
                        {script && <span className="text-xs bg-green-500 text-slate-900 px-2 py-1 rounded font-bold">DNA MATCHED</span>}
                    </div>
                    {script ? (
                    <div className="prose prose-invert max-w-none flex-grow overflow-y-auto whitespace-pre-wrap font-mono text-sm leading-relaxed bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        {script}
                    </div>
                    ) : (
                    <div className="flex-grow flex items-center justify-center text-slate-500 flex-col gap-4 border-2 border-dashed border-slate-800 rounded-xl">
                        <Target size={48} className="opacity-20" />
                        <p className="opacity-50">Brand Script will appear here...</p>
                    </div>
                    )}
                    
                    {script && (
                    <div className="mt-6">
                        <a 
                            href="https://wa.me/919004221717?text=Hi%20ProZenius!%20I%20have%20a%20script%20idea."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition shadow-lg"
                        >
                        Produce ProZenius Film (WhatsApp)
                        </a>
                    </div>
                    )}
                </div>
            </div>
        )}

        {activeTool !== 'dna' && (
            <div className="max-w-4xl mx-auto text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-xl">
                <BrainCircuit size={64} className="mx-auto text-gold-300 mb-6" />
                <h3 className="text-2xl font-bold mb-2">Advanced Dark DNA Tools</h3>
                <p className="text-slate-500 mb-8">This module requires an Enterprise Plan or Manual Audit.</p>
                <a href="#/brand-films" className="bg-gold-600 text-white px-8 py-3 rounded-lg font-bold">Request Access</a>
            </div>
        )}
      </div>
    </div>
  );
};

export default DPMTools;