import React from 'react';
import { Sector } from '../types';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Play, ExternalLink, Activity, Target, Lock } from 'lucide-react';

interface SectorLandingProps {
  type: Sector;
}

const SECTOR_CONTENT = {
  [Sector.AUTOMOBILE]: {
    title: "Automobile Brand DNA",
    subtitle: "Showrooms are dead. Cinematic Brand Films are the new test drive.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?auto=format&fit=crop&q=80&w=2000",
    stats: ["450% Traffic", "10x ROI", "Premium Leads"],
    points: ["Drone Cinematography for Luxury Appeal", "DDM Hooks targeting Status Anxiety", "Viral Test-Drive Challenges"],
    caseTitle: "Apex Autos Launch",
    videoId: "W_2056YyKjM"
  },
  [Sector.FITNESS]: {
    title: "Fitness Empire Systems",
    subtitle: "Stop selling memberships. Start selling Identity.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000",
    stats: ["300% Growth", "95% Retention", "Tribe Building"],
    points: ["Transformation Documentaries", "Community Identity Building", "Scarcity-based Cohort Launches"],
    caseTitle: "Bright Star Gym Expansion",
    videoId: "fK3d98hE_b0"
  },
  [Sector.EDUCATION]: {
    title: "Education Authority",
    subtitle: "Trust is the only currency. Build it instantly with Brand Films.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000",
    stats: ["100x Scale", "High Trust", "Zero CAC"],
    points: ["Founder-Led Thought Leadership", "Student Success Stories", "Authority Positioning"],
    caseTitle: "EduPeak Academy",
    videoId: "Q51XNnZf6bM"
  },
  [Sector.REAL_ESTATE]: {
    title: "Luxury Real Estate",
    subtitle: "Sell the dream, not the square footage. Immersive lifestyle films.",
    image: "https://images.unsplash.com/photo-1600596542815-e32870110229?auto=format&fit=crop&q=80&w=2000",
    stats: ["₹50Cr Sales", "2x Site Visits", "NRI Interest"],
    points: ["Lifestyle-First Cinematography", "Virtual Emotional Tours", "Project Launch Hype Films"],
    caseTitle: "Luxe Estates",
    videoId: "h9Cxj2k7Zz0"
  },
  [Sector.HOSPITALITY]: {
    title: "Hospitality & Dining",
    subtitle: "Make them taste it through the screen. Sensory marketing.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000",
    stats: ["Fully Booked", "300% Rev", "Viral Menu"],
    points: ["Chef's Table Style Storytelling", "Ambiance & Mood Films", "Influencer Dining Events"],
    caseTitle: "Urban Bistro",
    videoId: "ysz5S6PUM-U"
  },
  [Sector.FASHION]: {
    title: "Fashion & Retail",
    subtitle: "Create a movement, not just a catalog. Identity-driven campaigns.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2000",
    stats: ["Sold Out Drop", "50k Followers", "Brand Cult"],
    points: ["High-Fashion Editorials", "Behind-the-Scenes Craft", "Identity & Culture Hooks"],
    caseTitle: "Velvet Vogue",
    videoId: "Da4P2u_4e-s"
  },
  [Sector.TECHNOLOGY]: {
    title: "B2B Technology",
    subtitle: "Turn complex tech into compelling human stories.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    stats: ["Series A Funding", "Enterprise Wins", "Global Reach"],
    points: ["Visionary Founder Stories", "Product Use-Case Epics", "Trust & Security Narratives"],
    caseTitle: "TechFlow Systems",
    videoId: "ScMzIvxBSi4"
  },
  [Sector.HEALTHCARE]: {
    title: "Healthcare & Clinics",
    subtitle: "Empathy meets Authority. Build unwavering patient trust.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=2000",
    stats: ["2x Appointments", "Top Rated", "Patient Trust"],
    points: ["Doctor Authority Profiles", "Patient Transformation Journeys", "Facility Trust Tours"],
    caseTitle: "CarePlus Clinics",
    videoId: "Q51XNnZf6bM"
  },
  [Sector.FMCG]: {
    title: "FMCG & Consumer",
    subtitle: "From shelf to cart in seconds. High-volume desire engineering.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000",
    stats: ["Market Leader", "Viral Launch", "Mass Adoption"],
    points: ["Emotional Product Connections", "Usage Occasion Targeting", "Mass Market Viral Hooks"],
    caseTitle: "GreenLeaf Naturals",
    videoId: "Hh4B2i8g_kM"
  },
  [Sector.TRAVEL]: {
    title: "Travel & Tourism",
    subtitle: "Sell the escape. Cinematic wanderlust that forces booking.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000",
    stats: ["300% Bookings", "Global Viral", "Resort Full"],
    points: ["Destinational Storytelling", "Experience-First Visuals", "FOMO Marketing"],
    caseTitle: "Wanderlust Travels",
    videoId: "tgbNymZ7vqY"
  },
  [Sector.GENERAL]: {
    title: "Billion Scale Growth",
    subtitle: "For every sector.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    stats: [],
    points: [],
    caseTitle: "Client X",
    videoId: ""
  }
};

