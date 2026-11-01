// ULTRA TOP UP BD - PRO INDEX - BRAZIL SERVER
export default function Home() {
  return (
    <div style={{ 
      fontFamily: "Inter, sans-serif", 
      background: "#080810", 
      color: "#fff", 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center"
    }}>
      <div style={{ 
        background: "#00ff88", 
        color: "#000", 
        padding: "6px 16px", 
        borderRadius: "20px", 
        fontSize: "12px", 
        fontWeight: 800,
        marginBottom: "20px"
      }}>
        ● BRAZIL SERVER LIVE - 20% COST
      </div>

      <h1 style={{ fontSize: "48px", fontWeight: 900, margin: "0", lineHeight: 1.1 }}>
        ULTRA <span style={{ color: "#00ff88" }}>TOP UP</span> BD
      </h1>
      <p style={{ color: "#888", fontSize: "18px", marginTop: "10px" }}>
        Cheapest Diamond - Any Country ID Supported
      </p>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(3,1fr)", 
        gap: "12px", 
        marginTop: "40px",
        maxWidth: "600px",
        width: "100%"
      }}>
        <div style={{ background: "#15151f", border: "1px solid #252538", padding: "20px", borderRadius: "16px" }}>
          <div style={{ fontSize: "24px" }}>💎</div>
          <div style={{ fontWeight: 700, marginTop: "8px" }}>115 Diamond</div>
          <div style={{ color: "#00ff88", fontWeight: 800 }}>78৳</div>
        </div>
        <div style={{ background: "#15151f", border: "1px solid #00ff88", padding: "20px", borderRadius: "16px" }}>
          <div style={{ fontSize: "24px" }}>🔥</div>
          <div style={{ fontWeight: 700, marginTop: "8px" }}>Most Popular</div>
          <div style={{ color: "#00ff88", fontWeight: 800 }}>615💎 = 415৳</div>
        </div>
        <div style={{ background: "#15151f", border: "1px solid #252538", padding: "20px", borderRadius: "16px" }}>
          <div style={{ fontSize: "24px" }}>👑</div>
          <div style={{ fontWeight: 700, marginTop: "8px" }}>Weekly</div>
          <div style={{ color: "#00ff88", fontWeight: 800 }}>450৳</div>
        </div>
      </div>

      <div style={{ marginTop: "30px", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <a href="/admin" style={{ 
          background: "#00ff88", 
          color: "#000", 
          padding: "14px 28px", 
          borderRadius: "12px", 
          fontWeight: 800, 
          textDecoration: "none" 
        }}>
          👑 Admin Panel
        </a>
        <a href="/api/v1/topup" style={{ 
          background: "#1f1f2e", 
          color: "#fff", 
          padding: "14px 28px", 
          borderRadius: "12px", 
          fontWeight: 700, 
          textDecoration: "none",
          border: "1px solid #2a2a3a"
        }}>
          🔌 API Docs
        </a>
      </div>

      <div style={{ marginTop: "30px", color: "#555", fontSize: "12px" }}>
        Brazil Server (20%) → Owner 50% | Reseller 30% | bKash: 01837450067
      </div>
    </div>
  )
}
