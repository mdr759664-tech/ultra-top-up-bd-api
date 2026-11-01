// ULTRA TOP UP BD - PRO ADMIN PANEL - BRAZIL SERVER
import { useState, useEffect } from 'react';

export default function Admin() {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({ total: 0, profit: 0, reseller: 0 });

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/robot/deliver');
      const data = await res.json();
      setOrders(data.orders || []);
      // Calc profit
      let p = 0;
      data.orders?.forEach(o => p += 39); // 50% profit per order
      setStats({ total: data.total_orders || 0, profit: p, reseller: Math.round(p * 0.6) });
    } catch(e) {}
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#080810", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderBottom: "1px solid #1f1f2e", paddingBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 800 }}>👑 ADMIN PANEL - BRAZIL SERVER</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <span style={{ background: "#00ff88", color: "#000", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 700 }}>LIVE</span>
          <span style={{ background: "#1f1f2e", padding: "6px 14px", borderRadius: "20px", fontSize: "12px" }}>Owner 50% | Reseller 30%</span>
        </div>
      </header>

      {/* STATS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px", marginBottom: "30px" }}>
        <div style={{ background: "#15151f", border: "1px solid #252538", padding: "20px", borderRadius: "16px" }}>
          <div style={{ color: "#666", fontSize: "12px" }}>TOTAL ORDERS (Brazil)</div>
          <div style={{ fontSize: "32px", fontWeight: 800 }}>{stats.total}</div>
          <div style={{ color: "#00ff88", fontSize: "12px" }}>● Brazil Server</div>
        </div>
        <div style={{ background: "#15151f", border: "1px solid #252538", padding: "20px", borderRadius: "16px" }}>
          <div style={{ color: "#666", fontSize: "12px" }}>YOUR PROFIT (50%)</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#ffcc00" }}>{stats.profit}৳</div>
          <div style={{ color: "#888", fontSize: "12px" }}>bKash: 01837450067</div>
        </div>
        <div style={{ background: "#15151f", border: "1px solid #252538", padding: "20px", borderRadius: "16px" }}>
          <div style={{ color: "#666", fontSize: "12px" }}>RESELLER PROFIT (30%)</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#00d4ff" }}>{stats.reseller}৳</div>
          <div style={{ color: "#888", fontSize: "12px" }}>Total given</div>
        </div>
        <div style={{ background: "#15151f", border: "1px solid #252538", padding: "20px", borderRadius: "16px" }}>
          <div style={{ color: "#666", fontSize: "12px" }}>BRAZIL COST (20%)</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#00ff88" }}>16৳</div>
          <div style={{ color: "#888", fontSize: "12px" }}>per 115💎</div>
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div style={{ background: "#15151f", borderRadius: "16px", border: "1px solid #252538", overflow: "hidden" }}>
        <div style={{ padding: "20px", borderBottom: "1px solid #252538", display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ margin: 0, fontSize: "16px" }}>🤖 Brazil Robot Orders - Live</h2>
          <button onClick={fetchOrders} style={{ background: "#00ff88", color: "#000", border: "none", padding: "6px 14px", borderRadius: "8px", fontWeight: 700, cursor: "pointer" }}>Refresh</button>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead style={{ background: "#0f0f18", color: "#666", fontSize: "12px" }}>
              <tr>
                <th style={{ padding: "12px", textAlign: "left" }}>ORDER ID</th>
                <th style={{ padding: "12px", textAlign: "left" }}>UID (Any Country)</th>
                <th style={{ padding: "12px", textAlign: "left" }}>DIAMOND</th>
                <th style={{ padding: "12px", textAlign: "left" }}>SERVER</th>
                <th style={{ padding: "12px", textAlign: "left" }}>STATUS</th>
                <th style={{ padding: "12px", textAlign: "left" }}>PROFIT</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr><td colSpan={6} style={{ padding: "40px", textAlign: "center", color: "#666" }}>No orders yet - Waiting for Brazil orders...</td></tr>
              ) : orders.map(o => (
                <tr key={o.id} style={{ borderTop: "1px solid #1f1f2e" }}>
                  <td style={{ padding: "12px", color: "#00ff88" }}>{o.id}</td>
                  <td style={{ padding: "12px" }}>{o.uid} <span style={{ fontSize: "10px", color: "#666" }}>({o.uid?.length > 8 ? "BD/ID/IN/BR" : "Global"})</span></td>
                  <td style={{ padding: "12px" }}>{o.diamond}💎</td>
                  <td style={{ padding: "12px" }}><span style={{ background: "#00ff88", color: "#000", padding: "2px 8px", borderRadius: "10px", fontSize: "10px", fontWeight: 700 }}>{o.server}</span></td>
                  <td style={{ padding: "12px" }}><span style={{ background: o.status === "delivered" ? "#00ff88" : "#ffcc00", color: "#000", padding: "2px 8px", borderRadius: "10px", fontSize: "10px", fontWeight: 700 }}>{o.status}</span></td>
                  <td style={{ padding: "12px", color: "#ffcc00" }}>+39৳ (50%)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "20px", padding: "16px", background: "rgba(0,255,136,0.1)", border: "1px solid #00ff88", borderRadius: "12px", fontSize: "13px" }}>
        <b style={{ color: "#00ff88" }}>🤖 Robot System:</b> Brazil Server theke 20% dam e kine → যেকোনো দেশের ID তে send → তুমি 50% লাভ, Reseller 30% লাভ। Orders Auto Refresh হয়।
      </div>
    </div>
  )
}
