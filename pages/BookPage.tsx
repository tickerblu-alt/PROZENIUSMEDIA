import React, { useState } from 'react';
import { CheckCircle, Book, CreditCard, X, Check, Fingerprint, Bookmark, Gift, Clock, Shield } from 'lucide-react';

const BookPage: React.FC = () => {
  const [showBookModal, setShowBookModal] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const BOOK_PRICE = 2499;
  const DISCOUNT_CODE_VAL = 'DARKDNA20';
  const DISCOUNT_PERCENT = 0.20;

  const handleApplyDiscount = () => {
      if (discountCode.toUpperCase() === DISCOUNT_CODE_VAL) {
          setIsDiscountApplied(true);
      } else {
          alert('Invalid Code');
      }
  };

  const handleBookPayment = () => {
      setPaymentProcessing(true);
      const finalPrice = isDiscountApplied ? Math.round(BOOK_PRICE * (1 - DISCOUNT_PERCENT)) : BOOK_PRICE;
      
      // Simulate Razorpay/Payment Gateway
      setTimeout(() => {
          alert(`GATEWAY SIMULATION:\nProcessing payment of ₹${finalPrice}...\n\n(In production, Razorpay opens here)\n\nPayment Successful! Your signed copy is reserved.`);
          setPaymentProcessing(false);
          setShowBookModal(false);
      }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0500] font-sans text-slate-200 selection:bg-gold-500 selection:text-black pt-24">
      
      {/* 2. PRE-ORDER SUCCESS DEEP DIVE SECTION */}
      <section id="preorder-success" className="py-20 relative overflow-hidden bg-[#0a0500]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30"></div>
        {/* Red Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none"></div>
        {/* Gold Glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-24">
                <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block animate-fade-in">The Blueprint for Billion-Dollar Brands</span>
                <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
                    PRE-ORDER YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gold-500 to-red-600 italic">SUCCESS</span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-gold-600 to-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Left: The Book Visual */}
                <div className="relative group perspective-1000 flex justify-center">
                    <div className="relative w-[350px] h-[550px] md:w-[450px] md:h-[650px] bg-[#050505] rounded-r-2xl shadow-[50px_50px_100px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,0,0,0.8)] border-r-8 border-slate-800 transform transition-transform duration-700 group-hover:rotate-y-[-15deg] group-hover:scale-105 z-20 flex flex-col items-center justify-between p-12 border-t border-b border-gold-900/30">
                        {/* Texture overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mix-blend-overlay rounded-r-2xl pointer-events-none"></div>
                        
                        <div className="text-center w-full relative z-10">
                            <p className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-12 font-bold">Confidential Strategy Manual</p>
                            <h1 className="text-6xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-400 to-red-700 font-black leading-[0.9] mb-4 drop-shadow-lg">
                                DARK <br/> DNA
                            </h1>
                            <h3 className="text-2xl font-light text-slate-400 tracking-[0.3em] uppercase mb-12">Of A Brand</h3>
                            
                            <div className="w-32 h-32 mx-auto border-2 border-red-900/50 rounded-full flex items-center justify-center relative mb-12 group-hover:border-gold-500/50 transition-colors duration-500">
                                <div className="absolute inset-0 border border-gold-500/10 rounded-full animate-ping"></div>
                                <Fingerprint size={64} className="text-red-600 group-hover:text-gold-500 transition-colors duration-500"/>
                            </div>
                        </div>

                        <div className="text-center w-full border-t border-slate-800 pt-8 relative z-10">
                            <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-2">Authored By</p>
                            <p className="text-white font-serif italic text-2xl">Hemant Nilim Das</p>
                        </div>
                    </div>
                    {/* Shadow */}
                    <div className="absolute -bottom-16 w-full h-20 bg-black/60 blur-3xl rounded-[100%]"></div>
                </div>

                {/* Right: The Content */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-3xl font-serif text-white mb-6">Decode The <span className="text-gold-500 italic">Invisible Architecture</span></h3>
                        <p className="text-slate-400 text-lg leading-relaxed font-light">
                            Most brands fail because they focus on 'Product'. The top 1% focus on 'Psychology'. <br/><br/>
                            Hemant Nilim Das breaks down the <strong className="text-white">7 Dark DNA Triggers</strong> that bypass logic and force consumer loyalty. This is not theory; it is the exact operating manual used to scale 75+ Indian brands from obscurity to category dominance.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { title: "Chapter 1: The Death of 'Quality'", desc: "Why having the best product is the fastest way to bankruptcy." },
                            { title: "Chapter 3: Weaponizing Empathy", desc: "How to use your customer's deepest insecurities to build trust." },
                            { title: "Chapter 5: The Status Engine", desc: "Engineering social gap anxiety to drive premium pricing." },
                            { title: "Chapter 7: The Kill Switch", desc: "The psychological closing sequence that makes 'No' impossible." }
                        ].map((chapter, i) => (
                            <div key={i} className="flex gap-6 group cursor-pointer hover:bg-slate-900/50 p-4 rounded-xl transition duration-300 border border-transparent hover:border-slate-800">
                                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 text-gold-500 font-serif font-bold text-xl group-hover:bg-gold-600 group-hover:text-black transition-colors">
                                    {i+1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">{chapter.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{chapter.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-red-950/30 to-slate-900 border border-red-900/50 p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <Gift size={64} className="text-red-500"/>
                        </div>
                        <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <Bookmark size={14}/> Pre-Order Exclusive Bonus
                        </h4>
                        <p className="text-white text-lg font-serif italic mb-2">"The Dark DNA Audio Guide"</p>
                        <p className="text-slate-400 text-sm mb-6">
                            Get the 4-hour audio commentary and implementation workshop (Worth ₹5,000) absolutely free when you reserve your First Edition copy today.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Clock size={12}/> Offer expires in 24 hours.
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <button 
                            onClick={() => setShowBookModal(true)}
                            className="bg-gold-600 hover:bg-gold-500 text-black font-black px-10 py-5 rounded-lg shadow-[0_0_40px_rgba(234,179,8,0.4)] transition transform hover:-translate-y-1 uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                        >
                            <Book size={18} /> Secure Signed Copy - ₹2,499
                        </button>
                        <p className="text-slate-500 text-xs max-w-xs flex items-center">
                            *Limited First Edition Hardcovers available. Shipping globally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* BOOK MODAL */}
      {showBookModal && (
          <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-gold-600/30 w-full max-w-md rounded-2xl relative shadow-2xl overflow-hidden animate-fade-in-up">
                  {/* Close Button */}
                  <button onClick={() => setShowBookModal(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition">
                      <X size={24} />
                  </button>

                  <div className="p-8">
                      <div className="text-center mb-6">
                          <h3 className="text-2xl font-serif text-white mb-1">Secure Pre-Order</h3>
                          <p className="text-gold-500 text-xs uppercase tracking-widest">Dark DNA of a Brand • Hardcover</p>
                      </div>

                      <div className="bg-black/50 p-4 rounded-lg border border-slate-800 mb-6 flex gap-4 items-center">
                          <div className="w-16 h-20 bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                              <Book size={24} className="text-slate-600"/>
                          </div>
                          <div>
                              <div className="text-white font-bold text-sm">Signed First Edition</div>
                              <div className="text-slate-400 text-xs mb-1">Includes Digital Bonus Pack</div>
                              <div className="text-gold-400 font-mono font-bold">₹2,499</div>
                          </div>
                      </div>

                      {/* Discount Section */}
                      <div className="mb-6">
                          <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Discount Code</label>
                          <div className="flex gap-2">
                              <input 
                                type="text" 
                                className="bg-slate-950 border border-slate-700 text-white px-4 py-2 rounded-lg w-full focus:border-gold-500 outline-none uppercase font-mono text-sm"
                                placeholder="ENTER CODE"
                                value={discountCode}
                                onChange={(e) => setDiscountCode(e.target.value)}
                                disabled={isDiscountApplied}
                              />
                              <button 
                                onClick={handleApplyDiscount}
                                disabled={isDiscountApplied}
                                className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition ${isDiscountApplied ? 'bg-green-600 text-white cursor-default' : 'bg-slate-800 text-slate-300 hover:bg-gold-600 hover:text-black'}`}
                              >
                                  {isDiscountApplied ? 'Applied' : 'Apply'}
                              </button>
                          </div>
                          {isDiscountApplied && <p className="text-green-500 text-xs mt-2 flex items-center gap-1"><Check size={12}/> 20% Discount Applied! New Price: ₹{Math.round(2499 * 0.8)}</p>}
                          <p className="text-[10px] text-slate-600 mt-2">Try code: <span className="text-slate-400 font-mono">DARKDNA20</span></p>
                      </div>

                      <div className="border-t border-slate-800 pt-6">
                          <div className="flex justify-between items-center mb-6">
                              <span className="text-slate-400 text-sm">Total Payable</span>
                              <span className="text-white font-bold text-2xl">₹{isDiscountApplied ? Math.round(2499 * 0.8) : 2499}</span>
                          </div>
                          <button 
                            onClick={handleBookPayment}
                            disabled={paymentProcessing}
                            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-lg shadow-lg uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition"
                          >
                              {paymentProcessing ? 'Processing...' : <><CreditCard size={16}/> Pay & Reserve</>}
                          </button>
                          <div className="flex justify-center gap-4 mt-4 opacity-50">
                              <div className="h-2 w-8 bg-slate-600 rounded"></div>
                              <div className="h-2 w-8 bg-slate-600 rounded"></div>
                              <div className="h-2 w-8 bg-slate-600 rounded"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default BookPage;