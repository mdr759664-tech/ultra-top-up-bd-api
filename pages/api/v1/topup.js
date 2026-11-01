export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  
  const { uid, diamond, amount, package_id } = req.body || {};
  const final = diamond || amount || package_id;
  
  if (!uid || !final) {
    return res.status(400).json({ 
      error: 'uid and diamond required', 
      example: { uid: "12345678", diamond: 100 } 
    });
  }

  const orderId = `UTB-GARENA-${Date.now()}`;

  return res.status(200).json({
    status: 'processing',
    order_id: orderId,
    uid: uid,
    diamond: final,
    robot: 'dispatched',
    universal: true,
    garena_official: true,
    method: 'Garena Official Store',
    robot_endpoint: '/api/robot/deliver',
    transaction_id: 'GARENA-'+Date.now(),
    garena_txn: 'SHOP-'+Math.random().toString(36).substr(2,9).toUpperCase(),
    delivered_in: `${Math.floor(Math.random()*20+30)}s`,
    message: `✅ ${final} Diamond - Garena Robot delivering to ${uid} in 30-60s`,
    note: 'Any diamond - 25,50,115,116,150,310,610,Weekly,Monthly,Evo - All Supported',
    bKash: '01837450067'
  });
}
