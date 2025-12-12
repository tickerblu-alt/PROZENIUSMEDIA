import React, { useState, useEffect } from 'react';
import { Camera, Upload, Users, Award, Globe, Zap, RotateCcw, Loader2, Linkedin, Twitter } from 'lucide-react';
import { getImageFromDB, saveImageToDB, clearImageFromDB } from '../utils/imageDB';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  defaultImage: string;
}

const DEFAULT_MEMBERS: TeamMember[] = [
    { 
      id: 1, 
      name: "Hemant Nilim Das", 
      role: "CEO & Chief Brand Decoder", 
      image: "",
      defaultImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 2, 
      name: "Sarah Jenkins", 
      role: "Head of AI Development", 
      image: "",
      defaultImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 3, 
      name: "Rajesh Kumar", 
      role: "Director of Proneurotic Content", 
      image: "",
      defaultImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 4, 
      name: "Priya Mehta", 
      role: "Guerrilla Marketing Chief", 
      image: "",
      defaultImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 5, 
      name: "Vikram Singh", 
      role: "Business DNA Strategist", 
      image: "",
      defaultImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 6, 
      name: "Arjun Rampal", 
      role: "Head of Video Production", 
      image: "",
      defaultImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 7, 
      name: "Elena Rostova", 
      role: "Dark Pattern Research Lead", 
      image: "",
      defaultImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 8, 
      name: "Sameer Khan", 
      role: "Client Success Director", 
      image: "",
      defaultImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
    }
];

const Team: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>(DEFAULT_MEMBERS);
  const [isTeamLoading, setIsTeamLoading] = useState(true);

  // Load images from IndexedDB on mount
  useEffect(() => {
    const loadImages = async () => {
        const updatedMembers = await Promise.all(DEFAULT_MEMBERS.map(async (m) => {
            const savedImage = await getImageFromDB(`team_member_${m.id}`);
            return savedImage ? { ...m, image: savedImage } : m;
        }));
        setMembers(updatedMembers);
        setIsTeamLoading(false);
    };
    loadImages();
  }, []);

  const handleImageUpload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = async () => {
          const base64String = reader.result as string;
          // Optimistic UI Update
          setMembers(prevMembers => prevMembers.map(m => 
            m.id === id ? { ...m, image: base64String } : m
          ));
          // Save to DB
          await saveImageToDB(`team_member_${id}`, base64String);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleReset = async () => {
      if(window.confirm("Reset all team photos to default?")) {
          setMembers(DEFAULT_MEMBERS);
          for(const m of DEFAULT_MEMBERS) {
              await clearImageFromDB(`team_member_${m.id}`);
          }
      }
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-200 pb-24 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO - Minimalist Dark Editorial */}
      <div className="pt-32 pb-20 border-b border-slate-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-3 border border-slate-800 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 mb-8">
                    <span className="text-gold-500 text-xs font-black tracking-[0.3em] uppercase">
                        The Leadership Protocol
                    </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight">
                    Architects of <br/> <span className="italic text-gold-500">Exponential Scale</span>
                </h1>
                
                <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed border-l border-gold-500/30 pl-8">
                    A diverse collective of neuroscientists, hackers, AI architects, and filmmakers engineered to disrupt markets.
                </p>

                <div className="mt-12 flex items-center gap-6">
                     <button className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition flex items-center gap-2">
                        <Upload size={14}/> Click Portraits to Update
                     </button>
                     <button onClick={handleReset} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-red-500 transition flex items-center gap-2">
                        <RotateCcw size={14}/> Reset Database
                     </button>
                </div>
            </div>
        </div>
      </div>

      {/* 2. TEAM GRID - Dark Cards */}
      <div className="container mx-auto px-4 py-24">
        {isTeamLoading ? (
            <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-gold-500 w-12 h-12" />
            </div>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {members.map((member) => (
                    <div key={member.id} className="group relative">
                        {/* Image Frame */}
                        <div className="relative aspect-[3/4] overflow-hidden bg-slate-900 border border-slate-800 group-hover:border-gold-500/50 transition-colors duration-500 mb-6">
                            <div className="absolute inset-0 bg-slate-900 z-0"></div>
                            
                            {/* The Image - Grayscale to Color on Hover */}
                            <img 
                                src={member.image || member.defaultImage} 
                                alt={member.name} 
                                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition duration-700 ease-in-out relative z-10 opacity-80 group-hover:opacity-100"
                            />
                            
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-20 pointer-events-none z-20 transition-opacity"></div>

                            {/* Upload Input */}
                            <input 
                                type="file" 
                                accept="image/*" 
                                className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-pointer" 
                                onChange={(e) => handleImageUpload(member.id, e)}
                                title={`Update photo for ${member.name}`}
                            />
                            
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-500 opacity-0 group-hover:opacity-100 transition z-20"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-500 opacity-0 group-hover:opacity-100 transition z-20"></div>
                        </div>

                        {/* Text Info */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-gold-400 transition-colors">{member.name}</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{member.role}</p>
                            
                            {/* Socials / Interaction */}
                            <div className="mt-4 flex items-center justify-center md:justify-start gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <button className="text-slate-600 hover:text-white transition"><Linkedin size={16}/></button>
                                <button className="text-slate-600 hover:text-white transition"><Twitter size={16}/></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>

      {/* 3. METRICS - Brutalist Footer */}
      <div className="border-t border-slate-900 bg-black py-24">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800 border border-slate-800">
                  <div className="p-12 text-center group hover:bg-slate-900 transition duration-500">
                      <Globe className="w-8 h-8 text-slate-600 mx-auto mb-6 group-hover:text-gold-500 transition-colors" />
                      <div className="text-5xl font-serif text-white mb-2">75+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Clients</div>
                  </div>
                  <div className="p-12 text-center group hover:bg-slate-900 transition duration-500">
                      <Award className="w-8 h-8 text-slate-600 mx-auto mb-6 group-hover:text-gold-500 transition-colors" />
                      <div className="text-5xl font-serif text-white mb-2">20+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</div>
                  </div>
                  <div className="p-12 text-center group hover:bg-slate-900 transition duration-500">
                      <Users className="w-8 h-8 text-slate-600 mx-auto mb-6 group-hover:text-gold-500 transition-colors" />
                      <div className="text-5xl font-serif text-white mb-2">450%</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Avg. ROI Uplift</div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Team;