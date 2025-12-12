import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, Play, CheckSquare, ArrowLeft } from 'lucide-react';

const FrameworkDetail: React.FC = () => {
  const { frameworkId } = useParams();

  // In a real app, fetch data based on ID.
  const title = frameworkId?.replace(/-/g, ' ').toUpperCase() || "FRAMEWORK DETAIL";

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/insights" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 font-bold">
            <ArrowLeft size={16}/> Back to Hub
        </Link>
        
        <div className="mb-12">
            <span className="bg-slate-900 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block">ProZenius Framework</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
                A comprehensive deep dive into this proprietary methodology. Learn how to implement it step-by-step.
            </p>
        </div>

        {/* Fake Video Player */}
        <div className="bg-slate-900 aspect-video rounded-2xl flex items-center justify-center mb-12 shadow-2xl group cursor-pointer">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 group-hover:scale-110 transition">
                <Play fill="white" className="text-white w-12 h-12 ml-1"/>
            </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-slate-700 mb-16">
            <h3>Executive Summary</h3>
            <p>
                This framework leverages Dark DNA Marketing principles to exploit psychological biases in your target market. 
                By realigning your value proposition with deep-seated consumer fears and desires, you can achieve exponential growth without proportional ad spend.
            </p>
            <h3>Implementation Steps</h3>
            <ol>
                <li><strong>Audit Current Position:</strong> Use the DPM tools to scan for existing gaps.</li>
                <li><strong>Inject the Hook:</strong> deploy the specific psychological trigger identified in this module.</li>
                <li><strong>Scale the Response:</strong> Automate the intake using the ProZenius digital stack.</li>
            </ol>
            <p>
                <em>(This is a placeholder for the 2000-word deep dive content. In the full version, this section contains detailed case studies, data charts, and specific execution scripts.)</em>
            </p>
        </div>

        {/* Downloadable Assets */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-6">Included Assets</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <FileText className="text-red-500"/>
                    <div className="flex-grow font-bold">Implementation PDF Guide</div>
                    <button className="text-sm bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded font-bold">Download</button>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <CheckSquare className="text-blue-500"/>
                    <div className="flex-grow font-bold">Execution Checklist</div>
                    <button className="text-sm bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded font-bold">Download</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default FrameworkDetail;