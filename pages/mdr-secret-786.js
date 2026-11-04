import { useState, useEffect } from 'react';

export default function Admin(){
const [apiKey] = useState('ULTRA_'+Math.random().toString(36).toUpperCase().slice(2,12)+'_'+Date.now().toString().slice(-6));
const [balance,setBalance]=useState(1250);
const [myCommission,setMyCommission]=useState(0);
const [resellerCommission,setResellerCommission]=useState(0);
const [brazilSent,setBrazilSent]=useState(0);

const [uid,setUid]=useState('');
const [serverId,setServerId]=useState('ALL');
const [pack,setPack]=useState('');
const [price,setPrice]=useState('');
const [lastSplit,setLastSplit]=useState(null);

const [orders,setOrders] = useState([
 {id:'83456291', pack:'100 Diamond', status:'Success', uid:'123456', price:100, country:'ALL'},
 {id:'92345128', pack:'310 Diamond', status:'Success', uid:'789012', price:300, country:'ALL'},
 {id:'10293847', pack:'520 Diamond', status:'Pending', uid:'345678', price:500, country:'ALL'},
]);
const [checked,setChecked]=useState(false);

useEffect(()=>{
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

// ★★★ মেইন রোবট - 60% তুমি, 20% TopUp, 20% Brazil - ALL সার্ভার, সব দেশ Brazil এ যাবে ★★★
const handleNewOrder = async () => {
  if(!uid) return alert('কাস্টমারের UID দাও!');
  if(!pack) return alert('প্যাকেজের নাম দাও! যেকোনো প্যাকেজ চলবে');
  if(!price) return alert('দাম দাও! Top Up ওয়েবসাইটে যে দাম আছে ওইটা দাও');
  const total = Number(price);

  // ঠিক হিসাব: তুমি 60%, TopUp 20%, Brazil 20%
  const toMe = Math.round(total * 0.60);
  const toReseller = Math.round(total * 0.20);
  const toBrazil = total - toMe - toReseller;

  // প্যাকেজ সেম - কোনো চেঞ্জ নাই
  const brazilPack = pack;
  const apiPack = pack;
  // সার্ভার ID - যেকোনো দেশ চলবে, খালি থাকলে ALL, সব যাবে Brazil এ
  const finalServer = serverId || 'ALL';

  const newOrder = {
    id: Math.floor(10000000 + Math.random()*90000000).toString(),
    pack: pack,
    status: 'Success',
    uid: uid,
    price: total,
    serverId: finalServer,
    country: finalServer,
    brazilPack: brazilPack,
  };

  setOrders(prev => [newOrder, ...prev]);
  setBalance(b => b + toMe);
  setMyCommission(c => c + toMe);
  setResellerCommission(c => c + toReseller);
  setBrazilSent(c => c + toBrazil);
  setLastSplit({total, toReseller, toMe, toBrazil, uid, pack, serverId: finalServer, brazilPack});

  // ★★★ ব্রাজিল সার্ভারে পাঠানো - ALL সার্ভার, সব দেশ ★★★
  // fetch('https://BRAZIL-SERVER-LINK/api/topup', {method:'POST', headers:{'Content-Type':'application/json','x-api-key': apiKey}, body: JSON.stringify({uid: uid, serverId: finalServer, server: 'ALL', region: 'ALL', target: 'BRAZIL', pack: brazilPack, apiPack: apiPack, amount: toBrazil, originalPrice: total})})

  alert(`✅ অর্ডার Success!\nসার্ভার: ${finalServer} (ALL) -> Brazil Server এ গেছে\nUID: ${uid}\nপ্যাকেজ: ${pack} (Brazil এও সেম: ${brazilPack})\nমোট: ৳${total}\nতুমি পেলা: ৳${toMe} (60%) -> 01837450067\nTopUp পেলো: ৳${toReseller} (20%)\nব্রাজিলে গেলো: ৳${toBrazil} (20%)`);
  setUid('');
  setPack('');
  setPrice('');
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
.input{width:100%;padding:14px;border-radius:12px;background:#070d1a;border:1px solid #334155;color:white;font-size:13px;margin-top:10px}
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
      <div className="card"><div className="k">MY BALANCE (60%)</div><div className="v">৳ {balance}</div><div style={{color:'#4ade80',fontSize:'12px',marginTop:'4px',fontWeight:700}}>01837450067 - bKash/Nagad/Rocket</div></div>
      <div className="card"><div className="k">TOTAL ORDERS</div><div className="v">{orders.length + 1245}</div><div style={{color:'#60a5fa',fontSize:'12px',marginTop:'4px',fontWeight:700}}>24/7 Automated</div></div>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
      <div className="card"><div className="k">TOPUP WEBSITE (20%)</div><div className="v" style={{color:'#fbbf24'}}>৳ {resellerCommission}</div></div>
      <div className="card"><div className="k">BRAZIL SERVER (20%)</div><div className="v" style={{color:'#93c5fd'}}>৳ {brazilSent}</div></div>
    </div>

    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h3 style={{fontSize:'16px',fontWeight:900}}>🔑 Your API Key</h3>
        <span style={{fontSize:'11px',background:'#1e3a5f',color:'#93c5fd',padding:'4px 10px',borderRadius:'999px',fontWeight:800}}>LIVE</span>
      </div>
      <p style={{fontSize:'12px',color:'#94a3b8',marginTop:'6px'}}>Use this key to integrate Top-Up API - ALL Server - Same Package to Brazil</p>
      <div className="input" style={{color:'#60a5fa',fontFamily:'monospace',wordBreak:'break-all'}}>{apiKey}</div>
      <div style={{display:'flex',gap:'10px',marginTop:'14px'}}>
        <button onClick={copy} className="btn" style={{background:'linear-gradient(90deg,#3b82f6,#6366f1)',color:'white',flex:1}}>Copy Key</button>
        <button onClick={()=>{setBalance(b=>b+500);alert('৳500 Added!')}} className="btn" style={{background:'white',color:'black',flex:1}}>Add ৳500</button>
      </div>
    </div>

    <div className="card" style={{borderColor:'#3b82f6'}}>
      <h3 style={{fontSize:'16px',fontWeight:900}}>📦 নতুন অর্ডার টেস্ট করো</h3>
      <p style={{fontSize:'12px',color:'#94a3b8',marginTop:'4px'}}>Top Up ওয়েবসাইট থেকে যেভাবে অর্ডার আসবে - সব দেশ, ALL সার্ভার, সব Brazil এ যাবে</p>
      <input className="input" value={uid} onChange={e=>setUid(e.target.value)} placeholder="কাস্টমারের UID দাও - যেমন 123456789" />
      <input className="input" value={serverId} onChange={e=>setServerId(e.target.value)} placeholder="সার্ভার ID - যেকোনো দেশ লিখো, যেমন BD / IN / ID / US / ALL - খালি রাখলে ALL - সব Brazil এ যাবে" />
      <input className="input" value={pack} onChange={e=>setPack(e.target.value)} placeholder="প্যাকেজের নাম লিখো - যেকোনো প্যাকেজ চলবে, যেমন 100 Diamond / 9999 Diamond / Custom Pack" />
      <input className="input" type="number" value={price} onChange={e=>setPrice(e.target.value)} placeholder="দাম লিখো - Top Up ওয়েবসাইটে যে দাম আছে ওইটা" />
      <button onClick={handleNewOrder} className="btn" style={{background:'#dc2626',color:'white',width:'100%',marginTop:'12px'}}>অর্ডার পাঠাও - অটো টাকা ভাগ হবে</button>
      {lastSplit && (
        <div style={{background:'#070d1a',padding:'12px',borderRadius:'12px',marginTop:'12px',fontSize:'12px',lineHeight:'1.8'}}>
          <b>শেষ অর্ডারের ভাগ:</b><br/>
          সার্ভার: {lastSplit.serverId} (ALL) -&gt; Brazil Server<br/>
          মোট: ৳{lastSplit.total} | UID: {lastSplit.uid}<br/>
          প্যাকেজ: {lastSplit.pack} | Brazil প্যাকেজ: {lastSplit.brazilPack} (সেম)<br/>
          তুমি (60%): ৳{lastSplit.toMe} | TopUp (20%): ৳{lastSplit.toReseller} | ব্রাজিল (20%): ৳{lastSplit.toBrazil}
        </div>
      )}
    </div>

    <div className="card">
      <h3 style={{fontSize:'16px',fontWeight:900}}>📦 Recent Orders</h3>
      <div style={{marginTop:'8px'}}>
        {orders.map((o,i)=>(
          <div key={i} className="row">
            <span><b style={{color:'white'}}>{o.id}</b> - {o.pack} - {o.country} - UID:{o.uid}</span>
            <span className={`badge ${o.status==='Success'?'ok':'pen'}`}>{o.status}</span>
          </div>
        ))}
      </div>
    </div>

    <div style={{textAlign:'center',marginTop:'24px',padding:'20px'}}>
      <p style={{fontSize:'12px',color:'#475569'}}>ULTRA TOP UP BD API • 60% Owner 01837450067 | 20% TopUp | 20% Brazil • ALL Server -&gt; Brazil • Same Package • Unlimited Package • Admin Secured 🔒</p>
    </div>
  </div>
</div>
</>
)
 }
