import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Shield, TrendingUp, CheckCircle, Target, ExternalLink, Youtube, Camera, Upload, Layers, Zap, Briefcase, Award, Lock, FileText, Share2, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageFromDB, saveImageToDB } from '../utils/imageDB';

const GradientLine = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(234,179,8,0.3)] relative z-20"></div>
);

const ClassicDarkTexture = () => (
    <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#1e293b_0%,_#020617_100%)] opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-soft-light"></div>
    </div>
);

const Home: React.FC = () => {
  // Expanded Form State
  const [auditForm, setAuditForm] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    instagram: '', 
    website: '', 
    sector: '', 
    challenge: '' 
  });
  const [auditLoading, setAuditLoading] = useState(false);

  // Leadership Team State for Image Uploads
  const DEFAULT_LEADERSHIP = [
    { id: 'leader1', name: "Aryan", role: "CEO - Brand Strategy", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { id: 'leader2', name: "Sneha", role: "DDM Expert", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { id: 'leader3', name: "Rahul", role: "Lead Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { id: 'leader4', name: "Amit", role: "Growth Architect", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" }
  ];
  
  const [leadershipTeam, setLeadershipTeam] = useState(DEFAULT_LEADERSHIP);

  // Client Logos State
  const CLIENT_NAMES = [
      "Apex Autos", "Bright Star Gym", "EduPeak", "Urban Bistro", "TechFlow", 
      "Velvet Vogue", "GreenLeaf", "Luxe Estates", "Wanderlust", "BioSync",
      "IronStrength", "CloudNine", "DataCore", "SwiftLogistics", "PureSkin", 
      "BrightSmile", "SolarEdge", "FinGuard", "SecureHome", "AlphaFoods"
  ];

  const [clientLogos, setClientLogos] = useState(CLIENT_NAMES.map((name, i) => ({
      id: `client_logo_${i}`,
      name,
      img: `https://placehold.co/200x60/ffffff/475569?text=${encodeURIComponent(name)}&font=montserrat`
  })));

  // Testimonial State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
      {
          quote: "ProZenius is the 'Nuclear Option' for brands tired of slow growth. They didn't just make an ad; they weaponized our entire identity.",
          author: "Rajiv Malhotra",
          role: "CEO, FinCorp India",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
      },
      {
          quote: "The Dark DNA audit revealed why we were losing 60% of our leads. We fixed the psychological gap and revenue doubled in 14 days.",
          author: "Ananya Gupta",
          role: "Founder, Luxe Retail",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
      },
      {
          quote: "I've worked with 10 agencies. ProZenius is the only one that understands 'Status Engineering'. We are now the category kings.",
          author: "Vikram Singh",
          role: "MD, AutoElite",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100"
      }
  ];

  // Grid Faces for Impact Section
  const gridFaces = [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1521119989659-a83eee488058?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80"
  ];

  // Load saved images on mount (Leadership + Clients)
  useEffect(() => {
    const loadImages = async () => {
        // Load Leadership
        const updatedTeam = await Promise.all(DEFAULT_LEADERSHIP.map(async (member) => {
            const savedImg = await getImageFromDB(`home_${member.id}`);
            return savedImg ? { ...member, img: savedImg } : member;
        }));
        setLeadershipTeam(updatedTeam);

        // Load Clients
        const updatedClients = await Promise.all(clientLogos.map(async (client) => {
            const savedImg = await getImageFromDB(client.id);
            return savedImg ? { ...client, img: savedImg } : client;
        }));
        // Only update if we found saved images to avoid loop issues, 
        // strictly using the mapped result based on initial state structure
        setClientLogos(updatedClients);
    };
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLeaderUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = async () => {
            const result = reader.result as string;
            setLeadershipTeam(prev => prev.map(m => m.id === id ? { ...m, img: result } : m));
            await saveImageToDB(`home_${id}`, result);
        };
        reader.readAsDataURL(file);
    }
  };

  const handleClientLogoUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = async () => {
            const result = reader.result as string;
            setClientLogos(prev => prev.map(c => c.id === id ? { ...c, img: result } : c));
            await saveImageToDB(id, result);
        };
        reader.readAsDataURL(file);
    }
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditLoading(true);
    
    try {
        const msg = encodeURIComponent(`🚀 PROZENIUS BRAND AUDIT LEAD\n\n👤 ${auditForm.name}\n📱 ${auditForm.phone}\n📧 ${auditForm.email}\n📸 Insta: ${auditForm.instagram}\n🌐 Web: ${auditForm.website}\n🏢 Sector: ${auditForm.sector}\n❓ Challenge: ${auditForm.challenge}`);
        window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
    } catch (err) {
        console.error("WhatsApp open failed", err);
        alert("Pop-up blocked? Please contact us at +919004221717");
    }

    const formData = new FormData();
    Object.entries(auditForm).forEach(([key, value]) => {
        formData.append(key, String(value));
    });

    fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            setAuditForm({ name: '', phone: '', email: '', instagram: '', website: '', sector: '', challenge: '' });
        } else {
             console.error("Formspree error");
        }
    })
    .catch(err => {
        console.error("Formspree submission error", err);
    })
    .finally(() => {
        setTimeout(() => setAuditLoading(false), 2000);
    });
  };

  const scrollToAudit = () => {
    const el = document.getElementById('growth-audit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const videoShowcase = [
    { title: "Apex Autos", stat: "450% ↑ Traffic", videoId: "W_2056YyKjM", sector: "Automobile" },
    { title: "Bright Star Gym", stat: "300% ↑ Members", videoId: "fK3d98hE_b0", sector: "Fitness" },
    { title: "EduPeak Academy", stat: "100x Enrollment", videoId: "Q51XNnZf6bM", sector: "Education" },
    { title: "Luxe Estates", stat: "₹50Cr Sales", videoId: "h9Cxj2k7Zz0", sector: "Real Estate" }
  ];

  return (
    <div className="w-full bg-slate-950 font-sans selection:bg-gold-500 selection:text-slate-900">
      
      {/* 1. HERO - Ultra Classic Cinematic Background */}
      <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        
        {/* Layered Cinematic Background */}
        <div className="absolute inset-0 w-full h-full z-0">
            {/* Base Tone */}
            <div className="absolute inset-0 bg-[#020408]"></div>
            
            {/* The "Scenario" Image - blended deeply */}
            <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
                alt="Corporate Environment" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay filter blur-[2px] scale-105"
            />
            
            {/* Grand Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60"></div>
            
            {/* The "Golden Vignette" */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_80%,#000_100%)]"></div>
            
            {/* Subtle Noise Texture for Film Grain feel */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-soft-light"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center perspective-1000">
            
            {/* Top Pill - Metallic 3D */}
            <div className="inline-block mb-10 animate-fade-in-down transform hover:scale-105 transition duration-300">
                <div className="border border-gold-500/30 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-md px-6 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    <span className="text-gold-200 text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-shadow-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse"></span>
                        India's #1 Performance AI Lab
                    </span>
                </div>
            </div>

            {/* Redesigned Hero Heading - Ultra Grand */}
            <div className="mb-12 animate-fade-in">
                <h1 className="flex flex-col items-center">
                    <span className="text-2xl md:text-3xl font-light text-slate-400 tracking-[0.3em] uppercase mb-6 font-sans opacity-90">
                        Architect Your
                    </span>
                    <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-2xl leading-[0.85]">
                        SUPERBRAND
                    </span>
                    <span className="text-3xl md:text-5xl font-serif italic text-gold-100/90 mb-10 relative z-10 drop-shadow-lg">
                        <span className="text-gold-600 not-italic font-sans text-xl md:text-3xl align-top mr-3 opacity-80">_</span>
                        The ProZenius Way
                    </span>
                    <span className="inline-block py-3 px-8 border-y border-white/10 bg-black/40 backdrop-blur-md text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-slate-300 shadow-2xl rounded-sm">
                         For Businesses Who <span className="text-gold-400">Refuse to Compete</span>.
                    </span>
                </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200 drop-shadow-md">
                20+ Years. 75+ Worldwide Clients. One Mission: <br/>Transform Business DNA Through <span className="text-white font-medium">AI-Powered Content Warfare</span>.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center animate-fade-in-up delay-300 mb-16">
                {/* PRIMARY CTA - GOLD STANDARD */}
                <button 
                    onClick={scrollToAudit} 
                    className="group relative bg-gold-600 hover:bg-gold-500 text-white font-bold py-5 px-10 rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_30px_rgba(234,179,8,0.2)] flex items-center gap-3 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2 tracking-wide uppercase text-sm">Analyze My Brand DNA <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} /></span>
                </button>
                
                {/* SECONDARY CTA - GOLD OUTLINE */}
                <Link 
                    to="/case-studies" 
                    className="group relative border border-gold-600 hover:bg-gold-600 text-gold-400 hover:text-white text-lg font-bold py-5 px-10 rounded-sm transition-all duration-300 flex items-center gap-2 uppercase text-sm tracking-wide bg-black/20 backdrop-blur-sm"
                >
                    View Transformations
                </Link>
            </div>

            <div className="animate-fade-in-up delay-500">
                <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                    <span className="text-gold-500"><Zap size={12} fill="currentColor"/></span>
                    <span className="text-white font-bold text-lg bg-slate-800 px-3 py-1 rounded border border-slate-700">10,847</span> Dark DNA Sequences Decoded
                </p>
            </div>
        </div>
      </section>

      <GradientLine />

      {/* NEW CLIENTS SECTION - ELEGANT LIGHT STRIP */}
      <section className="py-16 bg-[#FDFBF7] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-pixels.png')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
            <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Trusted by 75+ Category Defining Brands</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-700">
                 {clientLogos.map((client, i) => (
                    <div key={i} className="relative group w-full flex justify-center h-12">
                        {/* Logo Image */}
                        <div className="flex items-center justify-center w-full h-full grayscale group-hover:grayscale-0 transition duration-500 transform group-hover:scale-105 cursor-pointer">
                            <img 
                                src={client.img}
                                alt={client.name}
                                className="max-h-full max-w-[160px] object-contain mix-blend-multiply"
                            />
                        </div>

                        {/* Upload Overlay */}
                        <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity border-2 border-dashed border-gold-400 rounded-lg">
                            <Upload className="text-gold-600 w-6 h-6 animate-bounce" />
                        </div>

                        {/* Invisible File Input */}
                        <input 
                            type="file" 
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            onChange={(e) => handleClientLogoUpload(client.id, e)}
                            title={`Upload logo for ${client.name}`}
                        />
                    </div>
                 ))}
            </div>
        </div>
      </section>

      <GradientLine />

      {/* --- PROZENIUS COALITION (COMMAND CENTER) --- ULTRA CLASSIC OBSIDIAN THEME */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
          <ClassicDarkTexture />
          
          {/* Specific Background Accent for this section */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                  {/* The About Us Card - Grand Obsidian */}
                  <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden group hover:border-gold-500/20 transition-all duration-700">
                      
                      {/* Top Decorative Line */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
                      
                      <div className="mb-10">
                          <span className="block text-gold-500 text-xs font-bold tracking-[0.4em] uppercase mb-6 opacity-80">
                              The Command Center
                          </span>
                          <h2 className="text-5xl md:text-8xl font-black mb-8 font-serif tracking-tight leading-[1.0] text-white drop-shadow-2xl">
                              We are <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-200 via-gold-400 to-gold-700">ProZenius.</span>
                          </h2>
                      </div>

                      <div className="w-24 h-1 bg-gold-600 mx-auto mb-10 rounded-full"></div>

                      <p className="text-xl md:text-3xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto mb-20 font-serif">
                          ProZenius is a <strong className="text-white font-medium">Market Apex Consulting</strong> firm that engineers brands to rise to the top of their segment—and stay there. We don't just market; we build scalable ecosystems backed by data, processes, and performance content. Our proprietary <strong className="text-gold-400 font-medium">Dark DNA™ algorithms</strong> connect ambitious enterprises to emotional resonance and guaranteed revenue outcomes, turning businesses into category kings.
                      </p>

                      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                          {[
                              { label: "Partner Brands", val: "200+" },
                              { label: "Campaigns Deployed", val: "1,000+" },
                              { label: "Creator Network", val: "300+" }
                          ].map((stat, i) => (
                              <div key={i} className="bg-slate-950/80 p-8 rounded-2xl border border-slate-800 flex flex-col items-center justify-center hover:border-gold-500/40 transition-colors duration-500 group/stat relative overflow-hidden">
                                  <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                                  <div className="text-4xl md:text-5xl font-serif text-white mb-2 relative z-10">{stat.val}</div>
                                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold-500 relative z-10 font-bold">{stat.label}</div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <GradientLine />

      {/* --- IMPACT NETWORK (Glass Overlay Style) --- */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 flex flex-wrap content-start opacity-20 blur-[1px] scale-105 pointer-events-none">
              {gridFaces.map((face, i) => (
                  <div key={i} className="w-1/3 md:w-1/6 aspect-square relative">
                      <img src={face} alt="" className="w-full h-full object-cover grayscale opacity-50 mix-blend-overlay" />
                      <div className="absolute inset-0 bg-slate-950/40"></div>
                  </div>
              ))}
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                  {/* The Glass Card */}
                  <div className="bg-slate-900/60 backdrop-blur-xl border border-gold-500/20 rounded-[2rem] p-10 md:p-16 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative overflow-hidden text-center">
                      
                      {/* Decorative elements */}
                      <Quote size={64} className="text-gold-600/20 absolute top-8 left-8" />
                      <Quote size={64} className="text-gold-600/20 absolute bottom-8 right-8 rotate-180" />
                      
                      <div className="mb-10 relative z-10">
                          <span className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 text-gold-200 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                              Industry Intelligence
                          </span>
                          
                          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-10 drop-shadow-xl italic">
                              "{testimonials[activeTestimonial].quote}"
                          </h2>
                          
                          <div className="flex flex-col items-center justify-center gap-4">
                              <div className="w-16 h-16 rounded-full border-2 border-gold-500 p-1">
                                  <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].author} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition duration-500" />
                              </div>
                              <div className="text-center">
                                  <div className="text-white font-bold text-lg tracking-wide">{testimonials[activeTestimonial].author}</div>
                                  <div className="text-gold-500 text-xs font-bold uppercase tracking-widest mt-1">{testimonials[activeTestimonial].role}</div>
                              </div>
                          </div>
                      </div>

                      {/* Navigation - Moved to right as requested */}
                      <div className="absolute bottom-10 right-10 flex gap-4 relative z-10 justify-end">
                          <button 
                              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                              className="p-3 rounded-full border border-gold-600 text-gold-500 hover:bg-gold-600 hover:text-white transition shadow-lg bg-slate-900"
                          >
                              <ChevronLeft size={20} />
                          </button>
                          <button 
                              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                              className="p-3 rounded-full border border-gold-600 text-gold-500 hover:bg-gold-600 hover:text-white transition shadow-lg bg-slate-900"
                          >
                              <ChevronRight size={20} />
                          </button>
                      </div>

                  </div>
              </div>
          </div>
      </section>

      <GradientLine />

      {/* 2. BRAND FILMS SECTION - Light Royal Cream 3D */}
      <section id="brand-films" className="py-32 bg-[#FDFBF7] relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-40"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            
            {/* THE PROZENIUS MARKETAPEX SUPERBRAND PROGRAM SECTION */}
            <div className="relative mb-32">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[700px] bg-gold-200/40 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto bg-slate-950 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden p-8 md:p-20 text-slate-300 border border-slate-900">
                      {/* Decorative Header */}
                      <div className="text-center mb-24">
                          <div className="inline-block mb-8 px-6 py-2 border border-gold-500/30 rounded-full bg-slate-900/80 backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                              <span className="text-gold-400 text-xs font-black tracking-[0.3em] uppercase flex items-center gap-3">
                                  <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                                  The Dark DNA Program
                              </span>
                          </div>
                          <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-[1.0] tracking-tight">
                              The ProZenius <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-700 filter drop-shadow-lg">MarketApex</span> <br/> SuperBrand Program
                          </h2>
                          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed border-b border-slate-800 pb-8">
                              When your brand becomes the <span className="text-gold-300 font-serif italic font-medium">only solution</span> customers can imagine.
                          </p>
                      </div>

                      {/* The Concept - Editorial Layout */}
                      <div className="grid lg:grid-cols-12 gap-16 mb-20 items-start">
                          <div className="lg:col-span-5 relative">
                              <div className="sticky top-10">
                                  <div className="bg-gradient-to-br from-slate-900 to-black p-12 rounded-[2rem] border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500">
                                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.1),transparent_60%)]"></div>
                                      
                                      <div className="relative z-10">
                                          <div className="w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 mb-10 shadow-lg group-hover:bg-slate-800/80 transition-colors">
                                              <Lock className="text-gold-500" size={32} strokeWidth={1.5} />
                                          </div>
                                          
                                          <h3 className="text-4xl font-serif text-white mb-8">The Strategic Logic</h3>
                                          <p className="text-slate-400 leading-relaxed mb-10 text-lg font-light">
                                              ProZenius engineers market MarketApex not by competing, but by re-coding the consumer's neurological response. We fuse Proneurotic Video Content with Dark DNA sequencing.
                                          </p>
                                          
                                          <div className="flex flex-col gap-6">
                                              <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-800 pt-6">
                                                  <span className="font-bold uppercase tracking-widest text-xs">Method</span>
                                                  <span className="text-gold-200 font-serif italic">Neuro-Linguistic Programming</span>
                                              </div>
                                              <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-800 pt-6">
                                                  <span className="font-bold uppercase tracking-widest text-xs">Output</span>
                                                  <span className="text-gold-200 font-serif italic">Category Dominance</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-7 space-y-4">
                              {[
                                  { id: "01", title: "Dark DNA Film Audit", text: "We decode your brand's hidden psychological triggers—unspoken fears, secret desires, unconscious biases. The film script becomes a neurological reprogramming tool, not an ad." },
                                  { id: "02", title: "MarketApex Wedge Creation", text: "The brand film positions your product as the only relief for a specific anxiety your competitors haven't identified. Example: A fintech startup's film didn't say 'easy loans'—it said 'stop feeling like a failure to your family.' Dark DNA revealed the real fear: social shame, not interest rates." },
                                  { id: "03", title: "Category Ownership", text: "The film creates a new mental category where you're the sole occupant. Our EdTech client's film didn't sell 'online classes'—it sold 'future-proofing your child's dignity.' No competitor exists in that mental space." },
                                  { id: "04", title: "Dark Social Seeding", text: "We don't post the film publicly. We drop it in 500+ WhatsApp groups where targets already discuss their anxiety. It feels like insider information, not marketing. Viral loops explode because sharing signals 'I care about you.'" },
                                  { id: "05", title: "Reinforcement Loop", text: "Every view triggers our AI to send personalized follow-up content that deepens the wedge, making alternatives feel irrelevant. The film is the key; the Dark DNA is the lock mechanism." }
                              ].map((item) => (
                                  <div key={item.id} className="group relative bg-slate-900/30 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition duration-500 hover:border-gold-500/30 hover:translate-x-2">
                                      <div className="flex flex-col md:flex-row gap-8 items-start">
                                          <span className="text-6xl font-black text-slate-800 group-hover:text-gold-500/20 transition-colors duration-500 font-serif leading-none select-none">{item.id}</span>
                                          <div>
                                              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors font-serif">{item.title}</h4>
                                              <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors font-light">{item.text}</p>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* The Result - Ultra Classic Banner */}
                      <div className="relative group rounded-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gold-600"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
                          <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                              <div>
                                  <div className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center justify-center md:justify-start gap-2">
                                      <Shield size={14} /> The Verified Outcome
                                  </div>
                                  <h3 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                                      340% <span className="text-slate-400 font-sans font-thin text-3xl md:text-4xl tracking-wide block md:inline">Market Penetration</span>
                                  </h3>
                              </div>
                              <div className="hidden md:block w-px h-32 bg-slate-700"></div>
                              <div className="max-w-xl">
                                  <p className="text-slate-200 font-serif text-xl md:text-2xl leading-relaxed italic">
                                      "Competitors can't compete because they're selling products; you're selling psychological relief that only your brand can provide."
                                  </p>
                              </div>
                          </div>
                      </div>
                </div>
            </div>

            {/* HEADING WITH 3D TEXT */}
            <div className="text-center max-w-5xl mx-auto mb-20 relative">
                <div className="relative inline-block pb-10">
                    <h2 className="leading-none relative z-10 flex flex-col items-center justify-center gap-3">
                        <span className="block text-3xl md:text-4xl font-serif italic text-slate-400 font-medium tracking-wide">
                            Make your
                        </span>
                        
                        <span className="block text-6xl md:text-9xl font-black tracking-tighter uppercase transform scale-y-110"
                            style={{ 
                                background: 'linear-gradient(to bottom, #eab308, #ca8a04)', 
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0px 6px 0px rgba(161, 98, 7, 0.2))'
                            }}>
                            Superbrand Film
                        </span>

                        <span className="block text-5xl md:text-7xl font-black text-slate-900 mt-4 tracking-tight">
                            <span className="text-slate-400 font-light">@</span> 
                            <span className="text-red-600 decoration-red-200 underline decoration-4 underline-offset-8 ml-3">Rs 9999</span> 
                        </span>
                    </h2>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-full flex justify-center z-0">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-10 py-3 rounded-b-2xl shadow-xl border-x border-b border-slate-700 font-bold uppercase tracking-widest text-xs md:text-sm flex items-center gap-3 transform translate-y-full">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]"></span>
                            India's #1 Viral Agency
                        </div>
                    </div>
                </div>
            </div>
            
            {/* WHY MAKE A BRAND FILM - REDESIGNED DARK SECTION */}
            <div className="bg-slate-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden mt-20 border border-slate-900 shadow-2xl">
                <ClassicDarkTexture />
                
                <div className="relative z-10 grid lg:grid-cols-12 gap-20 items-start">
                    <div className="lg:col-span-4">
                        <h3 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-8">The Strategic Imperative</h3>
                        <h2 className="text-5xl md:text-6xl font-serif text-white mb-10 leading-tight">
                            Why engineer a <span className="italic text-gold-400">SuperBrand</span> Film?
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10 border-l-2 border-gold-500/50 pl-8">
                            We replace creative guesswork with engineered dominance. This is the operational logic behind every ProZenius asset.
                        </p>
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <div className="flex items-center gap-4 text-white font-bold mb-3">
                                <div className="p-3 bg-gold-600 text-slate-900 rounded-lg"><Zap size={24}/></div>
                                <span className="text-lg">Speed-to-Market</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                            Traditional agencies take weeks. We deliver broadcast-grade assets in 24 hours.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Neuro-Architected Authority",
                                desc: "We don't just shoot video; we engineer authority. Our films use 'Dark DNA' triggers that bypass skepticism and compel immediate trust.",
                                icon: <Shield className="w-10 h-10 text-white"/>
                            },
                            {
                                title: "Asymmetric Value Ratio",
                                desc: "Access ₹5L agency-grade production for ₹9,999. We leverage AI to provide an unfair capital efficiency advantage for your ROI.",
                                icon: <TrendingUp className="w-10 h-10 text-white"/>
                            },
                            {
                                title: "Category Domination",
                                desc: "The film creates a psychological wedge that positions you as the only viable solution, rendering competitors irrelevant.",
                                icon: <Target className="w-10 h-10 text-white"/>
                            },
                            {
                                title: "Asset Longevity",
                                desc: "Designed to be evergreen. A single film anchors your brand identity across ads, website, and social for 12+ months.",
                                icon: <Layers className="w-10 h-10 text-white"/>
                            }
                        ].map((item, i) => (
                            <div key={i} className="group bg-slate-900/50 p-10 rounded-3xl border border-slate-800 hover:border-gold-500/50 transition duration-500 hover:bg-slate-900">
                                <div className="mb-8 inline-block p-4 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-gold-600 group-hover:border-gold-500 transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-200 transition-colors">{item.title}</h4>
                                <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="mt-20 text-center">
                <Link to="/brand-films" className="inline-flex items-center gap-3 text-slate-900 font-black text-lg hover:text-gold-600 transition-colors uppercase tracking-widest border-b-2 border-slate-900 hover:border-gold-600 pb-1">
                    Start Your Order <ArrowRight size={20}/>
                </Link>
            </div>
        </div>
      </section>

      <GradientLine />

      {/* WHY US? (CRITICAL SECTION) - Grand Navy */}
      <section id="why-us" className="py-32 bg-[#050A1F] text-white relative overflow-hidden">
        {/* Deep textured background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-[#0a0e2e] to-navy-900 opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Left Content */}
            <div className="flex-1">
              <span className="text-gold-400 font-bold tracking-[0.3em] uppercase mb-8 block text-sm">Critical Intelligence</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-10 text-white leading-none">
                Why 94% of <br/> Brands Fail <br/> <span className="text-gold-500 italic text-4xl md:text-5xl block mt-4">And How You Win.</span>
              </h2>
              <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed mb-10 font-light">
                <p>
                  ProZenius Media's <strong className="text-white font-medium">Dark DNA Pro-Brand Analysis</strong> fundamentally rewrites competitive rules by exposing the unconscious psychological architecture that 94% of Indian brands never leverage.
                </p>
                <p>
                  This proprietary methodology decodes hidden market voids—unmet emotional triggers, unspoken buyer fears, and invisible positioning gaps—to engineer <strong className="text-gold-400 font-medium">Blue Ocean strategies</strong> that make competition irrelevant rather than beating them.
                </p>
                <p>
                  By mapping the "dark patterns" of consumer decision-making across 55+ Indian brands in Automobile, Fitness, and Education sectors, we don't just differentiate—we create entirely new category spaces where your brand becomes the only logical choice.
                </p>
                <p className="border-l-2 border-gold-500 pl-6 italic bg-white/5 p-6 rounded-r-xl my-8 text-white">
                  "Most MSMEs leak 60-70% of marketing ROI through unconscious positioning errors; fixing these unlocks 340% market penetration gains within 4-6 months."
                </p>
                <p>
                  This isn't traditional brand strategy—it's market engineering that transforms your business DNA from the inside out, ensuring long-term dominance rather than temporary advantage.
                </p>
              </div>
            </div>

            {/* Right Cards - Glass Stack */}
            <div className="flex-1 w-full grid gap-8">
               <div className="grid grid-cols-2 gap-6">
                  {[
                      { val: "55+", label: "Indian Brands Transformed", color: "text-gold-400" },
                      { val: "340%", label: "Avg. Market Penetration", color: "text-green-400" },
                      { val: "70%", label: "ROI Leakage Sealed", color: "text-red-400" },
                      { val: "500%", label: "Client ROI (12 Mo)", color: "text-blue-400" }
                  ].map((stat, i) => (
                      <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition transform hover:-translate-y-1 shadow-2xl flex flex-col justify-between h-40">
                        <div className={`text-5xl font-black ${stat.color} font-serif`}>{stat.val}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{stat.label}</div>
                      </div>
                  ))}
               </div>
               
               <div className="bg-gradient-to-r from-gold-700 to-gold-600 p-10 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500 border-t border-gold-400">
                  <h3 className="text-3xl font-bold mb-2 text-white font-serif">Zero Competition</h3>
                  <p className="text-gold-100 font-medium text-lg mb-6">In engineered Blue Ocean spaces.</p>
                  <Link to="/team" className="inline-block bg-white text-gold-900 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-50 transition shadow-lg">
                    Meet The Engineers
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

      <GradientLine />

      {/* 4. RESULTS - REDESIGNED DARK SECTION */}
      <section id="results" className="py-32 bg-slate-950 relative overflow-hidden">
        <ClassicDarkTexture />
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-slate-800 pb-10">
                <div className="max-w-2xl">
                    <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Evidence Archive</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        Real Brand Film <span className="italic text-slate-600">Results</span>
                    </h2>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                    <div className="text-4xl font-serif text-white mb-1">75+</div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest">Case Studies Verified</div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
                {videoShowcase.map((video, i) => (
                    <div key={i} className="group relative">
                        {/* The Video Container - Architectural Look */}
                        <div className="relative aspect-video bg-black border border-slate-800 rounded-lg overflow-hidden group-hover:border-gold-500/50 transition-colors duration-500 shadow-2xl">
                             <iframe 
                                loading="lazy"
                                className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none border-[0.5px] border-white/10 m-3 opacity-50"></div>
                        </div>

                        {/* The Meta Data Strip */}
                        <div className="mt-8 flex items-start justify-between border-t border-slate-800 pt-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Client</span>
                                    <h3 className="text-2xl font-serif text-white">{video.title}</h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sector</span>
                                    <span className="text-xs text-slate-300 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">{video.sector}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-gold-500 font-bold text-xl font-serif italic">{video.stat}</div>
                                <div className="text-[10px] text-slate-600 uppercase tracking-widest mt-1">Growth Metric</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <Link to="/case-studies" className="inline-flex items-center gap-3 text-white border-b border-slate-700 hover:border-gold-500 pb-2 hover:text-gold-500 transition-all uppercase tracking-[0.2em] text-xs font-bold">
                    Access Full Archives <ArrowRight size={14}/>
                </Link>
            </div>
        </div>
      </section>

      <GradientLine />

      {/* 6. TEAM - REDESIGNED ULTRA CLASSIC */}
      <section id="team" className="py-32 bg-slate-950 relative overflow-hidden">
        <ClassicDarkTexture />
        <div className="container mx-auto px-4 relative z-10">
             
             <div className="text-center mb-24">
                 <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Architects</span>
                 <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">ProZenius <span className="italic text-slate-700">Command</span></h2>
                 <div className="w-32 h-1 bg-gold-600 mx-auto rounded-full"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                {leadershipTeam.map((member, i) => (
                    <div key={i} className="group relative">
                        {/* Portrait Frame */}
                        <div className="relative aspect-[3/4] overflow-hidden border border-slate-800 bg-slate-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10"></div>
                             <img src={member.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-105" alt={member.name} />
                             
                             {/* Upload Overlay - Minimal */}
                             <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <div className="bg-white text-black p-2 rounded-full hover:bg-gold-500 transition shadow-lg">
                                    <Camera size={16} />
                                </div>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={(e) => handleLeaderUpload(member.id, e)}
                                    title="Update Portrait"
                                />
                             </div>

                             {/* Name Overlay */}
                             <div className="absolute bottom-6 left-6 z-20">
                                 <h3 className="text-2xl font-serif text-white mb-2 tracking-wide">{member.name}</h3>
                                 <div className="inline-block bg-gold-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">{member.role}</div>
                             </div>
                        </div>
                        
                        {/* Decorative Corner */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold-600/30 group-hover:border-gold-500 transition-colors duration-500"></div>
                    </div>
                ))}
             </div>
        </div>
      </section>

      <GradientLine />

      {/* 7. AUDIT FORM - REDESIGNED ULTRA CLASSIC DOSSIER */}
      <section id="growth-audit" className="py-32 bg-[#F5F2EB] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-20"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            
            <div className="grid md:grid-cols-12 gap-20 items-center">
                
                {/* Text Side */}
                <div className="md:col-span-5">
                    <span className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs mb-8 block">Restricted Entry</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
                        Request <br/> <span className="italic text-gold-600">Strategic Audit</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light border-l-2 border-slate-300 pl-6">
                        We accept a limited number of partners each quarter. Submit your brand dossier for a preliminary Dark DNA assessment.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-6 text-slate-800">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm"><CheckCircle size={20} className="text-gold-600"/></div>
                            <span className="font-serif text-lg">24-Hour Analysis Turnaround</span>
                        </div>
                        <div className="flex items-center gap-6 text-slate-800">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm"><Lock size={20} className="text-gold-600"/></div>
                            <span className="font-serif text-lg">Strict NDA Confidentiality</span>
                        </div>
                    </div>
                </div>

                {/* Form Side - The "Paper" Dossier Look */}
                <div className="md:col-span-7">
                    <div className="bg-white p-12 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative transform md:rotate-1 hover:rotate-0 transition duration-500 border border-slate-200">
                        {/* Gold Clip/Accent */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gold-600 shadow-lg"></div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 rotate-45 transform translate-x-10 -translate-y-10 border-b border-l border-slate-200"></div>
                        
                        <div className="mb-12 text-center border-b border-slate-100 pb-8">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900">Application Protocol</h3>
                            <p className="text-xs text-slate-400 mt-2 font-mono">Ref: PZ-AUDIT-2024</p>
                        </div>
                        
                        <form onSubmit={handleAuditSubmit} className="space-y-10">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="group relative">
                                    <input type="text" required className="block w-full border-b border-slate-300 bg-transparent py-3 px-0 text-slate-900 placeholder-transparent focus:border-gold-600 focus:outline-none transition-colors peer font-serif text-lg" placeholder="Name" value={auditForm.name} onChange={e => setAuditForm({...auditForm, name: e.target.value})} id="name"/>
                                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-bold text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600 uppercase tracking-widest">Full Name</label>
                                </div>
                                <div className="group relative">
                                    <input type="tel" required className="block w-full border-b border-slate-300 bg-transparent py-3 px-0 text-slate-900 placeholder-transparent focus:border-gold-600 focus:outline-none transition-colors peer font-serif text-lg" placeholder="Phone" value={auditForm.phone} onChange={e => setAuditForm({...auditForm, phone: e.target.value})} id="phone"/>
                                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs font-bold text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600 uppercase tracking-widest">WhatsApp Contact</label>
                                </div>
                            </div>

                            <div className="group relative">
                                <input type="email" required className="block w-full border-b border-slate-300 bg-transparent py-3 px-0 text-slate-900 placeholder-transparent focus:border-gold-600 focus:outline-none transition-colors peer font-serif text-lg" placeholder="Email" value={auditForm.email} onChange={e => setAuditForm({...auditForm, email: e.target.value})} id="email"/>
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-bold text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600 uppercase tracking-widest">Corporate Email</label>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="group relative">
                                    <input type="url" required className="block w-full border-b border-slate-300 bg-transparent py-3 px-0 text-slate-900 placeholder-transparent focus:border-gold-600 focus:outline-none transition-colors peer font-serif text-lg" placeholder="Insta" value={auditForm.instagram} onChange={e => setAuditForm({...auditForm, instagram: e.target.value})} id="insta"/>
                                    <label htmlFor="insta" className="absolute left-0 -top-3.5 text-xs font-bold text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600 uppercase tracking-widest">Brand Instagram</label>
                                </div>
                                <div className="group relative">
                                    <select className="block w-full border-b border-slate-300 bg-transparent py-3 px-0 text-slate-900 focus:border-gold-600 focus:outline-none transition-colors font-serif text-lg" value={auditForm.sector} onChange={e => setAuditForm({...auditForm, sector: e.target.value})}>
                                        <option value="">Select Sector</option>
                                        <option value="automobile">Automobile</option>
                                        <option value="fitness">Fitness</option>
                                        <option value="education">Education</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="group relative">
                                <textarea rows={2} required className="block w-full border-b border-slate-300 bg-transparent py-3 px-0 text-slate-900 placeholder-transparent focus:border-gold-600 focus:outline-none transition-colors peer font-serif text-lg resize-none" placeholder="Challenge" value={auditForm.challenge} onChange={e => setAuditForm({...auditForm, challenge: e.target.value})} id="challenge"></textarea>
                                <label htmlFor="challenge" className="absolute left-0 -top-3.5 text-xs font-bold text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600 uppercase tracking-widest">Primary Revenue Bottleneck</label>
                            </div>

                            <div className="pt-8">
                                <button type="submit" disabled={auditLoading} className="w-full bg-gold-600 hover:bg-gold-500 text-white font-black uppercase tracking-[0.2em] py-6 px-8 transition-colors duration-300 shadow-xl flex items-center justify-center gap-4 text-sm rounded-lg">
                                    {auditLoading ? 'Encrypting...' : 'Submit Dossier'} <ArrowRight size={18}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;