export default function Signup(){
 return(
  <div style={{minHeight:'100vh', background:'#080f1f', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
   <div style={{width:'100%', maxWidth:'400px', background:'#0f1c33', border:'1px solid #1e293b', borderRadius:'20px', padding:'32px', textAlign:'center'}}>
    
    <div style={{width:'48px', height:'48px', background:'linear-gradient(135deg, #60a5fa, #3b82f6)', transform:'rotate(45deg)', borderRadius:'6px', margin:'0 auto 16px', boxShadow:'0 0 15px #3b82f6'}}></div>
    
    <h1 style={{fontSize:'24px', fontWeight:'900', color:'white', margin:0}}>Sign Up</h1>
    <p style={{fontSize:'13px', color:'#94a3b8', marginTop:'6px'}}>Create your reseller account</p>

    <div style={{display:'flex', flexDirection:'column', gap:'12px', marginTop:'24px'}}>
     <input placeholder="Full Name" style={{width:'100%', padding:'14px', borderRadius:'12px', background:'#070d1a', border:'1px solid #334155', color:'white', fontSize:'14px'}}/>
     <input placeholder="Email Address" style={{width:'100%', padding:'14px', borderRadius:'12px', background:'#070d1a', border:'1px solid #334155', color:'white', fontSize:'14px'}}/>
     <input placeholder="Password" type="password" style={{width:'100%', padding:'14px', borderRadius:'12px', background:'#070d1a', border:'1px solid #334155', color:'white', fontSize:'14px'}}/>
     <button onClick={()=>{alert('Signup Successful! Now Login'); window.location.href='/login'}} style={{width:'100%', padding:'14px', borderRadius:'12px', background:'white', color:'black', fontWeight:'bold', fontSize:'15px', border:'none', cursor:'pointer', marginTop:'8px'}}>Sign Up Free</button>
    </div>

    <div style={{marginTop:'20px', display:'flex', flexDirection:'column', gap:'8px'}}>
     <a href="/login" style={{fontSize:'13px', color:'#60a5fa', textDecoration:'none'}}>Already have account? Log In</a>
     <a href="/" style={{fontSize:'13px', color:'#64748b', textDecoration:'none'}}>← Back to Home</a>
    </div>

   </div>
  </div>
 )
}
