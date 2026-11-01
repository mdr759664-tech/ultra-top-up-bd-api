// pages/buy-api.js - Public Buy Page
import { useState } from 'react';
export default function BuyAPI() {
  const [email, setEmail] = useState('');
  const [trx, setTrx] = useState('');
  const [status, setStatus] = useState('');
  const handleBuy = async () => {
    if (!email || !trx) return alert('Email + TrxID দাও!');
    setStatus('⏳ Verifying...');
    const res = await fetch('/api/buy-api', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, trxId: trx }) });
    const data = await res.json();
    if (data.success) setStatus(`✅ API Key: ${data.apiKey} - Copy করে রাখো!`);
    else setStatus(`❌ ${data.error}`);
  };
  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: '#111d33', padding: '30px', borderRadius: '20px', maxWidth: '400px', width: '100%', border: '1px solid #1e293b' }}>
        <h2 style={{ color: 'white', fontWeight: '900', textAlign: 'center' }}>🔑 Buy API - 500 TK</h2>
        <p style={{ color: '#64748b', fontSize: '13px', textAlign: 'center' }}>bKash: 01837450067 (Personal)</p>
        <div style={{ background: '#070d1a', padding: '16px', borderRadius: '12px', marginTop: '16px', border: '1px dashed #3b82f6' }}>
          <p style={{ color: '#4ade80', fontSize: '13px' }}>1. 01837450067 তে 500 TK Send Money</p>
          <p style={{ color: '#fbbf24', fontSize: '13px', marginTop: '8px' }}>2. TrxID নিচে দাও</p>
        </div>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" style={{ width: '100%', padding: '14px', borderRadius: '12px', background: '#070d1a', border: '1px solid #334155', color: 'white', marginTop: '16px' }} />
        <input value={trx} onChange={e => setTrx(e.target.value)} placeholder="bKash TrxID" style={{ width: '100%', padding: '14px', borderRadius: '12px', background: '#070d1a', border: '1px solid #334155', color: 'white', marginTop: '10px' }} />
        <button onClick={handleBuy} style={{ width: '100%', marginTop: '16px', padding: '16px', borderRadius: '16px', background: 'linear-gradient(90deg,#3b82f6,#6366f1)', color: 'white', fontWeight: '800', border: 'none' }}>Get API Key - 500 TK</button>
        {status && <p style={{ color: status.includes('✅') ? '#4ade80' : '#f87171', marginTop: '16px', textAlign: 'center', fontWeight: '700', wordBreak: 'break-all' }}>{status}</p>}
      </div>
    </div>
  );
}
