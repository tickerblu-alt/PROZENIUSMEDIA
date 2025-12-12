import React, { useState } from 'react';
import { MapPin, MessageCircle, Mail, Clock, ArrowRight, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    url: '',
    goal: 'Scale Revenue 10X'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`🚀 GROWTH BLUEPRINT REQUEST\n\n👤 Name: ${form.name}\n🌐 URL: ${form.url}\n🎯 Goal: ${form.goal}`);
    window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 font-sans">
      
      {/* Header Section */}
      <div className="bg-navy-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 container mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Initiate Brand Transformation</h1>
            <p className="text-gold-100 text-lg font-medium">Response Guarantee: Every inquiry gets a Dark DNA mini-audit within 2 hours.</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            
            {/* Left Column: Contact Info */}
            <div className="w-full md:w-5/12 bg-slate-50 p-10 border-r border-slate-100 flex flex-col justify-center space-y-8">
                
                <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">Headquarters</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mt-1">
                            Office 78, Goyal Trade Centre,<br/>
                            Borivali East, Mumbai 400066
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">WhatsApp (Instant)</h3>
                        <a href="https://wa.me/919004221717" className="text-slate-600 text-sm hover:text-green-600 font-medium block mt-1">
                            +91-9004221717
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                        <a href="mailto:decode@prozenius.media" className="text-slate-600 text-sm hover:text-orange-600 font-medium block mt-1">
                            decode@prozenius.media
                        </a>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                     <p className="text-xs text-slate-400 leading-relaxed flex gap-2">
                        <Clock size={14} className="shrink-0 mt-0.5" />
                        <span>
                            Office Hours: Mon-Sat, 9 AM - 8 PM.<br/> 
                            Sunday by appointment for urgent brand crises.
                        </span>
                     </p>
                </div>

            </div>

            {/* Right Column: Form */}
            <div className="w-full md:w-7/12 p-10 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">Name</label>
                        <input 
                            type="text" 
                            required
                            placeholder="Your Name"
                            className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition"
                            value={form.name}
                            onChange={e => setForm({...form, name: e.target.value})}
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">Company URL</label>
                        <input 
                            type="url" 
                            placeholder="https://"
                            className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition"
                            value={form.url}
                            onChange={e => setForm({...form, url: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-navy-900 mb-2">The Goal</label>
                        <select 
                            className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition appearance-none cursor-pointer"
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

                    <button 
                        type="submit" 
                        className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-5 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg uppercase tracking-wide text-sm"
                    >
                        Request Growth Blueprint <ArrowRight size={20} />
                    </button>
                    
                    <p className="text-center text-xs text-slate-400">
                        By submitting, you agree to receive a communication via WhatsApp.
                    </p>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;