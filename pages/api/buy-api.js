// pages/api/buy-api.js - Backend - 500 TK
let pendingPayments = [];
let activeKeys = {};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.json({ 
      bKash: '01837450067',
      total_sold: Object.keys(activeKeys).length,
      keys: activeKeys 
    });
  }

  if (req.method === 'POST') {
    const { email, trxId } = req.body;
    if (!email || !trxId) return res.status(400).json({ success: false, error: 'Email + TrxID দাও!' });
    if (pendingPayments.find(p => p.trxId === trxId)) {
      return res.status(400).json({ success: false, error: 'TrxID আগেই Use হইছে!' });
    }
    const apiKey = `ULTRA_RES_${Math.random().toString(36).substring(2, 6).toUpperCase()}_${Date.now().toString().slice(-4)}`;
    pendingPayments.push({ email, trxId, apiKey, amount: 500, created: new Date().toISOString() });
    activeKeys[apiKey] = { email, trxId, balance: 0, apiAccess: true };
    return res.json({
      success: true,
      apiKey,
      message: '✅ 500 TK Verified!',
      api_url: 'https://ultra-top-up-bd-api.vercel.app/api/robot/deliver',
      header: `x-api-key: ${apiKey}`
    });
  }
}
