import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#080f1f] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#070d1a]/90 backdrop-blur sticky top-0 z-50 border-b border-[#132040]">
        <div className="flex items-center gap-3">
          <img src="https://i.ibb.co/0jZ3QYp/diamond.png" className="w-10 h-10 hidden" alt=""/>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rotate-45 rounded-sm shadow-[0_0_15px_#3b82f6]"></div>
          <span className="font-black leading-none text-[18px]">ULTRA TOP UP<br/>BD API</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <a href="#features">Features</a><span>•</span><a href="#pricing">Pricing</a><span>•</span><a href="#docs">Docs</a><span>•</span><a>Status</a><span>•</span><a>Log In</a>
          <div className="ml-4 px-3 py-1 rounded-full border border-green-800 bg-[#0e2418] text-[11px] text-green-300 flex items-center gap-1.5"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Live & automated<br/>24/7</div>
        </div>
        <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-20 pt-10 md:pt-20 pb-12 bg-gradient-to-br from-[#0f2040] via-[#0a1220] to-[#080f1f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="relative z-10 text-center md:text-left max-w-7xl mx-auto">
          <div className="inline-flex md:hidden items-center gap-2 px-4 py-1.5 rounded-full bg-[#152040] border border-[#1e3a5f] text-[13px] text-blue-300 mb-6"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Live & automated 24/7</div>
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#152040] border border-[#1e3a5f] text-[13px] text-blue-300 mb-6">💎 Free Fire • Automated Top-Up API</div>
          
          <h1 className="text-[32px] md:text-[52px] font-extrabold leading-[1.1]">Automated <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Free Fire Diamond</span><br/>Top-Up API for Resellers</h1>
          <p className="text-[#94a3b8] mt-5 md:max-w-[620px] text-[15px] md:text-[17px] leading-6 mx-auto md:mx-0">Plug into Topup Bot's API and deliver Free Fire diamond top-ups to your customers instantly — fully automated fulfillment, real-time webhooks, and a merchant dashboard to track every order.<br/><span className="hidden md:block mt-4 text-[13px]">No credit card required • API key in minutes • Developer friendly</span></p>
          
          <div className="flex flex-col md:flex-row gap-3 mt-8 max-w-[360px] md:max-w-none mx-auto md:mx-0">
            <a href="#pricing" className="px-8 py-4 rounded-xl md:rounded-lg bg-[#3b82f6] font-bold text-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">⚡ Get API Access →</a>
            <a href="#docs" className="px-8 py-4 rounded-xl md:rounded-lg bg-[#111d33] border border-[#1e293b] font-semibold text-center">Read the Docs</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-[360px] md:max-w-[800px] mx-auto md:mx-0">
            {[
              {k:'24/7', v:'Automated Fulfillment', d:'Uptime'},
              {k:'<60s', v:'Avg. Order Delivery', d:'Avg Delivery'},
              {k:'100%', v:'Webhook Delivery Retries', d:'Success Rate'},
              {k:'256-bit', v:'Credential Encryption', d:'Encryption'},
            ].map((i,idx)=>(
              <div key={idx} className="bg-[#0f1c33]/80 border border-[#1e293b] rounded-2xl p-5 text-center">
                <div className="hidden md:block text-blue-400 mb-2">{['🕒','⚡','🛡️','🔒'][idx]}</div>
                <div className="text-[24px] font-extrabold">{i.k}</div>
                <div className="text-[10px] md:text-[12px] text-[#64748b] font-bold tracking-widest mt-1">{i.v.includes('Webhook') ? <><span className="md:hidden">WEBHOOK DELIVERY<br/>RETRIES</span><span className="hidden md:block">{i.d}</span></> : <span className="md:hidden">{i.v.toUpperCase()}</span>}{<span className="hidden md:block">{i.d}</span>}</div>
              </div>
            ))}
          </div>
          <p className="hidden md:block text-center md:text-left text-[12px] text-gray-500 mt-8">Trusted by 1000+ resellers across Bangladesh • RESTful API • Webhooks • Support on Telegram</p>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section id="features" className="px-6 md:px-20 py-14 bg-[#070d1a]">
        <h2 className="text-center text-[24px] md:text-[36px] font-extrabold">Everything you need to run a top-up business</h2>
        <p className="text-center text-gray-400 mt-2 text-[14px]">One API key, one integration — Topup Bot handles the automation, monitoring, and delivery.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-10 max-w-6xl mx-auto">
          {[
            {t:'Automated Diamond Delivery', d:'Orders are fulfilled automatically through real-time browser automation against Garena\'s official store — no manual work on your end.'},
            {t:'Per-Merchant API Key & Wallet', d:'Every merchant gets a dedicated API key and prepaid credit wallet. Top up your balance, and it\'s deducted automatically per order.'},
            {t:'Real-Time Webhooks', d:'Get instantly notified when an order completes or fails via signed HTTP webhooks, with automatic retries up to 5 times.'},
            {t:'Voucher Auto-Restock', d:'Redeem UniPin voucher codes into your balance automatically, with auto-restock when your balance drops below a set threshold.'},
            {t:'Merchant Dashboard', d:'Track balance, order history, and delivery status in a live dashboard — no need to poll the API for everything.'},
            {t:'Telegram Alerts', d:'Connect your Telegram to receive order alerts, low-balance warnings, and nightly summary reports in real time.'},
          ].map((f,i)=>(
            <div key={i} className="bg-[#0f1c33] border border-[#1e293b] rounded-2xl p-6"><div className="w-10 h-10 bg-[#162a4d] rounded-xl mb-4"></div><h3 className="font-bold text-[16px]">{f.t}</h3><p className="text-[13px] text-gray-400 mt-2 leading-5">{f.d}</p></div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-20 py-14 bg-[#0a1220] text-center">
        <h2 className="text-[24px] md:text-[32px] font-extrabold">How it works</h2>
        <p className="text-gray-400 text-[14px] mt-2">From signup to your first automated order in four steps.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto text-left">
          {[
            {n:'01', t:'Create your account', d:'Sign up and verify your reseller profile.'},
            {n:'02', t:'Get API key & add balance', d:'Generate your merchant API key and top up your wallet.'},
            {n:'03', t:'Integrate the API', d:'Call /api/v1/topup from your site or bot — orders are delivered automatically.'},
            {n:'04', t:'Go live & earn', d:'Start taking orders from your customers and track everything in the dashboard.'},
          ].map(s=>(
            <div key={s.n} className="bg-[#111d33] border border-gray-800 rounded-xl p-5"><div className="text-blue-400 font-black text-[20px]">{s.n}</div><h4 className="font-bold mt-2 text-[14px]">{s.t}</h4><p className="text-[12px] text-gray-500 mt-1">{s.d}</p></div>
          ))}
        </div>
      </section>

      {/* CODE */}
      <section id="docs" className="px-6 md:px-20 py-14 bg-[#070d1a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div><h2 className="text-[24px] font-extrabold">A few lines of code</h2><p className="text-gray-400 text-[14px] mt-2">REST API, JSON in and out, signed webhooks for delivery confirmation.</p><div className="mt-6 flex gap-3"><a className="px-5 py-2.5 bg-blue-600 rounded-lg text-sm font-bold">API Docs</a><a className="px-5 py-2.5 bg-[#111d33] border border-gray-700 rounded-lg text-sm">Get API Key</a></div></div>
          <pre className="bg-[#0f1c33] border border-[#1e293b] rounded-xl p-5 text-[12px] leading-5 overflow-x-auto">{`// Place a top-up order
curl -X POST https://ultra-top-up-bd-api.vercel.app/api/v1/topup \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "uid": "12345678",
    "package": "100_diamond",
    "orderId": "ORDER_123"
  }'

// Webhook callback
{
  "orderId": "ORDER_123",
  "status": "completed",
  "uid": "12345678"
}`}</pre>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-20 py-10 bg-[#050a14] border-t border-[#132040] text-center text-[12px] text-gray-500">
        <p>© 2026 ULTRA TOP UP BD API • Trusted by 1000+ resellers • Support on Telegram</p>
        <p className="mt-2 text-[10px]">Admin hidden 🔒 Access via secret link only</p>
      </footer>

      <a href="https://t.me/" className="fixed bottom-5 right-5 w-14 h-14 bg-[#229ED9] rounded-full flex items-center justify-center z-30">✈️</a>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 p-4 md:hidden"><div className="bg-[#0f1a2e] rounded-2xl p-6 mt-16"><div className="flex justify-between mb-6"><h2 className="font-bold">Menu</h2><button onClick={()=>setMenuOpen(false)} className="w-8 h-8 bg-gray-800 rounded-full">✕</button></div><div className="flex flex-col gap-3"><a href="#features" className="py-3 px-4 bg-[#1a2744] rounded-xl text-center">Features</a><a href="#pricing" className="py-3 px-4 bg-[#1a2744] rounded-xl text-center">Pricing</a><a href="#docs" className="py-3 px-4 bg-[#1a2744] rounded-xl text-center">Docs</a></div></div></div>
      )}
    </div>
  )
        }
