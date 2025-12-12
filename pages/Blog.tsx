import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-4 font-noto text-slate-900">Insights</h1>
            <p className="text-xl text-slate-600">Disruptive thoughts on AI, Cinema, and Indian Markets.</p>
        </div>

        <div className="grid gap-12 max-w-4xl mx-auto">
            {[
                { 
                    title: "Why 99% Brands Miss India's $10B Influencer Goldmine", 
                    date: "Oct 12, 2024", 
                    excerpt: "The Assamese market is currently generating higher ROI than Mumbai's saturated sectors. Here is the data...",
                    tag: "Market Intelligence"
                },
                { 
                    title: "AI vs Human: The 200x Screenplay War", 
                    date: "Oct 08, 2024", 
                    excerpt: "We pitted Gemini 1.5 Pro against a team of 10 Bollywood writers. The results were terrifyingly profitable.",
                    tag: "AI Tech"
                },
                { 
                    title: "Automobile Marketing is Dead. Long Live 'Cinema-Ads'.", 
                    date: "Sep 28, 2024", 
                    excerpt: "Static banners don't sell SUVs. Emotional, cinematic storytelling with 40 beats per minute does.",
                    tag: "Sector Deep Dive"
                },
            ].map((post, i) => (
                <article key={i} className="flex flex-col md:flex-row gap-8 items-start border-b border-slate-100 pb-12 hover:bg-slate-50 transition p-6 rounded-2xl cursor-pointer group">
                    <div className="w-full md:w-64 h-48 bg-slate-200 rounded-xl overflow-hidden flex-shrink-0">
                         <img src={`https://picsum.photos/seed/${i+10}/800/600`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Blog Thumb" />
                    </div>
                    <div>
                        <div className="flex items-center gap-4 mb-3 text-sm">
                            <span className="font-bold text-gold-600">{post.tag}</span>
                            <span className="text-slate-400">{post.date}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-3 text-slate-900 group-hover:text-gold-600 transition">{post.title}</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">{post.excerpt}</p>
                        <span className="text-slate-900 font-bold underline decoration-gold-500 decoration-2 underline-offset-4 group-hover:decoration-gold-600">Read Article</span>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;