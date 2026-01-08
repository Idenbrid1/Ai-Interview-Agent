import React from 'react'
import { MessageCircle } from 'lucide-react' // Placeholder logo

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-8">
          {children}
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#2d3e50] text-white flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Background Pattern Overlay (Optional) */}
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2">
             <MessageCircle size={48} className="text-white" />
             <div className="text-3xl font-bold tracking-wider">iShop</div>
          </div>
          
          <div className="space-y-2 max-w-lg">
             <p className="text-lg opacity-90">
               This site is iShop (Ai-Shop) management page.
             </p>
             <p className="text-sm opacity-75">
               Only authorized personnel can access this management page.
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
