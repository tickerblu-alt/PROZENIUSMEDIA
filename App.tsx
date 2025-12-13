import React, { useEffect, useState, Suspense } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle, Menu, X, ChevronDown, Phone, Image as ImageIcon, Trash2, Youtube, Linkedin, Instagram, Twitter, MapPin, Mail, ArrowRight, Loader2, Code, Copy, Check, Book } from 'lucide-react';
import { Sector } from './types';
import { getImageFromDB, saveImageToDB, clearImageFromDB, getAllImagesFromDB } from './utils/imageDB';
import { ASSETS } from './utils/assetsConfig';

// Lazy Load Pages for Performance Optimization
const Home = React.lazy(() => import('./pages/Home'));
const BrandFilms = React.lazy(() => import('./pages/BrandFilms'));
const AITools = React.lazy(() => import('./pages/AITools'));
const SectorLanding = React.lazy(() => import('./pages/SectorLanding'));
const Framework = React.lazy(() => import('./pages/Framework'));
const BlueGuerrilla = React.lazy(() => import('./pages/BlueGuerrilla'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Team = React.lazy(() => import('./pages/Team'));
const Contact = React.lazy(() => import('./pages/Contact'));
const InfluencerCampaign = React.lazy(() => import('./pages/InfluencerCampaign'));
const DemoDelivery = React.lazy(() => import('./pages/DemoDelivery'));
const InsightsHub = React.lazy(() => import('./pages/InsightsHub'));
const InsightsStartups = React.lazy(() => import('./pages/InsightsStartups'));
const InsightsMSME = React.lazy(() => import('./pages/InsightsMSME'));
const FrameworkDetail = React.lazy(() => import('./pages/FrameworkDetail'));
const AiProductFilms = React.lazy(() => import('./pages/AiProductFilms'));
const CorporateAnalysisFilm = React.lazy(() => import('./pages/CorporateAnalysisFilm'));
const Legal = React.lazy(() => import('./pages/Legal'));
const BookPage = React.lazy(() => import('./pages/BookPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Ensures the app always starts at Home on load/refresh
const ForceHomeRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only runs on mount (initial load/refresh)

  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  
  // Initialize with Config Asset if available, otherwise null
  const [customLogo, setCustomLogo] = useState<string | null>(ASSETS.customLogo || null);
  const [isLogoLoading, setIsLogoLoading] = useState(true);

  // Dev Tools State
  const [showDevTools, setShowDevTools] = useState(false);
  const [configOutput, setConfigOutput] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // Load Logo from IndexedDB on mount (Overrides config if present in local DB)
  useEffect(() => {
    const loadLogo = async () => {
        try {
            const savedLogo = await getImageFromDB('prozenius_custom_logo');
            if (savedLogo) {
                setCustomLogo(savedLogo);
            }
        } catch (e) {
            console.error("Failed to load logo", e);
        } finally {
            setIsLogoLoading(false);
        }
    };
    loadLogo();
  }, []);

  // Helper to handle scrolling to the Audit section from anywhere
  const handleAuditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = 'growth-audit';
    
    const hash = window.location.hash;
    const isHome = hash === '#/' || hash === '' || hash === '#';
    
    if (isHome) {
       const el = document.getElementById(targetId);
       if(el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
       window.location.hash = '#/';
       setTimeout(() => {
         const el = document.getElementById(targetId);
         if(el) el.scrollIntoView({ behavior: 'smooth' });
       }, 500);
    }
    
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64String = reader.result as string;
            // Optimistically update UI
            setCustomLogo(base64String);
            // Save to IndexedDB
            try {
                await saveImageToDB('prozenius_custom_logo', base64String);
            } catch (err) {
                console.error("Failed to save logo to DB", err);
                alert("Could not save image database. Please try again.");
            }
        };
        reader.readAsDataURL(file);
    }
  };

  const generateConfig = async () => {
      const allImages = await getAllImagesFromDB();
      const teamObj: Record<number, string | null> = {};
      
      // Map team members 1-8
      for(let i=1; i<=8; i++) {
          teamObj[i] = allImages[`team_member_${i}`] || null;
      }

      const configString = `// Copy this into utils/assetsConfig.ts to persist your uploads for deployment.
export const ASSETS = {
  customLogo: ${allImages['prozenius_custom_logo'] ? `'${allImages['prozenius_custom_logo']}'` : 'null'},
  team: {
${Object.entries(teamObj).map(([k, v]) => `    ${k}: ${v ? `'${v}'` : 'null'}`).join(',\n')}
  }
};`;
      setConfigOutput(configString);
      setShowDevTools(true);
  };

  const copyConfig = () => {
      navigator.clipboard.writeText(configOutput);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
  };

  const servicesList = [
    { name: "Brand Performance Marketing", link: "/blue-guerrilla" },
    { name: "ProZenius Brand Films", link: "/brand-films" },
    { name: "Supersale X Campaign", link: "/influencer-campaign" },
    { name: "AI Product-Service Films", link: "/ai-product-films" },
    { name: "Elite Social Superbrand Package", link: "/corporate-analysis" },
    { name: "SCALE BUSINESS PRO-INTELLIGENCE™", link: "/framework" },
  ];

  // Common Styles
  const navLinkStyle = "text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-gold-600 transition-colors flex items-center gap-1";
  const ctaButtonStyle = "px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all shadow-sm hover:shadow-md flex items-center gap-2 justify-center h-10";

  return (
    <HashRouter>
      <ScrollToTop />
      <ForceHomeRedirect />
      <div className="font-sans text-slate-900 bg-gold-50 min-h-screen flex flex-col">
        
        {/* TOP CONTACT BAR - Dark Bronze */}
        <div className="fixed top-0 w-full z-[60] bg-gold-950 text-gold-100 text-xs md:text-sm font-bold h-10 flex items-center justify-center tracking-wider border-b border-gold-800 shadow-md px-4">
            <div className="flex justify-between w-full max-w-7xl items-center">
                <span className="flex items-center gap-2 text-gold-400">
                    <Phone size={14} className="animate-pulse" /> 
                    HOTLINE: <a href="tel:+919004221717" className="hover:text-white transition">+91-9004221717</a>
                </span>
                <div className="flex gap-4">
                    <a href="https://www.youtube.com/@ProZeniusMedia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-red-500 hover:text-white transition">
                        <Youtube size={16} /> <span className="hidden md:inline">YouTube Channel</span>
                    </a>
                </div>
            </div>
        </div>

        {/* FIXED NAVBAR - Glassy White with Gold Accents */}
        <nav className="fixed top-10 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gold-200 transition-all shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            
            {/* LOGO AREA - CLICK TO UPLOAD */}
            <div className="relative group cursor-pointer flex items-center gap-2 h-12" title="Click to upload your logo">
                {isLogoLoading ? (
                    // Loading Skeleton
                    <div className="w-48 h-10 bg-slate-200 animate-pulse rounded"></div>
                ) : (
                    <>
                        <div className="relative">
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleLogoUpload} 
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                            />
                            
                            {customLogo ? (
                                <img src={customLogo} alt="ProZenius Media" className="h-10 md:h-12 w-auto object-contain" />
                            ) : (
                                <Link to="/" className="flex flex-col leading-none group-hover:opacity-80 transition">
                                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-800 tracking-tight transition duration-300">PROZENIUS MEDIA</span>
                                    <span className="text-xs text-gold-500 font-noto font-medium flex items-center gap-1">
                                        प्रोजेनियस मीडिया <ImageIcon size={10} className="opacity-50"/>
                                    </span>
                                </Link>
                            )}
                        </div>
                        {customLogo && (
                            <button 
                                onClick={async (e) => {
                                    e.preventDefault();
                                    setCustomLogo(null);
                                    await clearImageFromDB('prozenius_custom_logo');
                                }}
                                className="p-1 text-slate-300 hover:text-red-500 z-30"
                                title="Reset Logo"
                            >
                                <Trash2 size={14} />
                            </button>
                        )}
                    </>
                )}
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-8 items-center">
                <Link to="/" className={navLinkStyle}>Home</Link>
                
                {/* SERVICES DROPDOWN */}
                <div className="group relative py-4">
                  <button className={navLinkStyle}>
                    Services <ChevronDown size={12}/>
                  </button>
                  <div className="absolute top-full left-0 w-72 bg-white text-slate-900 rounded-lg shadow-xl border border-gold-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left flex flex-col z-50">
                    {servicesList.map((service, idx) => (
                        <Link 
                            key={idx} 
                            to={service.link} 
                            className="px-4 py-3 hover:bg-gold-50 hover:text-gold-700 border-b border-slate-50 last:border-0 last:rounded-b-lg transition text-xs font-bold uppercase tracking-wide"
                        >
                            {service.name}
                        </Link>
                    ))}
                  </div>
                </div>

                <Link to="/ai-tools" className={navLinkStyle}>AI Tools</Link>
                <Link to="/case-studies" className={navLinkStyle}>Case Studies</Link>
                
                {/* INSIGHTS HUB DROPDOWN */}
                <div className="group relative py-4">
                  <button className={navLinkStyle}>
                    Insights Hub <ChevronDown size={12}/>
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-900 rounded-lg shadow-xl border border-gold-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left z-50">
                    <Link to="/insights" className="block px-4 py-3 hover:bg-gold-50 rounded-t-lg font-bold">Main Hub Gateway</Link>
                    <Link to="/insights/startups" className="block px-4 py-3 hover:bg-blue-50 text-blue-600 font-bold border-t border-slate-100">For Startups 🚀</Link>
                    <Link to="/insights/msme" className="block px-4 py-3 hover:bg-emerald-50 text-emerald-600 font-bold border-t border-slate-100 rounded-b-lg">For MSMEs 🏭</Link>
                  </div>
                </div>
                
                <Link to="/team" className={navLinkStyle}>Team</Link>
                <Link to="/contact" className={navLinkStyle}>Contact</Link>
                
                <div className="group relative py-4">
                  <button className={navLinkStyle}>
                    Sectors <ChevronDown size={12}/>
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-900 rounded-lg shadow-xl border border-gold-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left z-50 max-h-[80vh] overflow-y-auto">
                    <Link to="/automobile" className="block px-4 py-3 hover:bg-gold-50 rounded-t-lg">Automobile</Link>
                    <Link to="/fitness" className="block px-4 py-3 hover:bg-gold-50">Fitness</Link>
                    <Link to="/education" className="block px-4 py-3 hover:bg-gold-50">Education</Link>
                    <Link to="/real-estate" className="block px-4 py-3 hover:bg-gold-50">Real Estate</Link>
                    <Link to="/hospitality" className="block px-4 py-3 hover:bg-gold-50">Hospitality</Link>
                    <Link to="/fashion" className="block px-4 py-3 hover:bg-gold-50">Fashion</Link>
                    <Link to="/technology" className="block px-4 py-3 hover:bg-gold-50">Technology</Link>
                    <Link to="/healthcare" className="block px-4 py-3 hover:bg-gold-50">Healthcare</Link>
                    <Link to="/fmcg" className="block px-4 py-3 hover:bg-gold-50">FMCG</Link>
                    <Link to="/travel" className="block px-4 py-3 hover:bg-gold-50 rounded-b-lg">Travel</Link>
                  </div>
                </div>
            </div>

            <div className="flex gap-3 items-center">
                {/* Pre-Order Book CTA (Linked to New Page) - Red kept for urgency but styled consistently */}
                <Link to="/preorder-book" className={`${ctaButtonStyle} hidden xl:flex text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 animate-pulse`}>
                    <Book size={14}/> Pre-order Success
                </Link>

                {/* Free Audit - Gold Outline */}
                <button onClick={handleAuditClick} className={`${ctaButtonStyle} hidden lg:flex text-gold-600 border border-gold-600 hover:bg-gold-50`}>
                    Free Audit
                </button>
                {/* CTA BUTTON - GOLD STANDARD */}
                <Link to="/brand-films" className={`${ctaButtonStyle} hidden md:flex bg-gold-600 hover:bg-gold-500 text-white shadow-lg border-t border-gold-400`}>
                    BUILD A BRAND
                </Link>
                <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gold-200 absolute w-full shadow-xl max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col p-4 text-slate-700 font-medium">
                <Link to="/" className="py-3 border-b border-slate-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/preorder-book" className="py-3 border-b border-slate-100 text-left text-red-600 font-bold flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Book size={16}/> Pre-order Success
                </Link>
                {/* ... existing mobile links ... */}
                <Link to="/contact" className="py-3 border-b border-slate-100 text-orange-600 font-bold" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <button className="py-3 border-b border-slate-100 text-left text-gold-600 font-bold" onClick={handleAuditClick}>Free Audit</button>
              </div>
            </div>
          )}
        </nav>

        {/* ROUTES */}
        <div className="flex-grow pt-[112px]">
          <Suspense fallback={
              <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center z-50 fixed inset-0">
                  <div className="relative">
                      <div className="absolute inset-0 bg-gold-600/20 rounded-full blur-xl animate-pulse"></div>
                      <Loader2 className="w-16 h-16 text-gold-500 animate-spin mb-4 relative z-10" />
                  </div>
              </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/preorder-book" element={<BookPage />} />
              <Route path="/brand-films" element={<BrandFilms />} />
              <Route path="/dpm-tools" element={<AITools />} /> 
              <Route path="/ai-tools" element={<AITools />} />
              <Route path="/framework" element={<Framework />} />
              <Route path="/blue-guerrilla" element={<BlueGuerrilla />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/influencer-campaign" element={<InfluencerCampaign />} />
              <Route path="/demo-delivery" element={<DemoDelivery />} />
              <Route path="/insights" element={<InsightsHub />} />
              <Route path="/insights/startups" element={<InsightsStartups />} />
              <Route path="/insights/msme" element={<InsightsMSME />} />
              <Route path="/insights/framework/:frameworkId" element={<FrameworkDetail />} />
              <Route path="/ai-product-films" element={<AiProductFilms />} />
              <Route path="/corporate-analysis" element={<CorporateAnalysisFilm />} />
              <Route path="/automobile" element={<SectorLanding type={Sector.AUTOMOBILE} />} />
              <Route path="/fitness" element={<SectorLanding type={Sector.FITNESS} />} />
              <Route path="/education" element={<SectorLanding type={Sector.EDUCATION} />} />
              <Route path="/real-estate" element={<SectorLanding type={Sector.REAL_ESTATE} />} />
              <Route path="/hospitality" element={<SectorLanding type={Sector.HOSPITALITY} />} />
              <Route path="/fashion" element={<SectorLanding type={Sector.FASHION} />} />
              <Route path="/technology" element={<SectorLanding type={Sector.TECHNOLOGY} />} />
              <Route path="/healthcare" element={<SectorLanding type={Sector.HEALTHCARE} />} />
              <Route path="/fmcg" element={<SectorLanding type={Sector.FMCG} />} />
              <Route path="/travel" element={<SectorLanding type={Sector.TRAVEL} />} />
              <Route path="/privacy" element={<Legal type="privacy" />} />
              <Route path="/terms" element={<Legal type="terms" />} />
            </Routes>
          </Suspense>
        </div>

        {/* DEVELOPER TOOLS MODAL */}
        {showDevTools && (
            <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-2xl p-6 shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white font-bold flex items-center gap-2"><Code size={20} className="text-gold-500"/> Developer Configuration</h3>
                        <button onClick={() => setShowDevTools(false)} className="text-slate-400 hover:text-white"><X size={20}/></button>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-lg font-mono text-xs text-green-400 overflow-auto max-h-60 mb-4 whitespace-pre">
                        {configOutput}
                    </div>
                    <div className="flex gap-4">
                        <button onClick={copyConfig} className="bg-gold-600 hover:bg-gold-500 text-slate-900 font-bold px-6 py-2 rounded flex items-center gap-2">
                            {copySuccess ? <Check size={16}/> : <Copy size={16}/>} {copySuccess ? 'Copied!' : 'Copy Code'}
                        </button>
                        <div className="text-slate-400 text-xs flex items-center">
                            Paste into: <span className="bg-slate-800 px-1 rounded mx-1 text-white">utils/assetsConfig.ts</span> to persist for deployment.
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* FOOTER */}
        <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900 font-sans relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-gold-600 to-slate-900"></div>
            <div className="absolute -left-20 bottom-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Col 1: Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="inline-block mb-6 group">
                            {customLogo ? (
                                <img src={customLogo} alt="ProZenius Media" className="h-10 w-auto object-contain mb-2" />
                            ) : (
                                <span className="text-3xl font-black text-white tracking-tight group-hover:text-gold-500 transition-colors">PROZENIUS</span>
                            )}
                            <div className="h-0.5 w-12 bg-gold-600 my-2"></div>
                            <span className="text-slate-500 font-serif italic block text-xs tracking-widest uppercase">Media & Technologies</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-8 text-slate-500 font-light">
                            India's premier <strong className="text-slate-300">AI-Augmented Performance Agency</strong>. We merge cinematic storytelling with 'Dark DNA' psychology to engineer non-linear growth for ambitious brands.
                        </p>
                        <div className="flex gap-3">
                            {/* Social Icons */}
                            <a href="https://www.youtube.com/@ProZeniusMedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-lg"><Youtube size={18} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 shadow-lg"><Instagram size={18} /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-lg"><Linkedin size={18} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Col 2: Capabilities */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Capabilities</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/brand-films" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> Brand Films</Link></li>
                            <li><Link to="/blue-guerrilla" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> Brand Performance</Link></li>
                            <li><Link to="/ai-tools" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> AI Strategy Tools</Link></li>
                            <li><Link to="/influencer-campaign" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> Influencer DNA</Link></li>
                            <li><Link to="/framework" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> Scaling Framework</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Intelligence */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Intelligence</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/insights" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> Insights Hub</Link></li>
                            <li><Link to="/insights/startups" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> For Startups</Link></li>
                            <li><Link to="/insights/msme" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> For MSMEs</Link></li>
                            <li><Link to="/case-studies" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-slate-600 group-hover:text-gold-500 transition-colors"/> Case Studies</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Headquarters</h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-gold-500 group-hover:border-gold-500/30 transition-colors"><MapPin size={18} /></div>
                                <div>
                                    <span className="block text-white font-bold mb-1">Mumbai</span>
                                    <span className="text-slate-500 leading-relaxed">Office 78, Goyal Trade Centre,<br/>Borivali East, Mumbai 400066</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-gold-500 group-hover:border-gold-500/30 transition-colors"><Phone size={18} /></div>
                                <a href="tel:+919004221717" className="hover:text-white transition">+91 9004221717</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-gold-500 group-hover:border-gold-500/30 transition-colors"><Mail size={18} /></div>
                                <a href="mailto:decode@prozenius.media" className="hover:text-white transition">decode@prozenius.media</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
                    <p>&copy; 2024 ProZenius Media. All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0 font-bold uppercase tracking-wider items-center">
                        <Link to="/privacy" className="hover:text-gold-500 transition-colors">Privacy Protocol</Link>
                        <Link to="/terms" className="hover:text-gold-500 transition-colors">Terms of Engagement</Link>
                        <button onClick={generateConfig} className="hover:text-gold-500 transition-colors flex items-center gap-1">
                            <Code size={12}/> Dev Tools
                        </button>
                    </div>
                </div>
            </div>
        </footer>

        {/* WHATSAPP FLOAT */}
        <a 
            href="https://wa.me/919004221717?text=ProZenius%20Brand%20Film%20Inquiry" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center z-50 transition transform hover:-translate-y-1 hover:shadow-green-900/20 border-2 border-white"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>

      </div>
    </HashRouter>
  );
};

export default App;