const SectorLanding: React.FC<SectorLandingProps> = ({ type }) => {
  const content = SECTOR_CONTENT[type];

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-200 selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO SECTION - Dark Editorial */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-gold-900/30">
          {/* Background Image with advanced blending */}
          <div className="absolute inset-0 z-0">
               <img 
                  src={content.image} 
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 animate-pulse-slow" 
                  alt={type} 
               />
               <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/40"></div>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.15),transparent_60%)]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-20">
             <div className="max-w-4xl">
                 <div className="inline-flex items-center gap-3 border border-gold-500/30 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 mb-8">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse"></div>
                    <span className="text-gold-400 text-xs font-black tracking-[0.3em] uppercase">
                        Sector Intelligence: {type}
                    </span>
                 </div>
                 
                 <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight">
                     {content.title.split(' ').map((word, i) => (
                         <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic pr-4" : "block"}>
                             {word}
                         </span>
                     ))}
                 </h1>
                 
                 <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed border-l-2 border-gold-500 pl-8 mb-12">
                     {content.subtitle}
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-6">
                     <Link to="/brand-films" className="group bg-gold-600 hover:bg-gold-500 text-white px-8 py-5 font-black text-sm uppercase tracking-widest transition-colors flex items-center gap-3 shadow-[0_0_20px_rgba(234,179,8,0.2)] rounded-sm">
                        Initiate Protocol <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                     </Link>
                     <button onClick={() => document.getElementById('strategy')?.scrollIntoView({behavior: 'smooth'})} className="group border border-gold-600 text-gold-400 hover:text-white px-8 py-5 font-black text-sm uppercase tracking-widest hover:border-white transition-colors flex items-center gap-3 rounded-sm">
                        View Blueprint <Activity size={18} className="text-gold-500"/>
                     </button>
                 </div>
             </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500/50 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-[10px] uppercase tracking-widest">Scroll to Decode</span>
              <div className="w-px h-12 bg-gradient-to-b from-gold-500/50 to-transparent"></div>
          </div>
      </div>

      {/* 2. METRICS STRIP - Brutalist */}
      <div className="border-b border-slate-900 bg-slate-950 relative z-20">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-900 border-x border-slate-900">
                  {content.stats.map((stat, i) => (
                      <div key={i} className="p-8 text-center group hover:bg-slate-900/50 transition duration-500">
                          <div className="text-4xl md:text-5xl font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">{stat}</div>
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Verified Outcome</div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* 3. STRATEGY & EVIDENCE - Editorial Grid */}
      <div id="strategy" className="py-24 relative overflow-hidden">
          {/* Decorative lines */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-slate-900 hidden lg:block"></div>
          <div className="absolute right-10 top-0 bottom-0 w-px bg-slate-900 hidden lg:block"></div>

          <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-20 items-start">
                  
                  {/* Left: The Strategy */}
                  <div>
                      <div className="mb-12">
                          <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The ProZenius Architecture</span>
                          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Strategic <span className="italic text-slate-600">Intervention</span></h2>
                          <p className="text-slate-400 leading-relaxed">
                              Standard marketing is noise. We deploy a surgical narrative intervention designed to reposition your brand as the category authority.
                          </p>
                      </div>

                      <div className="space-y-8">
                          {content.points.map((point, i) => (
                              <div key={i} className="flex gap-6 group">
                                  <div className="w-12 h-12 border border-slate-800 bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/50 transition-colors">
                                      <span className="text-gold-500 font-serif font-bold text-lg">0{i+1}</span>
                                  </div>
                                  <div>
                                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">Protocol {i+1}</h3>
                                      <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                                          {point}
                                      </p>
                                  </div>
                              </div>
                          ))}
                      </div>

                      <div className="mt-16 pt-8 border-t border-slate-900">
                          <Link to="/brand-films" className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs group">
                              <span className="w-12 h-px bg-gold-500 group-hover:w-20 transition-all"></span>
                              Deploy This Strategy
                          </Link>
                      </div>
                  </div>
                  
                  {/* Right: The Evidence (Video) */}
                  <div className="lg:sticky lg:top-32">
                      <div className="relative group cursor-pointer">
                          {/* Frame */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 rounded-lg opacity-20 group-hover:opacity-40 blur transition duration-1000"></div>
                          
                          <div className="relative bg-slate-900 border border-slate-800 p-2 rounded-lg">
                              <a 
                                href={`https://www.youtube.com/watch?v=${content.videoId}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block relative aspect-video overflow-hidden rounded bg-black"
                              >
                                    <img 
                                        src={content.image} 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition duration-700" 
                                        alt="Case Study" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                                    
                                    {/* Play Button */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition duration-500">
                                        <div className="w-16 h-16 bg-white text-slate-950 rounded-full flex items-center justify-center">
                                            <Play fill="currentColor" size={24} className="ml-1"/>
                                        </div>
                                    </div>

                                    {/* Meta Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                        <div>
                                            <div className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-1 flex items-center gap-1">
                                                <Lock size={10}/> Classified Case File
                                            </div>
                                            <div className="text-2xl font-serif text-white">{content.caseTitle}</div>
                                        </div>
                                        <ExternalLink className="text-white/50 group-hover:text-white transition" size={20}/>
                                    </div>
                              </a>
                          </div>

                          {/* Data label */}
                          <div className="mt-4 flex justify-between items-center px-2">
                               <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest">
                                   <Target size={12} className="text-gold-500"/>
                                   Performance Verified
                               </div>
                               <div className="text-[10px] text-slate-600 font-mono">
                                   ID: PZ-{Math.floor(Math.random() * 9000) + 1000}
                               </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
    </div>
  );
};

export default SectorLanding;