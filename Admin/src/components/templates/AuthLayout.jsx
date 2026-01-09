import React from 'react'
import Logo from '../../assets/auth/logo.svg'
import BackgroundPattern from '../../assets/auth/background-pattern.png'

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen ">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white ]">
        <div className="w-full  space-y-8 px-7.5">
          {children}
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex w-full lg:w-1/2  text-white flex-col items-center justify-center p-20 relative overflow-hidden">
        {/* Background Pattern Overlay (Optional) */}
        <div className="absolute inset-0  mix-blend-overlay">
        <img src={BackgroundPattern} className='w-full h-full object-cover' alt="" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2">
          
             <img src={Logo} className="w-28" alt="" />
          </div>
          
          <div className="space-y-2 ">
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
