// FILE: pages/payment.js - DYNAMIC TAKA - যত Diamond তত Taka!
// Link: /payment?diamond=150  -> 150 Diamond এর দাম দেখাবে
// Link: /payment?diamond=116  -> 116 Diamond এর দাম দেখাবে
// Link: /payment?amount=100   -> 100 Taka দেখাবে

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PaymentPage() {
  const router = useRouter();
  const { diamond, amount, package_id } = router.query;
  
  const [method, setMethod] = useState('bKash');
  const [trxid, setTrxid] = useState('');
  const [copied, setCopied] = useState(false);
  
  const MY_NUMBER = '01837450067';

  // DYNAMIC PRICE - Diamond অনুযায়ী Taka
  // তুই এখানে তোর দাম বসাবি
  const getPrice = () => {
    if (amount) return amount; // যদি URL এ amount থাকে
    
    // Diamond অনুযায়ী দাম - তোর Rate
    const priceMap = {
      '25': 25,
      '50': 45,
      '100': 80,
      '115': 90,
      '116': 90,
      '150': 115,
      '240': 180,
      '310': 235,
      '610': 450,
      '1240': 900,
      '2530': 1800,
      'weekly': 165,
      'monthly': 765,
    };
    
    // diamond=150 হলে 115 TK দেখাবে, 116 হলে 90 TK
    return priceMap[diamond] || priceMap[package_id] || diamond || 60;
  };

  const finalAmount = getPrice();
  const finalDiamond = diamond || package_id || amount;

  const copyNumber = () => {
    navigator.clipboard.writeText(MY_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const verifyPayment = () => {
    if (!trxid) return alert('Transaction ID দিন!');
    alert(`${finalDiamond} Diamond এর জন্য ${finalAmount} TK - TrxID ${trxid} Verify হচ্ছে...`);
  };

  return (
    <div style={{ background: '#e91e63', minHeight: '100vh', padding: 15, fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', padding: 10 }}>
        <span>💎 ULTRA TOP UP BD API</span>
        <div>
          <a href="/login" style={{ background: 'white', color: '#e91e63', padding: '5px 15px', borderRadius: 20, textDecoration: 'none', marginRight: 10, fontWeight: 'bold' }}>Login</a>
          <a href="/register" style={{ background: '#0a0f1f', color: 'white', padding: '5px 15px', borderRadius: 20, textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</a>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, margin: '20px 0', justifyContent: 'center' }}>
        <button onClick={() => setMethod('bKash')} style={{ background: method === 'bKash' ? 'white' : '#f8bbd0', color: '#e91e63', padding: '10px 20px', borderRadius: 25, border: 'none', fontWeight: 'bold' }}>bKash</button>
        <button onClick={() => setMethod('Nagad')} style={{ background: method === 'Nagad' ? 'white' : '#f8bbd0', color: '#ff6f00', padding: '10px 20px', borderRadius: 25, border: 'none', fontWeight: 'bold' }}>Nagad</button>
        <button onClick={() => setMethod('Rocket')} style={{ background: method === 'Rocket' ? 'white' : '#f8bbd0', color: '#6a1b9a', padding: '10px 20px', borderRadius: 25, border: 'none', fontWeight: 'bold' }}>Rocket</button>
      </div>

      <div style={{ background: 'white', borderRadius: 25, padding: 20, maxWidth: 400, margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <small style={{ color: '#666' }}>{finalDiamond} Diamond এর দাম</small>
          <h1 style={{ fontSize: 50, margin: '10px 0' }}>৳{finalAmount}</h1>
          <small style={{ color: '#e91e63', fontWeight: 'bold' }}>{finalDiamond} Diamond</small>
        </div>

        <div style={{ background: '#fce4ec', borderRadius: 15, padding: 15, marginTop: 15 }}>
          <h3 style={{ color: '#e91e63', textAlign: 'center' }}>ট্রানজেকশন আইডি দিন</h3>
          <input 
            placeholder="ট্রানজেকশন আইডি দিন" 
            value={trxid}
            onChange={(e) => setTrxid(e.target.value)}
            style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e91e63', marginTop: 10 }}
          />
          <div style={{ marginTop: 15, fontSize: 14, lineHeight: 1.8 }}>
            <p>• *247# ডায়াল করে {method} মেনুতে যান</p>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white', padding: 10, borderRadius: 10 }}>
              <span>• নম্বর: <b style={{ color: '#e91e63' }}>{MY_NUMBER}</b></span>
              <button onClick={copyNumber} style={{ background: '#4a0a2a', color: 'white', padding: '5px 10px', borderRadius: 5, border: 'none' }}>{copied ? '✅ কপি!' : '📋 কপি'}</button>
            </p>
            <p>• পরিমাণ: <b style={{ color: '#e91e63' }}>৳{finalAmount} ({finalDiamond} Diamond)</b></p>
            <p>• PIN দিয়ে Send Money করুন</p>
            <p>• TrxID লিখে ভেরিফাই চাপুন</p>
          </div>
        </div>

        <button onClick={verifyPayment} style={{ width: '100%', background: '#b0003a', color: 'white', padding: 15, borderRadius: 12, border: 'none', fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>ভেরিফাই</button>
      </div>
    </div>
  );
}
