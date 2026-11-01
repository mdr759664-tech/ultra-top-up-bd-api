import { useState } from 'react';
export default function BuyAPI(){
  const [email,setEmail]=useState(''); const [trx,setTrx]=useState(''); const [status,setStatus]=useState(''); const [loading,setLoading]=useState(false);
  const handleBuy=async()=>{
    if(!email||!trx) return alert('Email+TrxID দাও!'); setLoading(true); setStatus('⏳ Checking 500 TK...');
    try{
      const r=await fetch('/api/buy-api',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,trxId:trx})});
      const d=await r.json(); if(d.success) setStatus(`✅ Success!\n🔑 API Key: ${d.apiKey}\nHeader: x-api-key: ${d.apiKey}`); else setStatus(`❌ ${d.error}`);
    }catch(e){setStatus('❌ Error');} setLoading(false);
  };
  return(<div style={{background:'#000',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'20px'}}><div style={{background:'#111d33',padding:'30px',borderRadius:'20px',maxWidth:'400px',width:'100%'}}><h2 style={{color:'white',textAlign:'center'}}>🔑 Buy API - 500 TK</h2><p style={{color:'#fbbf24',textAlign:'center'}}>bKash: 01837450067</p><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{width:'100%',padding:'14px',marginTop:'16px',borderRadius:'12px',background:'#070d1a',border:'1px solid #334155',color:'white'}}/><input value={trx} onChange={e=>setTrx(e.target.value)} placeholder="bKash TrxID" style={{width:'100%',padding:'14px',marginTop:'10px',borderRadius:'12px',background:'#070d1a',border:'1px solid #334155',color:'white'}}/><button onClick={handleBuy} disabled={loading} style={{width:'100%',marginTop:'16px',padding:'16px',borderRadius:'16px',background:'#3b82f6',color:'white',fontWeight:'800',border:'none'}}>{loading?'Checking...':'🚀 Get API Key'}</button>{status&&<p style={{color:'white',marginTop:'16px',background:'#070d1a',padding:'12px',borderRadius:'10px',whiteSpace:'pre-wrap'}}>{status}</p>}</div></div>);
}
