export default function Signup() {
  return (
    <div className="min-h-screen bg-[#080f1f] flex items-center justify-center px-6">
      <div className="w-full max-w-[400px] bg-[#0f1c33] border border-[#1e293b] rounded-2xl p-8 text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rotate-45 rounded-sm mx-auto mb-4"></div>
        <h1 className="text-2xl font-black">Sign Up</h1>
        <p className="text-[13px] text-gray-400 mt-2 mb-8">Create your reseller account</p>
        
        <div className="flex flex-col gap-3">
          <input placeholder="Full Name" className="w-full px-4 py-3.5 rounded-xl bg-[#070d1a] border border-gray-700 text-white text-[14px]"/>
          <input placeholder="Email Address" className="w-full px-4 py-3.5 rounded-xl bg-[#070d1a] border border-gray-700 text-white text-[14px]"/>
          <input placeholder="Password" type="password" className="w-full px-4 py-3.5 rounded-xl bg-[#070d1a] border border-gray-700 text-white text-[14px]"/>
          <button onClick={()=>{alert('Signup Successful! Now Login'); window.location.href='/login'}} className="w-full py-3.5 rounded-xl bg-white text-black font-bold mt-2">📝 Sign Up Free</button>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <a href="/login" className="text-center text-[13px] text-blue-400">Already have account? Log In</a>
          <a href="/" className="text-center text-[13px] text-gray-500">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
