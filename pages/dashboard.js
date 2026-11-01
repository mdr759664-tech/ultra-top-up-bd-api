import { useState, useEffect } from 'react';

export default function Dashboard(){
const [apiKey, setApiKey] = useState('');
const [balance,setBalance]=useState(0);
const [uid,setUid]=useState('');
const [pack,setPack]=useState('100 Diamond - 85 TK');
const [orders,setOrders]=useState([]);
const [showPay,setShowPay]=useState(false);
const [trx,setTrx]=useState('');
const [method,setMethod]=useState('bKash');

useEffect(()=>{
 let key = localStorage.getItem('user_api_key');
 if(!key){ key = 'USER_'+Math.random().toString(36).toUpperCase().slice(2,10)+'_'+Date.now().toString().slice(-5); localStorage.setItem('user_api_key', key); }
 setApiKey(key);
 setBalance(Number(localStorage.getItem('user_balance')||0));
 setOrders(JSON.parse(localStorage.getItem('user_orders')||'[]'));
},[]);

const saveBalance = (b)=>{ setBalance(b); localStorage.setItem('user_balance', b); }
const saveOrders = (o)=>{ setOrders(o); localStorage.setItem('user_orders', JSON.stringify(o)); }

const doTopup=()=>{
 if(!uid){alert('UID দাও!');return;}
 if(balance<85){alert('Balance কম! Add করো!');setShowPay(true);return;}
 const newOrder={uid, pack, time:new Date().toLocaleTimeString(), status:'Success'};
 saveOrders([newOrder, ...orders]);
 saveBalance(balance-85);
 alert(`Success! ${pack} - UID ${uid}`);
 setUid('');
}

const requestPayment=()=>{
 if(!trx){alert('TrxID দাও!');return;}
 alert(`${method} Payment Received!\nTrxID: ${trx}\n\nAdmin 5 মিনিটে Check করে Balance Add করে দিবে!\nDemo: এখনই ৳500 Add করছি!`);
 saveBalance(balance+500);
 setShowPay(false);
 setTrx('');
}

const methods = {
 bKash: {color:'#e2136e', name:'bKash'},
 Nagad: {color:'#f6921e', name:'Nagad'},
 Rocket: {color:'#8c349c', name:'Rocket'},
 Upay: {color:'#ffc20e', name:'Upay'}
}

return(
<>
<style>{`
*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui}
.nav{position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:#070d1a;border-bottom:1px solid #132040}
.logo{width:32px;height:32px;background:linear-gradient(135deg,#60a5fa,#3b82f6);transform:rotate(45deg);border-radius:4px;box-shadow:0 0 15px #3b82f6}
.card{background:#111d33;border:1px solid #1e293b;border-radius:20px;padding:20px;margin-top:14px}
.btn{padding:14px;border-radius:12px;border:none;font-weight:800;cursor:pointer;width:100%}
.input{width:100%;padding:14px;border-radius:12px;background:#070d1a;border:1px solid #334155;color:white;margin-top:10px}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:100;display:flex;align-items:center;justify-content:center;padding:20px}
.mbtn{padding:8px 12px;border-radius:999px;border:1px solid #1e293b;background:#070d1a;color:white;font-size:12px;font-weight:700;cursor:pointer}
.mbtn.active{border-color:transparent;color:white}
`}</style>

<div style={{minHeight:'100vh',background:'#070e1f',color:'white'}}>
  <div className="nav">
    <div style={{display:'flex',alignItems:'center',gap:'10px'}}><div className="logo"></div><span style={{fontWeight:900,lineHeight:1.1}}>ULTRA TOP UP<br/>BD</span></div>
    <a href="/" style={{padding:'8px 12px',borderRadius:'10px',background:'#1e293b',color:'white',textDecoration:'none',fontSize:'12px'}}>Logout</a>
  </div>

  <div style={{padding:'20px',maxWidth:'600px',margin:'0 auto'}}>
    <h2 style={{fontWeight:900,fontSize:'22px'}}>My Dashboard</h2>
    <p style={{color:'#94a3b8',fontSize:'13px',marginTop:'4px'}}>Balance Save থাকবে!</p>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginTop:'16px'}}>
      <div className="card" style={{borderColor:balance>0?'#14532d':'#1e293b'}}><div style={{color:'#64748b',fontSize:'10px',fontWeight:800}}>MY BALANCE</div><div style={{fontSize:'28px',fontWeight:900,marginTop:'6px',color:balance>0?'#4ade80':'white'}}>৳ {balance}</div></div>
      <div className="card"><div style={{color:'#64748b',fontSize:'10px',fontWeight:800}}>MY ORDERS</div><div style={{fontSize:'28px',fontWeight:900,marginTop:'6px'}}>{orders.length}</div></div>
    </div>

    <div className="card">
      <h3 style={{fontWeight:900}}>🔑 My API Key</h3>
      <div className="input" style={{fontFamily:'monospace',color:'#60a5fa',fontSize:'12px'}}>{apiKey}</div>
      <div style={{display:'flex',gap:'10px',marginTop:'12px'}}>
        <button onClick={()=>{navigator.clipboard.writeText(apiKey);alert('Copied!')}} className="btn" style={{background:'#3b82f6',color:'white'}}>Copy Key</button>
        <button onClick={()=>setShowPay(true)} className="btn" style={{background:'white',color:'black'}}>Add Balance</button>
      </div>
    </div>

    <div className="card">
      <h3 style={{fontWeight:900}}>💎 Free Fire Topup</h3>
      <input value={uid} onChange={e=>setUid(e.target.value)} placeholder="Player UID" className="input"/>
      <select value={pack} onChange={e=>setPack(e.target.value)} className="input">
        <option>100 Diamond - 85 TK</option>
        <option>310 Diamond - 255 TK</option>
        <option>520 Diamond - 425 TK</option>
        <option>1060 Diamond - 850 TK</option>
      </select>
      <button onClick={doTopup} className="btn" style={{background:'linear-gradient(90deg,#3b82f6,#6366f1)',color:'white',marginTop:'12px'}}>🚀 Order Now</button>
    </div>

    <div className="card">
      <h3 style={{fontWeight:900}}>📦 My Orders</h3>
      {orders.length===0 ? <p style={{color:'#64748b',fontSize:'13px',marginTop:'12px',textAlign:'center'}}>কোনো Order নাই</p> : 
        orders.map((o,i)=>(
          <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:'1px solid #1e293b',fontSize:'13px'}}>
            <span><b>{o.uid}</b> - {o.pack}<br/><span style={{fontSize:'11px',color:'#64748b'}}>{o.time}</span></span>
            <span style={{background:'#0e2418',color:'#4ade80',padding:'4px 10px',borderRadius:'999px',fontSize:'11px',height:'fit-content'}}>{o.status}</span>
          </div>
        ))
      }
    </div>
  </div>

  {showPay && (
    <div className="overlay" onClick={()=>setShowPay(false)}>
      <div className="card" style={{width:'100%',maxWidth:'380px',background:'#0f1c33'}} onClick={e=>e.stopPropagation()}>
        <h3 style={{fontWeight:900,textAlign:'center'}}>💰 Add Balance</h3>
        
        <div style={{display:'flex',gap:'6px',marginTop:'14px',flexWrap:'wrap'}}>
          {Object.keys(methods).map(m=>(
            <button key={m} onClick={()=>setMethod(m)} className={`mbtn ${method===m?'active':''}`} style={{background:method===m?methods[m].color:'#070d1a', borderColor:method===m?methods[m].color:'#334155'}}>{m}</button>
          ))}
        </div>

        <div style={{marginTop:'14px',background:'#070d1a',padding:'14px',borderRadius:'12px',border:`1px solid ${methods[method].color}`}}>
          <div style={{fontSize:'12px',color:'#94a3b8',display:'flex',alignItems:'center',gap:'6px'}}><span style={{background:methods[method].color,color:method==='Upay'?'black':'white',padding:'2px 8px',borderRadius:'4px',fontSize:'11px',fontWeight:800}}>{method}</span> Personal Number</div>
          <div style={{fontSize:'24px',fontWeight:900,marginTop:'8px',color:'white',letterSpacing:'1px'}}>01837450067</div>
          <div style={{display:'flex',gap:'8px',marginTop:'12px'}}>
            <button onClick={()=>{navigator.clipboard.writeText('01837450067');alert(`${method} Number Copied!`)}} style={{flex:1,padding:'10px',borderRadius:'10px',background:'#1e293b',border:'none',color:'white',fontSize:'12px',fontWeight:700}}>📋 Copy</button>
            <a href="tel:01837450067" style={{flex:1,padding:'10px',borderRadius:'10px',background:methods[method].color,color:method==='Upay'?'black':'white',textDecoration:'none',fontSize:'12px',fontWeight:700,textAlign:'center'}}>📞 Call</a>
          </div>
          <div style={{fontSize:'11px',color:'#94a3b8',marginTop:'10px',lineHeight:'1.5'}}>
            1. {method} App → Send Money<br/>
            2. Number: 01837450067<br/>
            3. Amount দাও → TrxID Copy → নিচে দাও
          </div>
        </div>

        <input value={trx} onChange={e=>setTrx(e.target.value)} placeholder={`${method} TrxID - যেমন 9G7X2...`} className="input"/>
        <button onClick={requestPayment} className="btn" style={{background:methods[method].color,color:method==='Upay'?'black':'white',marginTop:'12px'}}>Submit {method} Payment</button>
        <button onClick={()=>setShowPay(false)} className="btn" style={{background:'#111d33',color:'white',border:'1px solid #1e293b',marginTop:'8px'}}>Close</button>
      </div>
    </div>
  )}

</div>
</>
)
}
