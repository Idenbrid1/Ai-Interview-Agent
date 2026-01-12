'use client'

import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full space-y-8 px-7.5">
          {children}
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex w-full lg:w-1/2 text-white flex-col items-center justify-center p-20 relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        {/* Background Pattern Overlay (Optional) */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)`
          }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-28 h-28 bg-white rounded-lg flex items-center justify-center text-blue-900 font-bold text-2xl">
              AI
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-[21px] text-left opacity-90">
              このサイトはichap（アイチャップ）の管理画面ページです。ログインしていただくと管理者としてマネジメントページをご利用いただけます。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
