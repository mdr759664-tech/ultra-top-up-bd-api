// ULTRA TOP UP BD - BRAZIL SERVER - MAX PROFIT
// Brazil Cost 45% | Owner 35% | Reseller 20%
// bKash: 01837450067

const MARKET = {
  "25": 21, "50": 36, "115": 78, "240": 156, "355": 234, "505": 333,
  "610": 400, "850": 558, "1090": 712, "weekly": 155, "weekly_lite": 42, "monthly": 780
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST Only' });

  let { uid, diamond } = req.body;
  if (!uid || !diamond) return res.status(400).json({ error: 'uid & diamond required' });

  let d = String(diamond).toLowerCase().trim().replace(' diamond','').replace(' ','_');
  const market = MARKET[d] || MARKET["115"];
  
  // BRAZIL SERVER - CHEAPEST!
  const brazilCost = Math.round(market * 0.45); // Brazil থেকে 45% দামে কেনা
  const resellerPrice = Math.round(market * 0.80); // Reseller কিনবে 80% দামে
  const ownerProfit = resellerPrice - brazilCost; // তোমার লাভ 35%
  const resellerProfit = market - resellerPrice; // Reseller লাভ 20%

  // Robot - Brazil Server API
  try {
    await fetch(`https://${req.headers.host}/api/robot/deliver`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, diamond: d, server: 'brazil', cost: brazilCost })
    });
  } catch (e) {}

  return res.status(200).json({
    success: true,
    server: 'BRAZIL - CHEAPEST',
    uid, diamond: d,
    pricing: {
      market_price: `${market} TK`,
      brazil_cost: `${brazilCost} TK (Brazil Server)`,
      reseller_buy: `${resellerPrice} TK`,
      reseller_sell: `${market} TK`,
      reseller_profit: `${resellerProfit} TK (20% PROFIT)`,
      owner_profit: `${ownerProfit} TK (35% PROFIT -> bKash 01837450067)`
    },
    profit_boost: 'Brazil Server = Double Profit!',
    message: `✅ Brazil Server | Reseller 20% লাভ | তুমি 35% লাভ`
  });
}
