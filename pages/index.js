import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#0a1220] text-white font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4 bg-[#070d1a] border-b border-gray-800 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-b-[26px] border-l-transparent border-r-transparent border-b-[#3b82f6] shadow-[0_0_15px_#3b82f6]"></div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {/* HERO */}
      <div className="px-6 pt-12 pb-10 text-center bg-gradient-to-b from-[#12244a] to-[#0a1220]">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#152040] border border-[#1e3a5f] text-sm mb-8">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></span>
          <span className="text-blue-300 font-medium text-[13px]">Live & automated 24/7</span>
        </div>

        <h1 className="text-[32px] leading-[1.15] font-extrabold mb-5">
          Automated <span className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">Free Fire Diamond</span><br/>
          Top-Up API for Resellers
        </h1>

        <p className="text-[#94a3b8] text-[15px] leading-6 mb-9 max-w-[360px] mx-auto">
          Plug into Topup Bot's API and deliver Free Fire diamond top-ups to your customers instantly — fully automated fulfillment, real-time webhooks, and a merchant dashboard to track every order.
        </p>

        <div className="flex flex-col gap-3 max-w-[360px] mx-auto">
          <a href="#pricing" className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#3b82f6] to-[#6366f1] font-bold text-white text-[16px] shadow-[0_8px_20px_rgba(59,130,246,0.4)]">
            Get API Access →
          </a>
          <a href="#docs" className="w-full py-4 rounded-2xl bg-[#111d33] border border-[#1e293b] font-semibold text-white text-[16px]">
            Read the Docs
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-10 max-w-[360px] mx-auto">
          <div className="bg-[#111d33] border border-[#1e293b] rounded-2xl p-5 text-center">
            <div className="text-[22px] font-extrabold">24/7</div>
            <div className="text-[10px] text-[#64748b] font-bold tracking-widest mt-1.5">AUTOMATED FULFILLMENT</div>
          </div>
          <div className="bg-[#111d33] border border-[#1e293b] rounded-2xl p-5 text-center">
            <div className="text-[22px] font-extrabold">&lt;60s</div>
            <div className="text-[10px] text-[#64748b] font-bold tracking-widest mt-1.5">AVG. ORDER DELIVERY</div>
          </div>
          <div className="bg-[#111d33] border border-[#1e293b] rounded-2xl p-5 text-center">
            <div className="text-[22px] font-extrabold">100%</div>
            <div className="text-[10px] text-[#64748b] font-bold tracking-widest mt-1.5 leading-3">WEBHOOK DELIVERY<br/>RETRIES</div>
          </div>
          <div className="bg-[#111d33] border border-[#1e293b] rounded-2xl p-5 text-center">
            <div className="text-[22px] font-extrabold">256-bit</div>
            <div className="text-[10px] text-[#64748b] font-bold tracking-widest mt-1.5">CREDENTIAL ENCRYPTION</div>
          </div>
        </div>
      </div>

      <a href="https://t.me/" target="_blank" className="fixed bottom-5 right-5 w-14 h-14 bg-[#229ED9] rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-30">
        <svg className="w-7 h-7 text-white ml-[-2px]" fill="currentColor" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.32 7.68-6.95c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
      </a>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 p-4">
          <div className="bg-[#0f1a2e] border border-gray-800 rounded-2xl p-6 mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">Menu</h2>
              <button onClick={() => setMenuOpen(false)} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">✕</button>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/" className="py-3.5 px-4 bg-[#1a2744] rounded-xl text-center font-semibold">Home</a>
              <a href="#pricing" className="py-3.5 px-4 bg-[#1a2744] rounded-xl text-center font-semibold">Pricing</a>
              <a href="#docs" className="py-3.5 px-4 bg-[#1a2744] rounded-xl text-center font-semibold">Docs</a>
              <p className="text-center text-[11px] text-gray-500 mt-2">Admin is hidden 🔒</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
