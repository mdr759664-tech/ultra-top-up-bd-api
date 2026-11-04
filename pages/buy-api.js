import { useState } from 'react';

export default function BuyAPI(){
  const [email,setEmail]=useState('');
  const [trx,setTrx]=useState('');
  const [password,setPassword]=useState('');
  const [method,setMethod]=useState('bKash');
  const [status,setStatus]=useState('');
  const [loading,setLoading]=useState(false);

  // এখানে তোমার নাম্বারগুলো বসাও
  const numbers = {
    bKash: 'YOUR_BKASH_NUMBER',
    Nagad: 'YOUR_NAGAD_NUMBER',
    Rocket: 'YOUR_ROCKET_NUMBER',
    Upay: 'YOUR_UPAY_NUMBER'
  };

  const copyNumber = () => {
    navigator.clipboard.writeText(numbers[method]);
    alert(method + ' নাম্বার কপি হয়ে গেছে!');
  };

  const handleBuy = async () => {
    if(!email || !trx) return alert('ইমেইল + TrxID দাও!');
    setLoading(true);
    setStatus('⏳ রোবট চেক করতেছে...');
    try{
      const r = await fetch('/api/buy-api',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({email, trxId: trx, method, password})
      });
      const d = await r.json();
      if(d.success) setStatus(`✅ Success!\n🔑 API Key: ${d.apiKey}\nকপি করে রাখো!\nHeader: x-api-key: ${d.apiKey}`);
      else setStatus(`❌ ${d.error}`);
    }catch(e){ setStatus('❌ Error'); }
    setLoading(false);
  };

  const isAdminEmail = email === 'mdr759664@gmail.com';

  return(
  <div style={{background:'#fff',minHeight:'100vh',padding:'0'}}>
    <div style={{background:'#e91e63',padding:'15px',display:'flex',alignItems:'center',gap:'10px',color:'white',fontWeight:'800'}}>
      <span>←</span><span>🔒 নিরাপদ পেমেন্ট - নিরা...</span>
    </div>

    <div style={{padding:'15px'}}>
      <p style={{color:'#e91e63',fontWeight:'800',fontSize:'18px'}}>নিরাপদ পেমেন্ট</p>
      <div style={{background:'#f1f5f9',padding:'14px',borderRadius:'12px',fontSize:'22px',fontWeight:'800'}}>৳ 500</div>

      <div style={{display:'flex',gap:'8px',marginTop:'12px'}}>
        {['bKash','Nagad','Rocket','Upay'].map(m=>(
          <button key={m} onClick={()=>setMethod(m)} style={{flex:1,padding:'12px',borderRadius:'10px',border:'none',background:method===m?'#e91e63':'#e2e8f0',color:method===m?'white':'black',fontWeight:'800'}}>{m}</button>
        ))}
      </div>

      <div style={{background:'#e91e63',padding:'20px',borderRadius:'15px',marginTop:'15px',color:'white'}}>
        <h3 style={{textAlign:'center'}}>ট্রানজেকশন আইডি দিন</h3>
        <input value={trx} onChange={e=>setTrx(e.target.value)} placeholder="ট্রানজেকশন আইডি দিন" style={{width:'100%',padding:'14px',borderRadius:'10px',border:'none',marginTop:'10px'}} />
        <p style={{marginTop:'15px'}}>• *247# ডায়াল করে আপনার {method} অ্যাপ খুলুন</p>
        <p>• Send Money -এ ক্লিক করুন</p>
        <p>• এই নম্বরে টাকা পাঠান: <b>{numbers[method]}</b> <button onClick={copyNumber} style={{background:'#7c0a2d',color:'white',border:'none',padding:'6px 12px',borderRadius:'8px'}}>📋 কপি</button></p>
        <p>• টাকার পরিমাণ: <b>500</b></p>
        <p>• নিশ্চিত করে এখন আপনার {method} PIN লিখুন</p>
        <p>• টাকা পাঠান এবং ট্রানজেকশন আইডি কপি করুন</p>
        <p>• ট্রানজেকশন আইডি লিখে ভেরিফাই চাপুন</p>
      </div>

      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="আপনার ইমেইল দিন" style={{width:'100%',padding:'14px',marginTop:'15px',borderRadius:'10px',border:'1px solid #cbd5e1'}} />

      {isAdminEmail && (
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="অ্যাডমিন পাসওয়ার্ড দিন" style={{width:'100%',padding:'14px',marginTop:'15px',borderRadius:'10px',border:'1px solid #cbd5e1'}} />
      )}

      <button onClick={handleBuy} disabled={loading} style={{width:'100%',marginTop:'15px',padding:'16px',borderRadius:'12px',background:'#b91c1c',color:'white',fontWeight:'800',border:'none',fontSize:'18px'}}>
        {loading?'চেক হচ্ছে...':'ভেরিফাই'}
      </button>

      {status && <p style={{marginTop:'15px',background:'#0f172a',color:'white',padding:'12px',borderRadius:'10px',whiteSpace:'pre-wrap'}}>{status}</p>}
    </div>
  </div>);
                                                            }
