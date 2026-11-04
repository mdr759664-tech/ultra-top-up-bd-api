let usedTrx = new Set();

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, trxId, password } = req.body;

  if (!email || !trxId) return res.json({ success: false, error: 'Email + TrxID dao!' });

  // তুমি অ্যাডমিন - ইমেইল + পাসওয়ার্ড ২টাই মিলতে হবে
  if (email === 'mdr759664@gmail.com') {
    if (password !== 'Rana@1234#') {
      return res.json({ success: false, error: 'Admin Password vul!' });
    }
    const apiKey = 'MDR-ADMIN-' + Math.random().toString(36).slice(2, 10).toUpperCase();
    return res.json({ success: true, apiKey });
  }

  if (trxId.length < 8) return res.json({ success: false, error: 'Vul TrxID!' });
  if (usedTrx.has(trxId)) return res.json({ success: false, error: 'Ei TrxID agei use hoise!' });
  usedTrx.add(trxId);

  const apiKey = 'MDR-' + Math.random().toString(36).slice(2, 10).toUpperCase();
  return res.json({ success: true, apiKey });
}
