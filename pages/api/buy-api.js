let usedTrx = new Set();

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, trxId, method, isAdmin } = req.body;

  if (!email || !trxId) return res.json({ success: false, error: 'Email + TrxID dao!' });

  // Admin hole taka charai unlimited
  if (isAdmin) {
    const apiKey = 'MDR-ADMIN-' + Math.random().toString(36).slice(2, 10).toUpperCase();
    return res.json({ success: true, apiKey });
  }

  // Robot Check 1 - TrxID format
  if (trxId.length < 8) return res.json({ success: false, error: 'Vul TrxID!' });

  // Robot Check 2 - Aki TrxID 2 bar cholbe na
  if (usedTrx.has(trxId)) return res.json({ success: false, error: 'Ei TrxID agei use hoise!' });
  usedTrx.add(trxId);

  // Robot Check 3 - 500 TK pathaise bole dhore nilam, ekhon API banai dilam
  const apiKey = 'MDR-' + Math.random().toString(36).slice(2, 10).toUpperCase();
  return res.json({ success: true, apiKey });
}
