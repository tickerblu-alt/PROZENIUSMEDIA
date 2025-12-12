import React, { useState, useEffect } from 'react';
import { 
    generateBrandFilmScript, 
    generateVeoVideo, 
    chatWithGemini, 
    analyzeImage, 
    generateDPMAudit, 
    generateAdCampaign,
    generateReelStrategy,
    generateSocialPost,
    generateSpeech
} from '../services/geminiService';
import { Sector } from '../types';
import { getImageFromDB, saveImageToDB } from '../utils/imageDB';
import { 
    Loader2, Clapperboard, Sparkles, Activity, 
    Video, MessageSquare, Image as ImageIcon, Send, Upload, 
    Key, BrainCircuit, Target, ShieldCheck, CheckCircle, 
    Film, Smartphone, Users, Play, Pause, Download, X,
    Lock, CreditCard, QrCode, Shield, Instagram, LogOut, Calendar,
    Share2, PenTool
} from 'lucide-react';

interface UserProfile {
    name: string;
    company: string;
    email: string;
    instagram: string;
    expiry: number;
    joined: number;
}

const AITools: React.FC = () => {
  // --- ENTERPRISE GATEKEEPER STATE ---
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLocked, setIsLocked] = useState(true);
  
  // Registration Form State
  const [gateStep, setGateStep] = useState<'signup' | 'payment'>('signup');
  const [regData, setRegData] = useState({ name: '', company: '', email: '', instagram: '' });
  const [accessCode, setAccessCode] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Custom QR Code State
  const [customQr, setCustomQr] = useState<string | null>(null);

  // --- TOOL STATE ---
  const [activeTool, setActiveTool] = useState<'script' | 'ads' | 'reels' | 'social' | 'audit' | 'video' | 'chat' | 'vision'>('ads');
  
  // Script Gen State
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState<string>('');
  const [formData, setFormData] = useState({
    businessName: '',
    sector: Sector.AUTOMOBILE,
    topic: ''
  });

  // Ads Module State
  const [adLoading, setAdLoading] = useState(false);
  const [adCampaign, setAdCampaign] = useState('');
  const [adForm, setAdForm] = useState({ brand: '', product: '', audience: '', emotion: 'Trust' });
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioLoading, setAudioLoading] = useState(false);

  // Reels Module State
  const [reelLoading, setReelLoading] = useState(false);
  const [reelStrategy, setReelStrategy] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');

  // Social Post Module State
  const [socialLoading, setSocialLoading] = useState(false);
  const [socialResult, setSocialResult] = useState('');
  const [socialForm, setSocialForm] = useState({ topic: '', platform: 'Instagram', tone: 'Professional' });

  // Dark DNA Audit State
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<string>('');
  const [auditForm, setAuditForm] = useState({
    name: '',
    sector: Sector.AUTOMOBILE,
    challenge: ''
  });

  // Video Gen State
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoPrompt, setVideoPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');

  // Chat State
  const [chatLoading, setChatLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{role: string, parts: {text: string}[]}[]>([]);
  const [chatInput, setChatInput] = useState('');

  // Vision State
  const [visionLoading, setVisionLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [visionPrompt, setVisionPrompt] = useState('Analyze this image for brand sentiment and visual appeal.');
  const [visionResult, setVisionResult] = useState('');
  
  // Vision Upload State
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');

  // --- INITIALIZATION ---
  useEffect(() => {
    // 1. Check Local Storage for Subscription
    const savedProfile = localStorage.getItem('prozenius_user_profile');
    if (savedProfile) {
        const parsed: UserProfile = JSON.parse(savedProfile);
        const now = Date.now();
        if (parsed.expiry > now) {
            setProfile(parsed);
            setIsLocked(false);
        } else {
            // Expired
            localStorage.removeItem('prozenius_user_profile');
            setRegData({ ...regData, email: parsed.email, name: parsed.name, instagram: parsed.instagram }); // Pre-fill
            setIsLocked(true);
        }
    }

    // 2. Load Custom QR Code
    getImageFromDB('payment_qr_code').then(img => {
        if(img) setCustomQr(img);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper for API Key Selection
  const checkApiKey = async () => {
    if ((window as any).aistudio) {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await (window as any).aistudio.openSelectKey();
            return await (window as any).aistudio.hasSelectedApiKey();
        }
        return true;
    }
    return true;
  };

  // --- GATEKEEPER LOGIC ---
  const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      if (!regData.name || !regData.email || !regData.instagram) {
        setErrorMsg("All fields are required.");
        return;
      }
      setErrorMsg('');
      setGateStep('payment');
  };

  const handleQrUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onloadend = async () => {
              const base64 = reader.result as string;
              setCustomQr(base64);
              await saveImageToDB('payment_qr_code', base64);
          };
          reader.readAsDataURL(file);
      }
  };

  const handleVerifyAccess = () => {
      setVerifying(true);
      setErrorMsg('');

      // SIMULATED BACKEND VERIFICATION
      const MASTER_CODE = "PROZENIUS24"; 
      
      setTimeout(() => {
          if (accessCode.trim().toUpperCase() === MASTER_CODE) {
              // Success
              const oneMonthMs = 30 * 24 * 60 * 60 * 1000;
              const newProfile: UserProfile = {
                  ...regData,
                  expiry: Date.now() + oneMonthMs,
                  joined: Date.now()
              };
              
              localStorage.setItem('prozenius_user_profile', JSON.stringify(newProfile));
              setProfile(newProfile);
              setIsLocked(false);
              setVerifying(false);
          } else {
              setVerifying(false);
              setErrorMsg("Invalid Access Code. Please contact support via WhatsApp.");
          }
      }, 1500);
  };

  const handleLogout = () => {
      if(window.confirm("Are you sure you want to log out?")) {
          // Clear Storage
          localStorage.removeItem('prozenius_user_profile');
          // Reset State Immediately
          setProfile(null);
          setIsLocked(true);
          setGateStep('signup');
          setRegData({ name: '', company: '', email: '', instagram: '' });
          setAccessCode('');
      }
  };

  const openWhatsAppVerification = () => {
      const msg = encodeURIComponent(
        `🔐 *ACCESS REQUEST: PROZENIUS AI TOOLS*\n\n` +
        `👤 Name: ${regData.name}\n` +
        `🏢 Company: ${regData.company}\n` +
        `📸 Instagram: ${regData.instagram}\n` +
        `📧 Email: ${regData.email}\n\n` +
        `✅ I have made the payment of ₹1000.\n` +
        `Please verify and send me the Access Code.`
      );
      window.open(`https://wa.me/919004221717?text=${msg}`, '_blank');
  };

  // --- TOOL HANDLERS ---

  const handleGenerateScript = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setScript('');
    const result = await generateBrandFilmScript(formData.topic, formData.sector, formData.businessName);
    setScript(result);
    setLoading(false);
  };

  const handleGenerateAds = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdLoading(true);
    setAdCampaign('');
    const result = await generateAdCampaign(adForm.brand, adForm.product, adForm.audience, adForm.emotion);
    setAdCampaign(result);
    setAdLoading(false);
  };

  const handleGenerateTTS = async (text: string) => {
      setAudioLoading(true);
      const audioBase64 = await generateSpeech(text.substring(0, 200));
      if (audioBase64) {
          const binaryString = atob(audioBase64);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          const wavHeader = new ArrayBuffer(44);
          const view = new DataView(wavHeader);
          const sampleRate = 24000;
          const writeString = (offset: number, string: string) => {
            for (let i = 0; i < string.length; i++) {
              view.setUint8(offset + i, string.charCodeAt(i));
            }
          };
          writeString(0, 'RIFF');
          view.setUint32(4, 36 + len, true);
          writeString(8, 'WAVE');
          writeString(12, 'fmt ');
          view.setUint32(16, 16, true);
          view.setUint16(20, 1, true); 
          view.setUint16(22, 1, true); 
          view.setUint32(24, sampleRate, true);
          view.setUint32(28, sampleRate * 2, true);
          view.setUint16(32, 2, true);
          view.setUint16(34, 16, true); 
          writeString(36, 'data');
          view.setUint32(40, len, true);

          const blob = new Blob([wavHeader, bytes], { type: 'audio/wav' });
          const url = URL.createObjectURL(blob);
          setAudioUrl(url);
      }
      setAudioLoading(false);
  };

  const handleGenerateReels = async (e: React.FormEvent) => {
      e.preventDefault();
      setReelLoading(true);
      setReelStrategy('');
      const result = await generateReelStrategy(websiteUrl);
      setReelStrategy(result);
      setReelLoading(false);
  };

  const handleGenerateSocialPost = async (e: React.FormEvent) => {
      e.preventDefault();
      setSocialLoading(true);
      setSocialResult('');
      const result = await generateSocialPost(socialForm.topic, socialForm.platform, socialForm.tone);
      setSocialResult(result);
      setSocialLoading(false);
  };

  const handleGenerateAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuditLoading(true);
    setAuditResult('');
    const result = await generateDPMAudit(auditForm);
    setAuditResult(result);
    setAuditLoading(false);
  };

  const handleGenerateVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoPrompt) return;
    const keyReady = await checkApiKey();
    if (!keyReady) {
        alert("Please select a paid API key to use Veo Video Generation.");
        return;
    }
    setVideoLoading(true);
    setVideoUrl(null);
    try {
        const url = await generateVeoVideo(videoPrompt, aspectRatio);
        setVideoUrl(url);
    } catch (e: any) {
        console.error(e);
        if (e.message?.includes("Requested entity was not found")) {
            await (window as any).aistudio.openSelectKey();
        } else {
            alert("Video generation failed. Ensure your API key has Veo access.");
        }
    }
    setVideoLoading(false);
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    await checkApiKey();
    setChatLoading(true);
    const userMsg = chatInput;
    setChatInput('');
    const newHistory = [...chatHistory, { role: 'user', parts: [{ text: userMsg }] }];
    setChatHistory(newHistory);
    const response = await chatWithGemini(chatHistory, userMsg);
    setChatHistory([...newHistory, { role: 'model', parts: [{ text: response }] }]);
    setChatLoading(false);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
        setUploadStatus('error');
        setUploadError('Please select a valid image file.');
        return;
    }
    setUploadStatus('uploading');
    setUploadProgress(0);
    setUploadError('');
    setSelectedImage(null);
    setImagePreview(null);
    const reader = new FileReader();
    reader.onprogress = (event) => {
        if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(percent);
        }
    };
    reader.onload = (ev) => {
        setTimeout(() => {
            setImagePreview(ev.target?.result as string);
            setSelectedImage(file);
            setUploadStatus('success');
            setUploadProgress(100);
        }, 600);
    };
    reader.onerror = () => {
        setUploadStatus('error');
        setUploadError('Failed to read file.');
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); };
  const handleDragLeave = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation(); setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
  };
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) processFile(e.target.files[0]);
  };
  const handleVisionAnalyze = async () => {
    if (!selectedImage || !imagePreview) return;
    await checkApiKey();
    setVisionLoading(true);
    setVisionResult('');
    const base64Data = imagePreview.split(',')[1];
    const mimeType = selectedImage.type;
    const result = await analyzeImage(base64Data, mimeType, visionPrompt);
    setVisionResult(result);
    setVisionLoading(false);
  };

  const navItems = [
      { id: 'ads', icon: <Film size={18} />, label: 'Ad Campaigns' },
      { id: 'reels', icon: <Smartphone size={18} />, label: 'Viral Reels' },
      { id: 'social', icon: <Share2 size={18} />, label: 'Develop Social Post' },
      { id: 'script', icon: <Clapperboard size={18} />, label: 'ScriptGen' },
      { id: 'audit', icon: <BrainCircuit size={18} />, label: 'Dark DNA' },
      { id: 'video', icon: <Video size={18} />, label: 'Veo Video' },
      { id: 'chat', icon: <MessageSquare size={18} />, label: 'Expert Chat' },
      { id: 'vision', icon: <ImageIcon size={18} />, label: 'Vision AI' },
  ];

  const primaryBtnClass = "w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 uppercase tracking-widest text-sm";

  return (
    <div className="relative pt-24 pb-12 min-h-screen bg-slate-50">
        
      {/* =========================================================================
          ENTERPRISE GATEKEEPER (MANDATORY BLOCKER)
         ========================================================================= */}
      {isLocked && (
          <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-down border-2 border-gold-400">
                  
                  {/* HEADER */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center border-b border-gold-600 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
                      <Lock size={48} className="text-gold-400 mx-auto mb-4" />
                      <h2 className="text-3xl font-black text-white mb-2">Enterprise Access</h2>
                      <p className="text-gold-200 text-sm font-medium">Restricted Area. Authorized Personnel Only.</p>
                  </div>

                  <div className="p-8">
                      {errorMsg && (
                          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm font-bold mb-4 text-center">
                              {errorMsg}
                          </div>
                      )}

                      {/* STEP 1: REGISTRATION */}
                      {gateStep === 'signup' && (
                          <div className="animate-fade-in">
                              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                  <span className="bg-gold-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                                  Profile Setup
                              </h3>
                              <form onSubmit={handleRegister} className="space-y-4">
                                  <div>
                                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                                      <input 
                                          type="text" required 
                                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                                          value={regData.name}
                                          onChange={e => setRegData({...regData, name: e.target.value})}
                                      />
                                  </div>
                                  <div>
                                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company</label>
                                      <input 
                                          type="text" required 
                                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                                          value={regData.company}
                                          onChange={e => setRegData({...regData, company: e.target.value})}
                                      />
                                  </div>
                                  <div>
                                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Instagram (Required)</label>
                                      <div className="relative">
                                          <Instagram size={18} className="absolute left-3 top-3 text-pink-500" />
                                          <input 
                                              type="text" required 
                                              className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                                              placeholder="@yourbrand"
                                              value={regData.instagram}
                                              onChange={e => setRegData({...regData, instagram: e.target.value})}
                                          />
                                      </div>
                                  </div>
                                  <div>
                                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Business Email</label>
                                      <input 
                                          type="email" required 
                                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                                          value={regData.email}
                                          onChange={e => setRegData({...regData, email: e.target.value})}
                                      />
                                  </div>
                                  <button type="submit" className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-4 rounded-xl shadow-lg transition mt-4 flex items-center justify-center gap-2">
                                      Next: Secure Payment <CheckCircle size={18} />
                                  </button>
                              </form>
                          </div>
                      )}

                      {/* STEP 2: PAYMENT & VERIFICATION */}
                      {gateStep === 'payment' && (
                          <div className="animate-fade-in text-center">
                              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 justify-center">
                                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                  1 Month Access Pass
                              </h3>
                              
                              <div className="bg-green-50 text-green-900 px-4 py-2 rounded-lg font-bold text-2xl mb-6 border border-green-200">
                                  ₹1,000 <span className="text-sm font-normal text-green-700">/ 30 Days</span>
                              </div>

                              {/* QR Code Container */}
                              <div className="relative group mx-auto w-52 h-52 mb-4">
                                  <div className="absolute inset-0 bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex items-center justify-center overflow-hidden">
                                      {/* Shows either uploaded custom QR or default placeholder */}
                                      <img 
                                          src={customQr || `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=prozenius@upi&pn=ProZeniusMedia&am=1000&cu=INR`} 
                                          alt="Payment QR" 
                                          className="w-full h-full object-contain"
                                      />
                                  </div>
                                  
                                  {/* Upload Overlay */}
                                  <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer">
                                      <div className="text-white text-xs font-bold flex flex-col items-center">
                                          <Upload size={24} className="mb-2" />
                                          Upload Bank QR
                                      </div>
                                      <input type="file" accept="image/*" onChange={handleQrUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                  </div>
                              </div>
                              
                              <div className="text-xs text-slate-400 mb-6">Scan with any UPI App</div>

                              <div className="space-y-3">
                                  {/* Verification Flow */}
                                  <button 
                                      onClick={openWhatsAppVerification} 
                                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm"
                                  >
                                      <MessageSquare size={16} /> Send Payment Proof (WhatsApp)
                                  </button>
                                  
                                  <div className="text-xs text-slate-500 py-2">
                                      We will send you an <b>Access Code</b> on WhatsApp after verification.
                                  </div>

                                  <div className="relative">
                                      <Key size={16} className="absolute left-3 top-3.5 text-slate-400" />
                                      <input 
                                        type="text" 
                                        placeholder="Enter Access Code" 
                                        className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none font-mono text-center uppercase tracking-widest"
                                        value={accessCode}
                                        onChange={e => setAccessCode(e.target.value)}
                                      />
                                  </div>

                                  <button 
                                      onClick={handleVerifyAccess} 
                                      disabled={verifying || !accessCode}
                                      className="w-full bg-slate-900 text-gold-400 hover:bg-slate-800 disabled:opacity-50 font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                                  >
                                      {verifying ? <Loader2 className="animate-spin" /> : <Lock size={20} />}
                                      {verifying ? 'Verifying Code...' : 'Unlock Enterprise Tools'}
                                  </button>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      )}
      
      {/* =========================================================================
          MAIN PAGE CONTENT
         ========================================================================= */}
      <div className={`container mx-auto px-4 transition-all duration-500 ${isLocked ? 'filter blur-xl pointer-events-none h-screen overflow-hidden opacity-50' : ''}`}>
        
        {/* LOGGED IN HEADER */}
        {profile && (
            <div className="bg-slate-900 text-slate-300 rounded-2xl p-4 mb-8 flex flex-col md:flex-row justify-between items-center shadow-lg border border-slate-800">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="bg-gold-500 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                        {profile.name.charAt(0)}
                    </div>
                    <div>
                        <div className="text-white font-bold">{profile.name} <span className="text-slate-500 text-xs font-normal">| {profile.company}</span></div>
                        <div className="text-xs text-brand-400 flex items-center gap-1"><Instagram size={10} /> {profile.instagram}</div>
                    </div>
                </div>
                
                <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                        <div className="text-xs uppercase tracking-widest text-slate-500">Plan Expires</div>
                        <div className="text-white font-mono font-bold flex items-center gap-2 justify-end">
                            <Calendar size={14} className="text-green-500"/>
                            {new Date(profile.expiry).toLocaleDateString()}
                        </div>
                    </div>
                    
                    <button onClick={handleLogout} className="bg-red-900/30 hover:bg-red-900/50 text-red-400 p-2 rounded-lg transition" title="Log Out">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>
        )}

        <div className="text-center mb-12 relative">
          <h1 className="text-4xl md:text-6xl font-black font-noto mb-4 text-slate-900">
            AI Weapons for <span className="text-gold-600">Brand Building, Scaling & Disruption</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            Generate Ads, Reels, and Corporate Identity in seconds.
          </p>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
                onClick={checkApiKey}
                className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition"
            >
                <Key size={16} /> Configure API Key
            </button>
          </div>
        </div>

        {/* TOOL NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {navItems.map(tool => (
                <button 
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id as any)}
                    className={`px-5 py-3 rounded-full font-bold text-sm md:text-base transition flex items-center gap-2 ${activeTool === tool.id ? 'bg-slate-900 text-white shadow-xl scale-105' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                >
                    {tool.icon} {tool.label}
                </button>
            ))}
        </div>

        {/* --- TOOL PANELS --- */}

        {/* 1. AD CAMPAIGNS */}
        {activeTool === 'ads' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-fit">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                    <Film className="text-gold-600" />
                    Emotional Ad Generator
                    </h2>
                    <form onSubmit={handleGenerateAds} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Brand Name</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" placeholder="e.g. ProZenius" 
                            value={adForm.brand} onChange={e => setAdForm({...adForm, brand: e.target.value})} required/>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Product / Service</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" placeholder="e.g. AI Marketing Tool" 
                            value={adForm.product} onChange={e => setAdForm({...adForm, product: e.target.value})} required/>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Target Audience</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" placeholder="e.g. Startup Founders in Bangalore" 
                            value={adForm.audience} onChange={e => setAdForm({...adForm, audience: e.target.value})} required/>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Core Emotion</label>
                        <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" 
                            value={adForm.emotion} onChange={e => setAdForm({...adForm, emotion: e.target.value})}>
                            <option>Trust & Authority</option>
                            <option>FOMO (Fear Of Missing Out)</option>
                            <option>Pride & Status</option>
                            <option>Greed & Growth</option>
                        </select>
                    </div>
                    <button type="submit" disabled={adLoading} className={primaryBtnClass}>
                        {adLoading ? <Loader2 className="animate-spin" /> : <Sparkles />}
                        Generate Ad Campaign
                    </button>
                    </form>
                </div>

                <div className="bg-slate-900 text-slate-100 p-8 rounded-3xl shadow-2xl min-h-[500px] flex flex-col border border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gold-400">Campaign Output</h2>
                        {adCampaign && <button onClick={() => handleGenerateTTS(adCampaign)} disabled={audioLoading} className="text-xs bg-gold-600 hover:bg-gold-500 text-white px-3 py-1 rounded flex items-center gap-1">
                             {audioLoading ? <Loader2 size={12} className="animate-spin"/> : <Play size={12}/>} Listen to Preview
                        </button>}
                    </div>
                    
                    {audioUrl && (
                        <div className="mb-4 bg-slate-800 p-3 rounded-lg flex items-center gap-3">
                            <audio controls src={audioUrl} className="w-full h-8" />
                            <button onClick={() => setAudioUrl(null)} className="text-slate-400 hover:text-white"><ShieldCheck size={16}/></button>
                        </div>
                    )}

                    {adLoading ? (
                        <div className="flex-grow flex items-center justify-center flex-col gap-4">
                            <Loader2 size={64} className="animate-spin text-gold-500" />
                            <p className="text-gold-400 font-mono animate-pulse">Engineering Emotion...</p>
                        </div>
                    ) : adCampaign ? (
                    <div className="prose prose-invert max-w-none flex-grow overflow-y-auto whitespace-pre-wrap font-mono text-sm leading-relaxed bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        {adCampaign}
                    </div>
                    ) : (
                    <div className="flex-grow flex items-center justify-center text-slate-500 flex-col gap-4 border-2 border-dashed border-slate-800 rounded-xl">
                        <Film size={48} className="opacity-20" />
                        <p className="opacity-50">Scripts & Shotlists appear here...</p>
                    </div>
                    )}
                </div>
            </div>
        )}

        {/* 2. REELS MODULE */}
        {activeTool === 'reels' && (
             <div className="max-w-6xl mx-auto animate-fade-in">
                 <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 mb-8">
                     <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900"><Smartphone className="text-gold-600"/> Website to Reels</h2>
                     <form onSubmit={handleGenerateReels} className="flex gap-4">
                         <input type="url" required placeholder="https://yourwebsite.com" className="flex-grow p-4 bg-slate-50 border border-slate-200 rounded-xl" 
                             value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)} />
                         <button type="submit" disabled={reelLoading} className="bg-gold-600 hover:bg-gold-500 text-white font-bold px-8 rounded-xl shadow-lg flex items-center gap-2 uppercase tracking-wide text-sm">
                             {reelLoading ? <Loader2 className="animate-spin"/> : <Sparkles/>} Generate
                         </button>
                     </form>
                 </div>

                 {reelStrategy && (
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                         {/* We parse the text loosely or just display it, but for better UI lets wrap in a scroll area if unstructured */}
                         <div className="col-span-full bg-slate-900 text-slate-100 p-8 rounded-3xl shadow-2xl border border-slate-800">
                             <h3 className="text-gold-400 font-bold mb-4 flex justify-between">
                                 <span>6 Viral Concepts</span>
                                 <button className="text-xs border border-gold-500 px-3 py-1 rounded hover:bg-gold-500/20">Export CSV</button>
                             </h3>
                             <div className="prose prose-invert max-w-none whitespace-pre-wrap font-mono text-sm">
                                 {reelStrategy}
                             </div>
                         </div>
                     </div>
                 )}
                 {!reelStrategy && !reelLoading && (
                     <div className="text-center py-20 bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
                         <Smartphone className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                         <p className="text-slate-500">Enter a URL to auto-extract Reel ideas.</p>
                     </div>
                 )}
             </div>
        )}

        {/* 3. SOCIAL POST (NEW) */}
        {activeTool === 'social' && (
             <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
                 <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-fit">
                     <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                         <Share2 className="text-gold-600" /> Develop Social Post
                     </h2>
                     <form onSubmit={handleGenerateSocialPost} className="space-y-6">
                         <div>
                             <label className="block text-sm font-bold text-slate-700 mb-2">Post Topic</label>
                             <textarea 
                                 rows={4}
                                 required 
                                 className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none"
                                 placeholder="e.g. Announcing our new summer collection launch with sustainable materials..." 
                                 value={socialForm.topic} 
                                 onChange={e => setSocialForm({...socialForm, topic: e.target.value})} 
                             />
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                             <div>
                                 <label className="block text-sm font-bold text-slate-700 mb-2">Platform</label>
                                 <select 
                                     className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none"
                                     value={socialForm.platform} 
                                     onChange={e => setSocialForm({...socialForm, platform: e.target.value})}
                                 >
                                     <option>Instagram</option>
                                     <option>LinkedIn</option>
                                     <option>Twitter / X</option>
                                     <option>Facebook</option>
                                 </select>
                             </div>
                             <div>
                                 <label className="block text-sm font-bold text-slate-700 mb-2">Tone</label>
                                 <select 
                                     className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none"
                                     value={socialForm.tone} 
                                     onChange={e => setSocialForm({...socialForm, tone: e.target.value})}
                                 >
                                     <option>Professional</option>
                                     <option>Viral & Edgy</option>
                                     <option>Casual</option>
                                     <option>Educational</option>
                                 </select>
                             </div>
                         </div>
                         <button type="submit" disabled={socialLoading} className={primaryBtnClass}>
                             {socialLoading ? <Loader2 className="animate-spin" /> : <PenTool />}
                             Generate Post
                         </button>
                     </form>
                 </div>

                 <div className="bg-slate-900 text-slate-100 p-8 rounded-3xl shadow-2xl min-h-[500px] flex flex-col border border-slate-800">
                     <h2 className="text-2xl font-bold text-gold-400 mb-6">Generated Content</h2>
                     
                     {socialLoading ? (
                         <div className="flex-grow flex items-center justify-center flex-col gap-4">
                             <Loader2 size={64} className="animate-spin text-gold-500" />
                             <p className="text-gold-400 font-mono animate-pulse">Drafting Content...</p>
                         </div>
                     ) : socialResult ? (
                         <div className="prose prose-invert max-w-none flex-grow overflow-y-auto whitespace-pre-wrap font-mono text-sm leading-relaxed bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                             {socialResult}
                         </div>
                     ) : (
                         <div className="flex-grow flex items-center justify-center text-slate-500 flex-col gap-4 border-2 border-dashed border-slate-800 rounded-xl">
                             <Share2 size={48} className="opacity-20" />
                             <p className="opacity-50">Post content appears here...</p>
                         </div>
                     )}
                 </div>
             </div>
        )}

        {/* 4. SCRIPT GEN PRO (Legacy Tool) */}
        {activeTool === 'script' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-fit">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                    <Sparkles className="text-gold-600" />
                    Script Parameters
                    </h2>
                    <form onSubmit={handleGenerateScript} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                        <input
                        type="text"
                        required
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition"
                        placeholder="e.g. Apex Autos"
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Sector</label>
                        <select
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition"
                        value={formData.sector}
                        onChange={(e) => setFormData({...formData, sector: e.target.value as Sector})}
                        >
                        {Object.values(Sector).map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Ad Topic / Hook</label>
                        <textarea
                        required
                        rows={3}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition"
                        placeholder="e.g. Launching a new luxury SUV in Mumbai..."
                        value={formData.topic}
                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={primaryBtnClass}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Clapperboard />}
                        {loading ? 'Generating...' : 'Generate Viral Script'}
                    </button>
                    </form>
                </div>

                <div className="bg-slate-900 text-slate-100 p-8 rounded-3xl shadow-2xl min-h-[500px] flex flex-col border border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gold-400">Output</h2>
                        {script && <span className="text-xs bg-green-500 text-slate-900 px-2 py-1 rounded font-bold">FESTIVAL READY</span>}
                    </div>
                    
                    {loading ? (
                        <div className="flex-grow flex items-center justify-center flex-col gap-4">
                            <Loader2 size={64} className="animate-spin text-gold-500" />
                            <p className="text-gold-400 font-mono animate-pulse text-lg">Synthesizing Viral Hooks...</p>
                        </div>
                    ) : script ? (
                    <div className="prose prose-invert max-w-none flex-grow overflow-y-auto whitespace-pre-wrap font-mono text-sm leading-relaxed bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        {script}
                    </div>
                    ) : (
                    <div className="flex-grow flex items-center justify-center text-slate-500 flex-col gap-4 border-2 border-dashed border-slate-800 rounded-xl">
                        <Clapperboard size={48} className="opacity-20" />
                        <p className="opacity-50">AI Script will appear here...</p>
                    </div>
                    )}
                </div>
            </div>
        )}

        {/* 5. DARK DNA AUDIT (Legacy) */}
        {activeTool === 'audit' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-fit">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                    <Target className="text-gold-600" />
                    Dark DNA Parameters
                    </h2>
                    <form onSubmit={handleGenerateAudit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                        <input
                        type="text"
                        required
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition"
                        placeholder="e.g. Iron Gyms India"
                        value={auditForm.name}
                        onChange={(e) => setAuditForm({...auditForm, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Sector</label>
                        <select
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition"
                        value={auditForm.sector}
                        onChange={(e) => setAuditForm({...auditForm, sector: e.target.value as Sector})}
                        >
                        {Object.values(Sector).map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Growth Challenge</label>
                        <textarea
                        required
                        rows={3}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none transition"
                        placeholder="e.g. Can't retain members past 3 months..."
                        value={auditForm.challenge}
                        onChange={(e) => setAuditForm({...auditForm, challenge: e.target.value})}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={auditLoading}
                        className={primaryBtnClass}
                    >
                        {auditLoading ? <Loader2 className="animate-spin" /> : <ShieldCheck />}
                        {auditLoading ? 'Auditing...' : 'Run Dark DNA Audit'}
                    </button>
                    </form>
                </div>

                <div className="bg-slate-950 text-slate-100 p-8 rounded-3xl shadow-2xl min-h-[500px] flex flex-col border border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gold-500">Confidential Output</h2>
                        {auditResult && <span className="text-xs bg-gold-600 text-white px-2 py-1 rounded font-bold uppercase tracking-wider">Top Secret</span>}
                    </div>
                    
                    {auditLoading ? (
                        <div className="flex-grow flex items-center justify-center flex-col gap-4">
                            <Loader2 size={64} className="animate-spin text-gold-600" />
                            <p className="text-gold-500 font-mono animate-pulse text-lg">Scanning Psychological Triggers...</p>
                        </div>
                    ) : auditResult ? (
                    <div className="prose prose-invert max-w-none flex-grow overflow-y-auto whitespace-pre-wrap font-mono text-sm leading-relaxed bg-black/50 p-6 rounded-xl border border-gold-900/30 shadow-inner text-gold-50">
                        {auditResult}
                    </div>
                    ) : (
                    <div className="flex-grow flex items-center justify-center text-slate-600 flex-col gap-4 border-2 border-dashed border-slate-800 rounded-xl">
                        <BrainCircuit size={48} className="opacity-20" />
                        <p className="opacity-50">Run audit to reveal Dark DNA...</p>
                    </div>
                    )}
                </div>
            </div>
        )}

        {/* 6. VEO VIDEO */}
        {activeTool === 'video' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                        <Video className="text-gold-600" /> Veo Generator
                    </h2>
                    <form onSubmit={handleGenerateVideo} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Prompt</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none"
                                placeholder="A cinematic drone shot of a red luxury car driving on Mumbai sea link..."
                                value={videoPrompt}
                                onChange={(e) => setVideoPrompt(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Aspect Ratio</label>
                            <div className="flex gap-4">
                                <button type="button" onClick={() => setAspectRatio('16:9')} className={`flex-1 py-3 rounded-xl border-2 font-bold ${aspectRatio === '16:9' ? 'border-gold-600 bg-gold-50 text-gold-700' : 'border-slate-200'}`}>16:9 Landscape</button>
                                <button type="button" onClick={() => setAspectRatio('9:16')} className={`flex-1 py-3 rounded-xl border-2 font-bold ${aspectRatio === '9:16' ? 'border-gold-600 bg-gold-50 text-gold-700' : 'border-slate-200'}`}>9:16 Portrait</button>
                            </div>
                        </div>
                        <button type="submit" disabled={videoLoading} className={primaryBtnClass}>
                            {videoLoading ? <Loader2 className="animate-spin" /> : <Video />}
                            {videoLoading ? 'Generating Video...' : 'Generate 720p Preview'}
                        </button>
                    </form>
                </div>
                <div className="bg-black rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center min-h-[400px] border border-slate-800 relative">
                    {videoLoading ? (
                        <div className="text-center">
                            <Loader2 size={64} className="animate-spin text-gold-500 mx-auto mb-4" />
                            <p className="text-gold-400 font-bold animate-pulse">Veo is rendering... (takes ~30s)</p>
                        </div>
                    ) : videoUrl ? (
                        <video src={videoUrl} controls autoPlay loop className="w-full h-full object-contain" />
                    ) : (
                        <div className="text-slate-700 flex flex-col items-center">
                            <Video size={64} className="opacity-20 mb-2" />
                            <p className="opacity-50 font-bold">Generated video appears here</p>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* 7. EXPERT CHAT */}
        {activeTool === 'chat' && (
             <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col h-[600px] animate-fade-in">
                <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
                    <div className="font-bold flex items-center gap-2"><MessageSquare size={20}/> Gemini 3 Pro Expert</div>
                    <button onClick={() => setChatHistory([])} className="text-xs text-slate-400 hover:text-white">Clear Chat</button>
                </div>
                <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50">
                    {chatHistory.length === 0 && (
                        <div className="text-center text-slate-400 mt-20">
                            <MessageSquare size={48} className="mx-auto mb-2 opacity-20" />
                            <p>Ask me anything about brand strategy, scripts, or Dark DNA Marketing.</p>
                        </div>
                    )}
                    {chatHistory.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-gold-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'}`}>
                                {msg.parts[0].text}
                            </div>
                        </div>
                    ))}
                    {chatLoading && (
                        <div className="flex justify-start">
                             <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
                                <Loader2 className="animate-spin text-slate-400" size={20} />
                             </div>
                        </div>
                    )}
                </div>
                <form onSubmit={handleChat} className="p-4 bg-white border-t border-slate-200 flex gap-2">
                    <input 
                        type="text" 
                        className="flex-grow p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-gold-500 outline-none bg-slate-50"
                        placeholder="Ask strategy question..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                    />
                    <button type="submit" disabled={chatLoading || !chatInput.trim()} className="bg-gold-600 text-white p-3 rounded-xl hover:bg-gold-500 disabled:opacity-50 transition">
                        <Send size={20} />
                    </button>
                </form>
             </div>
        )}

        {/* 8. VISION AI */}
        {activeTool === 'vision' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                     <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                        <ImageIcon className="text-gold-600" /> Image Analyzer
                    </h2>
                    <div className="space-y-6">
                        {/* Drop Zone */}
                        <div 
                            className={`border-2 border-dashed rounded-xl p-8 text-center transition relative overflow-hidden ${
                                isDragging ? 'border-gold-500 bg-gold-50' : 
                                uploadStatus === 'error' ? 'border-red-300 bg-red-50' : 'border-slate-300 hover:bg-slate-50'
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                            
                            {uploadStatus === 'uploading' ? (
                                <div className="flex flex-col items-center justify-center py-8">
                                    <Loader2 className="animate-spin text-gold-600 mb-2" size={32} />
                                    <p className="text-sm font-bold text-slate-600 mb-2">Processing...</p>
                                    <div className="w-full max-w-xs bg-slate-200 rounded-full h-2">
                                        <div className="bg-gold-600 h-2 rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                                    </div>
                                </div>
                            ) : imagePreview ? (
                                <div className="relative z-20">
                                    <img src={imagePreview} alt="Preview" className="max-h-64 mx-auto rounded-lg shadow-md mb-2" />
                                    <p className="text-sm text-green-600 font-bold flex items-center justify-center gap-1">
                                        <CheckCircle size={14} /> Image Ready
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">Click or Drag to replace</p>
                                </div>
                            ) : (
                                <div className="text-slate-500 py-8">
                                    <Upload size={48} className={`mx-auto mb-2 transition ${isDragging ? 'text-gold-600 scale-110' : 'opacity-30'}`} />
                                    <p className="font-medium">Drag & Drop image here</p>
                                    <p className="text-xs opacity-70 mt-1">or click to browse</p>
                                </div>
                            )}

                            {uploadStatus === 'error' && (
                                <div className="absolute bottom-4 left-0 right-0 text-center text-red-500 text-xs font-bold px-4">
                                    {uploadError}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Analysis Prompt</label>
                            <textarea
                                rows={2}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                                value={visionPrompt}
                                onChange={(e) => setVisionPrompt(e.target.value)}
                            ></textarea>
                        </div>
                        <button 
                            onClick={handleVisionAnalyze} 
                            disabled={!selectedImage || visionLoading || uploadStatus === 'uploading'}
                            className={primaryBtnClass}
                        >
                            {visionLoading ? <Loader2 className="animate-spin" /> : <Sparkles />}
                            Analyze Image
                        </button>
                    </div>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl flex flex-col min-h-[400px]">
                    <h3 className="text-xl font-bold text-gold-400 mb-4">Gemini Analysis</h3>
                    {visionResult ? (
                        <div className="prose prose-invert prose-sm overflow-y-auto flex-grow">
                            {visionResult}
                        </div>
                    ) : (
                        <div className="flex-grow flex items-center justify-center text-slate-600 text-center">
                            <p>{visionLoading ? 'Analyzing pixels...' : 'Upload an image to see insights'}</p>
                        </div>
                    )}
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default AITools;