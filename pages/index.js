export default function Home(){
return(
<>
<style>{`
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif}
body{background:#070e1f}
.nav{position:sticky;top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:#070d1a;border-bottom:1px solid #132040}
.logo{width:32px;height:32px;background:linear-gradient(135deg,#60a5fa,#3b82f6);transform:rotate(45deg);border-radius:4px;box-shadow:0 0 15px #3b82f6}
.hero{padding:40px 20px 30px;text-align:center;background:radial-gradient(ellipse at top,#12244a 0%,#0a1220 60%)}
.badge{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:#152040;border:1px solid #1e3a5f;color:#93c5fd;font-size:13px;font-weight:600}
.dot{width:8px;height:8px;background:#4ade80;border-radius:50%;box-shadow:0 0 8px #4ade80;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
.h1{font-size:32px;font-weight:900;line-height:1.1;margin-top:20px;color:white}
.blue{ background:linear-gradient(90deg,#60a5fa,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.p{color:#94a3b8;font-size:15px;line-height:1.6;margin:16px auto 0;max-width:360px}
.btns{display:flex;flex-direction:column;gap:12px;margin:28px auto 0;max-width:360px}
.btn1{padding:16px;border-radius:16px;background:linear-gradient(90deg,#3b82f6,#6366f1);color:white;font-weight:800;text-align:center;text-decoration:none;box-shadow:0 8px 20px rgba(59,130,246,.4)}
.btn2{padding:16px;border-radius:16px;background:#111d33;border:1px solid #1e293b;color:white;font-weight:700;text-align:center;text-decoration:none}
.grid{grid-template-columns:1fr 1fr;display:grid;gap:12px;margin:30px auto 0;max-width:360px}
.card{background:#111d33;border:1px solid #1e293b;border-radius:20px;padding:20px;text-align:center}
.k{font-size:22px;font-weight:900;color:white}
.v{font-size:10px;font-weight:800;color:#64748b;letter-spacing:.1em;margin-top:6px}
.menuBtn{font-size:28px;background:none;border:none;color:white}
.mobile{position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:200;padding:16px;display:none}
.mobile.open{display:block}
.box{background:#0f1a2e;border:1px solid #1e293b;border-radius:20px;padding:24px;margin-top:60px}
.mbtn{display:block;padding:14px;border-radius:12px;text-align:center;font-weight:700;text-decoration:none;margin-top:10px}
.tele{position:fixed;bottom:20px;right:20px;width:56px;height:56px;background:#229ED9;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;text-decoration:none;box-shadow:0 4px 15px rgba(0,0,0,.3);z-index:50}
`}</style>

<div>
  <nav className="nav">
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <div className="logo"></div>
      <span style={{fontWeight:900,lineHeight:1.1,color:'white'}}>ULTRA TOP UP<br/>BD API</span>
    </div>
    <button onClick={()=>document.getElementById('m').classList.add('open')} className="menuBtn">☰</button>
  </nav>

  <div className="hero">
    <div className="badge"><span className="dot"></span>Live & automated 24/7</div>
    <h1 className="h1">Automated <span className="blue">Free Fire Diamond</span><br/>Top-Up API for Resellers</h1>
    <p className="p">Plug into Topup Bot's API and deliver Free Fire diamond top-ups to your customers instantly — fully automated fulfillment, real-time webhooks, and a merchant dashboard to track every order.</p>
    
    <div className="btns">
      <a href="/signup" className="btn1">Get API Access →</a>
      <a href="/login" className="btn2">Read the Docs</a>
    </div>

    <div className="grid">
      <div className="card"><div className="k">24/7</div><div className="v">AUTOMATED FULFILLMENT</div></div>
      <div className="card"><div className="k">&lt;60s</div><div className="v">AVG. ORDER DELIVERY</div></div>
      <div className="card"><div className="k">100%</div><div className="v">WEBHOOK DELIVERY<br/>RETRIES</div></div>
      <div className="card"><div className="k">256-bit</div><div className="v">CREDENTIAL ENCRYPTION</div></div>
    </div>
  </div>

  <a href="https://t.me/" className="tele">✈</a>

  <div id="m" className="mobile" onClick={(e)=>{if(e.target.id==='m')e.currentTarget.classList.remove('open')}}>
    <div className="box">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}>
        <b style={{color:'white'}}>Menu</b>
        <button onClick={()=>document.getElementById('m').classList.remove('open')} style={{width:'32px',height:'32px',borderRadius:'50%',background:'#1e293b',border:'none',color:'white'}}>✕</button>
      </div>
      <a href="/login" className="mbtn" style={{background:'#3b82f6',color:'white'}}>Log In</a>
      <a href="/signup" className="mbtn" style={{background:'white',color:'black'}}>Sign Up</a>
      <a href="/" className="mbtn" style={{background:'#1a2744',color:'white'}}>Home</a>
      <a href="/login" className="mbtn" style={{background:'#1a2744',color:'white'}}>API Docs</a>
    </div>
  </div>
</div>
</>
)
  }
