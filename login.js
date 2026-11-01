import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if(email === 'admin@ultra.com' && pass === 'Mdr12345'){
      localStorage.setItem('ultra_login','true');
      window.location.href = '/mdr-secret-786';
    } else {
      alert('Wrong! Email: admin@ultra.com Pass: Mdr12345');
    }
  };

  return (
    <div className="min-h-screen bg-[#080f1f] flex items-center justify-center px-6">
      <div className="w-full max-w-[400px] bg-[#0f1c33] border border-[#1e293b] rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rotate-45 rounded-sm mx-auto mb-4"></div>
          <h1 className="text-2xl font-black">Log In</h1>
          <p className="text-[13px] text-gray-400 mt-2">ULTRA TOP UP BD API</p>
        </div>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email: admin@ultra.com" className="w-full px-4 py-3.5 rounded-xl bg-[#070d1a] border border-gray-700 text-white text-[14px]"/>
          <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password: Mdr12345" className="w-full px-4 py-3.5 rounded-xl bg-[#070d1a] border border-gray-700 text-white text-[14px]"/>
          <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-bold">🔵 Log In</button>
        </form>

        <div className="flex flex-col gap-2 mt-6">
          <a href="/signup" className="text-center text-[13px] text-blue-400">Don't have account? Sign Up</a>
          <a href="/" className="text-center text-[13px] text-gray-500">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
