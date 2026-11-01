import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#080f1f] text-white">
      {/* NAV */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-[#070d1a] border-b border-[#132040] sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rotate-45 rounded-sm shadow-[0_0_15px_#3b82f6]"></div>
          <span className="font-black text-[16px] leading-none">ULTRA TOP UP<br/>BD API</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#features" className="text-[14px] text-gray-400 hover:text-white">Features</a>
          <a href="#pricing" className="text-[14px] text-gray-400 hover:text-white">Pricing</a>
          <a href="#docs" className="text-[14px] text-gray-400 hover:text-white">Docs</a>
          <a href="#" className="text-[14px] text-gray-400">Status</a>
          
          <a href="/login" className="ml-4 px-5 py-2 rounded-lg border border-[#1e3a5f] bg-[#0f1c33] text-[13px] font-bold">Log In</a>
          <a href="/signup" className="px-5 py-2 rounded-lg bg-white text-black text-[13px] font-bold">Sign Up</a>
          <a href="/mdr-secret-786" className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-[13px] font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">API Access</a>
          
          <div className="ml-2 px-3 py-1 rounded-full border border-green-900 bg-[#0e2418] text-[10px] text-green-300 flex items-center gap-1.5"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Live 24/7</div>
        </div>

        <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-20 py-12 md:py-20 bg-gradient-to-br from-[#0f2040] to-[#080f1f] text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#152040] border border-[#1e3a5f] text-[13px] text-blue-300 mb-6"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Live & automated 24/7</div>
        <h1 className="text-[32px] md:text-[52px] font-extrabold leading-[1.1]">Automated <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Free Fire Diamond</span><br/>Top-Up API for Resellers</h1>
        <p className="text-[#94a3b8] mt-4 max-w-[600px] mx-auto md:mx-0">Plug into Topup Bot's API and deliver Free Fire diamond top-ups instantly — fully automated fulfillment, real-time webhooks, and a merchant dashboard.</p>
        
        <div className="flex flex-col md:flex-row gap-3 mt-8 max-w-[360px] md:max-w-none mx-auto md:mx-0">
          <a href="/signup" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-bold text-center">🚀 Sign Up Free →</a>
          <a href="/login" className="px-8 py-4 rounded-xl bg-[#111d33] border border-gray-700 font-bold text-center">🔑 Log In</a>
          <a href="#docs" className="px-8 py-4 rounded-xl bg-transparent border border-gray-700 font-bold text-center">📚 Read the Docs</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-[800px] mx-auto md:mx-0">
          <div className="bg-[#111d33] border border-[#1e293b] rounded-2xl p-5 text-center"><div className="text-[24px] font-black">24/7</div><div className="text-[10px] text-gray-500 font-bold mt-1">AUTOMATED</div></div>
          <div className="bg-[#111d33] border border-[#1e293b] rounded-2xl p-5 text-center"><div className="text-[24px] font-black">&lt;60s</div><div className="text-[10px] text-gray-500 font-bold mt-1">AVG DELIVERY</div></div>
          <div className="bg-[#111d33] border border-[#1e293b] rounded-2xl p-5 text-center"><div className="text-[24px] font-black">100%</div><div className="text-[10px] text-gray-500 font-bold mt-1">WEBHOOK RETRIES</div></div>
          <div className="bg-[#111d33] border border-[#1e293b] rounded-2xl p-5 text-center"><div className="text-[24px] font-black">256-bit</div><div className="text-[10px] text-gray-500 font-bold mt-1">ENCRYPTION</div></div>
        </div>
      </section>

      {/* BUTTON SECTION EXTRA */}
      <section id="pricing" className="px-6 md:px-20 py-10 bg-[#070d1a] border-y border-[#132040]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          <a href="/login" className="px-6 py-3 rounded-full bg-[#1e293b] border border-blue-800 text-[13px] font-bold">🔵 Log In</a>
          <a href="/signup" className="px-6 py-3 rounded-full bg-blue-600 text-[13px] font-bold">📝 Sign Up</a>
          <a href="/mdr-secret-786" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-[13px] font-bold">⚡ API Access</a>
          <a href="#docs" className="px-6 py-3 rounded-full bg-[#111d33] border border-gray-700 text-[13px] font-bold">API Docs</a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 md:px-20 py-14">
        <h2 className="text-center text-[26px] font-extrabold">Everything you need to run a top-up business</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-10 max-w-6xl mx-auto">
          {['Automated Diamond Delivery','Per-Merchant API Key & Wallet','Real-Time Webhooks','Voucher Auto-Restock','Merchant Dashboard','Telegram Alerts'].map(t=>(
            <div key={t} className="bg-[#0f1c33] border border-[#1e293b] rounded-2xl p-6"><h3 className="font-bold">{t}</h3><p className="text-[13px] text-gray-400 mt-2">Topup Bot handles the automation, monitoring, and delivery for you.</p></div>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-[11px] text-gray-600 border-t border-[#132040]">© 2026 ULTRA TOP UP BD API • Login • Signup • API Access • All Buttons Added</footer>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 p-4 md:hidden">
          <div className="bg-[#0f1a2e] border border-gray-800 rounded-2xl p-6">
            <div className="flex justify-between mb-6"><h2 className="font-bold">Menu</h2><button onClick={()=>setMenuOpen(false)} className="w-8 h-8 bg-gray-800 rounded-full">✕</button></div>
            <div className="flex flex-col gap-3">
              <a href="/login" className="py-3.5 px-4 bg-[#1e3a5f] rounded-xl text-center font-bold">🔵 Log In</a>
              <a href="/signup" className="py-3.5 px-4 bg-blue-600 rounded-xl text-center font-bold">📝 Sign Up</a>
              <a href="/mdr-secret-786" className="py-3.5 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-center font-bold">⚡ API Access</a>
              <a href="#features" className="py-3.5 px-4 bg-[#1a2744] rounded-xl text-center">Features</a>
              <a href="#pricing" className="py-3.5 px-4 bg-[#1a2744] rounded-xl text-center">Pricing</a>
              <a href="#docs" className="py-3.5 px-4 bg-[#1a2744] rounded-xl text-center">Docs</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
        }
