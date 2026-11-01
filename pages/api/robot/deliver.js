// ULTRA TOP UP BD - DYNAMIC ROBOT - ANY DIAMOND AMOUNT
let orders = [];
let users = {};

// Per Diamond Rate - যেকোনো Amount এর হিসাব!
const PER_DIAMOND_COST = 1.45; // 1 Diamond = 1.45 TK Cost
const PROFIT_PERCENT = 20; // 20% Profit

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'x-api-key, Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.json({
      robot: "DYNAMIC BRAZIL ROBOT Live 🇧🇷 - Any Diamond Amount!",
      per_diamond_cost: `${PER_DIAMOND_COST} TK`,
      profit: `${PROFIT_PERCENT}%`,
      split: "Owner 50% | Reseller 30% | Server 20%",
      example: {
        "10 Diamond": "Cost 14.5 TK",
        "115 Diamond": "Cost 166.75 TK - যত খুশি!",
        "520 Diamond": "Cost 754 TK - যেকোনো Amount!",
        "9999 Diamond": "যেকোনো Amount চলবে!"
      },
      total_orders: orders.length,
      orders: orders.slice(-20).reverse()
    });
  }

  if (req.method === 'POST') {
    let { uid, diamond, pack, server, region } = req.body;
    const apiKey = req.headers['x-api-key'] || req.body.api_key || 'OWNER';

    // যেকোনো Format Support: 100, "100", "100 Diamond", "115"
    let amount = parseInt(String(diamond || pack || "0").replace(/\D/g, ''));
    
    if (!uid) return res.status(400).json({ success: false, error: 'UID দাও বস!' });
    if (!amount || amount <= 0) return res.status(400).json({ success: false, error: 'Diamond amount দাও! Ex: 100, 115, 520 যেকোনো!' });

    // Dynamic হিসাব - যেকোনো Amount!
    const cost = Math.round(amount * PER_DIAMOND_COST);
    const profit = Math.round(cost * (PROFIT_PERCENT / 100));
    const sell = cost + profit;
    
    // 50/30/20 ভাগ
    const ownerProfit = Math.round(profit * 0.50); // 50%
    const resellerProfit = Math.round(profit * 0.30); // 30%
    const serverCost = profit - ownerProfit - resellerProfit; // 20%

    if (!users[apiKey]) users[apiKey] = { balance: 10000, earned: 0 };
    
    if (users[apiKey].balance < cost) {
      return res.status(400).json({ 
        success: false, 
        error: `Balance কম! লাগবে ${cost} TK, আছে ${users[apiKey].balance} TK`,
        need_amount: amount,
        recharge: '01837450067'
      });
    }

    users[apiKey].balance -= cost;
    users[apiKey].earned += resellerProfit;

    const order = {
      id: "DYN-" + Date.now(),
      uid,
      diamond: amount,
      diamond_text: `${amount} Diamond`,
      server: server || region || "any",
      cost: cost,
      sell_price: sell,
      total_profit: profit,
      split: {
        owner_50: `${ownerProfit} TK`,
        reseller_30: `${resellerProfit} TK`,
        server_20: `${serverCost} TK`
      },
      balance_left: users[apiKey].balance,
      status: "delivered - Dynamic Robot",
      created: new Date().toISOString()
    };

    orders.push(order);

    return res.json({
      success: true,
      robot: "🤖 Dynamic Robot Dispatched!",
      message: `Robot sending ${amount} Diamond to ${uid} - Any Amount Supported!`,
      order_id: order.id,
      dynamic_calc: {
        you_ordered: `${amount} Diamond (যেকোনো Amount!)`,
        cost: `${cost} TK (${PER_DIAMOND_COST} TK per Diamond)`,
        sell: `${sell} TK`,
        profit: `${profit} TK (${PROFIT_PERCENT}%)`,
        owner_get: `${ownerProfit} TK (50%)`,
        reseller_get: `${resellerProfit} TK (30%)`,
        note: "যেকোনো Website এর যেকোনো List চলবে! 1 থেকে 99999 পর্যন্ত!"
      },
      order: order
    });
  }
}
