// ULTRA TOP UP BD - OFFICIAL API
// Owner: 15% | Reseller: 10%
// bKash: 01837450067

const PRICES = {
  "25": 21, "50": 36, "115": 78, "240": 156, "355": 234, "505": 333,
  "610": 400, "850": 558, "1090": 712, "1240": 820, "1720": 1132,
  "2090": 1376, "2530": 1600, "5060": 3220, "10120": 6440,
  "weekly": 155, "weekly_lite": 42, "monthly": 780,
  "2x_weekly": 310, "3x_weekly": 465, "5x_weekly": 780
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST Only' });

  let { uid, diamond, player_id } = req.body;
  uid = uid || player_id;
  if (!uid || !diamond) return res.status(400).json({ error: 'uid & diamond required' });

  let d = String(diamond).toLowerCase().trim();
  d = d.replace(' diamond','').replace(' ','_');
  
  const market = PRICES[d] || PRICES["115"];
  const cost = Math.round(market * 0.75);
  const resellerPrice = Math.round(market * 0.90);
  const ownerProfit = resellerPrice - cost;
  const resellerProfit = market - resellerPrice;

  try {
    const baseUrl = `https://${req.headers.host}`;
    await fetch(`${baseUrl}/api/robot/deliver`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, diamond: d, cost })
    });
  } catch (e) {}

  return res.status(200).json({
    success: true,
    status: 'processing',
    uid: uid,
    diamond: d,
    pricing: {
      market_price: `${market} TK`,
      reseller_buy: `${resellerPrice} TK`,
      reseller_sell: `${market} TK`,
      reseller_profit: `${resellerProfit} TK (10%)`,
      owner_profit: `${ownerProfit} TK (15%)`
    },
    robot: 'dispatched',
    delivery: '2 sec - 2 min',
    message: `✅ ${d} Diamond Processing - ULTRA TOP UP BD`
  });
}
