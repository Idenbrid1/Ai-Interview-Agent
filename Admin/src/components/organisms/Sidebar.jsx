import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, FileText, MessageSquare, Briefcase, Megaphone, ThumbsUp, Mail, Settings, LogOut, FileCheck, Shield, Building2 } from 'lucide-react'
import NavItem from '../molecules/NavItem'

const Sidebar = ({ className = '', isOpen, onClose }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { icon: LayoutDashboard, label: 'トップページ', path: '/dashboard' },
    { icon: Users, label: 'ユーザー管理', path: '/users' },
    { icon: FileText, label: '面談レポート管理', path: '/interview-reports' },
    { icon: MessageSquare, label: '面接対策内容管理', path: '/interview-preparation' },
    { icon: Briefcase, label: 'メッセージ・応募状況管理', path: '/messages' },
    { icon: Building2, label: '会社・求人管理', path: '/company-management' },
    { icon: Megaphone, label: 'お知らせ管理', path: '/notifications' },
    { icon: ThumbsUp, label: '推薦文管理', path: '/recommendations' },
    { icon: Mail, label: 'オリジナルキャリアレポート管理', path: '/career-reports' },
  ]

  const handleNavClick = (path) => {
    navigate(path)
    onClose()
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 bg-[#1e2538] text-white flex flex-col h-full 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${className}
      `}>
        <div className="p-6 flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e2538] font-bold text-xl">
             AI
          </div>
          <div>
             <div className="font-bold text-lg leading-none">ai転職なら</div>
             <div className="font-bold text-xl leading-none">ichap</div>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <NavItem 
              key={item.path}
              icon={item.icon} 
              label={item.label} 
              active={location.pathname === item.path}
              onClick={() => handleNavClick(item.path)}
            />
          ))}
        </nav>
  
        <div className="border-t border-gray-700 mt-4 pt-4 pb-6">
           <NavItem icon={Settings} label="設定" onClick={() => handleNavClick('/settings')} />
           <NavItem icon={LogOut} label="ログアウト" onClick={() => handleNavClick('/login')} />
        </div>
         <div className="border-t border-gray-700 mt-auto pt-4 pb-6 mb-4">
           <NavItem icon={FileCheck} label="利用規約" onClick={() => handleNavClick('/terms')} />
           <NavItem icon={Shield} label="プライバシーポリシー" onClick={() => handleNavClick('/privacy')} />
           <NavItem icon={Building2} label="会社情報" onClick={() => handleNavClick('/company-info')} />
        </div>
      </div>
    </>
  )
}

export default Sidebar
