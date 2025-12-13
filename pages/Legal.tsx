import React, { useState } from 'react';
import { Shield, Lock, FileText, Download, CheckCircle, AlertTriangle, Database, Server } from 'lucide-react';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const [downloading, setDownloading] = useState(false);
  const [archived, setArchived] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    
    // Simulate backend archival process
    setTimeout(() => {
        setArchived(true);
        setTimeout(() => {
            const content = type === 'privacy' 
                ? "OFFICIAL PRIVACY PROTOCOL\n\n1. Data Sovereignty\nWe treat your strategic data as classified intelligence. All client dossiers, campaign metrics, and Dark DNA profiles are stored in isolated, AES-256 encrypted environments.\n\n2. The 'No-Sell' Guarantee\nProZenius Media creates assets; we do not trade commodities. Your customer lists, leads, and proprietary data are never sold, shared, or exposed to third-party aggregators.\n\n3. Surveillance & Tracking\nOur analytics tools (The War Room Dashboard) utilize first-party cookies solely for performance optimization. We reject intrusive third-party surveillance capitalism." 
                : "TERMS OF ENGAGEMENT\n\n1. Scope of Operations\nProZenius Media is engaged to execute high-impact brand engineering. 'Standard' results are considered a failure state. We operate under the mandate of market dominance.\n\n2. Financial Protocols\nDeployment requires 100% advance for 'Ignition' and 'Velocity' tiers. 'MarketApex' engagements operate on a 50/50 split. Late payments result in immediate suspension of campaign assets.\n\n3. Intellectual Property\nUpon final settlement, all generated assets (Films, Graphics, Scripts) become the sole property of the Client. ProZenius retains the right to showcase works in our classified case study archives unless a specific NDA is triggered.";
            
            const blob = new Blob([content], { type: 'application/pdf' }); // Simulating PDF mime type for the user, though it's text content in this demo
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = type === 'privacy' ? 'ProZenius_Privacy_Protocol_SECURE.txt' : 'ProZenius_Terms_of_Engagement_SECURE.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            setDownloading(false);
        }, 1000);
    }, 1500);
  };

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? "Privacy Protocol" : "Terms of Engagement";
  const subTitle = isPrivacy ? "Data Sovereignty & Encryption Standards" : "Operational Parameters & Rules of Engagement";

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/50 px-4 py-1.5 rounded-full mb-6">
                {isPrivacy ? <Shield size={14} className="text-green-500" /> : <Lock size={14} className="text-red-500" />}
                <span className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Legal Framework
                </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{title}</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">{subTitle}</p>
        </div>

        {/* Document Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative shadow-2xl">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-8 mb-8 gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                        <FileText className="text-gold-500" size={20}/>
                    </div>
                    <div>
                        <div className="text-white font-bold uppercase tracking-widest text-xs">Document Ref</div>
                        <div className="text-slate-500 text-[10px] font-mono">PZ-LEGAL-{isPrivacy ? '001' : '002'}-V4</div>
                    </div>
                </div>
                
                {archived && (
                    <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest animate-pulse">
                        <Server size={14}/> Archived to Secure Backend
                    </div>
                )}

                <button 
                    onClick={handleDownload}
                    disabled={downloading}
                    className="bg-gold-600 hover:bg-gold-500 text-slate-900 px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition disabled:opacity-50 shadow-lg w-full md:w-auto justify-center"
                >
                    {downloading ? (
                        <>
                            <Database size={14} className="animate-bounce"/> Encrypting & Saving...
                        </>
                    ) : (
                        <>
                            Download PDF <Download size={14}/>
                        </>
                    )} 
                </button>
            </div>

            {/* Content Area */}
            <div className="prose prose-invert prose-slate max-w-none">
                {isPrivacy ? (
                    <>
                        <h3>1. Data Sovereignty</h3>
                        <p>We treat your strategic data as classified intelligence. All client dossiers, campaign metrics, and Dark DNA profiles are stored in isolated, AES-256 encrypted environments.</p>
                        
                        <h3>2. The "No-Sell" Guarantee</h3>
                        <p>ProZenius Media creates assets; we do not trade commodities. Your customer lists, leads, and proprietary data are never sold, shared, or exposed to third-party aggregators.</p>

                        <h3>3. Surveillance & Tracking</h3>
                        <p>Our analytics tools (The War Room Dashboard) utilize first-party cookies solely for performance optimization. We reject intrusive third-party surveillance capitalism.</p>
                        
                        <div className="bg-green-900/10 border border-green-900/30 p-4 rounded-lg flex gap-4 my-8">
                            <CheckCircle className="text-green-500 flex-shrink-0"/>
                            <div className="text-sm text-green-200">
                                <strong>Compliance Verified:</strong> This protocol adheres to GDPR, CCPA, and Indian Digital Data Protection Act standards.
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h3>1. Scope of Operations</h3>
                        <p>ProZenius Media is engaged to execute high-impact brand engineering. "Standard" results are considered a failure state. We operate under the mandate of market dominance.</p>

                        <h3>2. Financial Protocols</h3>
                        <p>Deployment requires 100% advance for "Ignition" and "Velocity" tiers. "MarketApex" engagements operate on a 50/50 split. Late payments result in immediate suspension of campaign assets.</p>

                        <h3>3. Intellectual Property</h3>
                        <p>Upon final settlement, all generated assets (Films, Graphics, Scripts) become the sole property of the Client. ProZenius retains the right to showcase works in our classified case study archives unless a specific NDA is triggered.</p>

                        <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg flex gap-4 my-8">
                            <AlertTriangle className="text-red-500 flex-shrink-0"/>
                            <div className="text-sm text-red-200">
                                <strong>Termination Clause:</strong> Breach of payment terms or strategic interference triggers an immediate "Kill Switch" on all live digital assets.
                            </div>
                        </div>
                    </>
                )}
                
                <p className="text-center text-xs text-slate-500 mt-12 pt-12 border-t border-slate-800">
                    This document is digitally signed and binding upon access. <br/>
                    System Timestamp: {new Date().toLocaleString()}
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Legal;