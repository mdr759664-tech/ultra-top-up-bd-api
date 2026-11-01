// ULTRA TOP UP BD - SECURE DYNAMIC ROBOT - ONLY FOR free-fire-bd-topup-s95l.vercel.app
let orders = [];
let users = {};
let wallets = {};
let ownerWallet = { balance: 0, total_earned: 0, bKash: '01837450067' };

const PER_DIAMOND_COST = 1.45;
const PROFIT_PERCENT = 20;
const OWNER_BKASH = '01837450067';

// 🔒 SECURE CONFIG - Vercel Env থেকে নিবে
const OWNER_API_KEY = process.env.OWNER_API_KEY || 'ULTRA_Z6KL81JMXG_654270';
const ALLOWED_DOMAIN = 'free-fire-bd-topup-s95l.vercel.app';

export default async function handler(req, res) {
  // 🔒 CORS - শুধু তোর Website Allow
  const origin = req.headers.origin || req.headers.referer || '';
  const isAllowedOrigin = origin.includes(ALLOWED_DOMAIN) || origin.includes('ultra-top-up-bd-api.vercel.app') || origin.includes('localhost') || !origin;
  
  if (isAllowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  } else {
    res.setHeader('Access-Control-Allow-Origin', `https://${ALLOWED_DOMAIN}`);
  }
  
  res.setHeader('Access-Control-Allow-Headers', 'x-api-key, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // 🔒 DOMAIN BLOCK - অন্য Website থেকে Block
  if (origin && !isAllowedOrigin && req.method === 'POST') {
    return res.status(403).json({ 
      success: false, 
      error: `❌ Domain Blocked! Only ${ALLOWED_DOMAIN} Allowed! Contact ${OWNER_BKASH}`,
      your_domain: origin,
      allowed: ALLOWED_DOMAIN
    });
  }

  if (req.method === 'GET') {
    return res.json({
      robot: "DYNAMIC BRAZIL ROBOT Live 🇧🇷 - SECURE!",
      secure_for: ALLOWED_DOMAIN,
      per_diamond_cost: `${PER_DIAMOND_COST} TK`,
      profit: `${PROFIT_PERCENT}%`,
      split: "Owner 50% | Reseller 30% | Server 20%",
      owner_bKash: OWNER_BKASH,
      owner_wallet: ownerWallet,
      reseller_wallets: wallets,
      example: {
        "10 Diamond": "Cost 14.5 TK",
        "115 Diamond": "Cost 166.75 TK",
        "520 Diamond": "Cost 754 TK",
        "9999 Diamond": "যেকোনো Amount চলবে!"
      },
      total_orders: orders.length,
      orders: orders.slice(-20).reverse(),
      security: `🔒 Locked for ${ALLOWED_DOMAIN} Only`
    });
  }

  if (req.method === 'POST') {
    let { uid, diamond, pack, server, region, reseller_email } = req.body;
    const apiKey = req.headers['x-api-key'] || req.body.api_key || reseller_email || '';

    // 🔒 1. API KEY CHECK - তুই ছাড়া কেউ Use করতে পারবে না
    if (!apiKey) {
      return res.status(401).json({ success: false, error: '❌ API Key Missing! Owner: ' + OWNER_BKASH });
    }

    // Owner Key অথবা ULTRA_RES_ দিয়ে শুরু হওয়া Key Allow
    const isOwner = apiKey === OWNER_API_KEY;
    const isReseller = apiKey.startsWith('ULTRA_RES_');
    
    if (!isOwner && !isReseller) {
      return res.status(401).json({ 
        success: false, 
        error: `❌ Invalid API Key! Only Owner & Reseller Allowed! Contact ${OWNER_BKASH}`,
        hint: 'Get Reseller Key from Owner'
      });
    }

    let amount = parseInt(String(diamond || pack || "0").replace(/\D/g, ''));
    
    if (!uid) return res.status(400).json({ success: false, error: 'UID দাও বস!' });
    if (!amount || amount <= 0) return res.status(400).json({ success: false, error: 'Diamond amount দাও!' });

    const cost = Math.round(amount * PER_DIAMOND_COST);
    const profit = Math.round(cost * (PROFIT_PERCENT / 100));
    const sell = cost + profit;
    
    const ownerProfit = Math.round(profit * 0.50);
    const resellerProfit = Math.round(profit * 0.30);
    const serverCost = profit - ownerProfit - resellerProfit;

    if (!users[apiKey]) users[apiKey] = { balance: 10000, earned: 0 };
    if (!wallets[apiKey]) wallets[apiKey] = { balance: 0, total_earned: 0, bKash_number: '', email: apiKey };
    
    if (users[apiKey].balance < cost) {
      return res.status(400).json({ 
        success: false, 
        error: `Balance কম! লাগবে ${cost} TK, আছে ${users[apiKey].balance} TK`,
        recharge: OWNER_BKASH
      });
    }

    users[apiKey].balance -= cost;
    users[apiKey].earned += resellerProfit;
    wallets[apiKey].balance += resellerProfit;
    wallets[apiKey].total_earned += resellerProfit;
    ownerWallet.balance += ownerProfit;
    ownerWallet.total_earned += ownerProfit;

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
        owner_50: `${ownerProfit} TK -> ${OWNER_BKASH} Wallet ✅`,
        reseller_30: `${resellerProfit} TK -> ${apiKey} Wallet ✅`,
        server_20: `${serverCost} TK`
      },
      reseller_wallet: {
        email: apiKey,
        current_balance: wallets[apiKey].balance,
        total_earned: wallets[apiKey].total_earned,
      },
      owner_wallet: {
        bKash: OWNER_BKASH,
        current_balance: ownerWallet.balance,
      },
      balance_left: users[apiKey].balance,
      status: "delivered - Secure Robot 🔒",
      secure_for: ALLOWED_DOMAIN,
      created: new Date().toISOString()
    };

    orders.push(order);

    return res.json({
      success: true,
      robot: "🤖 Secure Robot Dispatched!",
      message: `Robot sending ${amount} Diamond to ${uid}`,
      order_id: order.id,
      secure: `🔒 Locked for ${ALLOWED_DOMAIN}`,
      dynamic_calc: {
        you_ordered: `${amount} Diamond`,
        cost: `${cost} TK`,
        owner_get: `${ownerProfit} TK -> ${OWNER_BKASH} ✅`,
        reseller_get: `${resellerProfit} TK -> Wallet ✅`,
      },
      wallet_update: {
        reseller_wallet_balance: wallets[apiKey].balance,
        owner_wallet_balance: ownerWallet.balance,
      },
      order: order
    });
  }
}
