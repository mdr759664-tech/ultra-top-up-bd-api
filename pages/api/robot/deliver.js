// ULTRA TOP UP BD - DYNAMIC ROBOT - ANY DIAMOND AMOUNT + BKASH WALLET
let orders = [];
let users = {};
let wallets = {}; // RESELLER WALLETS
let ownerWallet = { balance: 0, total_earned: 0, bKash: '01837450067' }; // OWNER WALLET

// Per Diamond Rate
const PER_DIAMOND_COST = 1.45;
const PROFIT_PERCENT = 20;
const OWNER_BKASH = '01837450067';

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
      orders: orders.slice(-20).reverse()
    });
  }

  if (req.method === 'POST') {
    let { uid, diamond, pack, server, region, reseller_email } = req.body;
    const apiKey = req.headers['x-api-key'] || req.body.api_key || reseller_email || 'OWNER';

    let amount = parseInt(String(diamond || pack || "0").replace(/\D/g, ''));
    
    if (!uid) return res.status(400).json({ success: false, error: 'UID দাও বস!' });
    if (!amount || amount <= 0) return res.status(400).json({ success: false, error: 'Diamond amount দাও! Ex: 100, 115, 520 যেকোনো!' });

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
        need_amount: amount,
        recharge: OWNER_BKASH
      });
    }

    users[apiKey].balance -= cost;
    users[apiKey].earned += resellerProfit;

    // 🔥 AUTO WALLET ADD - BKASH SYSTEM
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
        owner_50: `${ownerProfit} TK -> Added to ${OWNER_BKASH} Wallet`,
        reseller_30: `${resellerProfit} TK -> Added to ${apiKey} Wallet`,
        server_20: `${serverCost} TK`
      },
      reseller_wallet: {
        email: apiKey,
        current_balance: wallets[apiKey].balance,
        total_earned: wallets[apiKey].total_earned,
        withdraw_status: `Withdraw করতে পারবে - ${OWNER_BKASH} থেকে bKash যাবে`
      },
      owner_wallet: {
        bKash: OWNER_BKASH,
        current_balance: ownerWallet.balance,
        total_earned: ownerWallet.total_earned
      },
      balance_left: users[apiKey].balance,
      status: "delivered - Dynamic Robot",
      bKash_payout_info: {
        reseller_will_get: `${resellerProfit} TK in wallet - Withdraw করলে ${OWNER_BKASH} থেকে যাবে`,
        owner_got: `${ownerProfit} TK added to owner wallet`
      },
      created: new Date().toISOString()
    };

    orders.push(order);

    return res.json({
      success: true,
      robot: "🤖 Dynamic Robot Dispatched!",
      message: `Robot sending ${amount} Diamond to ${uid}`,
      order_id: order.id,
      dynamic_calc: {
        you_ordered: `${amount} Diamond`,
        cost: `${cost} TK`,
        sell: `${sell} TK`,
        profit: `${profit} TK`,
        owner_get: `${ownerProfit} TK -> ${OWNER_BKASH} Wallet Auto Added ✅`,
        reseller_get: `${resellerProfit} TK -> Wallet Auto Added ✅`,
        bKash_system: `Reseller Wallet: ${wallets[apiKey].balance} TK - Withdraw দিলে ${OWNER_BKASH} থেকে bKash যাবে!`
      },
      wallet_update: {
        reseller_wallet_balance: wallets[apiKey].balance,
        owner_wallet_balance: ownerWallet.balance,
        bKash_number: OWNER_BKASH
      },
      order: order
    });
  }
}
