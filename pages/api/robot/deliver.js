// ULTRA TOP UP BD - BRAZIL ROBOT SYSTEM
let orders = []; // Memory te order save hobe

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.json({ 
      robot: "Brazil Robot Live",
      total_orders: orders.length,
      orders: orders.slice(-20).reverse()
    });
  }

  if (req.method === 'POST') {
    const { uid, diamond, server, cost } = req.body;
    
    const order = {
      id: "BR-" + Date.now(),
      uid,
      diamond,
      server: server || "BRAZIL",
      cost: cost || 16,
      status: "processing",
      brazil_status: "sending to Garena BR Shop",
      created: new Date().toISOString(),
      delivery_time: "30s - 2min"
    };

    orders.push(order);

    // Simulate Brazil delivery
    setTimeout(() => {
      order.status = "delivered";
      order.brazil_status = "delivered from Brazil Garena";
    }, 5000);

    return res.json({
      success: true,
      robot: "Brazil Robot Dispatched",
      order_id: order.id,
      message: `Robot sending ${diamond} to ${uid} via Brazil Server`
    });
  }
}
