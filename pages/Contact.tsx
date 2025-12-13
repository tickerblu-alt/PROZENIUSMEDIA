import React, { useState } from 'react';
import { MapPin, MessageCircle, Mail, Clock, ArrowRight, Send, Shield, Globe, Lock, AlertTriangle, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    url: '',
    goal: 'Scale Revenue 10X',
    urgency: 'Normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`🚨 WAR ROOM BRIEF\n\n👤 Name: ${form.name}\n📱 Phone: ${form.phone}\n🌐 URL: ${form.url}\n🎯 Goal: ${form.goal}\n🔥 Urgency: ${form.urgency}`);
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO HEADER */}
      <div className="pt-32 pb-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                <span className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Secure Channel: Open
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight tracking-tight">
                <span className="block text-slate-100">Start your Proactivity</span>
                <span className="block mt-2">
                    to Be the <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700" style={{ filter: 'drop-shadow(0px 4px 0px rgba(161, 98, 7, 0.6))' }}>Market Leader</span>
                </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                Direct line to the ProZenius War Room. <br/>
                <span className="text-white">Expect a tactical response within 2 hours.</span>
            </p>
        </div>
      </div>

      {/* 2. MAIN INTERFACE */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
            
            {/* LEFT: INTEL GRID */}
            <div className="lg:col-span-5 space-y-8">
                
                {/* Priority Card */}
                <div className="bg-slate-900/50 border border-gold-900/30 p-8 rounded-2xl relative overflow-hidden group hover:border-gold-500/30 transition duration-500">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition"></div>
                    <div className="flex items-start gap-4 relative z-10">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-green-500 border border-slate-700 shadow-lg shrink-0">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">WhatsApp Priority</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Fastest response time. Direct access to a Senior Strategist.
                            </p>
                            <a href="https://wa.me/919004221717" target="_blank" rel="noreferrer" className="text-green-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                Open Chat <ArrowRight size={14}/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* HQ Card */}
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-slate-600 transition duration-500">
                    <div className="flex items-start gap-4 relative z-10">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-500 border border-slate-700 shadow-lg shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">Command Center</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Office 78, Goyal Trade Centre,<br/>
                                Borivali East, Mumbai 400066
                            </p>
                            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-blue-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                View Coordinates <Globe size={14}/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Info Stack */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl text-center hover:bg-slate-800/50 transition">
                        <Phone size={20} className="text-gold-500 mx-auto mb-3"/>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Hotline</div>
                        <div className="text-white font-mono text-sm font-bold">+91 9004221717</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl text-center hover:bg-slate-800/50 transition">
                        <Mail size={20} className="text-gold-500 mx-auto mb-3"/>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Dossier Uplink</div>
                        <div className="text-white font-mono text-sm font-bold">decode@prozenius.media</div>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 border-t border-slate-900 pt-6">
                    <Clock size={14} className="text-slate-400"/>
                    <span>Ops: Mon-Sat, 0900 - 2000 HRS IST</span>
                </div>

            </div>

            {/* RIGHT: TRANSMISSION CONSOLE */}
            <div className="lg:col-span-7">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 relative shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-white to-gold-600"></div>
                    
                    <div className="mb-8 flex justify-between items-center">
                        <h3 className="text-2xl font-serif text-white">Transmission Brief</h3>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            <Lock size={12} className="text-green-500"/> AES-256 Encrypted
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Codename / Name</label>
                                <input 
                                    type="text" 
                                    required 
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                    placeholder="Enter identifier"
                                    value={form.name}
                                    onChange={e => setForm({...form, name: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Comms Frequency</label>
                                <input 
                                    type="tel" 
                                    required 
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                    placeholder="WhatsApp Number"
                                    value={form.phone}
                                    onChange={e => setForm({...form, phone: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Target URL</label>
                            <input 
                                type="url" 
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                placeholder="https://yourbrand.com"
                                value={form.url}
                                onChange={e => setForm({...form, url: e.target.value})}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Mission Objective</label>
                                <select 
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:border-gold-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                                    value={form.goal}
                                    onChange={e => setForm({...form, goal: e.target.value})}
                                >
                                    <option>Scale Revenue 10X</option>
                                    <option>Fix Brand Positioning</option>
                                    <option>Viral Marketing Campaign</option>
                                    <option>Crisis Management</option>
                                    <option>Corporate Film Production</option>
                                </select>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Priority Level</label>
                                <div className="flex gap-2">
                                    {['Normal', 'High', 'Critical'].map(level => (
                                        <button
                                            key={level}
                                            type="button"
                                            onClick={() => setForm({...form, urgency: level})}
                                            className={`flex-1 py-4 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all ${
                                                form.urgency === level 
                                                ? level === 'Critical' ? 'bg-red-900/30 border-red-500 text-red-400' : 'bg-gold-900/30 border-gold-500 text-gold-400'
                                                : 'bg-slate-950 border-slate-800 text-slate-600 hover:border-slate-600'
                                            }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-gold-600 hover:bg-gold-500 text-slate-900 font-black py-5 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
                        >
                            <Send size={18} /> Transmit Brief
                        </button>

                        <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest">
                            <Shield size={12} /> Confidentiality Protocol Active
                        </div>

                    </form>
                </div>
            </div>

        </div>
      </div>

      {/* 3. FOOTER ALERT */}
      <div className="border-t border-slate-900 bg-black py-12 text-center">
          <div className="container mx-auto px-4">
              <div className="inline-flex items-center gap-3 text-red-500 bg-red-950/20 border border-red-900/50 px-6 py-3 rounded-full">
                  <AlertTriangle size={16} className="animate-pulse"/>
                  <span className="text-xs font-bold uppercase tracking-widest">Brand Crisis? Call Hotline Immediately</span>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Contact;