import { useState } from 'react';
export default function Home(){
const [menu,setMenu]=useState(false);
const [show,setShow]=useState(null);
const [email,setEmail]=useState('');
const [pass,setPass]=useState('');
const [msg,setMsg]=useState('');

const handleLogin=()=>{
 // SECRET ADMIN CHECK - কেউ দেখবে না
 if(email.toLowerCase()==='admin@ultra.com' && pass==='Mdr12345'){
   localStorage.setItem('isAdmin','true');
   setMsg('✅ Admin Success!');
   setTimeout(()=>{window.location.href='/mdr-secret-786'},800);
   return;
 } 
 // PUBLIC - যে কোনো Email/Pass দিয়ে Dashboard
 if(email && pass.length>=4){
   localStorage.setItem('user_email', email);
   localStorage.removeItem('isAdmin');
   setMsg('✅ Login Success!');
   setTimeout(()=>{window.location.href='/dashboard'},800);
 }
 else {
   setMsg('❌ Email আর Password (4 digit) দাও!');
 }
}

return(
<>
<style>{`
*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui}
.nav{position:sticky;top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:#070d1a;border-bottom:1px solid #132040}
.logo{width:32px;height:32px;background:linear-gradient(135deg,#60a5fa,#3b82f6);transform:rotate(45deg);border-radius:4px;box-shadow:0 0 15px #3b82f6}
.hero{padding:40px 20px 30px;text-align:center;background:radial-gradient(ellipse at top,#12244a 0%,#0a1220 60%)}
.badge{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:#152040;border:1px solid #1e3a5f;color:#93c5fd;font-size:13px;font-weight:600}
.dot{width:8px;height:8px;background:#4ade80;border-radius:50%}
.h1{font-size:32px;font-weight:900;line-height:1.1;margin-top:20px;color:white}
.blue{background:linear-gradient(90deg,#60a5fa,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.p{color:#94a3b8;font-size:15px;line-height:1.6;margin:16px auto 0;max-width:360px}
.btns{display:flex;flex-direction:column;gap:12px;margin:28px auto 0;max-width:360px}
.btn1{padding:16px;border-radius:16px;background:linear-gradient(90deg,#3b82f6,#6366f1);color:white;font-weight:800;text-align:center;border:none;cursor:pointer}
.btn2{padding:16px;border-radius:16px;background:#111d33;border:1px solid #1e293b;color:white;font-weight:700;cursor:pointer}
.grid{grid-template-columns:1fr 1fr;display:grid;gap:12px;margin:30px auto 0;max-width:360px}
.card{background:#111d33;border:1px solid #1e293b;border-radius:20px;padding:20px;text-align:center}
.k{font-size:22px;font-weight:900;color:white}
.v{font-size:10px;font-weight:800;color:#64748b;margin-top:6px}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:300;display:flex;align-items:center;justify-content:center;padding:20px}
.loginBox{width:100%;max-width:380px;background:#0f1c33;border:1px solid #1e293b;border-radius:20px;padding:28px;text-align:center}
.input{width:100%;padding:14px;border-radius:12px;background:#070d1a;border:1px solid #334155;color:white;font-size:14px;margin-top:10px;outline:none}
`}</style>

<div>
<nav className="nav">
 <div style={{display:'flex',alignItems:'center',gap:10}}><div className="logo"></div><span style={{fontWeight:900,color:'white',fontSize:'16px',lineHeight:1.1}}>ULTRA TOP UP<br/>BD API</span></div>
 <button onClick={()=>setMenu(true)} style={{fontSize:'28px',background:'none',border:'none',color:'white'}}>☰</button>
</nav>

<div className="hero">
 <div className="badge"><span className="dot"></span>Live & automated 24/7</div>
 <h1 className="h1">Automated <span className="blue">Free Fire Diamond</span><br/>Top-Up API for Resellers</h1>
 <p className="p">Plug into Topup Bot's API and deliver Free Fire diamond top-ups instantly.</p>
 <div className="btns">
  <button onClick={()=>setShow('signup')} className="btn1">Get API Access →</button>
  <button onClick={()=>setShow('login')} className="btn2">Read the Docs</button>
 </div>
 <div className="grid">
  <div className="card"><div className="k">24/7</div><div className="v">AUTOMATED FULFILLMENT</div></div>
  <div className="card"><div className="k">&lt;60s</div><div className="v">AVG. ORDER DELIVERY</div></div>
  <div className="card"><div className="k">100%</div><div className="v">WEBHOOK RETRIES</div></div>
  <div className="card"><div className="k">256-bit</div><div className="v">ENCRYPTION</div></div>
 </div>
</div>

{menu && (
 <div className="overlay" onClick={()=>setMenu(false)}>
  <div className="loginBox" onClick={e=>e.stopPropagation()}>
   <button onClick={()=>{setMenu(false);setShow('login')}} className="btn1" style={{width:'100%'}}>🔵 Log In</button>
   <button onClick={()=>{setMenu(false);setShow('signup')}} className="btn1" style={{width:'100%',marginTop:'10px',background:'white',color:'black'}}>📝 Sign Up</button>
   <button onClick={()=>setMenu(false)} className="btn2" style={{width:'100%',marginTop:'10px'}}>Close</button>
  </div>
 </div>
)}

{show && (
 <div className="overlay" onClick={()=>setShow(null)}>
  <div className="loginBox" onClick={e=>e.stopPropagation()}>
   <div className="logo" style={{margin:'0 auto 12px'}}></div>
   <h2 style={{color:'white',fontWeight:900}}>{show==='login'?'Log In':'Sign Up'}</h2>
   <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your Email" className="input"/>
   <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" type="password" className="input"/>
   {msg && <div style={{marginTop:'12px',padding:'10px',borderRadius:'10px',fontSize:'13px',background:msg.includes('✅')?'#0e2418':'#241010',color:msg.includes('✅')?'#4ade80':'#f87171'}}>{msg}</div>}
   <button onClick={handleLogin} className="btn1" style={{width:'100%',marginTop:'16px'}}>{show==='login'?'Log In':'Create Account'}</button>
   <div style={{marginTop:'12px'}}><span onClick={()=>setShow(null)} style={{color:'#64748b',fontSize:'13px',cursor:'pointer'}}>← Close</span></div>
  </div>
 </div>
)}
</div>
</>
)
 }
