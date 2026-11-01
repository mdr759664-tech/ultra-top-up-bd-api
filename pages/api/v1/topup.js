// ULTRA TOP UP BD - BRAZIL SERVER - 50% OWNER / 30% RESELLER
// Owner 50% | Reseller 30% | Brazil Cost 20%
// Diamond 100% Brazil Server theke asbe

const BRAZIL_PACKAGES = [
  { id: "25", name: "25 Diamond", market: 21, cost: 4 },
  { id: "50", name: "50 Diamond", market: 36, cost: 7 },
  { id: "115", name: "115 Diamond", market: 78, cost: 16 },
  { id: "240", name: "240 Diamond", market: 156, cost: 31 },
  { id: "355", name: "355 Diamond", market: 234, cost: 47 },
  { id: "505", name: "505 Diamond", market: 333, cost: 67 },
  { id: "610", name: "610 Diamond", market: 400, cost: 80 },
  { id: "850", name: "850 Diamond", market: 558, cost: 112 },
  { id: "weekly", name: "Weekly", market: 155, cost: 31 },
  { id: "monthly", name: "Monthly", market: 780, cost: 156 },
  { id: "levelup", name: "Level Up Pass", market: 187, cost: 37 }
]

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      server: "BRAZIL SERVER",
      commission: "Owner 50% | Reseller 30%",
      total: BRAZIL_PACKAGES.length,
      data: BRAZIL_PACKAGES.map(p => {
        const resellerBuy = Math.round(p.market * 0.70); // 20% cost + 50% owner = 70%
        const resellerProfit = p.market - resellerBuy; // 30%
        const ownerProfit = resellerBuy - p.cost; // 50%
        return {
          id: p.id,
          name: p.name,
          market_price: `${p.market} TK`,
          brazil_cost: `${p.cost} TK (20% - Brazil)`,
          reseller_buy: `${resellerBuy} TK`,
          reseller_sell: `${p.market} TK`,
          reseller_profit: `${resellerProfit} TK (30%)`,
          owner_profit: `${ownerProfit} TK (50% -> bKash 01837450067)`,
          country: "BR"
        }
      })
    });
  }

  if (req.method === 'POST') {
    let { uid, diamond, player_id } = req.body;
    uid = uid || player_id;
    if (!uid || !diamond) return res.status(400).json({ error: 'uid & diamond lagbe' });

    let d = String(diamond).toLowerCase().trim().replace(' diamond','').replace(' ','_');
    const pkg = BRAZIL_PACKAGES.find(p => p.id === d) || BRAZIL_PACKAGES[2];

    const market = pkg.market;
    const brazilCost = pkg.cost; // 20%
    const resellerBuy = Math.round(market * 0.70); // 70%
    const ownerProfit = resellerBuy - brazilCost; // 50%
    const resellerProfit = market - resellerBuy; // 30%

    // ROBOT - BRAZIL SERVER
    try {
      const baseUrl = `https://${req.headers.host}`;
      await fetch(`${baseUrl}/api/robot/deliver`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, diamond: d, server: "BRAZIL", cost: brazilCost })
      });
    } catch (e) {}

    return res.status(200).json({
      success: true,
      server: "BRAZIL SERVER ONLY",
      country: "BR",
      uid, diamond: d,
      package: pkg.name,
      commission: {
        brazil_cost: `${brazilCost} TK (20%)`,
        owner_profit: `${ownerProfit} TK (50%) - bKash 01837450067`,
        reseller_profit: `${resellerProfit} TK (30%)`,
        market_price: `${market} TK`,
        reseller_buy: `${resellerBuy} TK (Owner 50% + Cost 20%)`,
        reseller_sell: `${market} TK`
      },
      robot: "✅ Brazil Server - 100% Brazil theke asbe",
      message: `✅ ${pkg.name} | Owner 50% = ${ownerProfit}৳ | Reseller 30% = ${resellerProfit}৳ | Brazil Cost 20% = ${brazilCost}৳`
    });
  }

  return res.status(405).json({ error: 'GET or POST Only' });
}
