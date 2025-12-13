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
    generateSpeech,
    generateDarkDNAAnalysis
} from '../services/geminiService';
import { Sector } from '../types';
import { getImageFromDB, saveImageToDB } from '../utils/imageDB';
import { 
    Loader2, Clapperboard, Sparkles, Activity, 
    Video, MessageSquare, Image as ImageIcon, Send, Upload, 
    Key, BrainCircuit, Target, ShieldCheck, CheckCircle, 
    Film, Smartphone, Users, Play, Pause, Download, X,
    Lock, CreditCard, QrCode, Shield, Instagram, LogOut, Calendar,
    Share2, PenTool, Mail, Briefcase, User, ExternalLink, Globe, AlertCircle
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
  const [regData, setRegData] = useState({ name: '', company: '', email: '', instagram: '' });
  const [verifying, setVerifying] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // --- TOOL STATE ---
  const [activeTool, setActiveTool] = useState<'script' | 'ads' | 'reels' | 'social' | 'audit' | 'video' | 'chat' | 'vision' | 'dark-dna-web'>('vision');
  
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

  // Dark DNA Audit State (Manual)
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<string>('');
  const [auditForm, setAuditForm] = useState({
    name: '',
    sector: Sector.AUTOMOBILE,
    challenge: ''
  });

  // Dark DNA Web Analyzer State
  const [darkDnaLoading, setDarkDnaLoading] = useState(false);
  const [darkDnaResult, setDarkDnaResult] = useState<string>('');
  const [darkDnaUrl, setDarkDnaUrl] = useState('');

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
        // Allow access if token exists (simple gate)
        setProfile(parsed);
        setIsLocked(false);
    }
  }, []);

  // Helper for API Key Selection
  const checkApiKey = async (force: boolean = false) => {
    if ((window as any).aistudio) {
        if (force) {
             await (window as any).aistudio.openSelectKey();
             return await (window as any).aistudio.hasSelectedApiKey();
        }
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
  const handleUnlockAccess = (e: React.FormEvent) => {
      e.preventDefault();
      if (!regData.name || !regData.email) {
        setErrorMsg("Name and Email are required.");
        return;
      }
      setErrorMsg('');
      setVerifying(true);

      // SIMULATED Verification / Lead Capture
      setTimeout(() => {
          const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
          const newProfile: UserProfile = {
              ...regData,
              expiry: Date.now() + oneWeekMs,
              joined: Date.now()
          };
          
          localStorage.setItem('prozenius_user_profile', JSON.stringify(newProfile));
          setProfile(newProfile);
          setIsLocked(false);
          setVerifying(false);
      }, 1500);
  };

  const handleLogout = () => {
      if(window.confirm("Are you sure you want to log out?")) {
          // Clear Storage
          localStorage.removeItem('prozenius_user_profile');
          // Reset State Immediately
          setProfile(null);
          setIsLocked(true);
          setRegData({ name: '', company: '', email: '', instagram: '' });
      }
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

  const handleDarkDnaAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    setDarkDnaLoading(true);
    setDarkDnaResult('');
    const result = await generateDarkDNAAnalysis(darkDnaUrl);
    setDarkDnaResult(result);
    setDarkDnaLoading(false);
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
        console.error("Veo Generation Error:", e);
        // Robust check for the API key error string or status
        if (e.message?.includes("Requested entity was not found") || e.toString().includes("Requested entity was not found")) {
            await (window as any).aistudio.openSelectKey();
        } else {
            alert(`Video generation failed: ${e.message || "Ensure your API key has Veo access enabled in Google AI Studio."}`);
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
        setUploadError('Please select a valid image file (JPG, PNG).');
        return;
    }
    setUploadStatus('uploading');
    setUploadProgress(0);
    setUploadError('');
    setSelectedImage(null);
    setImagePreview(null);
    const reader = new FileReader();
    
    // Simulate upload progress
    reader.onprogress = (event) => {
        if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(percent);
        }
    };
    
    reader.onload = (ev) => {
        // Artificial delay for better UX (so user sees the loader)
        setTimeout(() => {
            setImagePreview(ev.target?.result as string);
            setSelectedImage(file);
            setUploadStatus('success');
            setUploadProgress(100);
        }, 800);
    };
    
    reader.onerror = () => {
        setUploadStatus('error');
        setUploadError('Failed to read file.');
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => { 
      e.preventDefault(); 
      e.stopPropagation(); 
      setIsDragging(true); 
  };
  
  const handleDragLeave = (e: React.DragEvent) => { 
      e.preventDefault(); 
      e.stopPropagation();
      // Prevent flickering when dragging over child elements
      if (e.currentTarget.contains(e.relatedTarget as Node)) return;
      setIsDragging(false); 
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        processFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        processFile(e.target.files[0]);
    }
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
      { id: 'dark-dna-web', icon: <Globe size={18} />, label: 'Dark DNA Analyzer' },
      { id: 'script', icon: <Clapperboard size={18} />, label: 'ScriptGen' },
      { id: 'audit', icon: <BrainCircuit size={18} />, label: 'Manual DNA Audit' },
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
              {/* ... (Gatekeeper content remains same) ... */}
              <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-down border-2 border-gold-400">
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center border-b border-gold-600 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
                      <ShieldCheck size={48} className="text-gold-400 mx-auto mb-4" />
                      <h2 className="text-2xl font-black text-white mb-2">ProZenius Intelligence</h2>
                      <p className="text-gold-200 text-sm font-medium">Enterprise Suite Access</p>
                  </div>
                  <div className="p-8">
                      {errorMsg && (
                          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm font-bold mb-4 text-center">{errorMsg}</div>
                      )}
                      <div className="animate-fade-in text-center">
                          <p className="text-slate-600 text-sm mb-6">Enter your details to unlock the full AI toolkit.</p>
                          <form onSubmit={handleUnlockAccess} className="space-y-4 text-left">
                              <div>
                                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name <span className="text-red-500">*</span></label>
                                  <div className="relative">
                                      <User size={16} className="absolute left-3 top-3.5 text-slate-400" />
                                      <input type="text" required className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" placeholder="John Doe" value={regData.name} onChange={e => setRegData({...regData, name: e.target.value})} />
                                  </div>
                              </div>
                              <div>
                                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Work Email <span className="text-red-500">*</span></label>
                                  <div className="relative">
                                      <Mail size={16} className="absolute left-3 top-3.5 text-slate-400" />
                                      <input type="email" required className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" placeholder="name@company.com" value={regData.email} onChange={e => setRegData({...regData, email: e.target.value})} />
                                  </div>
                              </div>
                              <div>
                                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company (Optional)</label>
                                  <div className="relative">
                                      <Briefcase size={16} className="absolute left-3 top-3.5 text-slate-400" />
                                      <input type="text" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" placeholder="Acme Corp" value={regData.company} onChange={e => setRegData({...regData, company: e.target.value})} />
                                  </div>
                              </div>
                              <button type="submit" disabled={verifying} className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-4 rounded-xl shadow-lg transition mt-6 flex items-center justify-center gap-2">
                                  {verifying ? <Loader2 className="animate-spin" /> : <Lock size={18} />}
                                  {verifying ? 'Verifying...' : 'Grant Access'}
                              </button>
                          </form>
                      </div>
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
                        <div className="text-white font-bold">{profile.name} <span className="text-slate-500 text-xs font-normal">{profile.company ? `| ${profile.company}` : ''}</span></div>
                        <div className="text-xs text-brand-400 flex items-center gap-1"><Mail size={10} /> {profile.email}</div>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                        <div className="text-xs uppercase tracking-widest text-slate-500">Access Granted</div>
                        <div className="text-white font-mono font-bold flex items-center gap-2 justify-end">
                            <Calendar size={14} className="text-green-500"/>
                            Active Session
                        </div>
                    </div>
                    <button onClick={handleLogout} className="bg-red-900/30 hover:bg-red-900/50 text-red-400 p-2 rounded-lg transition" title="Log Out"><LogOut size={20} /></button>
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
            <button onClick={() => checkApiKey(true)} className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition">
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

        {/* ... (Previous tools remain the same) ... */}
        
        {/* 9. VISION AI */}
        {activeTool === 'vision' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                     <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                        <ImageIcon className="text-gold-600" /> Image Analyzer
                    </h2>
                    <div className="space-y-6">
                        {/* Drag and Drop Zone */}
                        <div 
                            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all relative overflow-hidden h-64 flex flex-col items-center justify-center ${
                                isDragging 
                                    ? 'border-gold-500 bg-gold-50 scale-[1.02] shadow-lg' 
                                    : uploadStatus === 'error' 
                                        ? 'border-red-300 bg-red-50' 
                                        : 'border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                            
                            {uploadStatus === 'uploading' ? (
                                <div className="flex flex-col items-center justify-center w-full">
                                    <Loader2 className="animate-spin text-gold-600 mb-4" size={40} />
                                    <p className="text-sm font-bold text-slate-700 mb-2 animate-pulse">Uploading & Processing...</p>
                                    <div className="w-full max-w-[200px] bg-slate-200 rounded-full h-1.5 overflow-hidden">
                                        <div className="bg-gold-600 h-full rounded-full transition-all duration-300 ease-out" style={{ width: `${uploadProgress}%` }}></div>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">{uploadProgress}%</p>
                                </div>
                            ) : imagePreview ? (
                                <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
                                    <div className="relative group">
                                        <img src={imagePreview} alt="Preview" className="max-h-40 object-contain rounded-lg shadow-md mb-3" />
                                        <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold">
                                            Change Image
                                        </div>
                                    </div>
                                    <p className="text-sm text-green-600 font-bold flex items-center justify-center gap-1 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                                        <CheckCircle size={14} /> Image Ready
                                    </p>
                                    <p className="text-[10px] text-slate-400 mt-2">Drag another file to replace</p>
                                </div>
                            ) : (
                                <div className={`text-slate-500 flex flex-col items-center transition-transform duration-300 ${isDragging ? 'scale-110' : ''}`}>
                                    <div className={`p-4 rounded-full bg-slate-100 mb-4 ${isDragging ? 'bg-gold-100 text-gold-600' : 'text-slate-400'}`}>
                                        <Upload size={32} />
                                    </div>
                                    <p className="font-bold text-slate-700">Drag & Drop image here</p>
                                    <p className="text-xs opacity-70 mt-1">or click to browse</p>
                                </div>
                            )}

                            {uploadStatus === 'error' && (
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <div className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-200">
                                        <AlertCircle size={12}/> {uploadError}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Analysis Prompt</label>
                            <textarea
                                rows={2}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none transition"
                                value={visionPrompt}
                                onChange={(e) => setVisionPrompt(e.target.value)}
                            ></textarea>
                        </div>
                        <button 
                            onClick={handleVisionAnalyze} 
                            disabled={!selectedImage || visionLoading || uploadStatus === 'uploading'}
                            className={`${primaryBtnClass} ${(!selectedImage || visionLoading) ? 'opacity-50 cursor-not-allowed hover:bg-gold-600' : ''}`}
                        >
                            {visionLoading ? <Loader2 className="animate-spin" /> : <Sparkles />}
                            {visionLoading ? 'Analyzing...' : 'Analyze Image'}
                        </button>
                    </div>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl flex flex-col min-h-[400px] border border-slate-800">
                    <h3 className="text-xl font-bold text-gold-400 mb-4 flex items-center gap-2">
                        <BrainCircuit size={20}/> Gemini Vision Analysis
                    </h3>
                    {visionResult ? (
                        <div className="prose prose-invert prose-sm overflow-y-auto flex-grow pr-2">
                            {visionResult}
                        </div>
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center text-slate-600 text-center gap-4">
                            <ImageIcon size={48} className="opacity-20"/>
                            <div>
                                <p className="font-bold text-slate-500">Awaiting Image Input</p>
                                <p className="text-xs text-slate-600 mt-1">Upload an image to unlock AI insights.</p>
                            </div>
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