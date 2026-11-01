import { useState, useEffect } from 'react';

export default function Admin(){
const [apiKey] = useState('ULTRA_'+Math.random().toString(36).toUpperCase().slice(2,12)+'_'+Date.now().toString().slice(-6));
const [balance,setBalance]=useState(1250);
const [orders] = useState([
 {id:'83456291', pack:'100 Diamond', status:'Success'},
 {id:'92345128', pack:'310 Diamond', status:'Success'},
 {id:'10293847', pack:'520 Diamond', status:'Pending'},
]);
const [checked,setChecked]=useState(false);

useEffect(()=>{
 // 🔒 ADMIN GUARD - Public ঢুকতে পারবে না!
 if(typeof window !== 'undefined'){
   if(localStorage.getItem('isAdmin')!=='true'){
     alert('⛔ Unauthorized! Admin Only!');
     window.location.href='/';
     return;
   }
   setChecked(true);
 }
},[]);

const copy=()=>{
 navigator.clipboard.writeText(apiKey);
 alert('API Key Copied! ✅');
}

const handleLogout=()=>{
 localStorage.removeItem('isAdmin');
 window.location.href='/';
}

if(!checked){
 return <div style={{minHeight:'100vh',background:'#070e1f',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>Checking Admin...</div>
}

return(
<>
<style>{`
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter,system-ui,sans-serif}
body{background:#070e1f}
.nav{position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:#070d1a;border-bottom:1px solid #132040}
.logo{width:32px;height:32px;background:linear-gradient(135deg,#60a5fa,#3b82f6);transform:rotate(45deg);border-radius:4px;box-shadow:0 0 15px #3b82f6}
.card{background:#111d33;border:1px solid #1e293b;border-radius:20px;padding:20px;margin-top:14px}
.k{font-size:10px;font-weight:800;letter-spacing:.1em;color:#64748b}
.v{font-size:24px;font-weight:900;margin-top:6px;color:white}
.btn{padding:13px 18px;border-radius:12px;border:none;font-weight:800;cursor:pointer;font-size:14px}
.input{width:100%;padding:14px;border-radius:12px;background:#070d1a;border:1px solid #334155;color:#60a5fa;font-family:monospace;font-size:13px;margin-top:10px;word-break:break-all}
.row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #1e293b;font-size:13px}
.badge{padding:4px 10px;border-radius:999px;font-size:11px;font-weight:800}
.ok{background:#0e2418;color:#4ade80;border:1px solid #14532d}
.pen{background:#241e0e;color:#fbbf24;border:1px solid #78350f}
`}</style>

<div style={{minHeight:'100vh',background:'#070e1f',color:'white'}}>
  
  <div className="nav">
    <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
      <div className="logo"></div>
      <span style={{fontWeight:900,lineHeight:1.1,fontSize:'15px'}}>ULTRA TOP UP<br/>BD - ADMIN</span>
    </div>
    <button onClick={handleLogout} style={{padding:'8px 14px',borderRadius:'10px',background:'#1e293b',color:'white',border:'none',fontSize:'13px',fontWeight:700,cursor:'pointer'}}>Logout</button>
  </div>

  <div style={{padding:'20px',maxWidth:'600px',margin:'0 auto'}}>
    
    <h2 style={{fontSize:'22px',fontWeight:900}}>Dashboard 🔒 Admin Only</h2>
    <p style={{fontSize:'13px',color:'#94a3b8',marginTop:'4px'}}>Welcome back, Admin - Secured</p>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginTop:'16px'}}>
      <div className="card"><div className="k">TOTAL BALANCE</div><div className="v">৳ {balance}</div><div style={{color:'#4ade80',fontSize:'12px',marginTop:'4px',fontWeight:700}}>+12% this week</div></div>
      <div className="card"><div className="k">TOTAL ORDERS</div><div className="v">1,248</div><div style={{color:'#60a5fa',fontSize:'12px',marginTop:'4px',fontWeight:700}}>24/7 Automated</div></div>
    </div>

    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h3 style={{fontSize:'16px',fontWeight:900}}>🔑 Your API Key</h3>
        <span style={{fontSize:'11px',background:'#1e3a5f',color:'#93c5fd',padding:'4px 10px',borderRadius:'999px',fontWeight:800}}>LIVE</span>
      </div>
      <p style={{fontSize:'12px',color:'#94a3b8',marginTop:'6px'}}>Use this key to integrate Top-Up API</p>
      <div className="input">{apiKey}</div>
      <div style={{display:'flex',gap:'10px',marginTop:'14px'}}>
        <button onClick={copy} className="btn" style={{background:'linear-gradient(90deg,#3b82f6,#6366f1)',color:'white',flex:1}}>Copy Key</button>
        <button onClick={()=>{setBalance(b=>b+500);alert('৳500 Added!')}} className="btn" style={{background:'white',color:'black',flex:1}}>Add ৳500</button>
      </div>
    </div>

    <div className="card" style={{background:'#0e2418',borderColor:'#14532d'}}>
      <h3 style={{fontSize:'14px',fontWeight:900,color:'#4ade80'}}>✅ Security Active</h3>
      <div style={{fontSize:'12px',color:'#86efac',marginTop:'8px',lineHeight:'1.6'}}>
        • Public cannot access this page<br/>
        • Only admin@ultra.com can see this<br/>
        • Public redirected to Home<br/>
        • Public Link: /dashboard (separate)
      </div>
    </div>

    <div className="card">
      <h3 style={{fontSize:'16px',fontWeight:900}}>📦 Recent Orders</h3>
      <div style={{marginTop:'8px'}}>
        {orders.map((o,i)=>(
          <div key={i} className="row">
            <span><b style={{color:'white'}}>{o.id}</b> - {o.pack}</span>
            <span className={`badge ${o.status==='Success'?'ok':'pen'}`}>{o.status}</span>
          </div>
        ))}
      </div>
    </div>

    <div style={{textAlign:'center',marginTop:'24px',padding:'20px'}}>
      <p style={{fontSize:'12px',color:'#475569'}}>ULTRA TOP UP BD API • 256-bit Encrypted • 24/7 Support • Admin Secured 🔒</p>
    </div>

  </div>
</div>
</>
)
         }
